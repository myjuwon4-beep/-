/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect } from "react";
import { Play, ArrowDown, Film, Disc, User } from "lucide-react";
import { DEFAULT_HERO_VIDEO, defaultSiteTexts } from "../data";
import { SiteTexts } from "../types";

interface HeroProps {
  onPortfolioCall: () => void;
  siteTexts?: SiteTexts;
}

export default function Hero({ onPortfolioCall, siteTexts = defaultSiteTexts }: HeroProps) {
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
          className="absolute min-w-full min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.03] opacity-65"
          poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600"
        >
          <source src={DEFAULT_HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Ambient Dark Gradients Layer (Netflix Dark Vignette Vibe) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-cinema-black via-black/30 to-black/80" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-cinema-black/80 via-transparent to-cinema-black/40" />
      </div>

      {/* Hero Typography Overlays */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center items-start text-left mt-12 md:mt-20">
        
        {/* Decorative Tagline */}
        <div className="flex items-center space-x-2.5 mb-5 animate-fade-in">
          <span className="w-10 h-[1.5px] bg-primary-red" />
          <span className="text-primary-red text-sm md:text-base font-bold tracking-[0.25em] font-display">
            {siteTexts.heroTagline}
          </span>
          <Film size={14} className="text-primary-red/90 animate-spin-slow" />
        </div>

        {/* Big Displays Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95] max-w-4xl" id="hero-title">
          {siteTexts.heroTitle}<br />
          <span className="text-white relative inline-block">
            {siteTexts.heroSubtitle}
            <span className="absolute bottom-0 left-0 w-1/3 h-[4px] md:h-[6px] bg-primary-red" />
          </span>
        </h1>

        {/* Brand Slogan */}
        <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-normal text-white/95 max-w-4xl font-display tracking-wide break-keep whitespace-pre-line">
          {siteTexts.heroSlogan}
        </p>

        {/* Key Competences */}
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3.5 text-sm md:text-base text-white/85 tracking-wider bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/5">
          <span className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-primary-red rounded-full animate-ping" />
            <span className="font-semibold text-white">{siteTexts.heroCompetence1}</span>
          </span>
          <span className="text-white/30">|</span>
          <span className="font-medium">{siteTexts.heroCompetence2}</span>
        </div>

        {/* 인적 사항 (Personal Profile) Section */}
        <div className="mt-8 w-full max-w-4xl relative z-20">
          <h4 className="text-sm font-display font-medium tracking-[0.2em] text-white/50 mb-3 uppercase">
            PERSONNEL METRICS <span className="text-neutral-400">/</span> 인적 사항
          </h4>

          {/* 이력서 사진 (ID Photo) 단독 프레임 - 상단 배치 */}
          <div className="flex justify-center sm:justify-start mb-5">
            <div className="p-3 bg-cinema-black/90 border border-white/10 rounded-lg shadow-2xl flex flex-col items-center">
              <div className="relative w-28 h-36 md:w-32 md:h-40 bg-neutral-950 border border-white/20 hover:border-primary-red/50 rounded overflow-hidden shadow-2xl transition-all duration-300 flex items-center justify-center">
                {siteTexts.profileImage ? (
                  <img 
                    src={siteTexts.profileImage} 
                    alt="증명사진" 
                    className="w-full h-full object-cover font-sans" 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = parent.querySelector(".profile-fallback");
                        if (fallback) {
                          fallback.classList.remove("hidden");
                        }
                      }
                    }}
                  />
                ) : null}
                <div className={`profile-fallback ${siteTexts.profileImage ? "hidden" : ""} absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-950 text-neutral-500 p-2 text-center`}>
                  <User className="w-10 h-10 text-neutral-600 mb-1" />
                  <span className="text-[8px] font-mono tracking-widest text-neutral-500 uppercase">NO PHOTO</span>
                </div>
              </div>
            </div>
          </div>

          {/* 인적사항 이름 나이 연락처 이메일 인포 그리드 - 사진 아래 위치 */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-black/70 backdrop-blur-md p-5 rounded-lg border border-white/10 shadow-2xl">
            <div className="p-4 bg-cinema-black/80 border border-white/10 hover:border-white/30 transition-all duration-300 rounded flex flex-col justify-between shadow-inner">
              <span className="text-xs text-neutral-300 tracking-widest font-mono font-bold uppercase">이름</span>
              <span className="text-xl font-bold text-white mt-2 font-display">{siteTexts.profileName}</span>
            </div>
            <div className="p-4 bg-cinema-black/80 border border-white/10 hover:border-white/30 transition-all duration-300 rounded flex flex-col justify-between shadow-inner">
              <span className="text-xs text-neutral-300 tracking-widest font-mono font-bold uppercase">나이</span>
              <span className="text-xl font-bold text-white mt-2 font-display">{siteTexts.profileAge}</span>
            </div>
            <div className="p-4 bg-cinema-black/80 border border-white/10 hover:border-white/30 transition-all duration-300 rounded flex flex-col justify-between shadow-inner">
              <span className="text-xs text-neutral-300 tracking-widest font-mono font-bold uppercase">연락처</span>
              <a href={`tel:${siteTexts.profilePhone}`} className="text-lg md:text-xl font-bold text-white hover:text-neutral-300 transition-all mt-2 tracking-wide block">{siteTexts.profilePhone}</a>
            </div>
            <div className="p-4 bg-cinema-black/80 border border-white/10 hover:border-white/30 transition-all duration-300 rounded flex flex-col justify-between shadow-inner overflow-hidden">
              <span className="text-xs text-neutral-300 tracking-widest font-mono font-bold uppercase">이메일</span>
              <a href={`mailto:${siteTexts.profileEmail}`} className="text-base md:text-lg font-bold text-white hover:text-neutral-300 transition-all mt-2 truncate block" title={siteTexts.profileEmail}>{siteTexts.profileEmail}</a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-portfolio-btn"
            onClick={onPortfolioCall}
            className="group px-10 py-4 bg-primary-red hover:bg-primary-red/90 text-white font-display text-sm md:text-base tracking-[0.2em] font-bold transition-all duration-300 rounded shadow-lg shadow-primary-red/25 hover:shadow-primary-red/50 flex items-center justify-center space-x-2 cursor-pointer border border-primary-red hover:scale-[1.03]"
          >
            <Play size={14} fill="currentColor" className="text-white group-hover:translate-x-0.5 transition-transform" />
            <span>PORTFOLIO 바로가기</span>
          </button>
        </div>

      </div>

      {/* Right Scroll Indicator */}
      <div className="absolute right-6 md:right-12 bottom-12 z-20 hidden md:flex flex-col items-center space-y-4">
        <span className="font-display text-[11px] tracking-[0.3em] text-white/60 rotate-90 origin-bottom translate-y-[-20px]">
          SCROLL
        </span>
        <button
          onClick={onPortfolioCall}
          className="p-2.5 border border-white/30 hover:border-primary-red text-white/70 hover:text-white rounded-full transition-colors duration-200 animate-bounce"
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
