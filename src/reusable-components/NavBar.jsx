import { useState, useRef, useEffect } from "react";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";
import cn from "../utilities/cn";

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
    <header className="bg-NavBg pb-2 w-full">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src="/logo.svg" alt="logo" />

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6">
          <NavLinks />
        </nav>

        {/* Notification , Profile , Hamburger */}
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-4">
            <img src="/notification.svg" alt="notification" />
            <UserProfile />
          </div>
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-NavLine w-screen h-[2px]" />

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        style={{ height: isOpen ? `${menuHeight}px` : 0 }}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out xl:hidden bg-gray-100"
        )}
      >
        <nav className="px-6 py-4 flex flex-col gap-4 text-base">
          <NavLinks />
          <div className="pt-4 border-t-NavLine border-t-2 mt-4">
            <UserProfile />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
