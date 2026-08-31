/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { initialCareerItems } from "../data";
import { CareerItem } from "../types";
import { CareerMetricLine } from "./AnimatedMetric";
import CareerProofGallery from "./CareerProofGallery";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CareerProps {
  careerItems?: CareerItem[];
}

export default function Career({ careerItems = [] }: CareerProps) {
  const displayItems = careerItems.length > 0 ? careerItems : initialCareerItems;

  // Track expanded items. K-trailer (career-1) is expanded by default.
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "career-1": true
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="career" className="py-24 md:py-28 bg-[#1A1A21] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="mb-14 pb-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-headline text-[13px] sm:text-sm text-[#8A8A93] font-bold tracking-widest uppercase block mb-2">
              03 / EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              경력 및 상세 성과
            </h2>
          </div>
          <p className="text-[13px] sm:text-base text-[#8A8A93] font-medium max-w-md">
            14년간 축적된 실무 제작 경력과 채널 성장 지표 기록
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/[0.12] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10 py-2">
          
          {displayItems.map((item, idx) => {
            const isKTrailer = item.id === "career-1" || item.title.includes("K트레일러");
            const isExpanded = isKTrailer || !!expandedIds[item.id];

            // Summary text for collapsed state
            const summaryText = item.description && item.description.length > 0 
              ? item.description[0].split("\n")[0]
              : "";

            return (
              <div key={item.id} className="relative" id={`career-node-${idx}`}>
                
                {/* Indicator Dot on Timeline */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white/80 ring-4 ring-[#1A1A21]" />

                {/* Node Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
                  
                  {/* Years & Basic Details */}
                  <div className="lg:col-span-4">
                    <div className="mb-1">
                      <span className="font-headline font-bold text-[13px] sm:text-sm text-[#C9C9CF] tracking-wider uppercase">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[13px] sm:text-[15px] text-[#8A8A93] mt-1.5 font-medium whitespace-pre-line leading-[1.7]">
                      {item.role}
                    </p>
                  </div>

                  {/* Operations & Success Criteria (Accordion card for secondary careers, full card for K-Trailer) */}
                  <div className="lg:col-span-8 bg-[#202028] border border-white/[0.12] border-t-white/[0.16] rounded-xl overflow-hidden transition-all duration-200">
                    
                    {/* If item is NOT K-Trailer, provide an accordion header toggle */}
                    {!isKTrailer ? (
                      <div className="p-5 sm:p-6">
                        {/* Header & Toggle Button */}
                        <button
                          type="button"
                          onClick={() => toggleExpand(item.id)}
                          className="w-full flex items-center justify-between text-left group cursor-pointer"
                          aria-expanded={isExpanded}
                        >
                          <div className="pr-4 flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[13px] font-bold text-white group-hover:text-primary-red transition-colors">
                                {isExpanded ? "주요 담당 업무 접기" : "주요 담당 업무 보기"}
                              </span>
                              <span className="text-[13px] text-[#8A8A93]">
                                ({item.description.length}개 항목)
                              </span>
                            </div>
                            {!isExpanded && (
                              <p className="text-[13px] sm:text-sm text-[#8A8A93] truncate max-w-xl font-normal">
                                요약: {summaryText}
                              </p>
                            )}
                          </div>
                          
                          <div className="p-2 rounded-lg bg-[#1A1A21] border border-white/[0.08] text-[#C9C9CF] group-hover:text-white group-hover:bg-[#2A2A34] transition-colors shrink-0">
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </div>
                        </button>

                        {/* Collapsible Details Body */}
                        {isExpanded && (
                          <div className="mt-5 pt-5 border-t border-white/[0.08] space-y-5 animate-fade-in">
                            <div>
                              <h4 className="text-[13px] font-bold text-[#8A8A93] mb-3">주요 담당 업무 상세</h4>
                              <ul className="space-y-2.5">
                                {item.description.map((desc, dIdx) => (
                                  <li key={dIdx} className="text-[14px] sm:text-[15px] md:text-base text-[#C9C9CF] leading-[1.7] font-normal flex items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 mr-3 mt-2.5 shrink-0" />
                                    <span className="whitespace-pre-line">{desc}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* K-Trailer (Default Expanded Main Career) */
                      <div className="p-6 sm:p-7 space-y-5">
                        <div>
                          <h4 className="text-[13px] font-bold text-[#8A8A93] mb-3">주요 담당 업무</h4>
                          
                          <ul className="space-y-2.5">
                            {item.description.map((desc, dIdx) => (
                              <li key={dIdx} className="text-[14px] sm:text-[15px] md:text-base text-[#C9C9CF] leading-[1.7] font-normal flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mr-3 mt-2.5 shrink-0" />
                                <span className="whitespace-pre-line">{desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements Metric Block */}
                        {item.achievements && item.achievements.length > 0 && (
                          <div className="pt-4 border-t border-white/[0.08]">
                            <h4 className="text-[13px] font-bold text-[#8A8A93] mb-3">상세 성과 지표</h4>
                            <div className="space-y-3">
                              {item.achievements.map((ach, aIdx) => (
                                <div key={aIdx} className="p-4 bg-[#1A1A21] border border-white/[0.08] rounded-xl">
                                  <span className="text-[15px] sm:text-base font-bold text-white block mb-2">{ach.platform}</span>
                                  <ul className="space-y-2 pl-4 list-disc text-[#C9C9CF] text-[13px] sm:text-sm md:text-[15px]">
                                    {ach.metrics.map((met, mIdx) => (
                                      <li key={mIdx} className="leading-[1.7]">
                                        <CareerMetricLine metric={met} />
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Proof Images Gallery */}
                        {item.proofImages && item.proofImages.length > 0 && (
                          <CareerProofGallery proofImages={item.proofImages} />
                        )}
                      </div>
                    )}

                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
