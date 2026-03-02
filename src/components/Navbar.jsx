import { NavLink } from 'react-router-dom';

function Navbar() {
  // ใช้ Tailwind CSS จัดการ Active State
  const activeClass = "text-white font-bold border-b-4 border-white pb-1";
  const inactiveClass = "text-gray-300 hover:text-white transition-colors duration-200 pb-1 border-b-4 border-transparent";

  return (
    <nav className="bg-red-600 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-black text-white italic tracking-wider">🏎️ F1 INFO HUB By 65112686 Deachrit </h1>
        <div className="flex space-x-6 text-lg">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            Schedule
          </NavLink>
          <NavLink to="/drivers" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            Drivers & Teams
          </NavLink>
          <NavLink to="/circuits" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            Circuits
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;