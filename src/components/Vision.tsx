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
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="vision-content-grid">
          
          {/* Left Column: Polished Ambition Statements */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 md:p-10 bg-cinema-card rounded-lg border border-slate-200/80 hover:border-primary-red/30 transition-all duration-400 relative overflow-hidden group shadow-lg shadow-slate-100">
            {/* Ambient subtle light gradient */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary-red/5 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 font-display leading-normal whitespace-pre-wrap">
                저는 영상을 제작하는 사람을 넘어{"\n"}
                콘텐츠를 통해 브랜드 성장을 만드는 사람이 되고 싶습니다.
              </h3>
              
              <div className="h-[2px] bg-primary-red w-16 my-6" />

              <p className="text-base md:text-lg text-slate-750 leading-relaxed font-bold whitespace-pre-wrap">
                교육 콘텐츠 현장부터 자동차&캠핑 전문 콘텐츠 채널 운영까지 경험하며{"\n"}
                기획, 제작, 운영, 성장의 전 과정을 수행해 왔습니다.
              </p>
              
              <p className="text-base md:text-lg text-slate-900 leading-relaxed font-black whitespace-pre-wrap underline decoration-primary-red/40 decoration-2 underline-offset-4">
                앞으로도 데이터와 크리에이티브를 기반으로{"\n"}
                브랜드와 고객을 연결하는 콘텐츠를 만들겠습니다.
              </p>
            </div>
          </div>

          {/* Right Column: High-Touch Call Box with Mobile Tap Interaction */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 bg-gradient-to-b from-white to-slate-50 border border-slate-200 hover:border-primary-red/30 transition-all duration-400 relative overflow-hidden group rounded-lg shadow-lg shadow-slate-100">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-red/5 blur-[60px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h4 className="text-2xl font-black tracking-tight text-slate-900 mb-6 font-display flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                연락처
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
          </div>

        </div>

      </div>
    </section>
  );
}
