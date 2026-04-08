# PAX Festival - Lokaler Entwicklungsserver
# Startet einen Python HTTP-Server für lokale Entwicklung
# AUSFÜHRUNG: .\start-dev-server.ps1 (NICHT mit 'python' starten!)

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  PAX Festival - Dev Server" -ForegroundColor Yellow
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Prüfe ob Python installiert ist
try {
    $pythonVersion = python --version 2>&1
    Write-Host "✓ Python gefunden: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Python ist nicht installiert!" -ForegroundColor Red
    Write-Host "  Bitte Python von https://python.org installieren" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "Server startet auf: http://localhost:8000" -ForegroundColor Green
Write-Host "Öffne im Browser: http://localhost:8000/index.html" -ForegroundColor Cyan
Write-Host ""
Write-Host "Zum Beenden: STRG + C drücken" -ForegroundColor Yellow
Write-Host ""
Write-Host "----------------------------------" -ForegroundColor Cyan

# Starte Python HTTP Server
python -m http.server 8000
