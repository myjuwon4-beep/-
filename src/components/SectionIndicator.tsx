/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";

interface SectionIndicatorProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const SECTIONS = [
  { id: "hero", label: "01 홈 / 인트로" },
  { id: "about", label: "02 프로필 소개" },
  { id: "portfolio", label: "03 대표 포트폴리오" },
  { id: "career", label: "04 경력 및 상세 성과" },
  { id: "skills", label: "05 핵심 역량 & 툴" },
  { id: "vision", label: "06 입사 포부 & 비전" }
];

export default function SectionIndicator({ activeSection, onNavigate }: SectionIndicatorProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <nav
      aria-label="Section Indicator"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end space-y-3.5 no-print select-none"
      id="desktop-section-indicator"
    >
      {SECTIONS.map((sec, idx) => {
        const isActive = activeSection === sec.id;
        const isHovered = hoveredId === sec.id;

        return (
          <div
            key={sec.id}
            className="relative flex items-center justify-end group cursor-pointer"
            onMouseEnter={() => setHoveredId(sec.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => onNavigate(sec.id)}
          >
            {/* Tooltip on hover */}
            <div
              className={`absolute right-7 px-3 py-1 bg-[#1A1A1F] border border-white/[0.12] rounded-lg text-xs font-headline font-bold tracking-wider text-white shadow-xl whitespace-nowrap transition-all duration-200 pointer-events-none ${
                isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
              }`}
            >
              {sec.label}
            </div>

            {/* Dot indicator */}
            <button
              aria-label={`이동: ${sec.label}`}
              className={`relative flex items-center justify-center transition-all duration-300 focus:outline-none ${
                isActive ? "w-6 h-6" : "w-4 h-4"
              }`}
            >
              {/* Outer ring for active */}
              {isActive && (
                <span className="absolute inset-0 rounded-full border border-primary-red/60 animate-ping opacity-50" />
              )}
              
              {/* Center Dot */}
              <span
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2.5 h-2.5 bg-primary-red shadow-sm shadow-primary-red"
                    : isHovered
                    ? "w-2 h-2 bg-white"
                    : "w-1.5 h-1.5 bg-white/30"
                }`}
              />
            </button>
          </div>
        );
      })}
    </nav>
  );
}
