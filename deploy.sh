#!/bin/bash

echo "🚀 NeuroFin Deployment Script"
echo "============================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}1. Checking prerequisites...${NC}"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js not found${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Node.js: $(node --version)${NC}"

# Check npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm not found${NC}"
    exit 1
fi
echo -e "${GREEN}✓ npm: $(npm --version)${NC}"

# Check Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}⚠ Vercel CLI not found. Installing...${NC}"
    npm install -g vercel
fi
echo -e "${GREEN}✓ Vercel CLI: $(vercel --version)${NC}"

echo -e "\n${BLUE}2. Building project...${NC}"
cd frontend

# Clean install
echo -e "${YELLOW}Cleaning dependencies...${NC}"
rm -rf node_modules package-lock.json .next

echo -e "${YELLOW}Installing dependencies...${NC}"
npm install --legacy-peer-deps

echo -e "${YELLOW}Building project...${NC}"
if npm run build; then
    echo -e "${GREEN}✓ Build successful!${NC}"
else
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi

echo -e "\n${BLUE}3. Deploying to Vercel...${NC}"
echo -e "${YELLOW}This will open Vercel in your browser...${NC}"

# Try to deploy
if vercel --prod; then
    echo -e "${GREEN}✓ Deployment initiated!${NC}"
else
    echo -e "${YELLOW}⚠ Manual deployment required${NC}"
    echo ""
    echo -e "${BLUE}Manual Deployment Steps:${NC}"
    echo "1. Go to: ${GREEN}https://vercel.com/new${NC}"
    echo "2. Import from GitHub: ${GREEN}stagedvisuals/neurofin${NC}"
    echo "3. Configure:"
    echo "   - Framework: ${YELLOW}Next.js${NC}"
    echo "   - Root Directory: ${YELLOW}frontend${NC}"
    echo "   - Build Command: ${YELLOW}npm run build${NC}"
    echo "   - Output Directory: ${YELLOW}.next${NC}"
    echo "4. Click ${GREEN}Deploy${NC}"
fi

echo -e "\n${BLUE}4. Deployment URLs:${NC}"
echo -e "${GREEN}GitHub: https://github.com/stagedvisuals/neurofin${NC}"
echo -e "${GREEN}Vercel: https://neurofin.vercel.app${NC}"
echo -e "${YELLOW}(Will be available after deployment completes)${NC}"

echo -e "\n${GREEN}✅ Deployment script completed!${NC}"
echo -e "${YELLOW}Note: If Vercel CLI doesn't work, use the manual steps above.${NC}"