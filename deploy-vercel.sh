#!/bin/bash

# Vercel deployment script for Danish Nawaz Portfolio

echo "========================================="
echo "  Vercel Deployment Script"
echo "  Danish Nawaz Portfolio"
echo "========================================="
echo

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "❌ ERROR: Vercel CLI could not be found."
    echo
    echo "Please install Vercel CLI first:"
    echo "Visit: https://vercel.com/cli"
    echo
    echo "Or deploy manually by pushing to your Git repository."
    echo
    exit 1
fi

echo "✅ Vercel CLI found. Proceeding with deployment..."
echo

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
echo

vercel --prod

if [ $? -eq 0 ]; then
    echo
    echo "🎉 Deployment completed successfully!"
    echo "Your app should be accessible at your Vercel URL"
    echo
    echo "To view your deployment, run: vercel inspect"
else
    echo
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi