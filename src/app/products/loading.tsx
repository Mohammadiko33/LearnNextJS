'use client';

import { useState, useEffect } from 'react';

const funnyMessages = [
  "📡 داداش این لودینگ داره پیر میشه، نتتو عوض کن 😂",
  "🐢 سرعتت از لاک‌پشت خجالت‌آورتره!",
  "🪁 اینترنتت با قلاب وصله؟",
  "😴 لودینگ خوابش برد انگار!",
  "📞 برو به پشتیبانی بگو مودمت قهر کرده!",
  "💤 هنوز لود نکرد؟ یه قهوه بزن بیا!",
  "📀 انگار داری با دیال‌آپ وصل می‌شی!",
  "🌪️ اینترنته یا بادی از گذشته؟",
  "⏳ زمان از حرکت ایستاده، ولی این لودینگ نه!",
  "🪫 اینترنتت از شارژ روحی من کمتره!",
];

const LoadingSpinner = () => {
  const [hovered, setHovered] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const random = Math.floor(Math.random() * funnyMessages.length);
    setMessage(funnyMessages[random]);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900/80 text-white">
      <div
        className="relative flex flex-col items-center group transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />

        {/* Tooltip */}
        {hovered && (
          <div className="absolute top-20 w-64 bg-white/10 backdrop-blur-md text-sm text-yellow-200 px-4 py-3 rounded-2xl shadow-xl animate-pulse border border-white/20">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;
