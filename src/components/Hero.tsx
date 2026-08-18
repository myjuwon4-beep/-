/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect } from "react";
import { Play, ArrowDown, Film, Disc, User, Printer, Layers, Users, Briefcase, Radio, TrendingUp, BarChart3, Target, Award } from "lucide-react";
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
          {siteTexts.heroSubtitle && siteTexts.heroSubtitle.trim() !== "" ? (
            <>
              {siteTexts.heroTitle}<br />
              <span className="text-slate-900 relative inline-block mt-1">
                {siteTexts.heroSubtitle}
                <span className="absolute bottom-0 left-0 w-1/3 h-[4px] md:h-[6px] bg-primary-red" />
              </span>
            </>
          ) : (
            <span className="relative inline-block pb-3 md:pb-4">
              {(() => {
                const titleStr = siteTexts.heroTitle || "Content Marketer";
                const highlightWord = titleStr.includes("Content") ? "Content" : titleStr.includes("콘텐츠") ? "콘텐츠" : titleStr.includes("Marketer") ? "Marketer" : "";
                if (highlightWord) {
                  const index = titleStr.indexOf(highlightWord);
                  const before = titleStr.substring(0, index);
                  const after = titleStr.substring(index + highlightWord.length);
                  return (
                    <>
                      {before}
                      <span className="relative">
                        {highlightWord}
                        <span className="absolute -bottom-3 md:-bottom-4 left-0 w-full h-[4px] md:h-[6px] bg-primary-red" />
                      </span>
                      {after}
                    </>
                  );
                }
                return (
                  <>
                    <span className="relative">
                      {titleStr}
                      <span className="absolute -bottom-3 md:-bottom-4 left-0 w-full h-[4px] md:h-[6px] bg-primary-red" />
                    </span>
                  </>
                );
              })()}
            </span>
          )}
        </h1>

        {/* Brand Slogan */}
        <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-850 max-w-4xl font-display tracking-wide break-keep whitespace-pre-line font-bold">
          {siteTexts.heroSlogan}
        </p>

        {/* Core Career & Performance Summary Card */}
        <div className="mt-8 w-full max-w-4xl bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-xl border border-slate-200 shadow-xl relative overflow-hidden">
          {/* Aesthetic premium brand red top line */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-indigo-500 via-[#E30613] to-emerald-500" />
          
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight leading-none">
              핵심 역량 및 성과 요약
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Left Section: Corporate Leadership & Infrastructure (Indigo theme) */}
            <div className="space-y-4 lg:border-r lg:border-slate-150 lg:pr-8">
              <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
                <span className="px-3 py-1 bg-indigo-50 border border-indigo-150 text-indigo-700 text-xs md:text-sm font-black rounded shadow-sm">
                  조직 운영 & 스튜디오 인프라
                </span>
                <span className="text-sm md:text-base font-black text-slate-700">중견기업 등 핵심 전문성</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50/80 transition-colors">
                  <Briefcase className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-base md:text-lg font-black text-slate-900">콘텐츠 제작 조직 운영</p>
                    <p className="text-sm md:text-[15px] text-slate-600 font-extrabold mt-1">촬영팀 아르바이트 및 파견직 관리, 제작 총괄</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50/80 transition-colors">
                  <Film className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-base md:text-lg font-black text-slate-900">촬영팀 및 스튜디오 리딩</p>
                    <p className="text-sm md:text-[15px] text-slate-600 font-extrabold mt-1">자사 스튜디오 총 관리 및 리소스 운용 총괄</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50/80 transition-colors">
                  <Radio className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-base md:text-lg font-black text-slate-900">라이브 시스템 구축</p>
                    <p className="text-sm md:text-[15px] text-slate-600 font-extrabold mt-1">온라인 라이브 송출 가이드라인 수립 및 고도화</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: New Media Growth & Performance (Emerald theme) */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-2 border-b border-slate-100">
                <span className="px-3 py-1 bg-emerald-50 border border-emerald-150 text-emerald-700 text-xs md:text-sm font-black rounded shadow-sm">
                  채널 성장 & 마케팅 성과
                </span>
                <span className="text-xs md:text-sm font-black text-slate-700">기업 홍보 및 콘텐츠 마케팅 성과</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50/80 transition-colors">
                  <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-base md:text-lg font-black text-slate-900">
                      유튜브 최고 <span className="text-emerald-700 border-b-2 border-emerald-500/20 px-0.5 font-black">45만 회</span> & 인스타 최고 <span className="text-emerald-700 border-b-2 border-emerald-500/20 px-0.5 font-black">91만 회</span>
                    </p>
                    <p className="text-sm md:text-[15px] text-slate-600 font-extrabold mt-1">고효율 릴스/쇼츠 및 기획 연출 전략으로 최고치 조회수 성과</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50/80 transition-colors">
                  <BarChart3 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-base md:text-lg font-black text-slate-900">
                      콘텐츠 기반 문의율 <span className="text-emerald-750 border-b-2 border-emerald-500/20 px-0.5 font-black">48% 증가</span>
                    </p>
                    <p className="text-sm md:text-[15px] text-slate-600 font-extrabold mt-1">고객 인바운드 문의율을 전년 동기 대비 대폭 성장</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-slate-50/80 transition-colors">
                  <Target className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-base md:text-lg font-black text-slate-900 leading-snug">
                      니치 마켓 상품(카라반·트레일러·견인장치) <br />
                      인지도 및 가치 극대화
                    </p>
                    <p className="text-sm md:text-[15px] text-slate-600 font-extrabold mt-1 leading-relaxed">
                      유튜브(2,000 → 7,900명), 인스타(113 → 1,800명) <br />
                      트래픽 성장 및 단기간 유입 확보
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-slate-100 flex justify-center">
            <div className="inline-flex items-center space-x-2.5 px-6 py-2.5 rounded-full bg-slate-900 border border-slate-800 shadow-md transition-all duration-300 transform hover:scale-[1.01]">
              <Award className="w-5 h-5 text-[#E30613] shrink-0 animate-pulse" />
              <span className="text-sm md:text-base font-black text-slate-100 tracking-wide">
                기획 · 촬영 · 편집 · 채널 운영 전 영역 올라운더 역량 보유
              </span>
            </div>
          </div>
        </div>

        {/* 주 경력 사항 (MAIN EXPERIENCE) */}
        <div className="mt-12 w-full max-w-4xl relative z-20">
          <h4 className="text-base md:text-lg font-black tracking-widest text-slate-800 mb-4 uppercase flex items-center space-x-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700 animate-pulse" />
            <span className="font-extrabold text-slate-800 text-base md:text-lg">주 경력 사항</span>
          </h4>
          
          <div className="bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-xl border border-slate-200 shadow-xl relative overflow-hidden">
            {/* Elegant dark charcoal accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-slate-800" />
 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              
              {/* 분야별 콘텐츠 */}
              <div className="space-y-3.5">
                <div className="flex items-center space-x-2 border-b border-slate-100 pb-2">
                  <Layers className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span className="font-black text-slate-900 text-base md:text-lg">분야별 콘텐츠</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-[15px] md:text-base font-extrabold text-slate-800">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0" />
                    <span>교육 콘텐츠</span>
                  </li>
                  <li className="flex items-center space-x-2 text-[15px] md:text-base font-extrabold text-slate-800">
                    <span className="w-1.5 h-1.5 bg-indigo-50 rounded-full border border-indigo-400 shrink-0" />
                    <span>자동차&캠핑 콘텐츠</span>
                  </li>
                  <li className="flex items-center space-x-2 text-[15px] md:text-base font-extrabold text-slate-800">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0" />
                    <span>브랜디드 콘텐츠</span>
                  </li>
                </ul>
              </div>
 
              {/* 1인 제작 */}
              <div className="space-y-3.5">
                <div className="flex items-center space-x-2 border-b border-slate-100 pb-2">
                  <User className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="font-black text-slate-900 text-base md:text-lg">1인 제작</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["기획", "촬영", "편집", "채널 운영", "프로젝트 리딩"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-xs md:text-sm font-black rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
 
              {/* 팀 프로젝트 */}
              <div className="space-y-3.5">
                <div className="flex items-center space-x-2 border-b border-slate-100 pb-2">
                  <Users className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="font-black text-slate-900 text-base md:text-lg">팀 프로젝트</span>
                </div>
                <ul className="space-y-2 text-sm md:text-[15px] font-extrabold text-slate-800">
                  <li className="leading-snug flex items-start">
                    <span className="text-slate-400 mr-2 shrink-0">•</span> 
                    <span>촬영팀 인력 관리 및 프로젝트 리딩</span>
                  </li>
                  <li className="leading-snug flex items-start">
                    <span className="text-slate-400 mr-2 shrink-0">•</span> 
                    <span>스튜디오 관리 & 라이브 송출</span>
                  </li>
                  <li className="leading-snug flex items-start">
                    <span className="text-slate-400 mr-2 shrink-0">•</span> 
                    <span>대형 입시 설명회 & 온라인 강좌 운영</span>
                  </li>
                  <li className="leading-snug flex items-start">
                    <span className="text-slate-400 mr-2 shrink-0">•</span> 
                    <span>기획영상 및 1타 강사 촬영 전담</span>
                  </li>
                </ul>
              </div>
 
            </div>
 
            {/* 인하우스PD 전문 */}
            <div className="mt-6 pt-5 border-t border-slate-150 flex items-center">
              <div className="flex items-center space-x-3 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-lg w-full shadow-inner">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-sm md:text-base font-black text-slate-900">
                  인하우스PD 전문
                </span>
              </div>
            </div>
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
