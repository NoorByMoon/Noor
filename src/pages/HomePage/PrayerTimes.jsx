import React from 'react';

function PrayerTimes() {
  const prayers = [
    { name: 'Fajr', time: '04:39' },
    { name: 'Sunrise', time: '06:03' },
    { name: 'Dhuhr', time: '12:06' },
    { name: 'Asr', time: '15:31' },
    { name: 'Maghrib', time: '18:09' },
    { name: 'Isha', time: '19:39' },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Prayer Times</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-6 gap-4">
          {prayers.map((prayer) => (
            <div key={prayer.name} className="text-center">
              <div className="font-semibold">{prayer.name}</div>
              <div className="text-gray-600">{prayer.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrayerTimes;