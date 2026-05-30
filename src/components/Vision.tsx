/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Play, Phone, ArrowUpRight } from "lucide-react";

export default function Vision() {
  const phoneNumber = "010-4820-0441";
  const telUrl = "tel:010-4820-0441";

  return (
    <section id="vision" className="py-24 bg-cinema-black border-y border-white/5 relative overflow-hidden">
      {/* Cinematic grid or visual effects background */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-1/4 translate-y-1/2 w-[350px] h-[350px] bg-primary-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:flex-row md:items-end justify-between">
          <div>
            <span className="text-sm tracking-[0.4em] text-primary-red font-bold block mb-2 font-display">
              05 / FUTURE VISION & COMMITMENT
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white">
              입사 지원 포부
            </h2>
          </div>
          <div className="h-[2px] bg-white/10 flex-grow mx-8 hidden md:block mb-3" />
          <p className="text-white/40 text-sm font-mono mt-4 md:mt-0 tracking-widest">
            GROWTH & SYNCHRONICITY
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="vision-content-grid">
          
          {/* Left Column: Polished Ambition Statements */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 md:p-10 bg-cinema-card rounded border border-white/10 hover:border-primary-red/30 transition-all duration-400 relative overflow-hidden group">
            {/* Ambient subtle light gradient */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary-red/5 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center space-x-2 text-primary-red">
                <Play size={14} className="fill-primary-red/20" />
                <span className="text-xs font-mono tracking-[0.25em] uppercase font-bold">PROFESSIONAL VALUE</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-display leading-tight">
                “단순히 영상을 제작하는 디렉터에 머무르지 않겠습니다.”
              </h3>
              
              <div className="h-[1px] bg-white/10 w-24 my-6" />

              <p className="text-sm md:text-base text-white/85 leading-relaxed font-light">
                제가 기획하고 제작하는 모든 한 프레임에 기업의 가치를 만들고, 실제 비즈니스 성장을 이끌어내는 정교한 유효 마케팅 메시지를 담겠습니다.
              </p>
              
              <p className="text-sm md:text-base text-white/85 leading-relaxed font-light">
                <strong className="text-white font-semibold underline decoration-primary-red/60 decoration-2 underline-offset-4">회사의 성장이 곧 나 자신의 가치 증명이며, 저의 끊임없는 성장이 회사의 혁신적 도약을 촉진하는 핵심 엔진</strong>이라는 마음가짐으로 기여하겠습니다.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40 tracking-wider">
              <span>DESIGN PHILOSOPHY</span>
              <span className="text-primary-red font-semibold">★ VALUE-DRIVEN</span>
            </div>
          </div>

          {/* Right Column: High-Touch Call Box with Mobile Tap Interaction */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 bg-gradient-to-b from-neutral-900 to-zinc-950 rounded border border-white/10 hover:border-primary-red/30 transition-all duration-405 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-red/5 blur-[60px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center space-x-2 text-white/50 mb-6">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase font-bold">DIRECT COMMUNICATIONS</span>
              </div>

              <h4 className="text-xl font-bold tracking-tight text-white mb-6 font-display">
                상시 연락처
              </h4>

              {/* Direct Buttons list */}
              <div className="space-y-4">
                {/* Responsive Direct Call Button */}
                <a
                  href={telUrl}
                  className="flex items-center justify-between p-5 bg-black hover:bg-neutral-900 border border-white/5 hover:border-primary-red/50 rounded-lg transition-all duration-300 group/btn"
                  title="바로 전화 걸기"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-red/10 group-hover/btn:bg-primary-red/20 rounded border border-primary-red/20 group-hover/btn:border-primary-red/50 text-primary-red transition-all duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-white/40 block tracking-widest">MOBILE CALL</span>
                      <span className="text-base font-bold text-white font-mono tracking-wider group-hover/btn:text-primary-red transition-colors">
                        {phoneNumber}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-white/35 group-hover/btn:text-primary-red group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/35 tracking-widest">
              <span>INTERACTIVE PORT</span>
              <span>24/7 ENTRANCE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
