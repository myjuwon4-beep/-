/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, Calendar, ExternalLink, HelpCircle, TrendingUp, CheckCircle, Flame, Youtube, Instagram } from "lucide-react";
import { initialCareerItems } from "../data";
import { CareerItem } from "../types";

interface CareerProps {
  careerItems?: CareerItem[];
}

export default function Career({ careerItems = [] }: CareerProps) {
  const displayItems = careerItems.length > 0 ? careerItems : initialCareerItems;

  const stats = [
    {
      label: "유튜브 구독자 성장",
      metric: "7200명",
      subDetail: "1년 만에 2천대에서 7.2천 돌파",
      tag: "360% 성장",
      glow: "shadow-primary-red/25 border-primary-red/30 text-primary-red"
    },
    {
      label: "최고 콘텐츠 조회수",
      metric: "91만뷰",
      subDetail: "인스타 릴스 91만 / 유튜브 42만",
      tag: "트래픽 극대화",
      glow: "shadow-accent-orange/25 border-accent-orange/30 text-accent-orange"
    },
    {
      label: "비즈니스 지표 가치",
      metric: "+48%",
      subDetail: "실제 견인장치 시공 오더 문의율 상승",
      tag: "매출 직행성",
      glow: "shadow-white/15 border-white/20 text-white"
    }
  ];

  return (
    <section id="career" className="py-24 bg-cinema-gray relative border-bottom border-white/5">
      {/* Decorative linear line in back */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs tracking-[0.4em] text-primary-red font-bold block mb-2 font-display">
              02 / EXPERIENCE & PERFORMANCE
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white">
              CAREER <span className="font-light italic text-white/70">TIMELINE</span>
            </h2>
          </div>
          <div className="h-[2px] bg-white/10 flex-grow mx-8 hidden md:block mb-3" />
          <p className="text-white/40 text-sm font-mono mt-4 md:mt-0 tracking-widest">
            PROVEN PERFORMANCE METRIC
          </p>
        </div>

        {/* Dynamic High-Contrast Metric Boards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className={`p-6 bg-cinema-card border rounded transition-all duration-300 hover:scale-[1.02] shadow-sm flex flex-col justify-between ${s.glow}`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs uppercase font-mono tracking-widest text-white/50">{s.label}</span>
                  <span className="text-xs px-2.5 py-0.5 bg-white/5 rounded-full border border-white/10 font-bold tracking-wide">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-2">
                  {s.metric}
                </h3>
              </div>
              <p className="text-sm text-white/70 tracking-wide font-light">{s.subDetail}</p>
            </div>
          ))}
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-6 md:pl-12 space-y-16 py-4">
          
          {displayItems.map((item, idx) => (
            <div key={item.id} className="relative group" id={`career-node-${idx}`}>
              
              {/* Glowing Indicator Dot on Timeline */}
              <span className="absolute left-[-31px] md:left-[-55px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-cinema-black border-2 border-primary-red transition-all duration-300 group-hover:scale-125 group-hover:bg-primary-red">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-red group-hover:bg-cinema-black" />
              </span>

              {/* Node Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Years & Basic Details */}
                <div className="lg:col-span-4">
                  <div className="flex items-center space-x-2 text-primary-red mb-2">
                    <Calendar size={13} />
                    <span className="font-display font-bold text-sm tracking-wider">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-xs text-white/50 mt-1 font-mono tracking-wider">{item.role}</p>
                </div>

                {/* Operations & Success Criteria */}
                <div className="lg:col-span-8 bg-cinema-card/50 hover:bg-cinema-card p-6 rounded-lg border border-white/5 transition-all duration-300">
                  <h4 className="text-sm text-white/50 tracking-[0.2em] uppercase font-bold mb-4 font-display">KEY RESPONSIBILITIES</h4>
                  
                  <ul className="space-y-3">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-sm md:text-base text-white/90 leading-relaxed font-light flex items-start">
                        <CheckCircle size={13} className="text-primary-red mr-2.5 mt-1 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Achievements Metric Block if it exists */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <div className="flex items-center space-x-2 mb-4">
                        <Flame size={15} className="text-primary-red" />
                        <h4 className="text-sm text-primary-red hover:text-white font-bold tracking-[0.1em]">주요 정량적 성과 (KPI)</h4>
                      </div>

                      <div className="space-y-4">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="p-4 bg-black/40 rounded border border-white/5">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
                              <span className="text-sm font-bold text-white/90">{ach.platform}</span>
                              {ach.link && (
                                <a
                                  href={ach.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex transition-all duration-300 transform hover:scale-[1.05]"
                                >
                                  {ach.link.includes("youtube.com") || ach.link.includes("youtu.be") ? (
                                    <div className="flex items-center space-x-1.5 px-3 py-1 bg-red-600/15 border border-red-500/25 rounded-md hover:bg-red-600/25 hover:border-red-500/50 text-red-500 transition-colors">
                                      <Youtube size={13} className="fill-current" />
                                      <span className="text-[10px] sm:text-xs font-sans font-bold tracking-wider">YouTube</span>
                                      <ExternalLink size={10} className="text-red-500/70" />
                                    </div>
                                  ) : ach.link.includes("instagram.com") ? (
                                    <div className="flex items-center space-x-1.5 px-3 py-1 bg-pink-600/15 border border-pink-500/25 rounded-md hover:bg-pink-600/25 hover:border-pink-500/50 text-pink-500 transition-colors">
                                      <Instagram size={13} />
                                      <span className="text-[10px] sm:text-xs font-sans font-bold tracking-wider">Instagram</span>
                                      <ExternalLink size={10} className="text-pink-500/70" />
                                    </div>
                                  ) : (
                                    <div className="flex items-center space-x-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 hover:border-white/20 text-white/75 transition-colors">
                                      <span className="text-[10px] sm:text-xs font-sans font-bold">{ach.linkName || "채널 연동 확인"}</span>
                                      <ExternalLink size={10} />
                                    </div>
                                  )}
                                </a>
                              )}
                            </div>
                            <ul className="space-y-1.5 pl-3 list-disc text-white/70">
                              {ach.metrics.map((met, mIdx) => (
                                <li key={mIdx} className="text-xs md:text-sm leading-relaxed font-light">
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
