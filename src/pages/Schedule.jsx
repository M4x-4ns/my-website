import { useState, useEffect } from 'react';

export default function Schedule() {
  const [scheduleData, setScheduleData] = useState(null);

  useEffect(() => {
    // ข้อมูลจริงของ F1 ฤดูกาล 2026
    setScheduleData({
      previous: {
        id: 1,
        tag: 'TESTING',
        name: 'Bahrain',
        date: '18 - 20 FEB',
        // ใช้รูป placeholder แนวๆ รถแข่ง (เปลี่ยน URL รูปได้ตามต้องการ)
        imgUrl: '/my-website/bahrain-test.png'
        
      },
      next: {
        id: 2,
        tag: 'ROUND 1',
        name: 'Australia',
        date: '06 - 08 MAR',
        imgUrl: '/my-website/Australia.png' 
      },
      upcoming: [
        {
          id: 3,
          tag: 'ROUND 2',
          name: 'China',
          date: '13 - 15 MAR',
          imgUrl: '/my-website/china.png'
        },
        {
          id: 4,
          tag: 'ROUND 3',
          name: 'Japan',
          date: '27 - 29 MAR',
          imgUrl: '/my-website/japan.png'
        }
      ]
    });
  }, []);

  if (!scheduleData) {
    return <div className="h-screen bg-[#15151e] flex justify-center items-center text-white">Loading Schedule... 🚥</div>;
  }

  // สร้าง Component ย่อย (RaceCard) ไว้ใช้ซ้ำ เพื่อให้โค้ดสะอาด
  const RaceCard = ({ data, isPrevious }) => (
    <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden group cursor-pointer">
      {/* รูปภาพพื้นหลัง (ถ้าเป็น Previous จะทำให้เป็นภาพขาวดำเหมือนเว็บจริง) */}
      <img 
        src={data.imgUrl} 
        alt={data.name} 
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${isPrevious ? 'grayscale' : ''}`} 
      />
      {/* เลเยอร์สีดำไล่ระดับจากบนลงล่าง เพื่อให้อ่านตัวหนังสือชัด */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent"></div>
      
      {/* ข้อมูลข้อความบนการ์ด */}
      <div className="absolute top-0 left-0 p-5 md:p-6 w-full">
        <p className="text-gray-300 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1">{data.tag}</p>
        <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-wider">{data.name}</h3>
        <p className="text-gray-300 text-sm font-semibold mt-1 uppercase tracking-wide">{data.date}</p>
      </div>
    </div>
  );

  return (
    // เปลี่ยนพื้นหลังให้เป็นสีดำสไตล์ F1
    <div className="bg-[#15151e] w-full min-h-full rounded-2xl shadow-2xl p-6 md:p-10 font-sans">
      
      {/* แบ่ง Layout Grid (1 : 1 : 2) ตามภาพตัวอย่าง */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Previous */}
        <div className="flex flex-col">
          <h2 className="text-white text-2xl font-black mb-4 tracking-wide">Previous</h2>
          <RaceCard data={scheduleData.previous} isPrevious={true} />
        </div>

        {/* Next */}
        <div className="flex flex-col">
          <h2 className="text-white text-2xl font-black mb-4 tracking-wide">Next</h2>
          <RaceCard data={scheduleData.next} isPrevious={false} />
        </div>

        {/* Upcoming (กินพื้นที่ 2 คอลัมน์) */}
        <div className="lg:col-span-2 flex flex-col">
          <h2 className="text-white text-2xl font-black mb-4 tracking-wide">Upcoming</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {scheduleData.upcoming.map(race => (
              <RaceCard key={race.id} data={race} isPrevious={false} />
            ))}
          </div>
        </div>

      </div>

     

    </div>
  );
}