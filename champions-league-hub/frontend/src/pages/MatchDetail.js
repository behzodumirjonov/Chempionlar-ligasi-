import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Gauge } from 'lucide-react';
import axios from 'axios';

const MatchDetail = () => {
  const { id } = useParams();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/matches/${id}`);
        setMatch(response.data);
      } catch (error) {
        console.error('O\'yin ma\'lumoti olib bo\'lmadi:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatch();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto py-20 text-center loading"></div>;
  }

  if (!match) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-xl text-red-500">O'yin ma'lumoti topilmadi</p>
        <Link to="/past-matches" className="btn-primary mt-6 inline-block">
          <ArrowLeft className="inline mr-2" size={20} />
          O'tgan O'yinlarga Qaytish
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Back Button */}
        <Link to="/past-matches" className="inline-flex items-center text-champions-gold hover:text-champions-blue transition-colors mb-8">
          <ArrowLeft size={20} className="mr-2" />
          O'tgan O'yinlarga Qaytish
        </Link>

        {/* Match Header */}
        <div className="card mb-8 border-2 border-champions-gold/50">
          <div className="text-center mb-6">
            <span className="badge text-lg px-4 py-2">{match.stage}</span>
            <p className="text-gray-400 mt-4">
              {new Date(match.date).toLocaleDateString('uz-UZ', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Team Names and Score */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-champions-blue mb-3">
                {match.homeTeam}
              </h2>
              <p className="text-gray-400 flex items-center justify-center space-x-2">
                <span>📍</span>
                <span>{match.stadium}</span>
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-champions-gold mb-4">
                {match.homeScore}
              </div>
              <div className="text-3xl text-gray-400 mb-4">-</div>
              <div className="text-6xl md:text-7xl font-bold text-champions-blue">
                {match.awayScore}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-champions-gold mb-3">
                {match.awayTeam}
              </h2>
              <p className="text-gray-400">Mehmonna</p>
            </div>
          </div>
        </div>

        {/* Match Video */}
        {match.highlights && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-champions-gold mb-4">📹 O'yin Videosi</h3>
            <div className="video-container">
              <iframe
                src={match.highlights}
                title="Match Highlights"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Match Statistics */}
        {match.stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card">
              <div className="flex items-center space-x-2 mb-4">
                <Gauge size={24} className="text-champions-gold" />
                <h4 className="font-bold text-lg">Baliqlanish</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>{match.homeTeam}</span>
                  <span className="text-champions-gold font-bold">
                    {match.stats.possession.split('-')[0].trim()}
                  </span>
                </div>
                <div className="w-full bg-champions-dark rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-champions-blue to-champions-gold h-2 rounded-full"
                    style={{ width: match.stats.possession.split('-')[0].trim() }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-champions-blue font-bold">
                    {match.stats.possession.split('-')[1].trim()}
                  </span>
                  <span>{match.awayTeam}</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-2 mb-4">
                <Users size={24} className="text-champions-gold" />
                <h4 className="font-bold text-lg">Gavdalar</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>{match.homeTeam}</span>
                  <span className="text-champions-gold font-bold">
                    {match.stats.shots.split('-')[0].trim()}
                  </span>
                </div>
                <div className="w-full bg-champions-dark rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-champions-blue to-champions-gold h-2 rounded-full"
                    style={{ width: '60%' }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-champions-blue font-bold">
                    {match.stats.shots.split('-')[1].trim()}
                  </span>
                  <span>{match.awayTeam}</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-2 mb-4">
                <Gauge size={24} className="text-champions-gold" />
                <h4 className="font-bold text-lg">Paspaslar</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>{match.homeTeam}</span>
                  <span className="text-champions-gold font-bold">
                    {match.stats.passes.split('-')[0].trim()}
                  </span>
                </div>
                <div className="w-full bg-champions-dark rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-champions-blue to-champions-gold h-2 rounded-full"
                    style={{ width: '55%' }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-champions-blue font-bold">
                    {match.stats.passes.split('-')[1].trim()}
                  </span>
                  <span>{match.awayTeam}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Goals */}
        {match.goals && match.goals.length > 0 && (
          <div className="card mb-8">
            <h3 className="text-2xl font-bold text-champions-gold mb-6">⚽ Gollar Tarixi</h3>
            <div className="space-y-4">
              {match.goals.map((goal, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-4 bg-champions-dark rounded">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-champions-blue to-champions-gold flex items-center justify-center text-white font-bold">
                      {goal.minute}'
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg">{goal.player}</p>
                    <p className="text-sm text-gray-400">{goal.team}</p>
                  </div>
                  <div className="text-3xl">⚽</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Match Summary */}
        <div className="card bg-gradient-to-br from-champions-blue/10 to-champions-gold/10">
          <h3 className="text-2xl font-bold text-champions-gold mb-4">📊 O'yin Xulosasi</h3>
          <p className="text-gray-300 leading-relaxed">
            Bu o'yin {match.stage} marhalasida bo'lib o'tdi. {match.homeTeam} o'zlarining stadionida 
            {match.homeScore} - {match.awayScore} hisobda {match.homeScore > match.awayScore ? 'g\'alaba' : 'mag\'lubiyat'} 
            qo'lga kiritdi. O'yin juda qiziqarli va tahdidli bo'ldi, ikkala jamoa ham o'z kuchini 
            to'liq ko'rsatdi. Statistikaga qarab {match.stats.possession} baliqlanish bor edi.
          </p>
        </div>

        {/* Related Matches */}
        <div className="mt-12 pt-12 border-t border-champions-gold/20">
          <h3 className="text-2xl font-bold text-champions-gold mb-6">🔗 Boshqa O'yinlar</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/past-matches" className="card hover:border-champions-gold cursor-pointer">
              <p className="text-gray-400">← Oldingi O'yinlar</p>
              <p className="text-white font-bold mt-2">Barcha O'tgan O'yinlarni Ko'rish</p>
            </Link>
            <Link to="/upcoming-matches" className="card hover:border-champions-gold cursor-pointer">
              <p className="text-gray-400">Keyingi O'yinlar →</p>
              <p className="text-white font-bold mt-2">Kelgusi Tahdidlarni Ko'rish</p>
            </Link>
            <Link to="/facts" className="card hover:border-champions-gold cursor-pointer">
              <p className="text-gray-400">Qiziqarli Faktlar</p>
              <p className="text-white font-bold mt-2">Champions League Tarixidagi Faktlar</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetail;
