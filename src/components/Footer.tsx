/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUp, Disc, Shield, Printer } from "lucide-react";

interface FooterProps {
  onAdminToggle: () => void;
  isAdmin: boolean;
  onPdfClick: () => void;
}

export default function Footer({ onAdminToggle, isAdmin, onPdfClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="footer" className="bg-cinema-card border-t border-slate-200 py-12 shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Core Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base text-slate-800 font-extrabold tracking-wider">
            © {new Date().getFullYear()} 이주원 PD. All Rights Reserved.
          </p>
        </div>

        {/* Action Panel Links */}
        <div className="flex items-center space-x-6">
          {/* Print PDF Button */}
          <button
            id="footer-pdf-btn"
            onClick={onPdfClick}
            className="flex items-center space-x-1.5 px-3 py-2 rounded text-xs font-mono tracking-widest border bg-slate-50 hover:bg-slate-100 border-primary-red/55 hover:border-primary-red text-primary-red transition-all duration-200 cursor-pointer font-bold"
          >
            <Printer size={11} />
            <span>PDF 저장 / 인쇄</span>
          </button>

          {/* Quick Admin Toggle */}
          <button
            id="footer-admin-btn"
            onClick={onAdminToggle}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded text-xs font-mono tracking-widest border transition-all duration-200 cursor-pointer ${
              isAdmin
                ? "bg-primary-red/25 border-primary-red text-primary-red font-bold"
                : "bg-slate-50 hover:bg-slate-100 border-slate-200 hover:border-slate-350 text-slate-600 hover:text-slate-800 font-bold"
            }`}
          >
            <Shield size={11} className={isAdmin ? "animate-pulse" : ""} />
            <span>{isAdmin ? "관리자 모드 활성화" : "관리자 로그인"}</span>
          </button>

          {/* Scroll back to top */}
          <button
            id="footer-scroll-top"
            onClick={scrollToTop}
            className="p-2.5 bg-slate-50 border border-slate-200 hover:border-primary-red hover:bg-slate-100 text-slate-600 hover:text-primary-red rounded-full transition-all duration-200 cursor-pointer"
            title="맨 최고로"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
