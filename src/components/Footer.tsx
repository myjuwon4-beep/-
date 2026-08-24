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
    <footer id="footer" className="bg-[#F8F9FA] border-t border-slate-200/80 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Core Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} 이주원 PD. All Rights Reserved.
          </p>
        </div>

        {/* Action Panel Links */}
        <div className="flex items-center space-x-3">
          {/* Print PDF Button */}
          <button
            id="footer-pdf-btn"
            onClick={onPdfClick}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700 transition-colors cursor-pointer shadow-3xs"
          >
            <Printer size={12} className="text-slate-500" />
            <span>PDF 저장 / 인쇄</span>
          </button>

          {/* Quick Admin Toggle */}
          <button
            id="footer-admin-btn"
            onClick={onAdminToggle}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer shadow-3xs ${
              isAdmin
                ? "bg-red-50 border-primary-red/40 text-primary-red"
                : "bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900"
            }`}
          >
            <Shield size={12} />
            <span>{isAdmin ? "관리자 모드 활성화" : "관리자"}</span>
          </button>

          {/* Scroll back to top */}
          <button
            id="footer-scroll-top"
            onClick={scrollToTop}
            className="p-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 rounded-lg transition-colors cursor-pointer shadow-3xs"
            title="맨 위로 이동"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
