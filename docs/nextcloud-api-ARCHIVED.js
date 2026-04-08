/**
 * PAX Festival - Nextcloud Tables API Integration
 * 
 * Dieses Modul verbindet die Website mit Nextcloud Tables
 * und lädt die Daten für Musiker, Workshops, Vorträge und Aussteller.
 * 
 * @version 1.0.0
 * @date 2026-02-09
 */

class NextcloudAPI {
    constructor(config) {
        this.baseUrl = config.nextcloudUrl;
        this.username = config.username;
        this.password = config.password;
        this.tableIds = {
            musiker: config.tableIdMusiker,
            workshops: config.tableIdWorkshops,
            vortraege: config.tableIdVortraege,
            aussteller: config.tableIdAussteller
        };
        
        // Cache für API-Aufrufe (um Rate-Limits zu vermeiden)
        this.cache = {};
        this.cacheDuration = config.cacheDuration || 15 * 60 * 1000; // 15 Minuten Standard
    }

    /**
     * Erstellt die Basic Auth Header für Nextcloud API
     */
    getAuthHeader() {
        const credentials = btoa(`${this.username}:${this.password}`);
        return {
            'Authorization': `Basic ${credentials}`,
            'Content-Type': 'application/json',
            'OCS-APIRequest': 'true'
        };
    }

    /**
     * Prüft ob Cache noch gültig ist
     */
    isCacheValid(key) {
        if (!this.cache[key]) return false;
        const age = Date.now() - this.cache[key].timestamp;
        return age < this.cacheDuration;
    }

    /**
     * Lädt Daten aus einer Nextcloud Table
     * 
     * @param {string} category - Die Kategorie (musiker, workshops, vortraege, aussteller)
     * @returns {Promise<Array>} Array mit den Datensätzen
     */
    async loadTable(category) {
        // Prüfe Cache
        if (this.isCacheValid(category)) {
            console.log(`✓ Cache-Hit für ${category}`);
            return this.cache[category].data;
        }

        const tableId = this.tableIds[category];
        if (!tableId) {
            console.error(`Keine Table-ID für Kategorie: ${category}`);
            return [];
        }

        try {
            console.log(`⏳ Lade Daten aus Nextcloud für: ${category}`);
            
            // Nextcloud Tables API Endpoint
            const url = `${this.baseUrl}/ocs/v2.php/apps/tables/api/2/tables/${tableId}/rows`;
            
            const response = await fetch(url, {
                method: 'GET',
                headers: this.getAuthHeader()
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const result = await response.json();
            
            // Nextcloud OCS Format: data ist in result.ocs.data
            const rows = result.ocs?.data || [];
            
            // Transformiere Nextcloud-Format zu unserem JSON-Format
            const transformed = this.transformRows(category, rows);
            
            // Speichere im Cache
            this.cache[category] = {
                data: transformed,
                timestamp: Date.now()
            };
            
            console.log(`✓ ${transformed.length} Einträge geladen für ${category}`);
            return transformed;

        } catch (error) {
            console.error(`❌ Fehler beim Laden von ${category}:`, error);
            
            // Fallback: Versuche lokale JSON zu laden
            return this.loadLocalFallback(category);
        }
    }

    /**
     * Transformiert Nextcloud Table Rows in unser JSON-Format
     */
    transformRows(category, rows) {
        return rows.map((row, index) => {
            const data = row.data || {};
            
            switch(category) {
                case 'musiker':
                    return {
                        id: row.id || index + 1,
                        name: data.name || '',
                        genre: data.genre || '',
                        land: data.land || data.herkunftsland || '',
                        beschreibung: data.beschreibung || '',
                        image: data.image || data.foto || '',
                        auftrittszeitpunkt: data.auftrittszeitpunkt || '',
                        links: {
                            website: data.website || '',
                            instagram: data.instagram || '',
                            facebook: data.facebook || '',
                            youtube: data.youtube || '',
                            spotify: data.spotify || ''
                        }
                    };
                
                case 'workshops':
                    return {
                        id: row.id || index + 1,
                        titel: data.titel || data.workshop_titel || '',
                        leiter: data.leiter || data.name_leiter || '',
                        kategorie: data.kategorie || '',
                        beschreibung: data.beschreibung || '',
                        dauer: data.dauer || '',
                        maxTeilnehmer: data.max_teilnehmer || data.maxTeilnehmer || 20,
                        zeitpunkt: data.zeitpunkt || '',
                        ort: data.ort || data.raum || '',
                        voraussetzungen: data.voraussetzungen || 'Keine',
                        mitzubringen: data.mitzubringen || '',
                        image: data.image || data.foto || ''
                    };
                
                case 'vortraege':
                    return {
                        id: row.id || index + 1,
                        titel: data.titel || data.vortragstitel || '',
                        redner: data.redner || data.name_redner || '',
                        organisation: data.organisation || data.institut || '',
                        beschreibung: data.beschreibung || '',
                        dauer: data.dauer || '',
                        zeitpunkt: data.zeitpunkt || '',
                        ort: data.ort || '',
                        themen: data.themen || [],
                        image: data.image || data.foto || ''
                    };
                
                case 'aussteller':
                    return {
                        id: row.id || index + 1,
                        name: data.name || data.standname || '',
                        kategorie: data.kategorie || '',
                        beschreibung: data.beschreibung || '',
                        angebot: data.angebot || [],
                        oeffnungszeiten: data.oeffnungszeiten || 'Durchgehend',
                        standort: data.standort || data.standlage || '',
                        links: {
                            website: data.website || '',
                            instagram: data.instagram || '',
                            facebook: data.facebook || ''
                        },
                        image: data.image || data.foto || data.logo || ''
                    };
                
                default:
                    return data;
            }
        });
    }

    /**
     * Lädt lokale JSON-Datei als Fallback
     */
    async loadLocalFallback(category) {
        console.warn(`⚠️  Verwende lokale Fallback-Daten für ${category}`);
        
        try {
            const response = await fetch(`/data/${category}.json`);
            if (!response.ok) return [];
            return await response.json();
        } catch (error) {
            console.error(`Auch Fallback fehlgeschlagen für ${category}:`, error);
            return [];
        }
    }

    /**
     * Lädt alle Kategorien parallel
     */
    async loadAllData() {
        console.log('🔄 Lade alle Daten aus Nextcloud...');
        
        const [musiker, workshops, vortraege, aussteller] = await Promise.all([
            this.loadTable('musiker'),
            this.loadTable('workshops'),
            this.loadTable('vortraege'),
            this.loadTable('aussteller')
        ]);

        console.log('✓ Alle Daten geladen!');
        
        return {
            musiker,
            workshops,
            vortraege,
            aussteller
        };
    }

    /**
     * Leert den Cache (z.B. nach manueller Aktualisierung)
     */
    clearCache() {
        this.cache = {};
        console.log('🗑️  Cache geleert');
    }
}

// Export für Verwendung in anderen Dateien
window.NextcloudAPI = NextcloudAPI;
