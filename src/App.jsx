
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Schedule from './pages/Schedule';
import Drivers from './pages/Drivers';
import Circuits from './pages/Circuits';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        <Navbar />
        <main className="container mx-auto p-6">
          <Routes>
            {/* นี่คือหน้าเริ่มต้น (เข้า / แล้วเจอเลย) */}
            <Route path="/" element={<Schedule />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/circuits" element={<Circuits />} />
            
            {/* 2. เพิ่มบรรทัดนี้: ถ้าพิมพ์ URL อื่นๆ ที่ไม่มีในระบบ (เครื่องหมาย *) ให้เด้งไปที่หน้า / (Schedule) อัตโนมัติ */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;