# ⚽ Champions League Hub - Tez Boshlanish

**5 Daqiqada Veb-saytni Ishga Tushirish**

## 🎯 Shartlar

- Node.js 14+ o'rnatilgan
- Git o'rnatilgan
- Terminal/Command Prompt

## 🚀 3-Qadamlik O'rnatish

### 1-Qaddam: Loyihani Clone Qiling

```bash
git clone https://github.com/yourusername/champions-league-hub.git
cd champions-league-hub
```

### 2-Qaddam: Setup Skriptini Ishga Tushiring

**Linux/macOS:**
```bash
chmod +x setup.sh
./setup.sh
```

**Windows (PowerShell):**
```bash
# setup.sh o'rniga qo'lda o'rnatish:
cd backend
npm install
cd ../frontend
npm install
```

### 3-Qaddam: Backend va Frontend Ishga Tushiring

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Output: 🏆 Champions League API 5000 portida ishlab turibdi...
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
# Browser avtomatik http://localhost:3000 ga ochiladi
```

## ✅ Tekshirish

Agar hamma to'g'ri bo'lsa:

- 🌐 Frontend sahifasi: http://localhost:3000
- 📡 Backend API: http://localhost:5000
- 📊 Dashboard: http://localhost:5000/api/dashboard

## 📱 Sahifalarni Ko'rish

1. **Bosh Sahifa** - http://localhost:3000
   - Statistika va qisqacha ma'lumot

2. **O'tgan O'yinlar** - http://localhost:3000/past-matches
   - Barcha tarixiy o'yinlar

3. **Kelgusi O'yinlar** - http://localhost:3000/upcoming-matches
   - Jadval bo'yicha o'yinlar

4. **Faktlar** - http://localhost:3000/facts
   - Qiziqarli faktlar

5. **Expert Fikrlari** - http://localhost:3000/expert-opinions
   - Treiner va analitiklarning fikrlari

## 🔧 Xatolarni Tuzatish

### Problem: "Port allaqachon ishlatilmoqda"

**Backend uchun:**
```bash
# Port o'zgartirish
PORT=5001 npm start

# Yoki qo'lda:
lsof -i :5000
kill -9 <PID>
```

**Frontend uchun:**
```bash
# PORT o'zgartirish
PORT=3001 npm start
```

### Problem: "Module topilmadi"

```bash
# node_modules o'chirish va qayta o'rnatish
rm -rf node_modules
npm install
```

### Problem: "CORS xatosi"

Backend `.env` faylini tekshiring:
```
CORS_ORIGIN=http://localhost:3000
```

## 📚 Qo'shimcha Buyruqlar

### Frontend Build Qilish

```bash
cd frontend
npm run build
# build/ papkasida jami qilingan fayllar
```

### Backend Production Rejimida

```bash
cd backend
NODE_ENV=production npm start
```

## 🐳 Docker Bilan (Optional)

```bash
# Docker va Docker Compose o'rnatilgan bo'lsa:
docker-compose up -d

# Shushtirish
docker-compose down
```

## 📝 IDE Uchun Tavsiyalar

### Visual Studio Code

```bash
# Extensions o'rnatish:
1. ES7+ React/Redux/React-Native snippets
2. Tailwind CSS IntelliSense
3. Thunder Client (API testing)
4. MongoDB for VS Code
```

### Recommended Settings

`.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2
}
```

## 🎓 Birinchi Kod O'zgarishini Qilish

### 1. Yangi Sahifa Qo'shish

`frontend/src/pages/MyPage.js` yaratish:
```javascript
import React from 'react';

const MyPage = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="section-title">Menim Sahifam</h1>
        <p>Salom, Champions League!</p>
      </div>
    </div>
  );
};

export default MyPage;
```

### 2. App.js da qo'shish

```javascript
import MyPage from './pages/MyPage';

// Routes qismiga qo'shish
<Route path="/my-page" element={<MyPage />} />
```

### 3. Navigation.js da havolani qo'shish

```javascript
<li>
  <Link to="/my-page">Menim Sahifam</Link>
</li>
```

## 🚀 GitHub ga Jo'natish

```bash
# Yangi fayllarni qo'shish
git add .

# Commit qilish
git commit -m "feat: Add my new feature"

# Push qilish
git push origin main
```

## 📞 Yordam

Agar muammo bo'lsa:

1. **Console Xatosini Ko'ring** (F12 > Console)
2. **Terminal Xatolarini Ko'ring**
3. **Issue Yaratang**: GitHub > Issues > New Issue
4. **Discussion Yaratang**: GitHub > Discussions

## 🎉 Tabriklash!

Siz `Champions League Hub` ni muvaffaqiyatli ishga tushirdingiz!

---

## 📋 Qanday Davam Etish Kerak?

1. 📖 [README.md](README.md) ni o'qiting - Batafsil ma'lumot
2. 🚀 [DEPLOYMENT.md](DEPLOYMENT.md) ni o'qiting - Joylashtirish
3. 🤝 [CONTRIBUTING.md](CONTRIBUTING.md) ni o'qiting - Hissa qo'shish

---

**Veb-sayt Egasi:** Alijonov Asadbek  
**Qo'llanma Tayyorlangan:** 2024-06-14
