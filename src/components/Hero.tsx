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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F8F9FA] pt-28 pb-20 lg:pt-32 lg:pb-24"
    >
      {/* Background Cinematic Video Loop */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute min-w-full min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-15"
          poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600"
        >
          <source src={DEFAULT_HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA]/60 via-[#F8F9FA]/80 to-[#F8F9FA]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center items-start text-left">
        
        {/* Decorative Tagline */}
        {siteTexts.heroTagline && siteTexts.heroTagline.trim() !== "" && (
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-900 text-white rounded-full text-xs font-semibold tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
            <span>{siteTexts.heroTagline}</span>
          </div>
        )}

        {/* Big Display Title */}
        <h1 className="font-display text-2xl min-[400px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight whitespace-nowrap" id="hero-title">
          {siteTexts.heroSubtitle && siteTexts.heroSubtitle.trim() !== "" ? (
            <>
              <span className="whitespace-nowrap">{siteTexts.heroTitle}</span><br />
              <span className="text-slate-900">
                {siteTexts.heroSubtitle}
              </span>
            </>
          ) : (
            <span className="whitespace-nowrap">
              {siteTexts.heroTitle || "Content Marketer & PD"}
            </span>
          )}
        </h1>

        {/* Brand Slogan */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-medium text-slate-600 max-w-3xl leading-relaxed break-keep whitespace-pre-line">
          {siteTexts.heroSlogan}
        </p>

        {/* Core Career & Performance Summary Card */}
        <div className="mt-10 w-full max-w-4xl bg-white p-7 md:p-9 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-7">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
              <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                핵심 역량 및 성과 요약
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 font-medium hidden sm:inline-block">OVERVIEW</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Left Section: Corporate Leadership & Infrastructure */}
            <div className="space-y-4 lg:border-r lg:border-slate-100 lg:pr-8">
              <div className="flex items-center space-x-2 pb-1">
                <span className="px-2.5 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-md">
                  조직 운영 & 스튜디오 인프라
                </span>
                <span className="text-xs font-semibold text-slate-500">중견기업 등 핵심 전문성</span>
              </div>
              <div className="space-y-3 pt-1">
                <div className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <Briefcase className="w-4 h-4 text-slate-700 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm md:text-base font-bold text-slate-900">콘텐츠 제작 조직 운영</p>
                    <p className="text-xs md:text-sm text-slate-500 font-medium mt-0.5">촬영팀 아르바이트 및 파견직 관리, 제작 총괄</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <Film className="w-4 h-4 text-slate-700 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm md:text-base font-bold text-slate-900">촬영팀 및 스튜디오 리딩</p>
                    <p className="text-xs md:text-sm text-slate-500 font-medium mt-0.5">자사 스튜디오 총 관리 및 리소스 운용 총괄</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <Radio className="w-4 h-4 text-slate-700 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm md:text-base font-bold text-slate-900">라이브 시스템 구축</p>
                    <p className="text-xs md:text-sm text-slate-500 font-medium mt-0.5">온라인 라이브 송출 가이드라인 수립 및 고도화</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section: New Media Growth & Performance */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 pb-1">
                <span className="px-2.5 py-1 bg-red-50 text-primary-red text-xs font-bold rounded-md">
                  채널 성장 & 마케팅 성과
                </span>
                <span className="text-xs font-semibold text-slate-500">기업 홍보 및 콘텐츠 마케팅 성과</span>
              </div>
              <div className="space-y-3 pt-1">
                <div className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <TrendingUp className="w-4 h-4 text-primary-red shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm md:text-base font-bold text-slate-900">
                      유튜브 최고 <span className="font-extrabold text-primary-red">54만 회</span> & 인스타 최고 <span className="font-extrabold text-primary-red">91만 회</span>
                    </p>
                    <p className="text-xs md:text-sm text-slate-500 font-medium mt-0.5">고효율 릴스/쇼츠 및 기획 연출 전략으로 최고치 조회수 성과</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <BarChart3 className="w-4 h-4 text-primary-red shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm md:text-base font-bold text-slate-900">
                      콘텐츠 기반 문의율 <span className="font-extrabold text-primary-red">48% 증가</span>
                    </p>
                    <p className="text-xs md:text-sm text-slate-500 font-medium mt-0.5">고객 인바운드 문의율을 전년 동기 대비 대폭 성장</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                  <Target className="w-4 h-4 text-primary-red shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm md:text-base font-bold text-slate-900 leading-snug">
                      니치 마켓 상품(카라반·트레일러·견인장치) 인지도 및 가치 극대화
                    </p>
                    <p className="text-xs md:text-sm text-slate-500 font-medium mt-0.5 leading-relaxed">
                      유튜브(2,000 → 8,000명), 인스타(113 → 1,800명) 트래픽 성장 및 단기간 유입 확보
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-slate-100 flex justify-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200">
              <Award className="w-4 h-4 text-primary-red shrink-0" />
              <span className="text-xs md:text-sm font-bold text-slate-800">
                기획 · 촬영 · 편집 · 채널 운영 전 영역 올라운더 역량 보유
              </span>
            </div>
          </div>
        </div>

        {/* 주 경력 사항 (MAIN EXPERIENCE) */}
        <div className="mt-10 w-full max-w-4xl relative z-20">
          <div className="flex items-center space-x-2 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-slate-900" />
            <h4 className="text-sm md:text-base font-bold text-slate-900">
              주 경력 사항
            </h4>
          </div>
          
          <div className="bg-white p-7 md:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              
              {/* 분야별 콘텐츠 */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 border-b border-slate-100 pb-2">
                  <Layers className="w-4 h-4 text-slate-700 shrink-0" />
                  <span className="font-bold text-slate-900 text-sm md:text-base">분야별 콘텐츠</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-xs md:text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0" />
                    <span>교육 콘텐츠</span>
                  </li>
                  <li className="flex items-center space-x-2 text-xs md:text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0" />
                    <span>자동차&캠핑 콘텐츠</span>
                  </li>
                  <li className="flex items-center space-x-2 text-xs md:text-sm font-medium text-slate-700">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0" />
                    <span>브랜디드 콘텐츠</span>
                  </li>
                </ul>
              </div>
 
              {/* 1인 제작 */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 border-b border-slate-100 pb-2">
                  <User className="w-4 h-4 text-slate-700 shrink-0" />
                  <span className="font-bold text-slate-900 text-sm md:text-base">1인 제작</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["기획", "촬영", "편집", "채널 운영", "프로젝트 리딩"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
 
              {/* 팀 프로젝트 */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 border-b border-slate-100 pb-2">
                  <Users className="w-4 h-4 text-slate-700 shrink-0" />
                  <span className="font-bold text-slate-900 text-sm md:text-base">팀 프로젝트</span>
                </div>
                <ul className="space-y-1.5 text-xs md:text-sm font-medium text-slate-600">
                  <li className="leading-snug flex items-start">
                    <span className="text-slate-400 mr-2 shrink-0">•</span> 
                    <span>중견기업 8년 근속, 촬영 팀 관리</span>
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
            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center">
              <div className="flex items-center space-x-2.5 bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-lg w-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-xs md:text-sm font-bold text-slate-800">
                  인하우스PD 전문
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 인적 사항 (Personal Profile) Section */}
        <div className="mt-10 w-full max-w-4xl relative z-20">
          <div className="flex items-center space-x-2 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-slate-900" />
            <h4 className="text-sm md:text-base font-bold text-slate-900">
              인적 사항
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="p-3.5 bg-slate-50/70 border border-slate-150 rounded-xl flex flex-col justify-between">
              <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">이름</span>
              <span className="text-base md:text-lg font-bold text-slate-900 mt-1">{siteTexts.profileName}</span>
            </div>
            <div className="p-3.5 bg-slate-50/70 border border-slate-150 rounded-xl flex flex-col justify-between">
              <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">나이</span>
              <span className="text-base md:text-lg font-bold text-slate-900 mt-1">{siteTexts.profileAge}</span>
            </div>
            <div className="p-3.5 bg-slate-50/70 border border-slate-150 rounded-xl flex flex-col justify-between">
              <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">연락처</span>
              <a href={`tel:${siteTexts.profilePhone}`} className="text-sm md:text-base font-bold text-slate-900 hover:text-primary-red transition-colors mt-1 block truncate">{siteTexts.profilePhone}</a>
            </div>
            <div className="p-3.5 bg-slate-50/70 border border-slate-150 rounded-xl flex flex-col justify-between overflow-hidden">
              <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">이메일</span>
              <a href={`mailto:${siteTexts.profileEmail}`} className="text-xs md:text-sm font-bold text-slate-900 hover:text-primary-red transition-colors mt-1 truncate block" title={siteTexts.profileEmail}>{siteTexts.profileEmail}</a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-portfolio-btn"
            onClick={onPortfolioCall}
            className="group px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-sm hover:shadow-md"
          >
            <Play size={14} fill="currentColor" className="text-white group-hover:translate-x-0.5 transition-transform" />
            <span>PORTFOLIO 바로가기</span>
          </button>
        </div>

      </div>

      {/* Right Scroll Indicator */}
      <div className="absolute right-6 md:right-12 bottom-12 z-20 hidden md:flex flex-col items-center space-y-3">
        <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-slate-400 rotate-90 origin-bottom translate-y-[-16px]">
          SCROLL
        </span>
        <button
          onClick={onPortfolioCall}
          className="p-2.5 border border-slate-200 hover:border-slate-400 text-slate-500 hover:text-slate-900 bg-white rounded-full transition-colors shadow-xs"
          title="밑으로 스크롤"
        >
          <ArrowDown size={14} />
        </button>
      </div>
    </section>
  );
}
