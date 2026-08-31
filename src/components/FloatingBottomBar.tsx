/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Printer, Mail } from "lucide-react";

interface FloatingBottomBarProps {
  isVisible: boolean;
  onPdfClick: () => void;
  profileEmail: string;
}

export default function FloatingBottomBar({ isVisible, onPdfClick, profileEmail }: FloatingBottomBarProps) {
  if (!isVisible) return null;

  return (
    <aside
      aria-label="빠른 문의 및 저장"
      id="floating-bottom-bar"
      className="fixed bottom-0 left-0 right-0 z-40 h-14 bg-[#16161A]/95 backdrop-blur-md border-t border-white/[0.1] shadow-2xl transition-all duration-300 no-print"
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 md:px-12 flex items-center justify-between gap-3">
        
        {/* Left identity info */}
        <div className="flex items-center space-x-2.5 truncate">
          <span className="w-2 h-2 rounded-full bg-primary-red shrink-0" />
          <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
            이주원 <span className="text-[#8A8A93] font-normal mx-1">|</span> 브랜드 콘텐츠 PD
          </span>
        </div>

        {/* Right CTA action buttons */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            id="floating-pdf-btn"
            onClick={onPdfClick}
            className="h-9 px-3 sm:px-4 bg-[#1A1A1F] hover:bg-[#222228] border border-white/[0.1] hover:border-white/[0.2] text-white text-xs sm:text-sm font-headline font-bold tracking-wider rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer"
          >
            <Printer size={14} className="text-primary-red" />
            <span>PDF 저장</span>
          </button>

          <a
            id="floating-email-btn"
            href={`mailto:${profileEmail || "seoulpotato@naver.com"}`}
            className="h-9 px-3.5 sm:px-4 bg-primary-red hover:bg-[#ff333f] text-white text-xs sm:text-sm font-headline font-bold tracking-wider rounded-lg transition-all flex items-center space-x-1.5 shadow-md shadow-primary-red/20 cursor-pointer"
          >
            <Mail size={14} />
            <span>이메일 문의</span>
          </a>
        </div>

      </div>
    </aside>
  );
}
