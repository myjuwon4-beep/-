/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { initialCareerItems } from "../data";
import { CareerItem } from "../types";

interface CareerProps {
  careerItems?: CareerItem[];
}

export default function Career({ careerItems = [] }: CareerProps) {
  const displayItems = careerItems.length > 0 ? careerItems : initialCareerItems;

  return (
    <section id="career" className="py-24 md:py-28 bg-[#16161A] relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="mb-14 pb-6 border-b border-white/[0.07] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-headline text-sm text-[#8A8A93] font-bold tracking-widest uppercase block mb-2">
              03 / EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              경력 및 상세 성과
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#8A8A93] font-medium max-w-md">
            14년간 축적된 실무 제작 경력과 채널 성장 지표 기록
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/[0.1] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12 py-2">
          
          {displayItems.map((item, idx) => (
            <div key={item.id} className="relative" id={`career-node-${idx}`}>
              
              {/* Indicator Dot on Timeline */}
              <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary-red ring-4 ring-[#16161A]" />

              {/* Node Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Years & Basic Details */}
                <div className="lg:col-span-4">
                  <div className="mb-1">
                    <span className="font-headline font-bold text-xs sm:text-sm text-primary-red tracking-wider uppercase">{item.period}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-sm sm:text-[15px] text-[#8A8A93] mt-1.5 font-medium whitespace-pre-line leading-[1.7]">{item.role}</p>
                </div>

                {/* Operations & Success Criteria */}
                <div className="lg:col-span-8 bg-[#1A1A1F] border border-white/[0.07] p-6 sm:p-7 rounded-xl space-y-5">
                  <div>
                    <h4 className="text-xs font-headline font-bold text-[#8A8A93] uppercase tracking-widest mb-3">주요 담당 업무</h4>
                    
                    <ul className="space-y-2.5">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx} className="text-[15px] md:text-base text-[#C9C9CF] leading-[1.7] font-normal flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-red mr-3 mt-2.5 shrink-0" />
                          <span className="whitespace-pre-line">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements Metric Block if it exists */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="pt-4 border-t border-white/[0.07]">
                      <h4 className="text-xs font-headline font-bold text-[#8A8A93] uppercase tracking-widest mb-3">상세 성과 지표</h4>
                      <div className="space-y-3">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="p-4 bg-[#16161A] border border-white/[0.05] rounded-xl">
                            <span className="text-base font-bold text-white block mb-2">{ach.platform}</span>
                            <ul className="space-y-1.5 pl-4 list-disc text-[#C9C9CF] text-sm md:text-[15px]">
                              {ach.metrics.map((met, mIdx) => (
                                <li key={mIdx} className="leading-[1.7]">
                                  {met}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
