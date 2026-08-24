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
      icon: <Target className="text-slate-700" size={20} />,
      title: "시청층 맞춤형 스토리 설계",
      description: (
        <>
          단순히 예쁜 영상이 아닙니다.{" "}
          <strong className="text-slate-900 font-bold">주 타겟층</strong>이 가장
          궁금해하고 <strong className="text-slate-900 font-bold">몰입하는 지점</strong>과{" "}
          <br className="hidden sm:inline" />
          <strong className="text-slate-900 font-bold">숨은 소구 포인트</strong>를
          파악하여 자연스러운{" "}
          <strong className="text-slate-900 font-bold">브랜드 신뢰</strong>로 연결합니다.
        </>
      )
    },
    {
      icon: <Zap className="text-slate-700" size={20} />,
      title: "올인원 책임 프로듀서",
      description: (
        <>
          8년이라는 오랜 기간 동안 몸 담았던 회사에서{" "}
          <strong className="text-slate-900 font-bold">
            스튜디오 관리와 아르바이트, 파견직원
          </strong>{" "}
          <br className="hidden sm:inline" />
          <strong className="text-slate-900 font-bold">
            에스코팅 관리
          </strong>
          까지 전문적으로 수행했기 때문에{" "}
          <strong className="text-slate-900 font-bold">
            팀워크 활동에 능숙
          </strong>
          합니다.{" "}
          <br className="hidden sm:inline" />
          이에 더하여 전략적 기획안 도출, 1인 촬영 시 고성능 멀티캠(최대 4cam){" "}
          <br className="hidden sm:inline" />
          동시 제어·운영 노하우 그리고 정확하고 깔끔한 최종 컷 편집까지{" "}
          <br className="hidden sm:inline" />
          완성도 높은{" "}
          <strong className="text-slate-900 font-bold">
            1인 책임 제작
          </strong>
          이 가능합니다.
        </>
      )
    },
    {
      icon: <Award className="text-slate-700" size={20} />,
      title: "마케팅 지표 성장 증명",
      description: (
        <>
          니치 마켓의 제품군을 다루는{" "}
          <strong className="text-slate-900 font-bold">
            유튜브 채널을 성장시키며
          </strong>{" "}
          <br className="hidden sm:inline" />
          <strong className="text-slate-900 font-bold">
            브랜드 인지도 확대
          </strong>
          에 기여했습니다.
          <br className="hidden sm:inline" />
          핵심 기획 영상으로{" "}
          <strong className="text-slate-900 font-bold">
            유튜브 최고 조회수 롱폼 45만회 쇼츠 54만회
          </strong>{" "}
          <br className="hidden sm:inline" />
          인스타그램{" "}
          <strong className="text-slate-900 font-bold">
            릴스 최고 조회수 91만
          </strong>
          을 달성 하여{" "}
          <br className="hidden sm:inline" />
          <strong className="text-slate-900 font-bold">
            채널과 기업 가치를 상승
          </strong>{" "}
          시켰습니다.
        </>
      )
    }
  ];

  return (
    <section id="about" className="py-24 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary-red" />
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              ABOUT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            소개
          </h2>
        </div>

        {/* Content Box Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Block: Photographer Portrait */}
          <div className="lg:col-span-5 relative" id="about-photo-wrapper">
            <div className="relative aspect-[3/4] w-full bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img
                src={siteTexts.aboutImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"}
                alt="이주원 PD 프로필"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Studio Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-sm rounded-xl border border-white/40 flex items-center justify-between shadow-sm">
                <div>
                  <h4 className="text-base font-bold text-slate-900">이주원</h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">브랜드 콘텐츠 프로듀서</p>
                </div>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded">PD</span>
              </div>
            </div>
          </div>

          {/* Right Block: Pitch Copy & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {siteTexts.aboutTagline && (
              <span className="text-primary-red text-sm font-bold tracking-wider mb-2 uppercase">
                {siteTexts.aboutTagline}
              </span>
            )}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight whitespace-pre-line tracking-tight">
              {siteTexts.aboutTitle}
            </h3>
            
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal whitespace-pre-line bg-[#F8F9FA] p-6 rounded-2xl border border-slate-200/80">
              {siteTexts.aboutDescription}
            </p>

            {/* Core Value Pillars - "Why Me" */}
            <div className="mt-10 space-y-4">
              <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3">핵심 강점 및 역량</h4>
              
              {values.map((v, idx) => (
                <div 
                  key={idx}
                  className="flex items-start p-5 sm:p-6 bg-[#F8F9FA] hover:bg-white border border-slate-200/80 hover:border-slate-300 rounded-2xl transition-all duration-200 shadow-2xs"
                  id={`about-pillar-${idx}`}
                >
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200 shrink-0 mr-4 shadow-3xs">
                    {v.icon}
                  </div>
                  <div>
                    <h5 className="text-base sm:text-lg font-bold text-slate-900">{v.title}</h5>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">{v.description}</p>
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
