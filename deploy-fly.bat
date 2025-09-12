@echo off
title Fly.io Deployment - Danish Nawaz Portfolio

echo =========================================
echo   Fly.io Deployment Script
echo   Danish Nawaz Portfolio
echo =========================================
echo.

REM Check if flyctl is installed
echo Checking for Fly.io CLI...
flyctl --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ ERROR: flyctl could not be found.
    echo.
    echo Attempting to install Fly.io CLI...
    echo.
    
    REM Try to install using PowerShell script
    powershell -ExecutionPolicy Bypass -File "%~dp0install-fly.ps1"
    
    if !errorlevel! equ 0 (
        echo.
        echo ✅ Installation script completed. Please restart this script to continue.
        echo You may need to restart your command prompt for the changes to take effect.
        echo.
        pause
        exit /b 0
    ) else (
        echo ❌ Installation failed.
        echo.
        echo Please install Fly.io CLI manually:
        echo Visit: https://fly.io/docs/getting-started/installing-flyctl/
        echo.
        echo After installation, please restart your terminal and try again.
        echo.
        pause
        exit /b 1
    )
)

echo ✅ Fly.io CLI found. Proceeding with deployment...
echo.

REM Login check
echo Checking authentication...
flyctl auth whoami >nul 2>&1
if %errorlevel% neq 0 (
    echo Please authenticate with Fly.io:
    flyctl auth login
    if %errorlevel% neq 0 (
        echo ❌ Authentication failed.
        echo Please try again or check your internet connection.
        pause
        exit /b 1
    )
) else (
    echo ✅ Already authenticated with Fly.io
)

echo.
echo 🚀 Deploying application...
echo.

REM Deploy the app
flyctl deploy

if %errorlevel% equ 0 (
    echo.
    echo 🎉 Deployment completed successfully!
    echo Your app should be accessible at: https://your-app-name.fly.dev
    echo.
    echo To check your app status, run: flyctl status
    echo To view logs, run: flyctl logs
) else (
    echo.
    echo ❌ Deployment failed. Please check the error messages above.
)

echo.
pause