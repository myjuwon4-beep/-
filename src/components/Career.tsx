/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Calendar, CheckCircle } from "lucide-react";
import { initialCareerItems } from "../data";
import { CareerItem } from "../types";

interface CareerProps {
  careerItems?: CareerItem[];
}

export default function Career({ careerItems = [] }: CareerProps) {
  const displayItems = careerItems.length > 0 ? careerItems : initialCareerItems;

  return (
    <section id="career" className="py-24 bg-cinema-gray relative border-b border-slate-200">
      {/* Decorative linear line in back */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-black/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:flex-row md:items-end justify-between">
          <div>
            <span className="text-sm tracking-[0.4em] text-primary-red font-bold block mb-2 font-display">
              03 / 경력 및 상세 성과
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white">
              경력 소개 <span className="font-light italic text-slate-400">타임라인</span>
            </h2>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-200 ml-4 md:ml-12 pl-6 md:pl-12 space-y-16 py-4">
          
          {displayItems.map((item, idx) => (
            <div key={item.id} className="relative group" id={`career-node-${idx}`}>
              
              {/* Glowing Indicator Dot on Timeline */}
              <span className="absolute left-[-31px] md:left-[-55px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-primary-red transition-all duration-300 group-hover:scale-125 group-hover:bg-primary-red">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-red group-hover:bg-white" />
              </span>

              {/* Node Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Years & Basic Details */}
                <div className="lg:col-span-4">
                  <div className="flex items-center space-x-2 text-primary-red mb-2">
                    <Calendar size={13} />
                    <span className="font-display font-black text-sm tracking-wider">{item.period}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-855 tracking-tight leading-tight group-hover:text-primary-red transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 mt-2 font-mono font-bold tracking-wider whitespace-pre-line">{item.role}</p>
                </div>

                {/* Operations & Success Criteria */}
                <div className="lg:col-span-8 bg-cinema-card hover:bg-slate-50/80 p-6 rounded-lg border border-slate-200/80 shadow-md shadow-slate-100 transition-all duration-300">
                  <h4 className="text-xs tracking-[0.2em] font-black text-slate-500 mb-4 font-display uppercase">주요 담당 업무 & 상세 성과</h4>
                  
                  <ul className="space-y-3.5">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-[15px] md:text-base text-slate-750 leading-relaxed font-bold flex items-start">
                        <CheckCircle size={14} className="text-primary-red mr-2.5 mt-1 shrink-0" />
                        <span className="whitespace-pre-line">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Achievements Metric Block if it exists */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="space-y-4">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
                              <span className="text-base font-black text-slate-800">{ach.platform}</span>
                            </div>
                            <ul className="space-y-2 pl-4 list-disc text-slate-600 font-bold">
                              {ach.metrics.map((met, mIdx) => (
                                <li key={mIdx} className="text-sm md:text-base leading-relaxed">
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
