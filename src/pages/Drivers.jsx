import { useState } from "react";

export default function Drivers() {
  // ใช้ useState เพื่อจัดการหน้าต่างที่กำลังเปิดอยู่ ('drivers' หรือ 'teams')
  const [activeTab, setActiveTab] = useState("drivers");

  // ข้อมูลนักแข่ง F1 ฤดูกาล 2026 (เรียงตามตัวอักษร)
  const drivers = [
    {
      id: "albon",
      firstName: "Alexander",
      lastName: "ALBON",
      imgUrl: "/my-website/albon.png",
    },
    {
      id: "alonso",
      firstName: "Fernando",
      lastName: "ALONSO",
      imgUrl: "/my-website/alonso.png",
    },
    {
      id: "antonelli",
      firstName: "Kimi",
      lastName: "ANTONELLI",
      imgUrl: "/my-website/kimi.png",
    },
    {
      id: "bearman",
      firstName: "Oliver",
      lastName: "BEARMAN",
      imgUrl: "/my-website/Bearman.png",
    },
    {
      id: "bortoleto",
      firstName: "Gabriel",
      lastName: "BORTOLETO",
      imgUrl: "/my-website/Bortoleto.png",
    },
    {
      id: "bottas",
      firstName: "Valtteri",
      lastName: "BOTTAS",
      imgUrl: "/my-website/bottas.png",
    },
    {
      id: "colapinto",
      firstName: "Franco",
      lastName: "COLAPINTO",
      imgUrl: "/my-website/Colapinto.png",
    },
    {
      id: "gasly",
      firstName: "Pierre",
      lastName: "GASLY",
      imgUrl: "/my-website/gasly.png",
    },
    {
      id: "hadjar",
      firstName: "Isack",
      lastName: "HADJAR",
      imgUrl: "/my-website/hadjar.png",
    },
    {
      id: "hamilton",
      firstName: "Lewis",
      lastName: "HAMILTON",
      imgUrl: "/my-website/Lewis.png",
    },
    {
      id: "hulkenberg",
      firstName: "Nico",
      lastName: "HULKENBERG",
      imgUrl: "/my-website/Nico.png",
    },
    {
      id: "lawson",
      firstName: "Liam",
      lastName: "LAWSON",
      imgUrl: "/my-website/Lawson.png",
    },
    {
      id: "leclerc",
      firstName: "Charles",
      lastName: "LECLERC",
      imgUrl: "/my-website/leclerc.png",
    },
    {
      id: "lindblad",
      firstName: "Arvid",
      lastName: "LINDBLAD",
      imgUrl: "/my-website/Arvid.png",
    },
    {
      id: "norris",
      firstName: "Lando",
      lastName: "NORRIS",
      imgUrl: "/my-website/Lando.png",
    },
    {
      id: "ocon",
      firstName: "Esteban",
      lastName: "OCON",
      imgUrl: "/my-website/Ocon.png",
    },
    {
      id: "perez",
      firstName: "Sergio",
      lastName: "PEREZ",
      imgUrl: "/my-website/Perez.png",
    },
    {
      id: "piastri",
      firstName: "Oscar",
      lastName: "PIASTRI",
      imgUrl: "/my-website/Piastri.png",
    },
    {
      id: "russell",
      firstName: "George",
      lastName: "RUSSELL",
      imgUrl: "/my-website/Russell.png",
    },
    {
      id: "sainz",
      firstName: "Carlos",
      lastName: "SAINZ",
      imgUrl: "/my-website/Sainz.png",
    },
    {
      id: "stroll",
      firstName: "Lance",
      lastName: "STROLL",
      imgUrl: "/my-website/Stroll.png",
    },
    {
      id: "verstappen",
      firstName: "Max",
      lastName: "VERSTAPPEN",
      imgUrl: "/my-website/Max.png",
    },
  ];

  // ข้อมูลทีม F1 ฤดูกาล 2026 (11 ทีม) พร้อมสีประจำทีม
  const teams = [
    { id: "alpine", name: "Alpine", color: "#ff87bc", imgUrl: "/my-website/Alpine.png" },
    { id: "aston", name: "Aston Martin", color: "#229971" ,imgUrl: "/my-website/Aston.png"},
    { id: "audi", name: "Audi", color: "#f00000" ,imgUrl: "/my-website/Audi.png" },
    { id: "cadillac", name: "Cadillac", color: "#bfa15f", imgUrl: "/my-website/Cadilac.png" },
    { id: "ferrari", name: "Ferrari", color: "#e8002d" ,imgUrl: "/my-website/Ferrari.png"},
    { id: "haas", name: "Haas F1 Team", color: "#ffffff" ,imgUrl: "/my-website/Hass.png" },
    { id: "mclaren", name: "McLaren", color: "#ff8000", imgUrl: "/my-website/McLaren.png" },
    { id: "mercedes", name: "Mercedes", color: "#27f4d2", imgUrl: "/my-website/Mercedes.png" },
    { id: "racingbulls", name: "Racing Bulls", color: "#6692ff" ,imgUrl: "/my-website/Racing Bulls.png"},
    { id: "redbull", name: "Red Bull Racing", color: "#3671c6" ,imgUrl: "/my-website/Red Bull.png"},
    { id: "williams", name: "Williams", color: "#00aae4" ,imgUrl: "/my-website/Williams.png"},
  ];

  return (
    <div className="bg-[#15151e] min-h-[80vh] w-full rounded-2xl shadow-2xl p-6 md:p-10 font-sans">
      {/* ส่วน Navbar ย่อยสำหรับสลับแท็บ */}
      <div className="flex space-x-8 border-b border-gray-700 mb-8">
        <button
          onClick={() => setActiveTab("drivers")}
          className={`pb-4 text-lg font-bold uppercase tracking-wider transition-colors ${
            activeTab === "drivers"
              ? "text-white border-b-4 border-red-600"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          Drivers
        </button>
        <button
          onClick={() => setActiveTab("teams")}
          className={`pb-4 text-lg font-bold uppercase tracking-wider transition-colors ${
            activeTab === "teams"
              ? "text-white border-b-4 border-red-600"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          Teams
        </button>
      </div>

      {/* เนื้อหาหน้า Drivers */}
      {activeTab === "drivers" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="flex items-center space-x-4 p-2 hover:bg-[#1e1e27] rounded-lg cursor-pointer transition-colors group"
            >
              {/* รูปโปรไฟล์จำลอง (เปลี่ยนเป็นรูปนักแข่งจริงทีหลังได้) */}
              {/* รูปโปรไฟล์นักแข่ง */}
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-700 group-hover:border-gray-400">
                {/* เช็คว่ามีรูปไหม ถ้ามีให้โชว์รูป ถ้าไม่มีให้โชว์ SVG ตัวเดิมเป็นรูปตั้งต้น */}
                {driver.imgUrl ? (
                  <img
                    src={driver.imgUrl}
                    alt={`${driver.firstName} ${driver.lastName}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm font-medium">
                  {driver.firstName}
                </span>
                <span className="text-white text-lg font-black tracking-wide uppercase">
                  {driver.lastName}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* เนื้อหาหน้า Teams */}
      {activeTab === "teams" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-[#1e1e27] rounded-xl p-5 flex flex-col justify-between relative overflow-hidden group cursor-pointer border border-gray-800 hover:border-gray-500 transition-all duration-300 h-40"
            >
              {/* ชื่อทีมและสีประจำทีม */}
              <div className="flex items-center space-x-3 z-10">
                <div
                  className="w-4 h-4 rounded-full shadow-sm"
                  style={{ backgroundColor: team.color }}
                ></div>
                <span className="text-white font-bold tracking-wide text-lg">
                  {team.name}
                </span>
              </div>

              {/* รูปรถจำลอง (คุณสามารถเปลี่ยน src เป็นรูปรถ F1 ของแต่ละทีมได้) */}
              {/* รูปรถของแต่ละทีม */}
              <div className="mt-4 z-10 flex justify-end">
                {/* ใช้เงื่อนไขเช็คว่าถัามีรูปให้แสดงรูปรถ ถ้าไม่มีให้ใช้รูปจำลองไปก่อน */}
                <img
                  src={
                    team.imgUrl
                      ? team.imgUrl
                      : "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?q=80&w=400&auto=format&fit=crop"
                  }
                  alt={`${team.name} car`}
                  className="w-3/4 object-contain h-16 group-hover:scale-110 transition-transform duration-500 rounded"
                />
              </div>

              {/* เอฟเฟกต์แสงสว่าง (Glow) ด้านหลังการ์ด */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 opacity-20 blur-3xl rounded-full transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: team.color }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
