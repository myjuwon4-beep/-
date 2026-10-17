/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUp, Printer } from "lucide-react";

interface FooterProps {
  onAdminToggle: () => void;
  isAdmin: boolean;
  onPdfClick: () => void;
}

export default function Footer({ onPdfClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="footer" className="bg-[#EFECE6] border-t border-[#E6E4DC] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Core Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-slate-600 font-medium">
            © {new Date().getFullYear()} 이주원 PD. All Rights Reserved.
          </p>
        </div>

        {/* Action Panel Links */}
        <div className="flex items-center space-x-3">
          {/* Print PDF Button */}
          <button
            id="footer-pdf-btn"
            onClick={onPdfClick}
            className="flex items-center min-h-[44px] space-x-2 px-4 py-2 rounded-xl text-[13px] sm:text-sm font-bold bg-white border border-[#E6E4DC] hover:border-[#D5D2C7] hover:bg-[#FAF9F5] text-slate-700 hover:text-slate-950 transition-colors cursor-pointer shadow-2xs"
          >
            <Printer size={14} className="text-slate-500" />
            <span>PDF 저장 / 인쇄</span>
          </button>

          {/* Scroll back to top */}
          <button
            id="footer-scroll-top"
            onClick={scrollToTop}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 bg-white border border-[#E6E4DC] hover:border-[#D5D2C7] hover:bg-[#FAF9F5] text-slate-700 hover:text-slate-950 rounded-xl transition-colors cursor-pointer shadow-2xs"
            title="맨 위로 이동"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
