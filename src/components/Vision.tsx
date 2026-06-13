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
    <section id="vision" className="py-24 bg-cinema-black border-y border-slate-200 relative overflow-hidden">
      {/* Cinematic grid or visual effects background */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-1/4 translate-y-1/2 w-[350px] h-[350px] bg-primary-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:flex-row md:items-end justify-between">
          <div>
            <span className="text-sm tracking-[0.4em] text-primary-red font-bold block mb-2 font-display">
              05 / 입사 후 포부 및 비전
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900">
              입사 지원 포부
            </h2>
          </div>
          <div className="h-[2px] bg-slate-200 flex-grow mx-8 hidden md:block mb-3" />
          <p className="text-slate-500 text-sm font-mono mt-4 md:mt-0 tracking-widest font-black">
            성장과 협업 시너지
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="vision-content-grid">
          
          {/* Left Column: Polished Ambition Statements */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 md:p-10 bg-cinema-card rounded-lg border border-slate-200/80 hover:border-primary-red/30 transition-all duration-400 relative overflow-hidden group shadow-lg shadow-slate-100">
            {/* Ambient subtle light gradient */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary-red/5 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center space-x-2 text-primary-red">
                <Play size={14} className="fill-primary-red/20" />
                <span className="text-xs font-mono tracking-[0.25em] uppercase font-bold">직업적 가치관</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 font-display leading-tight">
                “단순히 영상을 제작하는 디렉터에 머무르지 않겠습니다.”
              </h3>
              
              <div className="h-[1px] bg-slate-250 w-24 my-6" />

              <p className="text-base md:text-lg text-slate-750 leading-relaxed font-bold">
                제가 기획하고 제작하는 모든 한 프레임에 기업의 가치를 만들고, 실제 비즈니스 성장을 이끌어내는 정교한 유효 마케팅 메시지를 담겠습니다.
              </p>
              
              <p className="text-base md:text-lg text-slate-750 leading-relaxed font-bold">
                <strong className="text-slate-900 font-extrabold underline decoration-primary-red/80 decoration-2 underline-offset-4">회사의 성장이 곧 나 자신의 가치 증명이며, 저의 끊임없는 성장이 회사의 혁신적 도약을 촉진하는 핵심 엔진</strong>이라는 마음가짐으로 기여하겠습니다.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500/80 font-bold tracking-wider">
              <span>제작 가치관</span>
              <span className="text-primary-red font-semibold">★ 가치 지향</span>
            </div>
          </div>

          {/* Right Column: High-Touch Call Box with Mobile Tap Interaction */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 bg-gradient-to-b from-white to-slate-50 border border-slate-200 hover:border-primary-red/30 transition-all duration-400 relative overflow-hidden group rounded-lg shadow-lg shadow-slate-100">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-red/5 blur-[60px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center space-x-2 text-slate-650 mb-6">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse mr-1" />
                <span className="text-sm font-mono tracking-[0.2em] uppercase font-black">상시 연락 채널</span>
              </div>

              <h4 className="text-2xl font-black tracking-tight text-slate-900 mb-6 font-display">
                상시 연락처
              </h4>

              {/* Direct Buttons list */}
              <div className="space-y-4">
                {/* Responsive Direct Call Button */}
                <a
                  href={telUrl}
                  className="flex items-center justify-between p-5 bg-[#FFFFFF] hover:bg-slate-50 border border-slate-200/80 hover:border-primary-red/50 rounded-lg transition-all duration-300 group/btn shadow-inner shadow-slate-50"
                  title="바로 전화 걸기"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-red/10 group-hover/btn:bg-primary-red/20 rounded border border-primary-red/20 group-hover/btn:border-primary-red/50 text-primary-red transition-all duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block tracking-widest uppercase font-extrabold">휴대폰 번호</span>
                      <span className="text-lg font-black text-slate-800 font-mono tracking-wider group-hover/btn:text-primary-red transition-colors">
                        {phoneNumber}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-500 group-hover/btn:text-primary-red group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500 tracking-widest font-bold">
              <span>상시 소통</span>
              <span>24시간 대기</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
