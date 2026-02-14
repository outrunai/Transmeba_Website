@echo off
echo ========================================
echo   Transmeba Web - Iniciando servidor
echo ========================================
echo.
cd /d "%~dp0"

echo Verificando dependencias...
if not exist "node_modules\next\package.json" (
    echo Instalando dependencias...
    call npm install
    echo.
)

echo Iniciando servidor de desarrollo...
echo.
echo Espera a que aparezca "Ready" antes de abrir el navegador.
echo Luego abre: http://localhost:3000
echo.
echo NO cierres esta ventana mientras uses el sitio web.
echo ========================================
echo.
call npx next dev
pause
