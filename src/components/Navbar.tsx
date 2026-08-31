/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, Printer } from "lucide-react";
import { SiteTexts } from "../types";

interface NavbarProps {
  isAdmin: boolean;
  onAdminToggle: () => void;
  onLogout: () => void;
  onPdfClick: () => void;
  siteTexts?: SiteTexts;
}

export default function Navbar({ onPdfClick }: NavbarProps) {
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
          ? "bg-[#0E0E10]/90 backdrop-blur-md border-b border-white/[0.07] py-3.5"
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
          <span className="font-headline text-xl md:text-2xl font-black tracking-wider text-white group-hover:text-white transition-colors whitespace-nowrap">
            JU WON LEE
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-[#8A8A93] pl-1 font-medium tracking-wider">
            / PD &amp; MARKETER
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
                  className={`text-sm md:text-[15px] font-semibold transition-colors duration-150 cursor-pointer relative py-1 ${
                    activeSection === item.id
                      ? "text-white font-bold"
                      : "text-[#C9C9CF] hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-white/[0.12]" />

          {/* PDF Downloader */}
          <button
            id="nav-pdf-btn"
            onClick={onPdfClick}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#1A1A1F] hover:bg-[#222228] border border-white/[0.08] hover:border-white/[0.2] text-[#C9C9CF] hover:text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            title="PDF 다운로드 / 인쇄하기"
          >
            <Printer size={14} />
            <span>PDF 저장</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center space-x-4">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#C9C9CF] hover:text-white p-1.5 rounded-lg hover:bg-white/[0.06] transition-colors"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#0E0E10] z-40 flex flex-col justify-between p-8 border-t border-white/[0.07] text-[#C9C9CF] shadow-2xl">
          <ul className="flex flex-col space-y-5 pt-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  id={`nav-mobile-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg font-bold block w-full text-left py-2 border-b border-white/[0.06] ${
                    activeSection === item.id ? "text-white font-bold" : "text-[#C9C9CF] hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile PDF Button */}
          <div className="pt-6 pb-10 flex flex-col space-y-4">
            <button
              id="mobile-pdf-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onPdfClick();
              }}
              className="flex items-center justify-center space-x-2 w-full min-h-[44px] py-3 bg-[#1A1A1F] hover:bg-[#222228] border border-white/[0.1] text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer"
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
