#!/bin/bash

# Exit on error
set -e

echo "🔨 Building Next.js application locally..."

# Build locally first to catch errors
NODE_OPTIONS="--max-old-space-size=8192" npm run build

echo "✅ Local build successful! Testing production server..."

# Test locally for a moment
timeout 30s npm start || true

echo "🐳 Building Docker image..."
docker-compose build

echo "📦 Saving Docker image..."
docker save $(docker-compose images -q) -o nextjs-app.tar

echo "📁 Creating deployment package..."
mkdir -p deployment
cp nextjs-app.tar deployment/
cp docker-compose.yml deployment/
cp setup-server.sh deployment/

# Create a simple readme
cat > deployment/README.md << 'EOL'
# Deployment Instructions

1. Upload all files in this directory to your server
2. Run: chmod +x setup-server.sh
3. Run: ./setup-server.sh
4. Your app will be available on port 3000
EOL

echo "🚀 Deployment package ready in 'deployment/' folder!"
echo ""
echo "📝 Next steps:"
echo "1. Upload the entire 'deployment' folder to your server"
echo "2. On server, run: chmod +x setup-server.sh"
echo "3. On server, run: ./setup-server.sh"
echo "4. Your app will be available at your-domain.com:3000"

echo ""
echo "📦 Files to upload:"
ls -la deployment/