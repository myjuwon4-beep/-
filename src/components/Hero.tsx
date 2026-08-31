/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { Play, ArrowDown, X } from "lucide-react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { defaultSiteTexts } from "../data";
import { SiteTexts } from "../types";

// Configurable Showreel Video ID
export const DEFAULT_SHOWREEL_VIDEO_ID = "XM2E0Eqf_8U";

interface HeroProps {
  onPortfolioCall: () => void;
  onPdfClick: () => void;
  siteTexts?: SiteTexts;
}

interface StatItemProps {
  label: string;
  targetNumber: number;
  prefix?: string;
  suffix: string;
  description: string;
  isRedHighlight?: boolean;
}

function AnimatedStatCard({ 
  label, 
  targetNumber, 
  prefix = "", 
  suffix, 
  description,
  isRedHighlight = false
}: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const startTime = performance.now();

    const frame = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * targetNumber);
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(frame);
  }, [isInView, targetNumber]);

  return (
    <div 
      ref={ref}
      className="bg-[#1A1A1F] border border-white/[0.07] p-5 rounded-xl transition-all duration-200 hover:bg-[#222228] hover:border-white/[0.14] flex flex-col justify-between"
    >
      <div>
        <span className="text-xs sm:text-sm font-semibold text-[#8A8A93] tracking-tight block">
          {label}
        </span>
        <div className="mt-1.5 flex items-baseline">
          <span className={`font-headline text-3xl sm:text-4xl md:text-5xl font-black tracking-tight ${isRedHighlight ? "text-primary-red" : "text-white"}`}>
            {prefix}{count}{suffix}
          </span>
        </div>
      </div>
      <p className="mt-2 text-xs sm:text-sm text-[#8A8A93] font-normal leading-normal">
        {description}
      </p>
    </div>
  );
}

export default function Hero({ onPortfolioCall, siteTexts = defaultSiteTexts }: HeroProps) {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [posterError, setPosterError] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDownOpt = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsShowreelOpen(false);
      }
    };
    if (isShowreelOpen) {
      window.addEventListener("keydown", handleKeyDownOpt);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDownOpt);
      document.body.style.overflow = "unset";
    };
  }, [isShowreelOpen]);

  const posterSrc = posterError 
    ? `https://img.youtube.com/vi/${DEFAULT_SHOWREEL_VIDEO_ID}/maxresdefault.jpg`
    : "/showreel-poster.jpg";

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden bg-[#0E0E10] pt-24 pb-20 lg:pt-28 lg:pb-28"
    >
      {/* Subtle Atmospheric Spotlight */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-primary-red/10 via-white/[0.02] to-transparent blur-3xl opacity-70" />
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 md:px-12 w-full flex flex-col justify-start items-center text-center">
        
        {/* Editorial Role Tag */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#1A1A1F] border border-white/[0.09] text-[#C9C9CF] rounded-full text-xs font-headline font-bold tracking-widest uppercase mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-red animate-pulse" />
          <span>IN-HOUSE CONTENT PRODUCER &amp; MARKETER</span>
        </div>

        {/* Main Headline H1 */}
        <h1 
          className="text-2xl min-[420px]:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-white leading-[1.2] max-w-4xl" 
          id="hero-title"
        >
          {siteTexts.heroTitle || "조회수를 매출 문의로 바꾸는 콘텐츠 PD"}
        </h1>

        {/* Sub Headline */}
        <p className="mt-3.5 sm:mt-4 text-[15px] sm:text-base md:text-lg font-medium text-[#C9C9CF] max-w-3xl leading-[1.7] break-keep">
          {siteTexts.heroSlogan || "기획·촬영·편집·채널 운영까지, 브랜드 성장에 책임지는 인하우스 프로듀서"}
        </p>

        {/* 16:9 Showreel Area */}
        <div className="mt-8 w-full max-w-4xl relative group" id="hero-showreel-container">
          <div 
            onClick={() => setIsShowreelOpen(true)}
            className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/[0.08] transition-all duration-300 cursor-pointer select-none"
          >
            {/* Showreel Poster Image */}
            <img
              src={posterSrc}
              alt="이주원 PD 쇼릴 포스터"
              referrerPolicy="no-referrer"
              onError={() => setPosterError(true)}
              className="w-full h-full object-cover brightness-90 group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-500 ease-out"
            />

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

            {/* Top Bar Badges inside Showreel */}
            <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-lg text-white text-xs font-headline font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
                <span>OFFICIAL SHOWREEL</span>
              </div>
              <div className="hidden sm:inline-flex items-center px-2.5 py-1 bg-white/10 backdrop-blur-md rounded text-white text-xs font-mono font-medium">
                <span>1080P HD</span>
              </div>
            </div>

            {/* Center Play Action Button & "SHOWREEL 90s" Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-black flex items-center justify-center backdrop-blur-xs group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                <Play size={24} fill="currentColor" className="text-primary-red ml-1" />
              </div>
              
              <div className="inline-flex items-center space-x-1.5 px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-headline font-bold tracking-widest uppercase border border-white/10">
                <span>SHOWREEL 90s</span>
              </div>
            </div>

            {/* Bottom Tag inside Showreel */}
            <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white/90 text-xs font-medium pointer-events-none z-10">
              <span className="truncate text-[#C9C9CF]">주요 기획 영상 및 브랜디드 하이라이트</span>
              <span className="hidden sm:inline-block font-mono text-xs bg-black/70 text-[#8A8A93] px-2.5 py-0.5 rounded border border-white/10">CLICK TO PLAY</span>
            </div>
          </div>
        </div>

        {/* 4 Key Performance Metrics Bar (Count-up Animation) */}
        <div className="mt-5 sm:mt-6 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left" id="hero-metrics-bar">
          <AnimatedStatCard
            label="최고 조회수"
            targetNumber={91}
            suffix="만"
            description="릴스/쇼츠 단일 영상 기준"
            isRedHighlight={true}
          />
          <AnimatedStatCard
            label="구독자 성장"
            targetNumber={4}
            suffix="배 성장"
            description="유튜브 2,000 → 8,000명"
            isRedHighlight={false}
          />
          <AnimatedStatCard
            label="문의율 증대"
            prefix="+"
            targetNumber={48}
            suffix="%"
            description="콘텐츠 기반 인바운드 전환"
            isRedHighlight={true}
          />
          <AnimatedStatCard
            label="영상 경력"
            targetNumber={14}
            suffix="년"
            description="기획·촬영·편집 올라운더"
            isRedHighlight={false}
          />
        </div>

        {/* Core Career & Performance Summary Card */}
        <div className="mt-8 w-full max-w-4xl bg-[#1A1A1F] border border-white/[0.07] p-6 sm:p-8 md:p-9 rounded-xl relative overflow-hidden text-left">
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-4 mb-6">
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
              핵심 역량 및 성과 요약
            </h3>
            <span className="text-xs font-headline text-[#8A8A93] font-bold tracking-widest uppercase hidden sm:inline-block">OVERVIEW</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Left Section: Corporate Leadership & Infrastructure */}
            <div className="space-y-4 lg:border-r lg:border-white/[0.07] lg:pr-8">
              <div className="flex items-center space-x-2 pb-1">
                <span className="px-2.5 py-1 bg-[#16161A] border border-white/[0.07] text-[#C9C9CF] text-xs sm:text-sm font-semibold rounded-md whitespace-nowrap">
                  조직 운영 &amp; 스튜디오 인프라
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#8A8A93] truncate">중견기업 핵심 전문성</span>
              </div>
              <div className="space-y-3 pt-1">
                <div className="p-3.5 rounded-xl bg-[#16161A] border border-white/[0.05]">
                  <p className="text-sm md:text-base font-bold text-white">콘텐츠 제작 조직 운영</p>
                  <p className="text-sm text-[#C9C9CF] font-normal mt-1 leading-[1.7]">촬영팀 아르바이트 및 파견직 관리, 제작 총괄</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#16161A] border border-white/[0.05]">
                  <p className="text-sm md:text-base font-bold text-white">촬영팀 및 스튜디오 리딩</p>
                  <p className="text-sm text-[#C9C9CF] font-normal mt-1 leading-[1.7]">자사 스튜디오 총 관리 및 리소스 운용 총괄</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#16161A] border border-white/[0.05]">
                  <p className="text-sm md:text-base font-bold text-white">라이브 시스템 구축</p>
                  <p className="text-sm text-[#C9C9CF] font-normal mt-1 leading-[1.7]">온라인 라이브 송출 가이드라인 수립 및 고도화</p>
                </div>
              </div>
            </div>

            {/* Right Section: New Media Growth & Performance */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-1">
                <span className="px-2.5 py-1 bg-[#16161A] border border-white/[0.07] text-[#C9C9CF] text-xs sm:text-sm font-semibold rounded-md whitespace-nowrap">
                  채널 성장 &amp; 마케팅 성과
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#8A8A93] truncate">기업 홍보 및 콘텐츠 성과</span>
              </div>
              <div className="space-y-3 pt-1">
                <div className="p-3.5 rounded-xl bg-[#16161A] border border-white/[0.05]">
                  <p className="text-sm md:text-base font-bold text-white">
                    유튜브 최고 <span className="font-extrabold text-primary-red">54만 회</span> · 인스타 최고 <span className="font-extrabold text-primary-red">91만 회</span>
                  </p>
                  <p className="text-sm text-[#C9C9CF] font-normal mt-1 leading-[1.7]">고효율 릴스/쇼츠 및 기획 연출 전략으로 최고치 조회수 성과 달성</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#16161A] border border-white/[0.05]">
                  <p className="text-sm md:text-base font-bold text-white">
                    콘텐츠 기반 문의율 <span className="font-extrabold text-primary-red">48% 증가</span>
                  </p>
                  <p className="text-sm text-[#C9C9CF] font-normal mt-1 leading-[1.7]">고객 인바운드 문의율을 전년 동기 대비 대폭 성장 견인</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#16161A] border border-white/[0.05]">
                  <p className="text-sm md:text-base font-bold text-white leading-snug">
                    니치 마켓 상품(카라반·트레일러·견인장치) 가치 극대화
                  </p>
                  <p className="text-sm text-[#C9C9CF] font-normal mt-1 leading-[1.7]">
                    유튜브(2,000 → 8,000명), 인스타(113 → 1,800명) 트래픽 성장 및 단기간 유입 확보
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-white/[0.07] flex justify-center">
            <div className="px-4 py-2 rounded-xl bg-[#16161A] border border-white/[0.06] text-center">
              <span className="text-sm md:text-[15px] font-semibold text-[#C9C9CF]">
                기획 · 촬영 · 편집 · 채널 운영 전 영역 올라운더 역량 보유
              </span>
            </div>
          </div>
        </div>

        {/* 주 경력 사항 (MAIN EXPERIENCE) */}
        <div className="mt-8 w-full max-w-4xl relative z-20 text-left">
          <div className="flex items-center space-x-2 mb-3.5">
            <h4 className="text-sm md:text-base font-bold text-white">
              주요 업무 분야 및 프로젝트
            </h4>
          </div>
          
          <div className="bg-[#1A1A1F] border border-white/[0.07] p-6 sm:p-8 rounded-xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              
              {/* 분야별 콘텐츠 */}
              <div className="space-y-3">
                <div className="border-b border-white/[0.07] pb-2">
                  <span className="font-bold text-white text-sm md:text-base">분야별 콘텐츠</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm md:text-[15px] font-medium text-[#C9C9CF] flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary-red rounded-full shrink-0" />
                    <span>교육 콘텐츠</span>
                  </li>
                  <li className="text-sm md:text-[15px] font-medium text-[#C9C9CF] flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary-red rounded-full shrink-0" />
                    <span>자동차&amp;캠핑 콘텐츠</span>
                  </li>
                  <li className="text-sm md:text-[15px] font-medium text-[#C9C9CF] flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary-red rounded-full shrink-0" />
                    <span>브랜디드 콘텐츠</span>
                  </li>
                </ul>
              </div>
 
              {/* 1인 제작 */}
              <div className="space-y-3">
                <div className="border-b border-white/[0.07] pb-2">
                  <span className="font-bold text-white text-sm md:text-base">1인 제작 역량</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["기획", "촬영", "편집", "채널 운영", "프로젝트 리딩"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-[#16161A] border border-white/[0.06] text-[#C9C9CF] text-xs sm:text-sm font-semibold rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
 
              {/* 팀 프로젝트 */}
              <div className="space-y-3">
                <div className="border-b border-white/[0.07] pb-2">
                  <span className="font-bold text-white text-sm md:text-base">조직 및 인프라 리딩</span>
                </div>
                <ul className="space-y-2 text-sm md:text-[15px] font-normal text-[#C9C9CF]">
                  <li className="leading-snug">
                    • 중견기업 8년 근속, 촬영 팀 관리
                  </li>
                  <li className="leading-snug">
                    • 스튜디오 관리 &amp; 라이브 송출
                  </li>
                  <li className="leading-snug">
                    • 대형 입시 설명회 &amp; 온라인 강좌 운영
                  </li>
                  <li className="leading-snug">
                    • 기획영상 및 1타 강사 촬영 전담
                  </li>
                </ul>
              </div>
 
            </div>
 
            {/* 인하우스PD 전문 */}
            <div className="mt-6 pt-5 border-t border-white/[0.07] flex items-center">
              <div className="bg-[#16161A] border border-white/[0.06] px-4 py-2.5 rounded-xl w-full text-center">
                <span className="text-sm md:text-[15px] font-semibold text-[#C9C9CF]">
                  인하우스PD 전문 역량 기반 콘텐츠 마케팅 총괄
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 인적 사항 (Personal Profile) Section */}
        <div className="mt-8 w-full max-w-4xl relative z-20 text-left">
          <div className="flex items-center space-x-2 mb-3.5">
            <h4 className="text-sm md:text-base font-bold text-white">
              인적 사항
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 bg-[#1A1A1F] border border-white/[0.07] p-5 rounded-xl">
            <div className="p-4 bg-[#16161A] border border-white/[0.05] rounded-xl flex flex-col justify-between">
              <span className="text-xs font-semibold text-[#8A8A93] uppercase tracking-wider">이름</span>
              <span className="text-base md:text-lg font-bold text-white mt-1">{siteTexts.profileName}</span>
            </div>
            <div className="p-4 bg-[#16161A] border border-white/[0.05] rounded-xl flex flex-col justify-between">
              <span className="text-xs font-semibold text-[#8A8A93] uppercase tracking-wider">나이</span>
              <span className="text-base md:text-lg font-bold text-white mt-1">{siteTexts.profileAge}</span>
            </div>
            <div className="p-4 bg-[#16161A] border border-white/[0.05] rounded-xl flex flex-col justify-between overflow-hidden">
              <span className="text-xs font-semibold text-[#8A8A93] uppercase tracking-wider">이메일 문의</span>
              <a href={`mailto:${siteTexts.profileEmail}`} className="text-sm md:text-base font-bold text-white hover:text-primary-red transition-colors mt-1 truncate block" title={siteTexts.profileEmail}>{siteTexts.profileEmail}</a>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          <button
            id="hero-portfolio-btn"
            onClick={onPortfolioCall}
            className="group px-8 py-3.5 bg-primary-red hover:bg-[#c21c26] text-white text-sm sm:text-base font-headline font-bold tracking-wider uppercase rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Play size={14} fill="currentColor" className="text-white group-hover:translate-x-0.5 transition-transform" />
            <span>PORTFOLIO 작업물 보러가기</span>
          </button>
        </div>

      </div>

      {/* Right Scroll Indicator */}
      <div className="absolute right-6 md:right-12 bottom-12 z-20 hidden md:flex flex-col items-center space-y-3">
        <span className="font-headline text-xs tracking-widest uppercase font-bold text-[#8A8A93] rotate-90 origin-bottom translate-y-[-16px]">
          SCROLL
        </span>
        <button
          onClick={onPortfolioCall}
          className="p-2.5 bg-[#1A1A1F] border border-white/[0.08] text-[#C9C9CF] hover:text-white rounded-full transition-colors cursor-pointer"
          title="밑으로 스크롤"
        >
          <ArrowDown size={14} />
        </button>
      </div>

      {/* YouTube Showreel Video Modal */}
      <AnimatePresence>
        {isShowreelOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsShowreelOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl bg-stone-950 rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-stone-900 text-white">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-stone-400" />
                  <span className="text-xs sm:text-sm font-bold tracking-tight">SHOWREEL 90s — 이주원 PD</span>
                </div>
                <button
                  onClick={() => setIsShowreelOpen(false)}
                  className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="닫기"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Responsive 16:9 YouTube Embed */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${DEFAULT_SHOWREEL_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="이주원 PD 쇼릴"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
