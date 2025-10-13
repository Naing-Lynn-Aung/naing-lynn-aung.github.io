import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#2b2c2c] transition-colors duration-500">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <a href='#' className="text-white text-2xl font-bold">Naing</a>
          {/* Hamburger */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        <ul className={`${isOpen ? 'block' : 'hidden'
          } md:flex gap-6 text-[#cccccc] font-medium mt-4 md:mt-0`}
        >
          {['home', 'about', 'services', 'projects', 'experiences', 'contact'].map((id) => (
            <li key={id} className={`${isOpen ? 'py-3' : ''}`}>
              <a href={`#${id}`} className="nav-link relative mx-2 capitalize text-[#cccccc] transition-colors duration-500
            before:absolute before:bottom-[-6px] before:left-0 before:h-[2px] before:w-0 before:bg-yellow-400
            before:transition-all before:duration-500 hover:text-yellow-400 hover:before:w-[75%]">
                {id}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;