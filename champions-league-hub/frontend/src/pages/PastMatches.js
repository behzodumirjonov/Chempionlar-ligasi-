import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import axios from 'axios';

const PastMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/matches/past');
        setMatches(response.data);
      } catch (error) {
        console.error('O\'yinlar olib bo\'lmadi:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return <div className="container mx-auto py-20 text-center loading"></div>;
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="section-title">O'tgan O'yinlar</h1>
          <p className="text-center text-gray-400 text-lg">
            UEFA Champions Ligasining tarixidagi eng muhim o'yinlar va ularning natijalarini ko'ring
          </p>
        </div>

        <div className="space-y-6">
          {matches.map((match) => (
            <div key={match.id} className="match-card">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Home Team */}
                <div className="text-center">
                  <div className="team-name">{match.homeTeam}</div>
                  <div className="text-sm text-gray-400">{match.stadium}</div>
                </div>

                {/* Score */}
                <div className="text-center">
                  <div className="score-display">{match.homeScore} - {match.awayScore}</div>
                  <div className="badge mb-4">{match.stage}</div>
                  <div className="text-sm text-gray-400">{new Date(match.date).toLocaleDateString('uz-UZ')}</div>
                </div>

                {/* Away Team */}
                <div className="text-center">
                  <div className="team-name">{match.awayTeam}</div>
                  <div className="text-sm text-gray-400">Gavdalar: {match.stats?.shots}</div>
                </div>
              </div>

              {/* Match Details */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-sm text-gray-400">Baliqlanish</div>
                  <div className="font-bold text-champions-gold">{match.stats?.possession}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400">Gavdalar</div>
                  <div className="font-bold text-champions-gold">{match.stats?.shots}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-400">Paspaslar</div>
                  <div className="font-bold text-champions-gold">{match.stats?.passes}</div>
                </div>
              </div>

              {/* Goals */}
              {match.goals && match.goals.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="font-bold text-champions-gold mb-3">⚽ Gollar</h4>
                  <div className="space-y-2">
                    {match.goals.map((goal, idx) => (
                      <div key={idx} className="text-sm text-gray-300">
                        <span className="text-champions-gold font-bold">{goal.minute}'</span> - {goal.player} ({goal.team})
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Video Section */}
              {match.highlights && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="font-bold text-champions-gold mb-3 flex items-center">
                    <PlayCircle size={20} className="mr-2" /> O'yin Videosi
                  </h4>
                  <div className="video-container">
                    <iframe
                      src={match.highlights}
                      title="Match Highlights"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Details Button */}
              <div className="mt-6 text-center">
                <Link 
                  to={`/match/${match.id}`}
                  className="inline-block btn-secondary"
                >
                  Batafsil Ko'rish
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastMatches;
