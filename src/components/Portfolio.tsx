/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Play, X, Instagram, ExternalLink, Youtube, ChevronDown, ChevronUp } from "lucide-react";
import { PortfolioItem } from "../types";

interface PortfolioProps {
  items: PortfolioItem[];
}

interface FeaturedProject {
  id: string;
  title: string;
  metricBadge?: string;
  format: string;
  problem: string;
  approach: string;
  result: string;
  role: string;
  videoUrl: string;
  imageUrl: string;
  equipment: string;
  client: string;
  description: string;
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "portfolio-long-1",
    title: "PV5 전기차 23시간 전기 테스트",
    metricBadge: "조회수 46만",
    format: "YOUTUBE LONG",
    videoUrl: "https://www.youtube.com/watch?v=5Vhtzdd1Pyw",
    imageUrl: "https://img.youtube.com/vi/5Vhtzdd1Pyw/maxresdefault.jpg",
    problem: "신차 전기 PBV(PV5) 1박 혹한기 차박 시 배터리 방전 및 난방 지속성에 대한 예비 구매자 불안 해소",
    approach: "영하 기온 노지에서 23시간 동안 히터 및 전자기기 연속 가동 실측 필드 테스트 진행",
    result: "유튜브 조회수 46만 회 달성 (구독자 2,000명 시점 대비 채널 최고 롱폼 기록)",
    role: "기획, 촬영, 편집 (1인 총괄 제작)",
    equipment: "오즈모 포켓3, DJI Mini 4 Pro | Premiere Pro",
    client: "K-TRAILER",
    description: "전기 PBV(PV5) 구매를 고려하는 소비자들이 가장 우려하는 1박 캠핑 시 전력 소비량을 검증하기 위해 기획했습니다. 혹한기 환경에서 23시간 동안 히터와 전자기기를 동시 가동하는 실전 필드 테스트로 1인 제작했습니다. 구독자 2,000명 시점에 최고 조회수 46만 회를 기록했습니다."
  },
  {
    id: "portfolio-shorts-2",
    title: "PV5 큐브밴 단기 전시 홍보",
    metricBadge: "조회수 60만",
    format: "SHORTS",
    videoUrl: "https://youtube.com/shorts/hj6aLYEcVeY?si=9U6Cae0QG00QWCsP",
    imageUrl: "https://img.youtube.com/vi/hj6aLYEcVeY/hqdefault.jpg",
    problem: "현대백화점 오프라인 단기 팝업 전시에 직접 방문하지 못하는 가망 고객 대상 신속한 신차 공간감 전달",
    approach: "차량의 내부 구조와 핵심 특화 공간을 1분 이내 숏폼 포맷 및 직관적인 앵글로 1인 전담 제작",
    result: "전시 기간 3일 만에 유튜브 숏폼 조회수 60만 회 달성 및 팝업 현장 유입 극대화",
    role: "기획, 촬영, 편집 (1인 총괄 제작)",
    equipment: "오즈모 포켓3, a7c2 | Premiere Pro",
    client: "K-TRAILER",
    description: "현대백화점 오프라인 팝업에 방문하지 못하는 고객에게 신차 공간을 신속히 소개하기 위해 기획했습니다. 차량의 내부 공간 구조와 특화 기능을 1분 이내 숏폼 포맷으로 1인 제작했습니다. 전시 기간 3일 만에 조회수 60만 회를 달성했습니다."
  },
  {
    id: "portfolio-promo-1",
    title: "[기업홍보]차량시공 기업 홍보 콘텐츠",
    format: "PROMOTION",
    videoUrl: "https://www.youtube.com/watch?v=XM2E0Eqf_8U",
    imageUrl: "https://img.youtube.com/vi/XM2E0Eqf_8U/maxresdefault.jpg",
    problem: "공식 브랜드 영상 부재 해결 및 특수 견인장치 장착 공정 기술력에 대한 대외 신뢰도 제고",
    approach: "제조사(큐브렉)와의 정밀 장착 공정을 드론 및 지상 다각도 앵글로 1인 제작",
    result: "공식 기업 포트폴리오 영상 구축 및 B2B·B2C 인바운드 문의 견인",
    role: "기획, 촬영, 편집 (1인 총괄 제작) · 기업 브랜딩",
    equipment: "Sony a7m3, DJI Mini 4 Pro | Premiere Pro, After Effects",
    client: "K-TRAILER",
    description: "사내 공식 브랜딩 영상의 부재를 해결하고 견인장치 장착 기술력에 대한 기업 신뢰도를 높이기 위해 기획했습니다. 견인장치 제조사 큐브렉과의 협업으로 정밀 장착 공정을 1인 제작(기획·촬영·편집)하여 담아냈습니다."
  },
  {
    id: "portfolio-promo-2",
    title: "한국관광공사 유니크베뉴 | 왕의지밀 홍보 영상",
    format: "PROMOTION",
    videoUrl: "https://www.youtube.com/watch?v=cZLWRn6voS0",
    imageUrl: "https://img.youtube.com/vi/cZLWRn6voS0/maxresdefault.jpg",
    problem: "전통 한옥 호텔의 고유한 공간적 가치와 MICE 유니크베뉴로서의 매력 대외 홍보",
    approach: "항공 드론 뷰와 실내 다각도 시네마틱 앵글로 한국적 건축미와 공간 동선 연출",
    result: "한국관광공사 MICE 공식 홍보 자산 채택 및 기업 신뢰도 제고",
    role: "기획, 항공 드론 및 지상 촬영, 편집 (1인 제작) · 공공기관 프로젝트",
    equipment: "Sony a7m3, DJI Mavic 2 | Premiere Pro, After Effects",
    client: "왕의지밀",
    description: "한국관광공사 프로젝트 현장 지원 중 한옥 호텔 고유의 공간적 가치를 대외에 알릴 영상 자산의 필요성을 느껴 기획했습니다. 호텔 전경 및 한옥 건축미를 항공 드론과 실내 다각도 앵글로 촬영해 1인 제작했습니다."
  },
  {
    id: "portfolio-interview-1",
    title: "무쏘EV 2만km 주행 후기 | 진텍 캐노피",
    format: "INTERVIEW",
    videoUrl: "https://www.youtube.com/watch?v=LleqHF6Zmcs",
    imageUrl: "https://img.youtube.com/vi/LleqHF6Zmcs/hqdefault.jpg",
    problem: "전기 픽업 실주행 전비와 사제 캐노피(진텍) 장착 후 소음·누수 내구성에 대한 구매 의구심 해소",
    approach: "2만km를 실주행한 실제 오너의 가감 없는 솔직한 인터뷰와 디테일 실측 촬영",
    result: "장착 예약 및 제품 문의 전월 대비 30% 이상 증가",
    role: "기획, 섭외, 촬영, 편집 (1인 총괄 제작) · 실오너 인터뷰",
    equipment: "a7c2, 오즈모 포켓3, DJI Mini 4 Pro | Premiere Pro",
    client: "K-TRAILER",
    description: "전기 픽업 실주행 연비와 진텍 캐노피 장착 후 내구성에 대한 예비 구매자의 궁금증을 해소하기 위해 기획했습니다. 2만km를 주행한 실오너를 인터뷰하여 소음과 누수 여부를 사실 그대로 1인 제작했습니다."
  },
  {
    id: "portfolio-live-1",
    title: "[LIVE] 이투스교육 라이브 시스템 구축",
    format: "LIVE",
    videoUrl: "https://youtu.be/XVEqu1hdato",
    imageUrl: "https://img.youtube.com/vi/S6L6kCVd8F4/maxresdefault.jpg",
    problem: "비대면 온라인 전환 시기 무중단 고화질 실시간 생중계 및 방송 송출 인프라 구축",
    approach: "스튜디오와 현장을 잇는 다원 생중계 송출 프로세스 및 1타 강사 라이브 시스템 설계",
    result: "전국 수험생 대상 대형 라이브 무장애 송출 및 방송 가이드라인 표준화",
    role: "라이브 중계 전송 및 방송 시스템 총괄 구축 · 방송 인프라",
    equipment: "Live Streaming Engine, OBS Studio, DeckLink Capture, CANON Cameras",
    client: "이투스교육",
    description: "코로나19 시기 비대면 온라인 강의 전환과 안정적인 생중계 인프라 구축을 위해 추진되었습니다. 최태성 강사 라이브를 비롯해 스튜디오와 야외 현장을 잇는 다원 생중계 송출 프로세스를 설계하고 시스템을 구축했습니다."
  }
];

export default function Portfolio({ items }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isArchiveExpanded, setIsArchiveExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState<PortfolioItem | FeaturedProject | null>(null);

  const categories = [
    { code: "ALL", label: "전체" },
    { code: "PROMOTION", label: "홍보" },
    { code: "YOUTUBE LONG", label: "유튜브 롱폼" },
    { code: "SHORTS", label: "쇼츠 / 릴스" },
    { code: "AI", label: "AI" },
    { code: "INTERVIEW", label: "인터뷰" },
    { code: "LIVE", label: "라이브" }
  ];

  // Filter items matching selected category for the archive
  const filteredItems = selectedCategory === "ALL" 
    ? [...items].sort((a, b) => a.order - b.order)
    : [...items].filter(item => item.format === selectedCategory).sort((a, b) => a.order - b.order);

  const getYoutubeId = (url: string): string => {
    if (!url) return "";
    let id = "";
    if (url.includes("youtube.com/shorts/")) {
      id = url.split("youtube.com/shorts/")[1]?.split("?")[0]?.split("&")[0];
    } else if (url.includes("youtu.be/")) {
      id = url.split("youtu.be/")[1]?.split("?")[0]?.split("&")[0];
    } else if (url.includes("youtube.com/watch")) {
      try {
        const urlParams = new URLSearchParams(new URL(url).search);
        id = urlParams.get("v") || "";
      } catch {
        const parts = url.split("v=");
        if (parts[1]) {
          id = parts[1].split("&")[0];
        }
      }
    } else if (url.includes("embed/")) {
      id = url.split("embed/")[1]?.split("?")[0]?.split("&")[0];
    }
    return id || "";
  };

  const getYoutubeThumbnailUrl = (url: string, defaultImg: string = ""): string => {
    if (defaultImg && !defaultImg.includes("photo-1619767886558") && defaultImg !== "") {
      return defaultImg;
    }
    const id = getYoutubeId(url);
    if (id) {
      return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
    }
    return defaultImg || "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=800";
  };

  // Convert watch link to embed link if needed
  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    if (url.includes("embed")) return url;

    // Instagram check
    if (url.includes("instagram.com/reel/") || url.includes("instagram.com/p/")) {
      const isReel = url.includes("/reel/");
      const keyword = isReel ? "instagram.com/reel/" : "instagram.com/p/";
      const parts = url.split(keyword);
      const id = parts[1]?.split("/")[0]?.split("?")[0];
      if (id) {
        return `https://www.instagram.com/${isReel ? "reel" : "p"}/${id}/embed/`;
      }
    }
    
    // YouTube Shorts check
    if (url.includes("youtube.com/shorts/")) {
      const id = url.split("youtube.com/shorts/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    
    // YouTube shortener check
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    // YouTube Watch url check
    if (url.includes("youtube.com/watch")) {
      try {
        const urlParams = new URLSearchParams(new URL(url).search);
        const id = urlParams.get("v");
        return `https://www.youtube.com/embed/${id}?autoplay=1`;
      } catch {
        const parts = url.split("v=");
        if (parts[1]) {
          const id = parts[1].split("&")[0];
          return `https://www.youtube.com/embed/${id}?autoplay=1`;
        }
      }
    }
    return url;
  };

  return (
    <section id="portfolio" className="py-20 md:py-24 bg-[#131318] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="font-headline text-[13px] sm:text-sm text-[#8A8A93] font-bold tracking-widest uppercase">
                02 / SELECTED WORKS
              </span>
              <span className="text-[13px] font-headline font-bold px-2 py-0.5 bg-[#202028] border border-white/[0.12] border-t-white/[0.16] text-[#C9C9CF] rounded">
                FEATURED 6 + ARCHIVE ({items.length})
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              주요 영상 포트폴리오
            </h2>
          </div>
          <p className="text-[13px] sm:text-base text-[#8A8A93] font-medium max-w-md">
            성과가 검증된 대표 프로젝트 6선 및 전체 제작 아카이브
          </p>
        </div>

        {/* External Channel Links Row */}
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4" id="portfolio-external-channels">
          <a
            href="https://youtube.com/@k_trailer?si=EPUoTm4DX4WhMCUP"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-[#202028] border border-white/[0.12] border-t-white/[0.16] rounded-xl p-4 sm:p-5 transition-all duration-200 hover:bg-[#2A2A34] hover:border-white/[0.18] cursor-pointer"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#1A1A21] border border-white/[0.08] text-white rounded-lg shrink-0">
                  <Youtube size={20} />
                </div>
                <div>
                  <span className="text-[13px] font-headline font-bold uppercase tracking-wider text-[#8A8A93] block">
                    YOUTUBE CHANNEL
                  </span>
                  <h3 className="text-[14px] sm:text-base font-bold text-white group-hover:text-white transition-colors">
                    인하우스 PD 유튜브 채널
                  </h3>
                </div>
              </div>
              <ExternalLink size={14} className="text-[#8A8A93] group-hover:text-white transition-colors shrink-0" />
            </div>
          </a>

          <a
            href="https://www.instagram.com/ktrailer1/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-[#202028] border border-white/[0.12] border-t-white/[0.16] rounded-xl p-4 sm:p-5 transition-all duration-200 hover:bg-[#2A2A34] hover:border-white/[0.18] cursor-pointer"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#1A1A21] border border-white/[0.08] text-white rounded-lg shrink-0">
                  <Instagram size={20} />
                </div>
                <div>
                  <span className="text-[13px] font-headline font-bold uppercase tracking-wider text-[#8A8A93] block">
                    INSTAGRAM REELS
                  </span>
                  <h3 className="text-[14px] sm:text-base font-bold text-white group-hover:text-white transition-colors">
                    인하우스 PD 릴스 채널
                  </h3>
                </div>
              </div>
              <ExternalLink size={14} className="text-[#8A8A93] group-hover:text-white transition-colors shrink-0" />
            </div>
          </a>
        </div>

        {/* ======================================================== */}
        {/* [1] TOP TIER: "대표 프로젝트 6" (2-Column Large Cards)     */}
        {/* ======================================================== */}
        <div className="mb-14" id="featured-projects-section">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                대표 프로젝트 6
              </h3>
            </div>
            <span className="text-[13px] font-headline font-bold text-[#8A8A93] tracking-widest uppercase">
              FEATURED 6 WORKS
            </span>
          </div>

          {/* 2-Column Large Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" id="featured-projects-grid">
            {FEATURED_PROJECTS.map((project, pIdx) => (
              <a
                key={project.id}
                id={`featured-card-${pIdx + 1}`}
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#202028] border border-white/[0.12] border-t-white/[0.16] hover:border-white/[0.22] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[#2A2A34] flex flex-col justify-between"
              >
                {/* Large 16:9 Video Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-black select-none">
                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-30 pointer-events-none">
                    <span className="px-3 py-1.5 bg-black/85 backdrop-blur-md text-white text-[13px] sm:text-sm font-headline font-bold rounded-lg uppercase tracking-wider border border-white/15 shadow-md">
                      {project.format}
                    </span>
                    {project.metricBadge ? (
                      <span className="px-3.5 py-1.5 bg-black/90 backdrop-blur-md text-white text-[13px] sm:text-base font-extrabold rounded-lg border border-white/20 flex items-center space-x-2 shadow-xl ring-1 ring-white/10">
                        <span className="w-2 h-2 rounded-full bg-primary-red shrink-0 shadow-[0_0_8px_#FF4D57]" />
                        <span className="text-white drop-shadow">{project.metricBadge}</span>
                      </span>
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Thumbnail Image */}
                  <img
                    src={project.imageUrl || getYoutubeThumbnailUrl(project.videoUrl)}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const id = getYoutubeId(project.videoUrl);
                      if (id && e.currentTarget.src.includes("maxresdefault.jpg")) {
                        e.currentTarget.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                      }
                    }}
                    className="w-full h-full object-cover brightness-95 group-hover:brightness-105 group-hover:scale-[1.03] transition-all duration-300 ease-out"
                  />

                  {/* Hover Overlay with Large Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/55 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                    <div className="flex items-center gap-2.5 px-5 py-2.5 bg-white text-black rounded-full shadow-2xl transition-transform duration-200 group-hover:scale-105">
                      <Play size={15} fill="currentColor" className="text-black ml-0.5" />
                      <span className="text-[13px] sm:text-sm font-bold">새 탭에서 영상 보기</span>
                    </div>
                  </div>
                </div>

                {/* Card Content: Title + Clean 4-Line Structured Metadata */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors duration-150 leading-snug line-clamp-1">
                      {project.title}
                    </h4>

                    {/* Strict 4-Line Structure: Clean flat layout with no nested card borders */}
                    <div className="mt-4 pt-3.5 border-t border-white/[0.08] space-y-2.5 text-[13px] sm:text-sm leading-[1.7]">
                      <div className="flex items-start gap-2.5">
                        <span className="font-bold text-[#C9C9CF] text-[13px] shrink-0 w-16 pt-0.5">
                          과제
                        </span>
                        <span className="text-[#C9C9CF] text-[13px] sm:text-sm font-normal">{project.problem}</span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="font-bold text-[#8A8A93] text-[13px] shrink-0 w-16 pt-0.5">
                          접근
                        </span>
                        <span className="text-[#C9C9CF] text-[13px] sm:text-sm font-normal">{project.approach}</span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="font-bold text-white text-[13px] shrink-0 w-16 pt-0.5">
                          결과
                        </span>
                        <span className="text-white text-[13px] sm:text-sm font-bold">{project.result}</span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <span className="font-bold text-[#8A8A93] text-[13px] shrink-0 w-16 pt-0.5">
                          담당 역할
                        </span>
                        <span className="text-[#C9C9CF] text-[13px] sm:text-sm font-medium">{project.role}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[13px] text-[#8A8A93]">
                    <span className="font-medium">{project.client}</span>
                    <span className="font-headline font-bold tracking-wider text-[#C9C9CF] group-hover:text-white flex items-center gap-1 group-hover:underline">
                      <span>WATCH VIDEO</span>
                      <ExternalLink size={13} />
                    </span>
                  </div>
                </div>

              </a>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* [2] BOTTOM TIER: "전체 작업물 (30)" — Default Folded       */}
        {/* ======================================================== */}
        <div className="pt-6 border-t border-white/[0.08]" id="portfolio-archive-section">
          
          {/* Toggle Button for Full Archive */}
          <div className="flex flex-col items-center justify-center text-center">
            <button
              id="portfolio-archive-toggle-btn"
              onClick={() => setIsArchiveExpanded(!isArchiveExpanded)}
              className="px-8 py-4 bg-[#202028] border border-white/[0.12] border-t-white/[0.16] hover:border-white/[0.25] hover:bg-[#2A2A34] text-white font-bold text-[13px] sm:text-base rounded-xl transition-all duration-200 flex items-center space-x-3 cursor-pointer shadow-lg"
            >
              <span>
                {isArchiveExpanded 
                  ? `전체 작업물 접기 (${items.length}건)` 
                  : `전체 작업물 ${items.length}건 더보기 (아카이브 열기)`}
              </span>
              {isArchiveExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            <p className="text-[13px] text-[#8A8A93] mt-2 font-medium">
              {isArchiveExpanded ? "클릭 시 전체 작업물 그리드를 접습니다." : "홍보·유튜브 롱폼·숏폼·AI·인터뷰·라이브 전체 30여 개 프로젝트를 한눈에 확인하실 수 있습니다."}
            </p>
          </div>

          {/* Expanded Archive View */}
          {isArchiveExpanded && (
            <div className="mt-10 animate-fade-in space-y-6">
              
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat.code}
                    id={`archive-tab-${cat.code}`}
                    onClick={() => setSelectedCategory(cat.code)}
                    className={`px-3.5 py-1.5 text-[13px] sm:text-sm font-bold rounded-lg transition-all duration-150 cursor-pointer ${
                      selectedCategory === cat.code
                        ? "bg-white text-black font-bold"
                        : "bg-[#202028] border border-white/[0.12] border-t-white/[0.16] text-[#8A8A93] hover:text-white hover:bg-[#2A2A34]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Compact Archive Grid: 3 or 4 Columns (Thumbnail + Title + Role Tag ONLY) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5" id="archive-grid">
                {filteredItems.map((item) => (
                  <a
                    key={item.id}
                    id={`archive-item-${item.id}`}
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-[#202028] border border-white/[0.12] border-t-white/[0.16] hover:border-white/[0.22] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:bg-[#2A2A34] flex flex-col justify-between"
                  >
                    {/* Compact 16:9 Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden bg-black select-none">
                      <div className="absolute top-2 left-2 z-20 pointer-events-none">
                        <span className="px-2 py-0.5 bg-black/80 backdrop-blur-md text-white text-[13px] font-headline font-bold rounded uppercase tracking-wider border border-white/10">
                          {item.format}
                        </span>
                      </div>

                      <img
                        src={getYoutubeThumbnailUrl(item.videoUrl, item.imageUrl)}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const id = getYoutubeId(item.videoUrl);
                          if (id && e.currentTarget.src.includes("maxresdefault.jpg")) {
                            e.currentTarget.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                          }
                        }}
                        className="w-full h-full object-cover brightness-95 group-hover:brightness-105 group-hover:scale-[1.03] transition-all duration-300"
                      />

                      {/* Hover play icon */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                          <Play size={14} fill="currentColor" className="text-black ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Card Title & Role Tag ONLY */}
                    <div className="p-3.5 flex-grow flex flex-col justify-between">
                      <h4 className="text-[13px] sm:text-sm font-bold text-white group-hover:text-[#C9C9CF] transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h4>
                      {item.role && (
                        <div className="mt-2.5 pt-2 border-t border-white/[0.08] text-[13px] text-[#8A8A93] truncate">
                          {item.role}
                        </div>
                      )}
                    </div>

                  </a>
                ))}
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Pop-out Modal for Video Player & Full Details */}
      {activeItem && (
        <div id="portfolio-modal-overlay" className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center overflow-y-auto p-4 md:p-6">
          <div className="relative bg-[#1A1A21] border border-white/[0.14] w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden my-auto animate-fade-in">
            
            {/* Modal Close Button */}
            <button
              id="portfolio-modal-close"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-[#202028]/95 hover:bg-[#2A2A34] border border-white/10 text-white rounded-full transition-colors cursor-pointer"
              title="닫기"
            >
              <X size={18} />
            </button>

            {/* Video Player Display */}
            <div className="aspect-video w-full bg-black relative">
              {activeItem.videoUrl ? (
                <iframe
                  id="portfolio-iframe-player"
                  src={getEmbedUrl(activeItem.videoUrl)}
                  className="w-full h-full border-0 absolute inset-0"
                  title={activeItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-white/50 p-6">
                  <p className="text-[13px] text-white/50">등록된 영상 링크가 올바르지 않습니다.</p>
                </div>
              )}
            </div>

            {/* Modal Details Section */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 border-t border-white/[0.08]">
              
              {/* Left Column: Title & Description */}
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <span className="px-2.5 py-1 bg-white/10 border border-white/10 text-white text-[13px] font-headline font-bold rounded uppercase">
                    {activeItem.format}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2.5">
                    {activeItem.title}
                  </h3>
                </div>

                <div>
                  <h4 className="text-[13px] font-bold text-[#8A8A93] mb-2">
                    제작 의도 및 설명
                  </h4>
                  <p className="text-[15px] md:text-base text-[#C9C9CF] leading-[1.7] font-normal whitespace-pre-line bg-[#202028] border border-white/[0.12] border-t-white/[0.16] p-4 sm:p-5 rounded-xl">
                    {activeItem.description || "상세 설명이 등록되어 있지 않습니다."}
                  </p>
                </div>

                {"images" in activeItem && activeItem.images && activeItem.images.length > 0 && (
                  <div className="pt-4" id="portfolio-photo-gallery">
                    <h4 className="text-[13px] font-bold text-[#8A8A93] mb-3">
                      제작 현장 스냅샷 ({activeItem.images.length})
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {activeItem.images.map((img, idx) => (
                        <div key={idx} className="relative aspect-[16/9] rounded-xl overflow-hidden group bg-black border border-white/[0.08]">
                          <img
                            src={img}
                            alt={`${activeItem.title} screenshot ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105 cursor-zoom-in brightness-90 group-hover:brightness-105"
                            referrerPolicy="no-referrer"
                            onClick={() => window.open(img, "_blank")}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Production Specs */}
              <div className="bg-[#202028] border border-white/[0.12] border-t-white/[0.16] p-5 sm:p-6 rounded-xl space-y-5 h-fit">
                <h4 className="text-[13px] font-bold text-[#8A8A93] border-b border-white/[0.08] pb-2.5">
                  제작 정보
                </h4>

                <div className="space-y-4">
                  <div>
                    <p className="text-[13px] sm:text-sm text-[#8A8A93] font-semibold uppercase">주요 역할</p>
                    <p className="text-[13px] sm:text-base font-bold text-white mt-1">{activeItem.role}</p>
                  </div>

                  {activeItem.equipment && (
                    <div>
                      <p className="text-[13px] sm:text-sm text-[#8A8A93] font-semibold uppercase">장비 및 툴</p>
                      <p className="text-[13px] sm:text-[15px] font-medium text-[#C9C9CF] mt-1 leading-[1.7]">{activeItem.equipment}</p>
                    </div>
                  )}

                  {activeItem.client && (
                    <div>
                      <p className="text-[13px] sm:text-sm text-[#8A8A93] font-semibold uppercase">클라이언트</p>
                      <p className="text-[13px] sm:text-base font-medium text-[#C9C9CF] mt-1">{activeItem.client}</p>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
