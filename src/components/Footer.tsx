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
    <footer id="footer" className="bg-[#131318] border-t border-white/[0.08] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Core Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-[#8A8A93] font-medium">
            © {new Date().getFullYear()} 이주원 PD. All Rights Reserved.
          </p>
        </div>

        {/* Action Panel Links */}
        <div className="flex items-center space-x-3">
          {/* Print PDF Button */}
          <button
            id="footer-pdf-btn"
            onClick={onPdfClick}
            className="flex items-center min-h-[44px] space-x-2 px-4 py-2 rounded-lg text-[13px] sm:text-sm font-bold bg-[#202028] border border-white/[0.12] border-t-white/[0.16] hover:bg-[#2A2A34] text-[#C9C9CF] hover:text-white transition-colors cursor-pointer"
          >
            <Printer size={14} className="text-[#8A8A93]" />
            <span>PDF 저장 / 인쇄</span>
          </button>

          {/* Scroll back to top */}
          <button
            id="footer-scroll-top"
            onClick={scrollToTop}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 bg-[#202028] border border-white/[0.12] border-t-white/[0.16] hover:bg-[#2A2A34] text-[#C9C9CF] hover:text-white rounded-lg transition-colors cursor-pointer"
            title="맨 위로 이동"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
