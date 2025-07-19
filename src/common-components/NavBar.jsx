import { useState, useRef, useEffect } from "react";
import NavItems from "../db/NavItems";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isOpen]);

  return (
    <header className="bg-white w-full border-b shadow-sm z-50">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src="/logo.svg" alt="logo"  />

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 text-gray-600 font-medium">
          {NavItems.map((item, i) => (
            <a
              key={i}
              
             
            >
              {item.label}
            </a>
          ))}
        </nav>

<div className="flex items-center gap-10">
            {/* Desktop User Info */}
        <div className="hidden md:flex items-center gap-4">
          <img src="/notification.svg" alt="notification"  />
          <img src="/avatar.svg" alt="avatar" className="w-9 h-9 rounded-full bg-yellow-300 p-[2px]" />
          <div className="text-sm text-gray-700">
            <p className="font-bold">Usman Zafar</p>
            <p className="text-gray-500">usmanzafar@gmail.com</p>
          </div>
        </div>
      <div className="xl:hidden">
  <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  </button>
</div>
</div>
      </div>


      {/* Mobile Menu */}
      <div
        ref={menuRef}
        style={{ height: isOpen ? `${menuHeight}px` : 0 }}
        className="overflow-hidden transition-all duration-300 ease-in-out xl:hidden bg-gray-100"
      >
        <nav className="px-6 py-4 flex flex-col gap-4 text-base font-medium">
          {NavItems.map((item, i) => (
            <a
              key={i}
              href={item.href || "#"}
              className="text-gray-700 hover:text-black transition"
            >
              {item.label}
            </a>
          ))}

          {/* Mobile User Info */}
          <div className="pt-4 border-t mt-4 flex items-center gap-3">
            <img
              src="/avatar.svg"
              alt="avatar"
              className="w-9 h-9 rounded-full bg-yellow-300 p-[2px]"
            />
            <div className="flex flex-col text-sm leading-tight">
              <span className="font-bold text-gray-800">Usman Zafar</span>
              <span className="text-gray-500">usmanzafar@gmail.com</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
