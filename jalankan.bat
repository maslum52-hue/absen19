@echo off
cd /d "%~dp0"
set "PATH=%~dp0.tools\node-v24.22.0-win-x64;%PATH%"
echo Menjalankan Aplikasi Sistem Kehadiran Siswa...
start http://localhost:5173/
call npm run dev -- --host
pause

