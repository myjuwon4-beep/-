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
      className="fixed bottom-0 left-0 right-0 z-40 h-14 bg-[#F7F6F2]/95 backdrop-blur-md border-t border-[#E6E4DC] shadow-lg transition-all duration-300 no-print"
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 md:px-12 flex items-center justify-between gap-3">
        
        {/* Left identity info */}
        <div className="flex items-center space-x-2.5 truncate">
          <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
          <span className="text-[13px] sm:text-sm font-bold text-slate-900 tracking-tight truncate">
            이주원 <span className="text-slate-400 font-normal mx-1">|</span> 브랜드 콘텐츠 PD
          </span>
        </div>

        {/* Right CTA action buttons */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            id="floating-pdf-btn"
            onClick={onPdfClick}
            className="h-9 px-3 sm:px-4 bg-white hover:bg-[#FAF9F5] border border-[#E6E4DC] hover:border-[#D5D2C7] text-slate-700 hover:text-slate-950 text-[13px] sm:text-sm font-bold rounded-xl transition-all flex items-center space-x-1.5 cursor-pointer shadow-2xs"
          >
            <Printer size={14} className="text-slate-500" />
            <span>PDF 저장</span>
          </button>

          <a
            id="floating-email-btn"
            href={`mailto:${profileEmail || "seoulpotato@naver.com"}`}
            className="h-9 px-3.5 sm:px-4 bg-rose-600 hover:bg-rose-700 text-white text-[13px] sm:text-sm font-bold rounded-xl transition-all flex items-center space-x-1.5 shadow-sm cursor-pointer"
          >
            <Mail size={14} />
            <span>이메일 문의</span>
          </a>
        </div>

      </div>
    </aside>
  );
}
