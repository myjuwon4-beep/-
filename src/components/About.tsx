/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { SiteTexts } from "../types";
import { defaultSiteTexts } from "../data";

interface AboutProps {
  siteTexts?: SiteTexts;
}

export default function About({ siteTexts = defaultSiteTexts }: AboutProps) {
  const [imageError, setImageError] = useState(false);
  const profileSrc = siteTexts.aboutImage && !siteTexts.aboutImage.includes("unsplash.com") 
    ? siteTexts.aboutImage 
    : "/profile.jpg";

  const values = [
    {
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
      title: "올인원 책임 프로듀서",
      description: (
        <>
          8년이라는 오랜 기간 동안 몸 담았던 회사에서{" "}
          <strong className="text-white font-bold">
            스튜디오 관리와 아르바이트, 파견직원 에스코팅 관리
          </strong>
          까지 전문적으로 수행했기 때문에{" "}
          <strong className="text-white font-bold">
            팀워크 활동에 능숙
          </strong>
          합니다.{" "}
          <br className="hidden sm:inline" />
          이에 더하여 전략적 기획안 도출, 1인 촬영 시 고성능 멀티캠(최대 4cam){" "}
          <br className="hidden sm:inline" />
          동시 제어·운영 노하우 그리고 정확하고 깔끔한 최종 컷 편집까지{" "}
          <br className="hidden sm:inline" />
          완성도 높은{" "}
          <strong className="text-white font-bold">
            1인 책임 제작
          </strong>
          이 가능합니다.
        </>
      )
    },
    {
      title: "마케팅 지표 성장 증명",
      description: (
        <>
          니치 마켓의 제품군을 다루는{" "}
          <strong className="text-white font-bold">
            유튜브 채널을 성장시키며 브랜드 인지도 확대
          </strong>
          에 기여했습니다.
          <br className="hidden sm:inline" />
          핵심 기획 영상으로{" "}
          <strong className="text-white font-bold">
            유튜브 최고 조회수 롱폼 45만 회, 쇼츠 54만 회
          </strong>
          , 인스타그램{" "}
          <strong className="text-white font-bold">
            릴스 최고 조회수 91만 회
          </strong>
          를 달성하여{" "}
          <br className="hidden sm:inline" />
          <strong className="text-white font-bold">
            채널과 기업 가치를 상승
          </strong>{" "}
          시켰습니다.
        </>
      )
    }
  ];

  return (
    <section id="about" className="py-24 md:py-28 bg-[#16161A] relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Intro */}
        <div className="mb-14 pb-6 border-b border-white/[0.07] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-headline text-sm text-[#8A8A93] font-bold tracking-widest uppercase block mb-2">
              01 / ABOUT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              소개 및 핵심 역량
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#8A8A93] font-medium max-w-md">
            기획부터 촬영, 정밀 편집, 채널 성장까지 단절 없이 책임집니다.
          </p>
        </div>

        {/* Content Box Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Block: Profile Portrait with fallback */}
          <div className="lg:col-span-5 relative" id="about-photo-wrapper">
            <div className="relative aspect-[3/4] w-full bg-[#1A1A1F] border border-white/[0.08] rounded-xl overflow-hidden flex items-center justify-center">
              {!imageError ? (
                <>
                  <img
                    src={profileSrc}
                    alt="이주원 PD 프로필"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </>
              ) : (
                <div className="w-full h-full bg-[#1A1A1F] flex flex-col items-center justify-center p-8 text-center select-none">
                  <div className="w-20 h-20 rounded-xl bg-[#222228] border border-white/10 flex items-center justify-center mb-4">
                    <span className="font-headline text-3xl font-black text-white tracking-wider">JW</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-sm font-headline font-bold text-white tracking-widest uppercase block">LEE JU WON</span>
                    <span className="text-xs text-[#8A8A93] font-medium tracking-tight block">BRAND CONTENT PRODUCER</span>
                  </div>
                </div>
              )}
              
              {/* Studio Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#1A1A1F]/90 backdrop-blur-md border border-white/[0.08] rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white">이주원</h4>
                  <p className="text-xs text-[#8A8A93] font-medium mt-0.5">브랜드 콘텐츠 프로듀서</p>
                </div>
                <span className="text-xs font-headline font-bold px-2.5 py-0.5 bg-primary-red text-white rounded">PD</span>
              </div>
            </div>
          </div>

          {/* Right Block: Pitch Copy & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {siteTexts.aboutTagline && (
              <span className="text-primary-red text-xs sm:text-sm font-headline font-bold tracking-widest mb-2 uppercase">
                {siteTexts.aboutTagline}
              </span>
            )}
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug whitespace-pre-line tracking-tight">
              {siteTexts.aboutTitle}
            </h3>
            
            <p className="mt-5 text-[15px] sm:text-base text-[#C9C9CF] leading-[1.7] font-normal whitespace-pre-line bg-[#1A1A1F] border border-white/[0.07] p-6 rounded-xl">
              {siteTexts.aboutDescription}
            </p>

            {/* Core Value Pillars - "Why Me" */}
            <div className="mt-8 space-y-3.5">
              <h4 className="text-xs font-headline font-bold tracking-widest text-[#8A8A93] uppercase mb-3">핵심 강점</h4>
              
              {values.map((v, idx) => (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 bg-[#1A1A1F] border border-white/[0.07] hover:bg-[#222228] hover:border-white/[0.14] rounded-xl transition-all duration-200"
                  id={`about-pillar-${idx}`}
                >
                  <h5 className="text-base sm:text-lg font-bold text-white">{v.title}</h5>
                  <p className="text-[15px] md:text-base text-[#C9C9CF] mt-2 leading-[1.7] font-normal">{v.description}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
