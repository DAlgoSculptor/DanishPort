#!/bin/bash

# Fly.io deployment script for Danish Nawaz Portfolio

echo "========================================="
echo "  Fly.io Deployment Script"
echo "  Danish Nawaz Portfolio"
echo "========================================="
echo

# Check if flyctl is installed
if ! command -v flyctl &> /dev/null
then
    echo "❌ ERROR: flyctl could not be found."
    echo
    echo "Attempting to install Fly.io CLI..."
    echo
    
    # Try to install using curl
    if command -v curl &> /dev/null
    then
        echo "Downloading and installing Fly.io CLI..."
        curl -L https://fly.io/install.sh | sh
        
        if [ $? -eq 0 ]; then
            echo "✅ Installation completed successfully!"
            echo
            echo "Please restart your terminal or run:"
            echo "  export FLYCTL_INSTALL=\"\$HOME/.fly\""
            echo "  export PATH=\"\$FLYCTL_INSTALL/bin:\$PATH\""
            echo
            echo "Then run this script again."
            exit 0
        else
            echo "❌ Installation failed."
        fi
    else
        echo "curl is not available. Please install curl first."
    fi
    
    echo
    echo "Please install Fly.io CLI manually:"
    echo "Visit: https://fly.io/docs/getting-started/installing-flyctl/"
    echo
    echo "After installation, please restart your terminal and try again."
    exit 1
fi

echo "✅ Fly.io CLI found. Proceeding with deployment..."
echo

# Login check
echo "Checking authentication..."
if flyctl auth whoami &> /dev/null
then
    echo "✅ Already authenticated with Fly.io"
else
    echo "Please authenticate with Fly.io:"
    flyctl auth login
    if [ $? -ne 0 ]; then
        echo "❌ Authentication failed. Please try again."
        exit 1
    fi
fi

echo
echo "🚀 Deploying application..."
echo

# Deploy the app
flyctl deploy

if [ $? -eq 0 ]; then
    echo
    echo "🎉 Deployment completed successfully!"
    echo "Your app should be accessible at: https://your-app-name.fly.dev"
    echo
    echo "To check your app status, run: flyctl status"
    echo "To view logs, run: flyctl logs"
else
    echo
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi