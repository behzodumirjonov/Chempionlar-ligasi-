import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-champions-dark border-t border-champions-gold/20 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-champions-gold mb-4">Champions League Hub</h3>
            <p className="text-gray-400">
              UEFA Champions Ligasi haqida eng to'liq ma'lumot olishning eng yaxshi manzili.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-champions-gold mb-4">Tez Havolalar</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Bosh Sahifa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">O'tgan O'yinlar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kelgusi O'yinlar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Faktlar</a></li>
            </ul>
          </div>

          {/* Competition Info */}
          <div>
            <h3 className="text-lg font-bold text-champions-gold mb-4">Tahdid</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Qoidalar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Turlar Jadvali</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ochko Jadvali</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stat</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold text-champions-gold mb-4">Bog'lanish</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-champions-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-champions-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-champions-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-champions-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400">
              <a href="mailto:info@championsleaguehub.com">info@championsleaguehub.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-champions-gold/10 pt-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              © 2024 Champions League Hub. Veb-sayt egasi: <span className="text-champions-gold font-bold">Alijonov Asadbek</span>
            </p>
            <p className="text-gray-500 text-sm">
              Eng yaxshi futbol tahdidini ko'rsatish uchun mo'ljallangan. Hamma huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
