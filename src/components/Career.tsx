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
    <section id="career" className="py-24 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary-red" />
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              CAREER
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            경력 및 상세 성과
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-200 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12 py-2">
          
          {displayItems.map((item, idx) => (
            <div key={item.id} className="relative" id={`career-node-${idx}`}>
              
              {/* Indicator Dot on Timeline */}
              <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white border-2 border-slate-900" />

              {/* Node Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Years & Basic Details */}
                <div className="lg:col-span-4">
                  <div className="flex items-center space-x-1.5 text-primary-red mb-1.5">
                    <Calendar size={13} />
                    <span className="font-semibold text-xs sm:text-sm">{item.period}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium whitespace-pre-line leading-relaxed">{item.role}</p>
                </div>

                {/* Operations & Success Criteria */}
                <div className="lg:col-span-8 bg-[#F8F9FA] p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-2xs space-y-5">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">주요 담당 업무</h4>
                    
                    <ul className="space-y-2.5">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal flex items-start">
                          <CheckCircle size={14} className="text-primary-red mr-2.5 mt-0.5 shrink-0" />
                          <span className="whitespace-pre-line">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements Metric Block if it exists */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">상세 성과 지표</h4>
                      <div className="space-y-3">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="p-4 bg-white border border-slate-200 rounded-xl shadow-3xs">
                            <span className="text-sm font-bold text-slate-900 block mb-2">{ach.platform}</span>
                            <ul className="space-y-1.5 pl-4 list-disc text-slate-600 text-xs sm:text-sm">
                              {ach.metrics.map((met, mIdx) => (
                                <li key={mIdx} className="leading-relaxed">
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
