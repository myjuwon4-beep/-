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
      icon: <Target className="text-emerald-600" size={22} />,
      title: "시청층 맞춤형 스토리 설계",
      description: (
        <>
          단순히 예쁜 영상이 아닙니다.{" "}
          <span className="text-slate-900 font-extrabold border-b-[2px] border-emerald-500/50 pb-0.5 px-0.5">주 타겟층</span>이 가장
          궁금해하고 <span className="text-slate-900 font-extrabold border-b-[2px] border-emerald-500/50 pb-0.5 px-0.5">몰입하는 지점</span>과{" "}
          <br />
          <span className="text-slate-900 font-extrabold border-b-[2px] border-emerald-500/50 pb-0.5 px-0.5">숨은 소구 포인트</span>를
          영리하게 파악하여 자연스러운{" "}
          <span className="text-slate-900 font-extrabold border-b-[2px] border-emerald-500/50 pb-0.5 px-0.5">브랜드 신뢰</span>로 연결합니다.
        </>
      )
    },
    {
      icon: <Zap className="text-violet-600" size={22} />,
      title: "협업 제작 & 올인원 책임 프로덕션",
      description: (
        <>
          8년이라는 오랜 기간 동안 몸 담았던 회사에서{" "}
          <span className="text-slate-900 font-extrabold border-b-[2px] border-violet-500/50 pb-0.5 px-0.5">
            스튜디오 관리와 아르바이트, 파견직원
          </span>{" "}
          <br />
          <span className="text-slate-900 font-extrabold border-b-[2px] border-violet-500/50 pb-0.5 px-0.5">
            에스코팅 관리
          </span>
          까지 전문적으로 수행했기 때문에{" "}
          <span className="text-slate-900 font-extrabold border-b-[2px] border-violet-500/50 pb-0.5 px-0.5">
            팀워크 활동에 능숙
          </span>
          합니다.{" "}
          <br />
          이에 더하여 전략적 기획안 도출, 1인 촬영 시 고성능 멀티캠(최대 4cam){" "}
          <br />
          동시 제어·운영 노하우 그리고 정확하고 깔끔한 최종 컷 편집까지{" "}
          <br />
          완성도 높은{" "}
          <span className="text-slate-900 font-extrabold border-b-[2px] border-violet-500/50 pb-0.5 px-0.5">
            1인 책임 제작
          </span>
          이 가능합니다.
        </>
      )
    },
    {
      icon: <Award className="text-blue-600" size={22} />,
      title: "마케팅 지표 성장 증명",
      description: (
        <>
          니치 마켓의 제품군을 다루는{" "}
          <span className="text-slate-900 font-extrabold border-b-[2px] border-blue-600/50 pb-0.5 px-0.5">
            유튜브 채널을 성장시키며 브랜드 인지도
          </span>{" "}
          <br />
          <span className="text-slate-900 font-extrabold border-b-[2px] border-blue-600/50 pb-0.5 px-0.5">
            확대
          </span>
          에 기여했습니다.
          <br />
          핵심 기획 영상으로{" "}
          <span className="text-slate-900 font-extrabold border-b-[2px] border-blue-600/50 pb-0.5 px-0.5">
            유튜브 최고 조회수 43만회, 19만, 10만 등 파격 상승 기록
          </span>{" "}
          <br />
          이에 더하여 타겟화된 인스타그램{" "}
          <span className="text-slate-900 font-extrabold border-b-[2px] border-blue-600/50 pb-0.5 px-0.5">
            릴스 91만 조회수
          </span>
          를 달성 하여{" "}
          <br />
          <span className="text-slate-900 font-extrabold border-b-[2px] border-blue-600/50 pb-0.5 px-0.5">
            채널과 기업 가치를 상승
          </span>{" "}
          시켰습니다.
        </>
      )
    }
  ];

  return (
    <section id="about" className="py-24 bg-cinema-black border-y border-slate-200 relative overflow-hidden">
      {/* Visual Ambient Background Dot Grid (Elegant dark subtle mesh) */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 md:flex-row md:items-end justify-between">
          <div>
            <span className="text-sm tracking-[0.4em] text-primary-red font-bold block mb-2 font-display">
              01 / 소개
            </span>
          </div>
        </div>

        {/* Content Box Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Photographer Cinematic Portrait */}
          <div className="lg:col-span-5 relative group" id="about-photo-wrapper">
            {/* Red glow decorative box behind image */}
            <div className="absolute -inset-2 bg-primary-red/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-lg" />
            
            <div className="relative aspect-[3/4] w-full bg-cinema-card border border-slate-200 rounded overflow-hidden shadow-lg">
              <img
                src={siteTexts.aboutImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"}
                alt="이주원 PD 프로필"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-[#0B0F19]/10" />
              
              {/* Tactical Stats On Image Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md border border-slate-200/85 rounded flex items-center justify-between shadow-md">
                <div>
                  <h4 className="text-base font-black text-slate-850 tracking-[0.25em] font-display">이주원</h4>
                  <p className="text-xs text-slate-500 tracking-wider font-bold mt-0.5">브랜드 콘텐츠 프로듀서</p>
                </div>
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary-red animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Block: Pitch Copy & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {siteTexts.aboutTagline && (
              <span className="text-primary-red text-base font-bold font-display tracking-widest mb-3 uppercase">
                {siteTexts.aboutTagline}
              </span>
            )}
            <h3 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-snug whitespace-pre-line">
              {siteTexts.aboutTitle}
            </h3>
            
            <p className="mt-6 text-lg md:text-xl text-slate-750 leading-relaxed font-bold whitespace-pre-line bg-slate-100/60 p-5 rounded-lg border border-slate-200/50 shadow-inner">
              {siteTexts.aboutDescription}
            </p>

            {/* Core Value Pillars - "Why Me" */}
            <div className="mt-12 space-y-6">
              <h4 className="text-sm tracking-[0.35em] font-display font-black text-slate-500 mb-4 uppercase">핵심 강점 및 역량</h4>
              
              {values.map((v, idx) => (
                <div 
                  key={idx}
                  className="flex items-start p-6 bg-cinema-card hover:bg-slate-50 border border-slate-200/60 hover:border-primary-red/40 rounded-lg transition-all duration-300 group shadow-lg"
                  id={`about-pillar-${idx}`}
                >
                  <div className="p-3 bg-slate-100 rounded border border-slate-200 group-hover:border-primary-red/40 mr-4 transition-colors">
                    {v.icon}
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <h5 className="text-[17px] md:text-lg font-black text-slate-900 tracking-wide">{v.title}</h5>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed font-bold">{v.description}</p>
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
