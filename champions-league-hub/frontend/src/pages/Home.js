import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Zap, TrendingUp } from 'lucide-react';
import axios from 'axios';

const Home = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dashboard');
        setStats(response.data);
      } catch (error) {
        console.error('Dashboard ma\'lumot olib bo\'lmadi:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-champions-blue rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 right-0 w-96 h-96 bg-champions-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-champions-blue">UEFA</span>{' '}
              <span className="gradient-text">Champions League</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Evropaning eng tahdidli futbol turniri. Tarixiy o'yinlar, kelgusi chempionatlar va expert fikrlari.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/past-matches" className="btn-primary inline-flex items-center justify-center">
                O'tgan O'yinlarni Ko'rish <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/upcoming-matches" className="btn-secondary inline-flex items-center justify-center">
                Kelgusi O'yinlar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {!loading && stats && (
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-champions-dark/50">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="card text-center">
                <Trophy className="w-8 h-8 text-champions-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-champions-gold">{stats.pastMatches}</div>
                <div className="text-gray-400 mt-2">O'tgan O'yinlar</div>
              </div>
              <div className="card text-center">
                <Zap className="w-8 h-8 text-champions-blue mx-auto mb-4" />
                <div className="text-3xl font-bold text-champions-blue">{stats.upcomingMatches}</div>
                <div className="text-gray-400 mt-2">Kelgusi O'yinlar</div>
              </div>
              <div className="card text-center">
                <TrendingUp className="w-8 h-8 text-champions-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-champions-gold">{stats.facts}</div>
                <div className="text-gray-400 mt-2">Qiziqarli Faktlar</div>
              </div>
              <div className="card text-center">
                <Users className="w-8 h-8 text-champions-blue mx-auto mb-4" />
                <div className="text-3xl font-bold text-champions-blue">{stats.expertOpinions}</div>
                <div className="text-gray-400 mt-2">Expert Fikrlari</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="section-title">Nega Bizni Tanlaysiz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-champions-gold">Toliq Statistika</h3>
              <p className="text-gray-400">
                Har bir o'yin haqida batafsil statistika, gol, assist va boshqa ma'lumot.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-xl font-bold mb-3 text-champions-gold">YouTube Videolar</h3>
              <p className="text-gray-400">
                Eng muhim lahzalarni YouTube orqali to'gri saytimizdan ko'ring.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 text-champions-gold">Expert Fikrlari</h3>
              <p className="text-gray-400">
                Top treinelar va futbol analitiklarining kelgusi o'yinlar haqida fikrlari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-champions-blue/10 to-champions-gold/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Eng Yangi Tahdidlarni O'zingizni Orqali Ko'ring
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Har hafta yangi tahlillar, statistika va expert fikrlari o'z vaqtida.
          </p>
          <button className="btn-primary inline-flex items-center">
            Yangiliklarga Obuna Bolish <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Website Owner */}
      <section className="py-12 px-4 border-t border-champions-gold/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            Sayt egasi: <span className="text-champions-gold font-bold text-lg">Alijonov Asadbek</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Eng yaxshi futbol tahdidini dunyo standartida suratga olish uchun mo'ljallangan.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
