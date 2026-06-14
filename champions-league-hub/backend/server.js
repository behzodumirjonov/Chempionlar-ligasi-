const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mock Data
const matchesData = {
  pastMatches: [
    {
      id: 1,
      date: "2024-05-28",
      homeTeam: "Real Madrid",
      awayTeam: "Borussia Dortmund",
      homeScore: 2,
      awayScore: 0,
      stage: "Final",
      stadium: "Wembley Stadium",
      highlights: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      stats: {
        possession: "55% - 45%",
        shots: "18 - 10",
        passes: "650 - 520"
      },
      goals: [
        { player: "Jude Bellingham", team: "Real Madrid", minute: "74" },
        { player: "Carlo Ancelotti", team: "Real Madrid", minute: "83" }
      ]
    },
    {
      id: 2,
      date: "2024-05-14",
      homeTeam: "Real Madrid",
      awayTeam: "Bayern Munich",
      homeScore: 4,
      awayScore: 3,
      stage: "Semi-final",
      stadium: "Santiago Bernabéu",
      highlights: "https://www.youtube.com/embed/iHM-pV3k2w0",
      stats: {
        possession: "60% - 40%",
        shots: "20 - 15",
        passes: "700 - 550"
      }
    },
    {
      id: 3,
      date: "2024-04-09",
      homeTeam: "Manchester City",
      awayTeam: "Real Madrid",
      homeScore: 1,
      awayScore: 2,
      stage: "Quarter-final",
      stadium: "Etihad Stadium",
      highlights: "https://www.youtube.com/embed/jNQXAC9IVRw",
      stats: {
        possession: "65% - 35%",
        shots: "22 - 12",
        passes: "750 - 450"
      }
    }
  ],
  upcomingMatches: [
    {
      id: 101,
      date: "2024-09-17",
      homeTeam: "Manchester City",
      awayTeam: "Inter Milan",
      stage: "Group Stage",
      stadium: "Etihad Stadium",
      kickoff: "20:00 CET"
    },
    {
      id: 102,
      date: "2024-09-18",
      homeTeam: "Paris Saint-Germain",
      awayTeam: "Arsenal",
      stage: "Group Stage",
      stadium: "Parc des Princes",
      kickoff: "21:00 CET"
    },
    {
      id: 103,
      date: "2024-09-19",
      homeTeam: "Bayern Munich",
      awayTeam: "Barcelona",
      stage: "Group Stage",
      stadium: "Allianz Arena",
      kickoff: "20:00 CET"
    }
  ],
  facts: [
    {
      id: 1,
      title: "Real Madrid - Rekord Juara",
      description: "Real Madrid Champions Ligani 15 marta yutib olgan. Bu raqamli eng muaffaqiyatli kluba.",
      year: 2024
    },
    {
      id: 2,
      title: "Cristiano Ronaldo Rekordi",
      description: "Cristiano Ronaldo Champions Ligada 140+ gol urgan. Bu eng ko'p gol urilgan oyuncudir.",
      year: 2024
    },
    {
      id: 3,
      title: "Lionel Messi Klassikasi",
      description: "Lionel Messi 129 gol va 42 assist bilan Champions Ligada eng yaxshi assist etgan oyunchi.",
      year: 2024
    },
    {
      id: 4,
      title: "Milliy Rekordi",
      description: "England va Ispaniya futbolchilari Champions Ligada eng ko'p titullar qo'lga kiritgan.",
      year: 2024
    }
  ],
  expertOpinions: [
    {
      id: 1,
      expert: "Pep Guardiola",
      team: "Manchester City",
      opinion: "Champions League tarixidagi eng qiyin sezon bo'ladi. Barcha jamoa o'zini ko'rsatishga tayyorlimidir.",
      date: "2024-08-20"
    },
    {
      id: 2,
      expert: "Carlo Ancelotti",
      team: "Real Madrid",
      opinion: "Bizdagi yosh oyunchalaring taraqqiyoti tashvishi beradi. Bu yil yangi qahromonlar tug'iladi.",
      date: "2024-08-18"
    },
    {
      id: 3,
      expert: "Luis Enrique",
      team: "Paris Saint-Germain",
      opinion: "PSG hali Champions Ligani yutishga qodir va bu mausimda muqaddari bayon etiladi.",
      date: "2024-08-22"
    }
  ]
};

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Champions League API - Alijonov Asadbek' });
});

// O'tgan o'yinlar
app.get('/api/matches/past', (req, res) => {
  res.json(matchesData.pastMatches);
});

// Kelgusi o'yinlar
app.get('/api/matches/upcoming', (req, res) => {
  res.json(matchesData.upcomingMatches);
});

// Bitta o'yin ma'lumoti
app.get('/api/matches/:id', (req, res) => {
  const match = matchesData.pastMatches.find(m => m.id === parseInt(req.params.id));
  if (!match) {
    return res.status(404).json({ message: 'O\'yin topilmadi' });
  }
  res.json(match);
});

// Faktlar
app.get('/api/facts', (req, res) => {
  res.json(matchesData.facts);
});

// Expert fikrlari
app.get('/api/expert-opinions', (req, res) => {
  res.json(matchesData.expertOpinions);
});

// Saytning barcha ma'lumoti
app.get('/api/dashboard', (req, res) => {
  res.json({
    pastMatches: matchesData.pastMatches.length,
    upcomingMatches: matchesData.upcomingMatches.length,
    facts: matchesData.facts.length,
    expertOpinions: matchesData.expertOpinions.length,
    website_owner: "Alijonov Asadbek"
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🏆 Champions League API ${PORT} portida ishlab turibdi...`);
  console.log(`Veb-sayt egasi: Alijonov Asadbek`);
});

module.exports = app;
