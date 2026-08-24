/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Lock, Eye, LogOut, Menu, X, ShieldCheck, Printer } from "lucide-react";
import { SiteTexts } from "../types";

interface NavbarProps {
  isAdmin: boolean;
  onAdminToggle: () => void;
  onLogout: () => void;
  onPdfClick: () => void;
  siteTexts?: SiteTexts;
}

export default function Navbar({ isAdmin, onAdminToggle, onLogout, onPdfClick, siteTexts }: NavbarProps) {
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
    { id: "home", label: "홈" },
    { id: "about", label: "소개" },
    { id: "portfolio", label: "포트폴리오" },
    { id: "career", label: "경력" },
    { id: "skills", label: "보유 역량" },
    { id: "vision", label: "포부" }
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div 
          onClick={() => scrollToSection("home")} 
          className="flex items-center space-x-2 cursor-pointer group"
          id="nav-logo"
        >
          <span className="w-2 h-2 rounded-full bg-primary-red" />
          <span className="font-display text-lg md:text-xl font-bold tracking-wider text-slate-900 group-hover:text-primary-red transition-colors whitespace-nowrap">
            JU WON LEE
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-400 pl-1 font-medium">
            / PORTFOLIO
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-7">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-semibold transition-colors duration-150 cursor-pointer relative py-1 ${
                    activeSection === item.id
                      ? "text-primary-red font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-red rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-slate-200" />

          {/* PDF Downloader */}
          <button
            id="nav-pdf-btn"
            onClick={onPdfClick}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-900 text-slate-700 hover:text-white text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
            title="PDF 다운로드 / 인쇄하기"
          >
            <Printer size={13} />
            <span>PDF 저장</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center space-x-4">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-800 hover:text-primary-red p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 flex flex-col justify-between p-8 border-t border-slate-200 text-slate-800 shadow-xl">
          <ul className="flex flex-col space-y-5 pt-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  id={`nav-mobile-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg font-bold block w-full text-left py-2 border-b border-slate-100 ${
                    activeSection === item.id ? "text-primary-red" : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="pt-6 pb-10 flex flex-col space-y-4">
            {/* Mobile PDF Button */}
            <button
              id="mobile-pdf-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onPdfClick();
              }}
              className="flex items-center justify-center space-x-2 w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold transition-colors"
            >
              <Printer size={15} />
              <span>PDF 다운로드 / 인쇄하기</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
