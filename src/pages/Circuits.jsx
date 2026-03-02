import { useState, useEffect } from 'react';

export default function Circuits() {
  const [circuits, setCircuits] = useState([]);

  useEffect(() => {
    setCircuits([
      { id: 1, name: 'Melbourne Grand Prix Circuit', country: 'Australia', city: 'Melbourne' },
      { id: 2, name: 'Shanghai International Circuit', country: 'China', city: 'Shanghai' },
      { id: 3, name: 'Suzuka International Racing Course', country: 'Japan', city: 'Suzuka' },
      { id: 4, name: 'Bahrain International Circuit', country: 'Bahrain', city: 'Sakhir' },
      { id: 5, name: 'Jeddah Corniche Circuit', country: 'Saudi Arabia', city: 'Jeddah' },
      { id: 6, name: 'Miami International Autodrome', country: 'USA', city: 'Miami' },
      { id: 7, name: 'Circuit Gilles-Villeneuve', country: 'Canada', city: 'Montreal' },
      { id: 8, name: 'Circuit de Monaco', country: 'Monaco', city: 'Monaco' },
      { id: 9, name: 'Circuit de Barcelona-Catalunya', country: 'Spain', city: 'Barcelona' },
      { id: 10, name: 'Red Bull Ring', country: 'Austria', city: 'Spielberg' },
      { id: 11, name: 'Silverstone Circuit', country: 'Great Britain', city: 'Silverstone' },
      { id: 12, name: 'Circuit de Spa-Francorchamps', country: 'Belgium', city: 'Spa-Francorchamps' },
      { id: 13, name: 'Hungaroring', country: 'Hungary', city: 'Budapest' },
      { id: 14, name: 'Circuit Zandvoort', country: 'Netherlands', city: 'Zandvoort' },
      { id: 15, name: 'Autodromo Nazionale Monza', country: 'Italy', city: 'Monza' },
      { id: 16, name: 'IFEMA Madrid', country: 'Spain', city: 'Madrid' },
      { id: 17, name: 'Baku City Circuit', country: 'Azerbaijan', city: 'Baku' },
      { id: 18, name: 'Marina Bay Street Circuit', country: 'Singapore', city: 'Singapore' },
      { id: 19, name: 'Circuit of The Americas', country: 'USA', city: 'Austin' },
      { id: 20, name: 'Autódromo Hermanos Rodríguez', country: 'Mexico', city: 'Mexico City' },
      { id: 21, name: 'Autódromo José Carlos Pace', country: 'Brazil', city: 'São Paulo' },
      { id: 22, name: 'Las Vegas Strip Circuit', country: 'USA', city: 'Las Vegas' },
      { id: 23, name: 'Lusail International Circuit', country: 'Qatar', city: 'Lusail' },
      { id: 24, name: 'Yas Marina Circuit', country: 'Abu Dhabi', city: 'Yas Island' },
    ]);
  }, []);

  return (
    // ใช้สีพื้นหลังและสไตล์ให้เข้ากับหน้าอื่นๆ
    <div className="bg-[#15151e] min-h-[80vh] w-full rounded-2xl shadow-2xl p-6 md:p-10 font-sans">
      <h2 className="text-3xl font-bold mb-6 text-white tracking-wide">🏁 Official F1 Circuits</h2>
      
      {/* โครงสร้าง Grid แบบเรียบง่าย */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {circuits.map((circuit, index) => (
          <div key={circuit.id} className="bg-[#1e1e27] border border-gray-700 rounded-lg shadow-md overflow-hidden hover:border-red-600 transition-colors">
            
            {/* Header ของแต่ละการ์ด แสดงลำดับสนามและชื่อประเทศ */}
            <div className="bg-gray-800 text-white p-3 flex justify-between items-center border-b border-gray-700">
              <span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs font-bold">Round {index + 1}</span>
              <p className="text-sm font-semibold text-gray-300 uppercase">{circuit.country}</p>
            </div>
            
            {/* รายละเอียดชื่อสนามและเมือง */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">{circuit.name}</h3>
              <p className="text-gray-400 text-sm">📍 {circuit.city}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}