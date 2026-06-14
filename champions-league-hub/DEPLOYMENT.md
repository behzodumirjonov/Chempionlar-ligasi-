# 🚀 Champions League Hub - Joylashtirish Qo'llanmasi

Bu hujjat saytni turli muhitlarda joylashtirish bo'yicha to'liq yo'riqnoma beradi.

## 📋 Jadval

- [Yerli Ishlab Chiqarish](#yerli-ishlab-chiqarish)
- [Docker Bilan Joylashtirish](#docker-bilan-joylashtirish)
- [Heroku uchun Joylashtirish](#heroku-uchun-joylashtirish)
- [Vercel + Railway uchun Joylashtirish](#vercel--railway-uchun-joylashtirish)
- [AWS uchun Joylashtirish](#aws-uchun-joylashtirish)

## Yerli Ishlab Chiqarish

### Backend Joylashtirish

```bash
cd backend
npm install
cp .env.example .env

# .env fayllani tahrirlang
nano .env
# PORT=5000
# NODE_ENV=production

npm start
```

### Frontend Joylashtirish

```bash
cd frontend
npm install
npm run build

# Build fayllarini serverga ko'chirish
# build/ papkasi serverga joylashtiriladigan papka
```

## Docker Bilan Joylashtirish

### Docker Installyatsiyasi

```bash
# Docker o'rnatish (agar o'rnatilmagan bo'lsa)
# Ubuntu/Debian uchun:
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# macOS uchun:
brew install docker docker-compose
```

### Docker Compose Bilan Ishlab Chiqarish

```bash
# Loyihaning ildizida
docker-compose up -d

# Loglarni ko'rish
docker-compose logs -f

# Shushtirish
docker-compose down
```

Sayt manzili: `http://localhost:3000`

### Production Docker Compose

```yaml
version: '3.8'

services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.prod
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - PORT=5000
    restart: always

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.prod
    ports:
      - "80:80"
    restart: always
```

## Heroku uchun Joylashtirish

### Heroku Konfiguratsiyasi

```bash
# Heroku CLI o'rnatish
# Windows/macOS/Linux uchun:
npm install -g heroku

# Hisobga kirish
heroku login

# Loyihani Heroku ga ko'chirish
heroku create champions-league-hub

# Procfile yaratish
echo "web: node backend/server.js" > Procfile

# Git ga qo'shish va jo'natish
git add Procfile
git commit -m "Add Procfile for Heroku"
git push heroku main
```

### Heroku Muhit O'zgaruvchilari

```bash
heroku config:set PORT=5000
heroku config:set NODE_ENV=production
heroku config:set DATABASE_URL=your_mongodb_url
```

## Vercel + Railway uchun Joylashtirish

### Frontend Vercel da

```bash
# GitHub tugma orqali Vercelga ulanish
# https://vercel.com/new

# Yoki CLI orqali
npm install -g vercel
vercel
```

### Backend Railway da

```bash
# Railway.app ga kirish va yangi loyiha yaratish
# GitHub reposini ulash

# Environment o'zgaruvchilari:
PORT=5000
NODE_ENV=production
DATABASE_URL=mongodb+srv://...
```

## AWS uchun Joylashtirish

### Elastic Beanstalk

```bash
# AWS CLI o'rnatish
pip install awscli

# EB CLI o'rnatish
pip install awsebcli

# Loyiha ishga tushirish
eb init -p node.js champions-league-hub
eb create champions-league-hub-env
eb deploy
```

### EC2 + Nginx

```bash
# EC2 instansiyasiga ulanish
ssh -i your-key.pem ec2-user@your-instance-ip

# Node.js o'rnatish
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install nodejs

# Loyihani clone qilish
git clone https://github.com/yourname/champions-league-hub.git
cd champions-league-hub

# Backend o'rnatish va ishga tushirish
cd backend
npm install
pm2 start server.js --name "cl-backend"

# Frontend qurish
cd ../frontend
npm install
npm run build

# Nginx konfiguratsiyasi
sudo tee /etc/nginx/conf.d/champions-league.conf > /dev/null <<EOF
server {
    listen 80;
    server_name your-domain.com;

    root /home/ec2-user/champions-league-hub/frontend/build;
    index index.html;

    location / {
        try_files \$uri /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
    }
}
EOF

sudo systemctl restart nginx
```

## SSL Sertifikatni O'rnatish

### Let's Encrypt Bilan

```bash
# Certbot o'rnatish
sudo apt-get install certbot python3-certbot-nginx

# Sertifikat olish
sudo certbot certonly --nginx -d your-domain.com

# Nginx konfiguratsiyasini yangilash
# /etc/nginx/conf.d/champions-league.conf
```

## Monitoring va Log Fayllari

### PM2 Bilan Monitoring

```bash
# Backend Process Monitoring
pm2 install pm2-logrotate
pm2 save
pm2 startup

# Loglarni ko'rish
pm2 logs cl-backend
```

### Nginx Loglar

```bash
# Access logs
tail -f /var/log/nginx/access.log

# Error logs
tail -f /var/log/nginx/error.log
```

## Database Joylashtirish

### MongoDB Atlas

```bash
# 1. MongoDB Atlas da cluster yaratish
# 2. Connection string olish
# 3. .env ga qo'shish:
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/champions-league?retryWrites=true&w=majority
```

### PostgreSQL

```bash
# Local uchun:
sudo apt-get install postgresql postgresql-contrib

# Cloud uchun (AWS RDS):
# AWS RDS dashboarddan database yaratish
# Connection string .env ga qo'shish
```

## Backup va Xavfsizlik

### Database Backup

```bash
# MongoDB backup
mongodump --uri="mongodb://..." --out=/backups/db

# PostgreSQL backup
pg_dump -U username database_name > backup.sql
```

### Environment Fayllari Xavfsizligi

```bash
# .env fayllari git ga qo'shilmasligi kerak
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
echo ".env.production" >> .gitignore

# Secrets Manager dan foydalanish (Heroku, Vercel, AWS)
```

## Performance Optimization

### Frontend Optimization

```bash
# Build hajmini tekshirish
npm run build -- --analyze

# Image optimization
npm install --save-dev image-webpack-loader

# Code splitting
npm install --save @loadable/component
```

### Backend Optimization

```bash
# Compression
npm install compression

# Caching
npm install redis

# Rate limiting
npm install express-rate-limit
```

## Troubleshooting

### CORS Xatosi

```bash
# Backend .env ga qo'shish:
CORS_ORIGIN=https://your-domain.com
```

### Database Ulanmasligi

```bash
# MongoDB connection tekshirish
mongo "mongodb+srv://username:password@cluster.mongodb.net/champions-league"
```

### Port Ishlatilmoqda

```bash
# Portni o'lchaish
lsof -i :5000

# Jarayonni to'xtatish
kill -9 PID
```

## CI/CD Pipeline

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: |
          # Deploy commands
```

---

**Sayt Egasi:** Alijonov Asadbek
**Oxirgi Yangilanish:** Iyun 2024
