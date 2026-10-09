/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, Video, Layers, BarChart3, CheckCircle2 } from "lucide-react";
import { SiteTexts } from "../types";
import { defaultSiteTexts } from "../data";

interface AboutProps {
  siteTexts?: SiteTexts;
  onSettingsUpdate?: () => void;
}

export default function About({ siteTexts = defaultSiteTexts }: AboutProps) {
  const values = [
    {
      icon: Video,
      title: "시청층 맞춤형 스토리 설계",
      description: (
        <>
          단순히 예쁜 영상이 아닙니다.{" "}
          <strong className="text-white font-bold">주 타겟층</strong>이 가장
          궁금해하고 <strong className="text-white font-bold">몰입하는 지점</strong>과{" "}
          <br className="hidden sm:inline" />
          <strong className="text-white font-bold">숨은 소구 포인트</strong>를
          파악하여 자연스러운{" "}
          <strong className="text-white font-bold">브랜드 신뢰</strong>로 연결합니다.
        </>
      )
    },
    {
      icon: Layers,
      title: "올인원 책임 프로듀서 & 조직 빌딩",
      description: (
        <>
          <strong className="text-white font-bold">이투스교육에서 8년간</strong> 스튜디오 운영과 촬영팀·외주 인력 관리를 총괄했습니다.{" "}
          장비 유지보수 체계, 라이브 송출 가이드라인, 제작 프로세스 표준화까지 없던 시스템을 직접 세웠습니다.{" "}
          <br className="hidden sm:inline" />
          <strong className="text-white font-bold">영상 담당이 없는 조직에 들어가도 혼자 체계를 만들 수 있습니다.</strong>
        </>
      )
    },
    {
      icon: BarChart3,
      title: "데이터 기반 콘텐츠 기획 및 성장",
      description: (
        <>
          단순 감에 의존하지 않고 타겟 시청자의 검색 키워드와 시청 지속 시간 데이터를 분석하여,{" "}
          <strong className="text-white font-bold">브랜드 인지도와 실질적인 고객 문의 전환</strong>을{" "}
          이끌어내는 고효율 콘텐츠를 설계하고 운영합니다.
        </>
      )
    }
  ];

  const highlights = [
    {
      title: "1인 완결 파이프라인",
      desc: "기획 · 연출 · 시네마틱 촬영 · 정밀 편집"
    },
    {
      title: "조직 시스템 구축",
      desc: "이투스교육 8년 스튜디오 관리 & 촬영팀 총괄"
    },
    {
      title: "실측 트래픽 증명",
      desc: "최고 조회수 롱폼 47만 회 · 쇼츠 81만 회 달성"
    },
    {
      title: "차세대 AI 워크플로우",
      desc: "생성형 AI 영상 제작 및 커머스 모션 그래픽"
    }
  ];

  return (
    <section id="about" className="py-24 md:py-28 bg-[#1A1A21] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Intro */}
        <div className="mb-14 pb-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-headline text-[13px] sm:text-sm text-[#8A8A93] font-bold tracking-widest uppercase block mb-2">
              01 / ABOUT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              소개 및 핵심 역량
            </h2>
          </div>
          <p className="text-[13px] sm:text-base text-[#8A8A93] font-medium max-w-md">
            기획부터 촬영, 정밀 편집, 채널 성장까지 단절 없이 책임집니다.
          </p>
        </div>

        {/* Content Box Grid split - Redesigned without photo box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Block: Executive Director Identity Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-9 bg-[#202028] border border-white/[0.12] border-t-white/[0.16] rounded-2xl shadow-xl space-y-6">
            <div>
              {/* Badges */}
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <span className="px-3 py-1 bg-primary-red/15 text-primary-red border border-primary-red/30 rounded-lg text-xs font-mono font-bold tracking-wider uppercase">
                  DIRECTOR & PRODUCER
                </span>
                <span className="px-2.5 py-1 bg-white/10 text-white/90 border border-white/10 rounded-lg text-xs font-mono font-medium">
                  14 YEARS EXP.
                </span>
              </div>

              {/* Name & Title */}
              <div className="space-y-1 mb-6">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  이주원
                </h3>
                <p className="text-base sm:text-lg text-[#C9C9CF] font-semibold">
                  브랜드 콘텐츠 총괄 프로듀서 · 인하우스 PD
                </p>
              </div>

              <div className="h-px w-full bg-white/[0.08] my-6" />

              {/* Key Competencies Highlights */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono text-[#8A8A93] font-bold tracking-wider uppercase">
                  KEY COMPETENCIES
                </h4>
                
                <div className="space-y-3">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-[#1A1A21] rounded-xl border border-white/[0.06]">
                      <CheckCircle2 size={18} className="text-primary-red shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[14px] sm:text-[15px] font-bold text-white leading-snug">
                          {h.title}
                        </p>
                        <p className="text-[13px] text-[#A0A0AA] mt-0.5 leading-snug">
                          {h.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="p-5 bg-[#17171C] border border-white/[0.08] rounded-xl mt-6">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#8A8A93] uppercase tracking-wider mb-2">
                <Sparkles size={13} className="text-primary-red" />
                <span>PRODUCTION PHILOSOPHY</span>
              </div>
              <p className="text-sm text-white/90 italic font-medium leading-relaxed">
                “단순히 화려한 영상이 아닌, 브랜드의 신뢰를 구축하고 실질적인 비즈니스 문의와 매출 전환을 이끌어냅니다.”
              </p>
            </div>
          </div>

          {/* Right Block: Pitch Copy & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {siteTexts.aboutTagline && (
                <span className="text-[#C9C9CF] text-[13px] sm:text-sm font-bold tracking-wide mb-2 uppercase block">
                  {siteTexts.aboutTagline}
                </span>
              )}
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug whitespace-pre-line tracking-tight">
                {siteTexts.aboutTitle}
              </h3>
              
              <p className="mt-5 text-[15px] sm:text-base text-[#C9C9CF] leading-[1.7] font-normal whitespace-pre-line bg-[#202028] border border-white/[0.12] border-t-white/[0.16] p-6 rounded-xl">
                {siteTexts.aboutDescription}
              </p>
            </div>

            {/* Core Value Pillars - "Why Me" */}
            <div className="space-y-3.5">
              <h4 className="text-[13px] font-bold text-[#8A8A93] mb-1">핵심 강점</h4>
              
              {values.map((v, idx) => {
                const IconComponent = v.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 sm:p-6 bg-[#202028] border border-white/[0.12] border-t-white/[0.16] hover:bg-[#2A2A34] hover:border-white/[0.18] rounded-xl transition-all duration-200"
                    id={`about-pillar-${idx}`}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <IconComponent size={15} className="text-white/90" />
                      </div>
                      <h5 className="text-base sm:text-lg font-bold text-white">{v.title}</h5>
                    </div>
                    <p className="text-[15px] md:text-base text-[#C9C9CF] leading-[1.7] font-normal">{v.description}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
