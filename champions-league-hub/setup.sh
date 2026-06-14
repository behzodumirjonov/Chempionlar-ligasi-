#!/bin/bash

echo "🏆 Champions League Hub - Loyiha O'rnatish"
echo "==========================================\n"

# Backend o'rnatish
echo "📦 Backend o'rnatilmoqda..."
cd backend
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ .env fayli yaratildi"
fi
npm install
echo "✅ Backend o'rnatildi\n"

# Frontend o'rnatish
cd ../frontend
echo "📦 Frontend o'rnatilmoqda..."
npm install
echo "✅ Frontend o'rnatildi\n"

echo "==========================================\n"
echo "✨ Loyiha muvaffaqiyatli o'rnatildi!\n"
echo "Ishga tushirish uchun:\n"
echo "Backend:"
echo "  cd backend"
echo "  npm start\n"
echo "Frontend (boshqa terminalda):"
echo "  cd frontend"
echo "  npm start\n"
echo "Sayt manzili: http://localhost:3000"
echo "API Server: http://localhost:5000"
