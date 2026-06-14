import React, { useEffect, useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import axios from 'axios';

const UpcomingMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/matches/upcoming');
        setMatches(response.data);
      } catch (error) {
        console.error('Kelgusi o\'yinlar olib bo\'lmadi:', error);
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
          <h1 className="section-title">Kelgusi O'yinlar</h1>
          <p className="text-center text-gray-400 text-lg">
            Champions League tahdidida kelgusi o'yinlar va ularni to'g'ri vaqtida kuzatish
          </p>
        </div>

        <div className="space-y-6">
          {matches.map((match) => (
            <div key={match.id} className="match-card border-2 border-champions-blue/50 hover:border-champions-gold">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
                {/* Home Team */}
                <div className="text-center md:text-right">
                  <div className="text-3xl font-bold text-champions-blue mb-2">
                    {match.homeTeam}
                  </div>
                  <div className="flex items-center justify-center md:justify-end space-x-2 text-sm text-gray-400">
                    <MapPin size={16} />
                    <span>{match.stadium}</span>
                  </div>
                </div>

                {/* VS */}
                <div className="hidden md:flex justify-center">
                  <div className="text-2xl font-bold text-champions-gold">VS</div>
                </div>

                {/* Away Team */}
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold text-champions-gold mb-2">
                    {match.awayTeam}
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-gray-400">
                    <Clock size={16} />
                    <span>{match.kickoff}</span>
                  </div>
                </div>
              </div>

              {/* Match Info */}
              <div className="border-t border-white/10 pt-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-2">Tur</div>
                    <div className="badge">{match.stage}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Sana</div>
                    <div className="font-bold text-white">
                      {new Date(match.date).toLocaleDateString('uz-UZ')}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 mb-2">Stadion</div>
                    <div className="font-bold text-champions-gold text-sm">
                      {match.stadium}
                    </div>
                  </div>
                </div>
              </div>

              {/* Prediction Section */}
              <div className="mt-6 pt-6 border-t border-white/10 bg-gradient-to-r from-champions-blue/10 to-champions-gold/10 p-4 rounded">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-champions-gold mb-2">🔮 Prognoz</h4>
                    <p className="text-sm text-gray-400">
                      Expert tahlil va statistikaga asosan so'nggi yangilanish: <span className="text-champions-gold">Qo'l kalamiz kutaylik</span>
                    </p>
                  </div>
                  <button className="btn-primary whitespace-nowrap ml-4">
                    Expert Fikri
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reminder Section */}
        <div className="mt-12 card text-center">
          <h3 className="text-2xl font-bold text-champions-gold mb-4">⏰ Bildirishnomalar</h3>
          <p className="text-gray-400 mb-6">
            Har bir o'yin boshlanishidan oldin xabardor bo'lish uchun bildirishnomalarni yoqing
          </p>
          <button className="btn-secondary">
            Bildirishnomalarni Yoqish
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMatches;
