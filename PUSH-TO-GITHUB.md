#!/bin/bash
echo "=== NeuroFin GitHub Setup ==="
echo ""
echo "1. Create repo at: https://github.com/new"
echo "   Name: neurofin"
echo "   DO NOT initialize with README"
echo ""
echo "2. Then run these commands:"
echo "   git remote add origin https://github.com/stagedvisuals/neurofin.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "=== Current files ready to push ==="
git status --short
