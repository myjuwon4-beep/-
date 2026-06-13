/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect } from "react";
import { Play, ArrowDown, Film, Disc, User, Printer } from "lucide-react";
import { DEFAULT_HERO_VIDEO, defaultSiteTexts } from "../data";
import { SiteTexts } from "../types";

interface HeroProps {
  onPortfolioCall: () => void;
  onPdfClick: () => void;
  siteTexts?: SiteTexts;
}

export default function Hero({ onPortfolioCall, onPdfClick, siteTexts = defaultSiteTexts }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt autoplay safety checks
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay resisted by browser, falling back properly.");
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cinema-black py-24 lg:py-0"
    >
      {/* Background Cinematic Video Loop */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.03] opacity-30"
          poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600"
        >
          <source src={DEFAULT_HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Ambient Light Gradients Layer (Elegant Light/Airy Vibe) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-cinema-black via-cinema-black/75 to-cinema-black/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-cinema-black/90 via-transparent to-[#F8FAFC]/40" />
      </div>

      {/* Hero Typography Overlays */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center items-start text-left mt-12 md:mt-20">
        
        {/* Decorative Tagline */}
        {siteTexts.heroTagline && siteTexts.heroTagline.trim() !== "" && (
          <div className="flex items-center space-x-2.5 mb-5 animate-fade-in">
            <span className="w-10 h-[2px] bg-primary-red" />
            <span className="text-primary-red text-base md:text-lg font-extrabold tracking-[0.25em] font-display">
              {siteTexts.heroTagline}
            </span>
            <Film size={15} className="text-primary-red/90 animate-spin-slow" />
          </div>
        )}

        {/* Big Displays Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[0.95] max-w-4xl" id="hero-title">
          {siteTexts.heroTitle}<br />
          <span className="text-slate-900 relative inline-block mt-1">
            {siteTexts.heroSubtitle}
            <span className="absolute bottom-0 left-0 w-1/3 h-[4px] md:h-[6px] bg-primary-red" />
          </span>
        </h1>

        {/* Brand Slogan */}
        <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-850 max-w-4xl font-display tracking-wide break-keep whitespace-pre-line font-bold">
          {siteTexts.heroSlogan}
        </p>

        {/* Key Competences */}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3.5 text-sm md:text-base text-slate-700 tracking-wider bg-white/80 backdrop-blur-md p-4 md:p-5 rounded-lg border border-slate-200 shadow-md">
          <span className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-primary-red rounded-full animate-pulse" />
            <span className="font-black text-slate-900 text-sm md:text-base">{siteTexts.heroCompetence1}</span>
          </span>
          <span className="text-slate-300">|</span>
          <span className="font-extrabold text-slate-600 text-sm md:text-base">{siteTexts.heroCompetence2}</span>
        </div>

        {/* 핵심 성과 지표 (KEY PERFORMANCE INDICATORS) */}
        <div className="mt-12 w-full max-w-4xl relative z-20">
          <h4 className="text-[13px] md:text-sm font-display font-black tracking-[0.2em] text-[#E30613] mb-4 uppercase flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E30613] animate-pulse" />
            <span>핵심 성과 지표</span>
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: (
                  <span className="text-slate-600 group-hover:text-slate-800 font-bold transition-colors">
                    <strong className="text-[#E30613] font-black text-[13px] md:text-[15px] mr-1">최고</strong> 콘텐츠 흥행
                  </span>
                ),
                metric: "91만뷰",
                subDetail: "인스타 릴스 91만 / 유튜브 43만 기록",
                tag: "트래픽 극대화",
                tagStyle: "text-[#E30613] bg-[#E30613]/10 border-[#E30613]/25",
                glow: "hover:border-[#E30613]/50 hover:bg-white border-slate-200/80 shadow-sm"
              },
              {
                label: (
                  <span className="text-slate-600 group-hover:text-slate-800 font-bold transition-colors">
                    <strong className="text-amber-600 font-black text-[13px] md:text-[15px] mr-1">비인기</strong> 소재 유튜브 성장
                  </span>
                ),
                metric: "7200명",
                subDetail: "1년 만에 2천대에서 7.2천 돌파",
                tag: "260% 성장",
                tagStyle: "text-amber-600 bg-amber-500/10 border-amber-500/25",
                glow: "hover:border-amber-500/50 hover:bg-white border-slate-200/80 shadow-sm"
              },
              {
                label: (
                  <span className="text-slate-600 group-hover:text-slate-800 font-bold transition-colors">
                    비즈니스 <strong className="text-[#10B981] font-black text-[13px] md:text-[15px] mx-1">전환력</strong> 가치
                  </span>
                ),
                metric: "+48%",
                subDetail: "레저 용품 구매 문의율 대폭 상승 견인",
                tag: "매출 직행성",
                tagStyle: "text-emerald-650 bg-[#10B981]/10 border-[#10B981]/25",
                glow: "hover:border-[#10B981]/50 hover:bg-white border-slate-200/80 shadow-sm"
              }
            ].map((s, idx) => (
              <div
                key={idx}
                className={`p-6 bg-white border rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col justify-between group shadow-sm ${s.glow}`}
              >
                <div className="flex items-center justify-between gap-2 mb-3 w-full">
                  <span className="text-xs md:text-sm font-extrabold tracking-normal whitespace-nowrap">{s.label}</span>
                  <span className={`text-[10px] sm:text-xs font-black px-2 py-0.5 rounded border shadow-sm transition-colors duration-200 whitespace-nowrap shrink-0 ${s.tagStyle}`}>
                    {s.tag}
                  </span>
                </div>
                <div className="my-2">
                  <span className="text-3xl md:text-4xl font-display font-black text-slate-800">
                    {s.metric}
                  </span>
                </div>
                <p className="text-sm md:text-[15px] text-slate-600 font-extrabold tracking-wide mt-2 leading-relaxed group-hover:text-slate-800 transition-colors duration-200">{s.subDetail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 인적 사항 (Personal Profile) Section */}
        <div className="mt-12 w-full max-w-4xl relative z-20">
          <h4 className="text-[13px] md:text-sm font-display font-black tracking-[0.2em] text-slate-400 mb-4 uppercase">
            인적 사항
          </h4>

          {/* 인적사항 이름 나이 연락처 이메일 인포 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-white/90 backdrop-blur-md p-5 rounded-lg border border-slate-250 shadow-lg">
            <div className="p-4 bg-slate-50 border border-slate-200/40 hover:border-primary-red/20 transition-all duration-300 rounded flex flex-col justify-between shadow-sm">
              <span className="text-xs md:text-sm text-slate-500 tracking-widest font-mono font-black uppercase">이름</span>
              <span className="text-xl md:text-2xl font-black text-slate-800 mt-2 font-display">{siteTexts.profileName}</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200/40 hover:border-primary-red/20 transition-all duration-300 rounded flex flex-col justify-between shadow-sm">
              <span className="text-xs md:text-sm text-slate-500 tracking-widest font-mono font-black uppercase">나이</span>
              <span className="text-xl md:text-2xl font-black text-slate-800 mt-2 font-display">{siteTexts.profileAge}</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200/40 hover:border-primary-red/20 transition-all duration-300 rounded flex flex-col justify-between shadow-sm">
              <span className="text-xs md:text-sm text-slate-500 tracking-widest font-mono font-black uppercase">연락처</span>
              <a href={`tel:${siteTexts.profilePhone}`} className="text-[19px] md:text-xl font-black text-slate-800 hover:text-primary-red transition-all mt-2 tracking-wide block">{siteTexts.profilePhone}</a>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200/40 hover:border-primary-red/20 transition-all duration-300 rounded flex flex-col justify-between shadow-sm overflow-hidden">
              <span className="text-xs md:text-sm text-slate-500 tracking-widest font-mono font-black uppercase">이메일</span>
              <a href={`mailto:${siteTexts.profileEmail}`} className="text-[15px] md:text-lg font-black text-slate-800 hover:text-primary-red transition-all mt-2 truncate block" title={siteTexts.profileEmail}>{siteTexts.profileEmail}</a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-portfolio-btn"
            onClick={onPortfolioCall}
            className="group px-10 py-4 bg-primary-red hover:bg-primary-red/90 text-white font-display text-base tracking-[0.2em] font-extrabold transition-all duration-300 rounded shadow-lg shadow-primary-red/20 flex items-center justify-center space-x-2 cursor-pointer border border-primary-red hover:scale-[1.03]"
          >
            <Play size={15} fill="currentColor" className="text-white group-hover:translate-x-0.5 transition-transform" />
            <span>PORTFOLIO 바로가기</span>
          </button>
          <button
            id="hero-pdf-btn"
            onClick={onPdfClick}
            className="group px-10 py-4 bg-white hover:bg-slate-50 border border-slate-300 hover:border-primary-red/85 text-slate-800 hover:text-primary-red font-display text-base tracking-[0.2em] font-extrabold transition-all duration-300 rounded shadow-md flex items-center justify-center space-x-2 cursor-pointer hover:scale-[1.03] no-print"
            title="PDF 다운로드 / 인쇄 안내 팝업 열기"
          >
            <Printer size={16} />
            <span>PDF 이력서 저장/인쇄</span>
          </button>
        </div>

      </div>

      {/* Right Scroll Indicator */}
      <div className="absolute right-6 md:right-12 bottom-12 z-20 hidden md:flex flex-col items-center space-y-4">
        <span className="font-display text-xs tracking-[0.3em] font-bold text-slate-400 rotate-90 origin-bottom translate-y-[-20px]">
          스크롤
        </span>
        <button
          onClick={onPortfolioCall}
          className="p-3 border border-white/10 hover:border-primary-red text-slate-400 hover:text-primary-red bg-slate-900/60 rounded-full transition-colors duration-200 animate-bounce shadow-sm"
          title="밑으로 스크롤"
        >
          <ArrowDown size={16} />
        </button>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-cinema-black to-transparent z-10" />
    </section>
  );
}
