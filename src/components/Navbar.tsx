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
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md py-4"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-12 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div 
          onClick={() => scrollToSection("home")} 
          className="flex flex-col cursor-pointer group mr-4"
          id="nav-logo"
        >
          <span className="font-display text-[19px] md:text-[22px] font-extrabold tracking-[0.22em] text-slate-800 group-hover:text-primary-red transition-colors duration-200 whitespace-nowrap">
            JU WON LEE
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-2.5 xl:space-x-6 2xl:space-x-8">
          <ul className="flex items-center space-x-2.5 xl:space-x-6 2xl:space-x-8">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[13px] xl:text-[15px] tracking-[0.08em] xl:tracking-[0.18em] font-bold transition-all duration-200 cursor-pointer relative py-1 ${
                    activeSection === item.id
                      ? "text-primary-red font-extrabold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-red" />
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
            className="flex items-center space-x-1 xl:space-x-1.5 px-2.5 py-1.5 md:px-3.5 md:py-1.5 border border-primary-red/40 hover:border-primary-red bg-primary-red/5 hover:bg-primary-red/15 text-xs xl:text-sm tracking-widest text-primary-red hover:text-white rounded font-extrabold transition-all duration-200 cursor-pointer whitespace-nowrap"
            title="PDF 다운로드 / 인쇄하기"
          >
            <Printer size={13} />
            <span className="hidden xl:inline">PDF 저장</span>
          </button>

          <div className="h-4 w-[1px] bg-slate-200" />

          {/* Admin Control Trigger */}
          <div className="flex items-center space-x-2 xl:space-x-3">
            {isAdmin ? (
              <div className="flex items-center space-x-2">
                <span className="flex items-center space-x-1 px-2.5 py-1.5 bg-primary-red/10 border border-primary-red/30 rounded text-[10px] xl:text-xs tracking-widest text-primary-red font-extrabold animate-pulse whitespace-nowrap">
                  <ShieldCheck size={14} />
                  <span className="hidden xl:inline">관리자 모드 활성화</span>
                  <span className="xl:hidden">관리자 모드</span>
                </span>
                <button
                  id="admin-logout-btn"
                  onClick={onLogout}
                  className="p-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-primary-red text-slate-700 hover:text-primary-red rounded transition-all duration-200"
                  title="관리자 로그아웃"
                >
                  <LogOut size={15} />
                </button>
              </div>
            ) : (
              <button
                id="admin-login-trigger"
                onClick={onAdminToggle}
                className="flex items-center space-x-1 xl:space-x-1.5 px-2.5 py-1.5 border border-slate-200 hover:border-primary-red/80 hover:bg-primary-red/5 text-xs xl:text-[13px] tracking-widest text-slate-600 hover:text-primary-red rounded font-extrabold transition-all duration-205 cursor-pointer whitespace-nowrap"
              >
                <Lock size={13} className="text-slate-500" />
                <span className="hidden xl:inline">관리자 패널</span>
                <span className="xl:hidden">관리자</span>
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
            className="text-slate-800 hover:text-primary-red p-1"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white/98 z-40 flex flex-col justify-between p-8 border-t border-slate-200 animate-fade-in text-slate-800 shadow-2xl">
          <ul className="flex flex-col space-y-6 pt-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  id={`nav-mobile-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg tracking-[0.2em] font-extrabold block w-full text-left py-2 ${
                    activeSection === item.id ? "text-primary-red" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t border-slate-200 pt-6 pb-12 flex flex-col space-y-4">
            {/* Mobile PDF Button */}
            <button
              id="mobile-pdf-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onPdfClick();
              }}
              className="flex items-center justify-center space-x-2 w-full py-3 bg-primary-red/10 hover:bg-primary-red/20 border border-primary-red/30 hover:border-primary-red rounded text-sm tracking-widest text-primary-red font-extrabold transition-all duration-200"
            >
              <Printer size={15} />
              <span>PDF 다운로드 / 인쇄하기</span>
            </button>

            {isAdmin ? (
              <div className="flex items-center justify-between p-3 bg-primary-red/10 border border-primary-red/20 rounded">
                <span className="text-sm tracking-wider text-primary-red flex items-center space-x-1.5 font-bold">
                  <ShieldCheck size={15} />
                  <span>관리자 모드 활성화됨</span>
                </span>
                <button
                  id="mobile-logout-btn"
                  onClick={() => {
                    onLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-3 py-1.5 bg-slate-800 border border-white/15 text-sm tracking-wide text-white hover:text-primary-red rounded font-bold"
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
                className="flex items-center justify-center space-x-2 w-full py-3 bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-primary-red rounded text-sm tracking-widest text-slate-700 font-bold"
              >
                <Lock size={13} />
                <span>ADMIN PANEL (포트폴리오 관리)</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
