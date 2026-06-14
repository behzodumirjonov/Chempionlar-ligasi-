# 🏆 Champions League Hub

**Veb-sayt Egasi:** Alijonov Asadbek

Eng yaxshi futbol tahdidi - UEFA Champions League haqida barcha ma'lumot olish uchun mo'ljallangan premium darajadagi web platformasi.

## 📋 Tavsifi

Champions League Hub - bu UEFA Champions Ligasi tahdidi haqida eng to'liq ma'lumot olish uchun yaratilgan zamonaviy veb-sahifa. Saytda o'tgan o'yinlar, kelgusi o'yinlar, qiziqarli faktlar, YouTube videolari va expert fikrlari topiladi.

## ✨ Asosiy Imkoniyatlar

- 🏟️ **O'tgan O'yinlar** - Butun tarixiy o'yinlar, natijalar va statistika
- ⏱️ **Kelgusi O'yinlar** - Jadval bo'yicha kelgusi o'yinlar va prognozlar
- 📊 **Batafsil Statistika** - Possession, shots, passes va boshqa ma'lumotlar
- 📹 **YouTube Videolar** - Har bir o'yining video qisqachasi
- 💡 **Qiziqarli Faktlar** - Champions League tarixidagi rekordlar va faktlar
- 🎤 **Expert Fikrlari** - Treiner va futbol analitiklarining fikrlari
- 📱 **Responsive Design** - Mobil, planshet va desktopda mukammal ishlash

## 🛠️ Texnologiyalar

### Backend
- **Node.js** - Runtime muhiti
- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing
- **Dotenv** - Muhit o'zgaruvchilari

### Frontend
- **React 18** - UI framework
- **React Router** - Sahifalar orasida navigatsiya
- **Axios** - API serveriga so'rovlar
- **Tailwind CSS** - Styling
- **Lucide React** - Ikonlar

## 📦 O'rnatish

### Shartlar

- Node.js 14+ o'rnatilgan bo'lishi kerak
- npm yoki yarn

### Backend O'rnatish

```bash
cd backend
npm install
cp .env.example .env
npm start
```

Backendning manzili: `http://localhost:5000`

### Frontend O'rnatish

```bash
cd frontend
npm install
npm start
```

Frontend ​​manzili: `http://localhost:3000`

## 🚀 Ishga Tushirish

### Rivojlanish Rejimi

```bash
# Backend ochiq terminalda
cd backend
npm run dev

# Boshqa terminalda frontend
cd frontend
npm start
```

Backend va Frontend birgalikda ishlab turganda sayt to'liq imkoniyatlari bilan ishlaydi.

### Production Uchun Jami Qilish

```bash
# Frontend jami qilish
cd frontend
npm run build

# Natijai build/ papkasiga saqlanadi
```

## 📁 Loyiha Tuzilishi

```
champions-league-hub/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.js
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── PastMatches.js
│   │   │   ├── UpcomingMatches.js
│   │   │   ├── Facts.js
│   │   │   ├── ExpertOpinions.js
│   │   │   └── MatchDetail.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── tailwind.config.js
├── .gitignore
└── README.md
```

## 🔌 API Endpoints

### O'tgan O'yinlar
```
GET /api/matches/past
```

### Kelgusi O'yinlar
```
GET /api/matches/upcoming
```

### Bitta O'yin Ma'lumoti
```
GET /api/matches/:id
```

### Qiziqarli Faktlar
```
GET /api/facts
```

### Expert Fikrlari
```
GET /api/expert-opinions
```

### Dashboard Ma'lumoti
```
GET /api/dashboard
```

## 🎨 Dizayn Tafsili

### Rang Sxemasi
- **Asosiy Ko'k** - `#0066cc`
- **Oltin Sariq** - `#ffc72c`
- **Qora Fon** - `#0a1929`

### Shrift
- Asosiy Shrift: Inter

## 📝 Muhit O'zgaruvchilari

### Backend (.env)
```
PORT=5000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/champions-league
API_KEY=your_api_key_here
YOUTUBE_API_KEY=your_youtube_api_key_here
```

## 🚀 GitHub uchun Tayyorlash

### 1. Repository Yaratish

```bash
git init
git add .
git commit -m "Initial commit: Champions League Hub"
git branch -M main
git remote add origin https://github.com/yourusername/champions-league-hub.git
git push -u origin main
```

### 2. .gitignore Tekshirish

Barcha kerakli fayllar `.gitignore`da ro'yxatga olingan.

```bash
git check-ignore **/node_modules/**
git check-ignore **/.env
```

## 🔐 Xavfsizlik

- **Muhit Fayllari** - `.env` fayllari hech qachon GitHub ga tushmasligi kerak
- **API Kalitleri** - Barcha API kalitlari xavfli saqlanishi kerak
- **CORS** - Faqat ishonchli manzillardan so'rovlar qabul qilinadi

## 📱 Responsive Design

- **Mobil** - 320px va undan yuqori
- **Planshet** - 768px va undan yuqori
- **Desktop** - 1024px va undan yuqori

## 🐛 Xatolarni Tuzatish

Agar xato ro'y bersa:

1. Backend konsoli tekshiring
2. Frontend konsolini tekshiring (F12)
3. Network tabini tekshiring (API so'rovlari)
4. `.env` faylini tekshiring

## 📞 Bog'lanish

**Veb-sayt Egasi:** Alijonov Asadbek

## 📄 Litsenziya

MIT License

## 🙏 Tashakkur

- UEFA Champions League - Dastlabki ma'lumot manbai
- React va Tailwind CSS o'z gavhasida

---

**Yaratilgan:** 2024
**Oxirgi Yangilanish:** Iyun 2024

Eng yaxshi futbol tahdidi uchun shamol qo'ling! ⚽🏆
