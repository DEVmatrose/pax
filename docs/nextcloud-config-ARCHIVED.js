/**
 * PAX Festival - Konfiguration
 * 
 * Diese Datei enthält die Konfiguration für die Nextcloud-Integration.
 * WICHTIG: Diese Werte müssen nach der Einrichtung von Nextcloud angepasst werden!
 */

const PAX_CONFIG = {
    // Entwicklungsmodus - nutzt lokale JSON-Dateien statt Nextcloud
    useDevelopmentMode: true,
    
    // Nextcloud Konfiguration (wird nur verwendet wenn useDevelopmentMode = false)
    nextcloud: {
        url: '', // z.B. 'https://deine-nextcloud-instanz.de'
        username: '',
        password: '', // App-Passwort aus Nextcloud
        
        // Table IDs aus Nextcloud Tables App
        tables: {
            musiker: '',
            workshops: '',
            vortraege: '',
            aussteller: ''
        },
        
        // Cache-Dauer in Minuten
        cacheDuration: 15
    },
    
    // Fallback auf lokale JSON-Dateien bei Fehlern
    useFallback: true,
    
    // Debug-Modus für ausführliche Konsolen-Logs
    debug: true
};

// Export für globale Verwendung
window.PAX_CONFIG = PAX_CONFIG;
