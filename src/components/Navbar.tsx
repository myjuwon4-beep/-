/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Lock, Eye, LogOut, Menu, X, ShieldCheck } from "lucide-react";
import { SiteTexts } from "../types";

interface NavbarProps {
  isAdmin: boolean;
  onAdminToggle: () => void;
  onLogout: () => void;
  siteTexts?: SiteTexts;
}

export default function Navbar({ isAdmin, onAdminToggle, onLogout, siteTexts }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active link calculation based on element viewports
      const sections = ["home", "about", "portfolio", "career", "skills", "vision"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const menuItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "portfolio", label: "PORTFOLIO" },
    { id: "career", label: "CAREER" },
    { id: "skills", label: "SKILLS" },
    { id: "vision", label: "VISION" }
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div 
          onClick={() => scrollToSection("home")} 
          className="flex flex-col cursor-pointer group"
          id="nav-logo"
        >
          <span className="font-display text-lg md:text-xl font-bold tracking-[0.25em] text-white group-hover:text-primary-red transition-colors duration-200">
            JU WON LEE
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm tracking-[0.2em] font-medium transition-all duration-200 cursor-pointer relative py-1 ${
                    activeSection === item.id
                      ? "text-primary-red font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-primary-red" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-white/20" />

          {/* Admin Control Trigger */}
          <div className="flex items-center space-x-3">
            {isAdmin ? (
              <div className="flex items-center space-x-2">
                <span className="flex items-center space-x-1.5 px-3 py-1 bg-primary-red/15 border border-primary-red/40 rounded text-xs tracking-widest text-primary-red font-medium animate-pulse">
                  <ShieldCheck size={13} />
                  <span>ADMIN ACTIVE</span>
                </span>
                <button
                  id="admin-logout-btn"
                  onClick={onLogout}
                  className="p-1.5 bg-neutral-900 border border-white/10 hover:border-primary-red text-white/75 hover:text-primary-red rounded transition-all duration-200"
                  title="관리자 로그아웃"
                >
                  <LogOut size={15} />
                </button>
              </div>
            ) : (
              <button
                id="admin-login-trigger"
                onClick={onAdminToggle}
                className="flex items-center space-x-1.5 px-3 py-1.5 border border-white/25 hover:border-primary-red/80 hover:bg-primary-red/10 text-xs tracking-widest text-white/80 hover:text-white rounded transition-all duration-200 cursor-pointer"
              >
                <Lock size={12} className="text-white/70" />
                <span>ADMIN PANEL</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center space-x-4">
          {isAdmin && (
            <span className="px-2 py-0.5 bg-primary-red/20 border border-primary-red/40 rounded text-xs tracking-widest text-primary-red font-bold">
              ADMIN
            </span>
          )}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white/80 hover:text-white p-1"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-black/98 z-40 flex flex-col justify-between p-8 border-t border-white/10 animate-fade-in">
          <ul className="flex flex-col space-y-6 pt-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  id={`nav-mobile-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base tracking-[0.2em] font-medium block w-full text-left py-2 ${
                    activeSection === item.id ? "text-primary-red" : "text-white/80"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t border-white/10 pt-6 pb-12 flex flex-col space-y-4">
            {isAdmin ? (
              <div className="flex items-center justify-between p-3 bg-primary-red/10 border border-primary-red/20 rounded">
                <span className="text-xs tracking-wider text-primary-red flex items-center space-x-1.5">
                  <ShieldCheck size={14} />
                  <span>관리자 모드 활성화됨</span>
                </span>
                <button
                  id="mobile-logout-btn"
                  onClick={() => {
                    onLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-3 py-1 bg-neutral-900 border border-white/10 text-xs tracking-wide text-white/85 hover:text-primary-red rounded"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <button
                id="mobile-admin-login"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onAdminToggle();
                }}
                className="flex items-center justify-center space-x-2 w-full py-3 bg-neutral-900 hover:bg-neutral-800 border border-white/15 hover:border-primary-red rounded text-xs tracking-widest text-white/80"
              >
                <Lock size={12} />
                <span>ADMIN PANEL (포트폴리오 관리)</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
