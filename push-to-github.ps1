# Script para subir cambios a GitHub
Set-Location $PSScriptRoot

Write-Host "=== Estado actual ===" -ForegroundColor Cyan
git status

Write-Host "`n=== Añadiendo cambios ===" -ForegroundColor Cyan
git add -A

Write-Host "`n=== Creando commit ===" -ForegroundColor Cyan
git commit -m "Actualizaciones: Brochure, CorporateLayout y estilos"

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n=== Subiendo a GitHub ===" -ForegroundColor Cyan
    git push origin main
    Write-Host "`nListo." -ForegroundColor Green
} else {
    Write-Host "`nNo hay cambios para hacer commit (o ya estaban commiteados)." -ForegroundColor Yellow
}

Read-Host "`nPresiona Enter para cerrar"
