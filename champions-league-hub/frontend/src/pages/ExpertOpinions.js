import React, { useEffect, useState } from 'react';
import { MessageSquare, User } from 'lucide-react';
import axios from 'axios';

const ExpertOpinions = () => {
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/expert-opinions');
        setOpinions(response.data);
      } catch (error) {
        console.error('Expert fikrlari olib bo\'lmadi:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOpinions();
  }, []);

  if (loading) {
    return <div className="container mx-auto py-20 text-center loading"></div>;
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="section-title">Expert Fikrlari</h1>
          <p className="text-center text-gray-400 text-lg">
            Champions League treiner va analitiklarining kelgusi tahdidlar haqida fikrlari
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opinions.map((opinion) => (
            <div key={opinion.id} className="card border-l-4 border-champions-gold">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-champions-blue to-champions-gold flex items-center justify-center">
                    <User className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">
                    {opinion.expert}
                  </h3>
                  <p className="text-sm text-champions-gold font-semibold">
                    🏟️ {opinion.team}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    📅 {new Date(opinion.date).toLocaleDateString('uz-UZ')}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-champions-blue/10 to-champions-gold/10 p-4 rounded-lg mb-4">
                <div className="flex items-start space-x-2">
                  <MessageSquare className="w-5 h-5 text-champions-gold flex-shrink-0 mt-1" />
                  <p className="text-gray-200 leading-relaxed">
                    "{opinion.opinion}"
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs bg-champions-blue/20 text-champions-blue px-3 py-1 rounded-full">
                  Rasmiy Fikr
                </span>
                <button className="text-champions-gold text-sm font-semibold hover:text-champions-blue transition-colors">
                  Batafsil Ko'rish →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Analysis Section */}
        <div className="mt-16 pt-12 border-t border-champions-gold/20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-champions-gold">2024/2025</span> Sezon Tahlili
          </h2>

          <div className="match-card border-2 border-champions-blue/50">
            <h3 className="text-2xl font-bold text-champions-gold mb-6">📊 Asosiy Tahlil</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-champions-blue mb-2">🏆 Favoritlar</h4>
                <p className="text-gray-300 leading-relaxed">
                  Real Madrid, Manchester City, Bayern Munich va Arsenal tahdidning favoritlari hisoblanadi. 
                  O'tgan sezonning tajribasi va kuchli oyunchalari ularni favoritlar qatoriga qo'yadi.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="font-bold text-champions-gold mb-2">⚡ Qo'shimcha Tarjomalash</h4>
                <p className="text-gray-300 leading-relaxed">
                  PSG, Inter Milan va Barcelona yangi oyunchalari bilan kuchli sezondan kutiladi. 
                  Ularning investitsiyalari va transferlari ularni qat'iy raqiblar qildi.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="font-bold text-champions-blue mb-2">🎯 Asosiy Qiziq Momentlar</h4>
                <p className="text-gray-300 leading-relaxed">
                  Hali o'nlab o'yinlar qoldi va ko'plab "David va Goliaflik" tarkiblar bor. 
                  Qo'shimcha o'yinlar va qo'lay turnir sharti yangi qahromonlar yoki yutuqsiz ekspreslarga imkon berishi mumkin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 card text-center bg-gradient-to-r from-champions-blue/20 to-champions-gold/20">
          <h3 className="text-2xl font-bold text-champions-gold mb-4">
            Siz ham Expert Fikringizni Ulasishni Xohlaysizmi?
          </h3>
          <p className="text-gray-300 mb-6">
            Sizning football tahlil va fikrlaringizni bilan biz hamkorlik qilishga tayyormiz
          </p>
          <button className="btn-primary">
            Fikr Yuborish
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertOpinions;
