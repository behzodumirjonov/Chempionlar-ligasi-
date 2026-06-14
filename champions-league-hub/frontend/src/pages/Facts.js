import React, { useEffect, useState } from 'react';
import { Lightbulb } from 'lucide-react';
import axios from 'axios';

const Facts = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/facts');
        setFacts(response.data);
      } catch (error) {
        console.error('Faktlar olib bo\'lmadi:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFacts();
  }, []);

  if (loading) {
    return <div className="container mx-auto py-20 text-center loading"></div>;
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="section-title">Champions League Faktlari</h1>
          <p className="text-center text-gray-400 text-lg">
            UEFA Champions Ligasining tarixidagi qiziqarli va muhim faktlar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facts.map((fact, index) => (
            <div key={fact.id} className="card group hover:shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-champions-blue to-champions-gold">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-champions-gold mb-2 group-hover:text-champions-blue transition-colors">
                    {fact.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {fact.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-sm text-gray-400">📅 {fact.year}</span>
                    <span className="text-xs bg-champions-blue/20 text-champions-blue px-3 py-1 rounded-full">
                      Tasdiqlanmish
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 pt-12 border-t border-champions-gold/20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-champions-gold">Champions League</span> Statistikasi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl font-bold text-champions-blue mb-3">15</div>
              <h4 className="text-lg font-bold text-champions-gold mb-2">Real Madrid Titulli</h4>
              <p className="text-gray-400">Eng ko'p Champions League titullar</p>
            </div>
            <div className="card text-center">
              <div className="text-5xl font-bold text-champions-gold mb-3">140+</div>
              <h4 className="text-lg font-bold text-champions-blue mb-2">Ronaldo Gollari</h4>
              <p className="text-gray-400">Eng ko'p gol urilgan oyunchi</p>
            </div>
            <div className="card text-center">
              <div className="text-5xl font-bold text-champions-blue mb-3">1955</div>
              <h4 className="text-lg font-bold text-champions-gold mb-2">Boshlanish Yili</h4>
              <p className="text-gray-400">Tarixiy turnirim boshlangan sana</p>
            </div>
          </div>
        </div>

        {/* Interesting Records */}
        <div className="mt-16 pt-12 border-t border-champions-gold/20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Rekord va Yutuqlar</span>
          </h2>

          <div className="space-y-4">
            <div className="match-card">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-champions-gold">Eng Yuqori Xisob</h4>
                  <p className="text-gray-400">Bayern Munich 7-1 AS Roma (2020) Quarter-final</p>
                </div>
                <span className="text-2xl font-bold text-champions-gold">7-1</span>
              </div>
            </div>

            <div className="match-card">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-champions-gold">Eng Tez Gol</h4>
                  <p className="text-gray-400">Ousmane Dembélé - 9 soniya (PSG vs Manchester United)</p>
                </div>
                <span className="text-2xl font-bold text-champions-blue">9"</span>
              </div>
            </div>

            <div className="match-card">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-champions-gold">Eng Ko'p Gol Bir Jamesida</h4>
                  <p className="text-gray-400">Serge Gnabry - 4 gol (Bayern Munich vs AS Roma)</p>
                </div>
                <span className="text-2xl font-bold text-champions-blue">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
