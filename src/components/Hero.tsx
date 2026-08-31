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
          className="text-[30px] sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-white leading-[1.2] max-w-4xl" 
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

        {/* Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          <button
            id="hero-portfolio-btn"
            onClick={onPortfolioCall}
            className="group px-8 py-3.5 bg-primary-red hover:bg-[#c21c26] text-white text-sm sm:text-base font-headline font-bold tracking-wider uppercase rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-primary-red/20"
          >
            <Play size={14} fill="currentColor" className="text-white group-hover:translate-x-0.5 transition-transform" />
            <span>대표 포트폴리오 작업물 보러가기</span>
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
