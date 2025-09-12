@echo off
title Vercel Deployment - Danish Nawaz Portfolio

echo =========================================
echo   Vercel Deployment Script
echo   Danish Nawaz Portfolio
echo =========================================
echo.

REM Check if Vercel CLI is installed
echo Checking for Vercel CLI...
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ ERROR: Vercel CLI could not be found.
    echo.
    echo Please install Vercel CLI first:
    echo Visit: https://vercel.com/cli
    echo.
    echo Or deploy manually by pushing to your Git repository.
    echo.
    pause
    exit /b 1
)

echo ✅ Vercel CLI found. Proceeding with deployment...
echo.

REM Deploy to Vercel
echo 🚀 Deploying to Vercel...
echo.

vercel --prod

if %errorlevel% equ 0 (
    echo.
    echo 🎉 Deployment completed successfully!
    echo Your app should be accessible at your Vercel URL
    echo.
    echo To view your deployment, run: vercel inspect
) else (
    echo.
    echo ❌ Deployment failed. Please check the error messages above.
)

echo.
pause