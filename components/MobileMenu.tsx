"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavItem } from "./NavItem";

interface MobileMenuProps {
  navigation: Array<{
    name: string;
    href: string;
    iconName: string;
  }>;
}

export function MobileMenu({ navigation }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when user clicks outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest(".mobile-menu-container") &&
        !target.closest(".hamburger-button")
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger-button flex items-center justify-center w-8 h-8 rounded-full bg-white/90 shadow-sm transition-all duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-4 h-4 text-gray-600" />
        ) : (
          <Menu className="w-4 h-4 text-gray-600" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm transition-opacity duration-300">
          <div className="mobile-menu-container absolute right-4 top-16 bg-white rounded-xl shadow-xl w-64 py-4 transform transition-transform duration-300">
            <div className="flex flex-col space-y-2 px-4">
              {navigation.map((item) => (
                <div key={item.name} onClick={() => setIsOpen(false)}>
                  <NavItem
                    key={item.name}
                    name={item.name}
                    href={item.href}
                    iconName={item.iconName}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
