/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { User, Award, Shield, Target, Zap } from "lucide-react";
import { SiteTexts } from "../types";
import { defaultSiteTexts } from "../data";

interface AboutProps {
  siteTexts?: SiteTexts;
}

export default function About({ siteTexts = defaultSiteTexts }: AboutProps) {
  const values = [
    {
      icon: <Target className="text-primary-red" size={22} />,
      title: "시청층 맞춤형 스토리 설계",
      description: "단순히 예쁜 영상이 아닙니다. 주 타겟층이 가장 궁금해하고 몰입하는 지점과 숨은 소구 포인트를 영리하게 파악하여 자연스러운 브랜드 신뢰로 연결합니다."
    },
    {
      icon: <Zap className="text-primary-red" size={22} />,
      title: "협업 제작 & 올인원 책임 프로덕션",
      description: "8년이라는 오랜 기간 동안 몸 담았던 회사에서 스튜디오 관리와 아르바이트, 파견직원 에스코팅 관리까지 전문적으로 수행했기 때문에 팀워크 활동에 능숙합니다. 이에 더하여 전략적 기획안 도출, 1인 촬영 시 고성능 멀티캠(최대 4cam) 동시 제어·운영 노하우, 그리고 정확하고 깔끔한 최종 컷 편집까지 완성도 높은 1인 책임 제작이 가능합니다."
    },
    {
      icon: <Award className="text-primary-red" size={22} />,
      title: "마케팅 지표 성장 증명",
      description: "케이트레일러 채널의 유튜브 구독자를 입사 후 1년 만에 2,000명에서 7,200명대(360%↑)로 성장시키고, 핵심 기획 영상으로 유튜브 최고 조회수 42만 회를 기록. 이에 더하여 타겟화된 인스타그램 릴스 91만 조회수를 달성 하여 채널과 기업 가치를 상승 시켰습니다."
    }
  ];

  return (
    <section id="about" className="py-24 bg-cinema-black border-y border-white/5 relative overflow-hidden">
      {/* Visual Ambient Background Dot Grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs tracking-[0.4em] text-primary-red font-bold block mb-2 font-display">
              01 / WHY CHOOSE ME
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white animate-fade-in">
              ABOUT <span className="font-light italic text-white/70">PRODUCER</span>
            </h2>
          </div>
          <div className="h-[2px] bg-white/10 flex-grow mx-8 hidden md:block mb-3" />
          <p className="text-white/40 text-sm font-mono mt-4 md:mt-0 tracking-widest">
            PERSPECTIVES COMPOSITION
          </p>
        </div>

        {/* Content Box Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Photographer Cinematic Portrait */}
          <div className="lg:col-span-5 relative group" id="about-photo-wrapper">
            {/* Red glow decorative box behind image */}
            <div className="absolute -inset-2 bg-primary-red/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-lg" />
            
            <div className="relative aspect-[3/4] w-full bg-cinema-card border border-white/10 rounded overflow-hidden">
              <img
                src={siteTexts.aboutImage || "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"}
                alt="이주원 PD 프로필"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-black/20" />
              
              {/* Tactical Stats On Image Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/90 backdrop-blur-md border border-white/10 rounded flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-white tracking-[0.25em] font-display">LEE JU WON</h4>
                  <p className="text-xs text-white/60 tracking-wider mt-0.5">Marketing Film Director</p>
                </div>
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary-red animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Block: Pitch Copy & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <span className="text-primary-red text-sm font-bold font-display tracking-widest mb-3 uppercase">
              {siteTexts.aboutTagline}
            </span>
            <h3 className="text-2xl md:text-4xl font-display font-medium text-white leading-snug whitespace-pre-line">
              {siteTexts.aboutTitle}
            </h3>
            
            <p className="mt-6 text-base md:text-lg text-white/90 leading-relaxed font-light whitespace-pre-line">
              {siteTexts.aboutDescription}
            </p>

            {/* Core Value Pillars - "Why Me" */}
            <div className="mt-12 space-y-6">
              <h4 className="text-xs tracking-[0.35em] font-display font-bold text-white/45">CORE PILLARS</h4>
              
              {values.map((v, idx) => (
                <div 
                  key={idx}
                  className="flex items-start p-5 bg-cinema-card hover:bg-neutral-900 border border-white/5 hover:border-primary-red/30 rounded transition-all duration-300 group"
                  id={`about-pillar-${idx}`}
                >
                  <div className="p-2.5 bg-black rounded border border-white/10 group-hover:border-primary-red/50 mr-4 transition-colors">
                    {v.icon}
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <h5 className="text-base font-bold text-white tracking-wide">{v.title}</h5>
                    </div>
                    <p className="text-sm text-white/70 mt-2 leading-relaxed font-light">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
