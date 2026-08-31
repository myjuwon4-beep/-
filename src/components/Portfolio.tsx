/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Play, X, Instagram, ExternalLink, Youtube, AlertCircle } from "lucide-react";
import { PortfolioItem } from "../types";

interface PortfolioProps {
  items: PortfolioItem[];
}

const getCleanDescription = (desc: string): string => {
  if (!desc) return "";
  const index = desc.indexOf("[제작 의도]");
  if (index !== -1) {
    return desc.substring(index).trim();
  }
  return desc;
};

const getCardDescription = (desc: string): string => {
  if (!desc) return "";
  const index = desc.indexOf("[제작 의도]");
  if (index !== -1) {
    return desc.substring(0, index).trim();
  }
  const index2 = desc.indexOf("[제작의도]");
  if (index2 !== -1) {
    return desc.substring(0, index2).trim();
  }
  return desc;
};

export default function Portfolio({ items }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { code: "ALL", label: "전체 작업물" },
    { code: "PROMOTION", label: "홍보" },
    { code: "YOUTUBE LONG", label: "유튜브 롱폼" },
    { code: "SHORTS", label: "쇼츠 / 릴스" },
    { code: "INTERVIEW", label: "인터뷰" },
    { code: "LIVE", label: "라이브" }
  ];

  // Filter items matching selected category
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
      } catch (e) {
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
      const urlParams = new URLSearchParams(new URL(url).search);
      const id = urlParams.get("v");
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    return url;
  };

  return (
    <section id="portfolio" className="pt-28 pb-36 md:pt-32 md:pb-40 bg-[#0E0E10] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Gallery Header */}
        <div className="mb-12 pb-6 border-b border-white/[0.07] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="font-headline text-sm text-[#8A8A93] font-bold tracking-widest uppercase">
                02 / SELECTED WORKS
              </span>
              <span className="text-xs font-headline font-bold px-2 py-0.5 bg-[#1A1A1F] border border-white/[0.08] text-[#C9C9CF] rounded">
                {items.length} PROJECTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              주요 영상 포트폴리오
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#8A8A93] font-medium max-w-md">
            유튜브 롱폼, 릴스·쇼츠, 기업 홍보 등 1인 총괄 제작 프로젝트 모음
          </p>
        </div>

        {/* Channel Links Row */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4" id="portfolio-external-channels">
          {/* YouTube Channel Link Banner */}
          <div id="longform-youtube-link-banner">
            <a
              href="https://youtube.com/@k_trailer?si=EPUoTm4DX4WhMCUP"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative bg-[#1A1A1F] border border-white/[0.07] rounded-xl p-5 sm:p-6 transition-all duration-200 hover:bg-[#222228] hover:border-white/[0.14] cursor-pointer h-full"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 h-full">
                <div className="flex items-start gap-3.5 text-left">
                  <div className="p-3 bg-[#16161A] border border-white/[0.06] text-primary-red rounded-xl shrink-0">
                    <Youtube size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-headline font-bold uppercase tracking-wider text-[#8A8A93]">
                      유튜브 롱폼 채널
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5 tracking-tight group-hover:text-primary-red transition-colors">
                      인하우스 PD 유튜브
                    </h3>
                  </div>
                </div>
                <div className="shrink-0 self-start sm:self-center">
                  <div className="flex items-center gap-1.5 px-3.5 py-2 bg-white/10 group-hover:bg-primary-red text-white font-headline font-bold text-xs sm:text-sm rounded-lg transition-colors">
                    <span>유튜브 바로가기</span>
                    <ExternalLink size={13} />
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Instagram Reels Link Banner */}
          <div id="shorts-instagram-link-banner">
            <a
              href="https://www.instagram.com/ktrailer1/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative bg-[#1A1A1F] border border-white/[0.07] rounded-xl p-5 sm:p-6 transition-all duration-200 hover:bg-[#222228] hover:border-white/[0.14] cursor-pointer h-full"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 h-full">
                <div className="flex items-start gap-3.5 text-left">
                  <div className="p-3 bg-[#16161A] border border-white/[0.06] text-primary-red rounded-xl shrink-0">
                    <Instagram size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-headline font-bold uppercase tracking-wider text-[#8A8A93]">
                      인스타그램 릴스 채널
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white mt-0.5 tracking-tight group-hover:text-primary-red transition-colors">
                      인하우스 PD 인스타그램 릴스
                    </h3>
                  </div>
                </div>
                <div className="shrink-0 self-start sm:self-center">
                  <div className="flex items-center gap-1.5 px-3.5 py-2 bg-white/10 group-hover:bg-primary-red text-white font-headline font-bold text-xs sm:text-sm rounded-lg transition-colors">
                    <span>릴스 바로가기</span>
                    <ExternalLink size={13} />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Categories Tab Bar Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.code}
              id={`portfolio-tab-${cat.code}`}
              onClick={() => setSelectedCategory(cat.code)}
              className={`px-4 py-2 text-xs sm:text-sm font-headline font-bold tracking-wider uppercase rounded-lg transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.code
                  ? "bg-primary-red text-white"
                  : "bg-[#1A1A1F] border border-white/[0.07] text-[#8A8A93] hover:text-white hover:bg-[#222228]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Recruiter Polite Notice Message */}
        <div className="mb-8 p-5 bg-[#1A1A1F] border border-white/[0.07] rounded-xl flex items-start space-x-3.5 max-w-3xl" id="portfolio-recruiter-notice">
          <div>
            <span className="text-xs font-headline font-bold text-[#8A8A93] uppercase tracking-widest block mb-1">
              안내 가이드
            </span>
            <p className="text-[#C9C9CF] text-[15px] md:text-base leading-[1.7]">
              홍보, 유튜브 롱폼 및 쇼츠/릴스 등 전체 작업물 중 <strong className="text-white font-bold">1인 제작 영상</strong>을 직관적으로 확인하실 수 있는 <strong className="text-white font-bold">대표 프로젝트 위주로 선별하여</strong> 링크하였습니다.
            </p>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-[#1A1A1F] border border-white/[0.07] rounded-xl" id="portfolio-empty-state">
            <AlertCircle size={30} className="mx-auto text-[#8A8A93] mb-3" />
            <p className="text-base sm:text-lg text-white font-bold">해당 카테고리에 업로드된 포트폴리오 영상이 없습니다.</p>
            <p className="text-sm text-[#8A8A93] mt-1.5">ADMIN PANEL을 통하여 언제든 새 포트폴리오를 작성할 수 있습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="portfolio-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`portfolio-item-${item.id}`}
                className="group bg-[#1A1A1F] border border-white/[0.07] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:bg-[#222228] hover:border-white/[0.14] flex flex-col justify-between"
                onClick={() => setActiveItem(item)}
              >
                {/* Image Dynamic Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  
                  {/* Format Badge */}
                  <div className="absolute top-3 left-3 z-30 pointer-events-none">
                    <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md text-white text-xs font-headline font-bold rounded-md uppercase tracking-wider border border-white/10">
                      {item.format}
                    </span>
                  </div>

                  {/* Thumbnail Cover Photo with Hover Zoom */}
                  {item.format === "SHORTS" ? (
                    <div className="w-full h-full relative flex items-center justify-center bg-black overflow-hidden pointer-events-none">
                      <img
                        src={getYoutubeThumbnailUrl(item.videoUrl, item.imageUrl)}
                        alt=""
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover blur-md opacity-30 scale-110 pointer-events-none"
                      />
                      <img
                        src={getYoutubeThumbnailUrl(item.videoUrl, item.imageUrl)}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-auto object-contain relative z-10 brightness-95 group-hover:brightness-105 group-hover:scale-[1.03] transition-all duration-300 ease-out"
                      />
                    </div>
                  ) : (
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
                      className="w-full h-full object-cover brightness-95 group-hover:brightness-105 group-hover:scale-[1.03] transition-all duration-300 ease-out"
                    />
                  )}

                  {/* Semi-transparent Overlay with Play Icon & "영상 보기" on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/95 text-black rounded-full transition-transform duration-200 group-hover:scale-105">
                      <Play size={13} fill="currentColor" className="text-primary-red ml-0.5" />
                      <span className="text-xs sm:text-sm font-headline font-bold tracking-wider uppercase">영상 보기</span>
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary-red transition-colors duration-150 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8A8A93] leading-[1.6] mt-1.5 line-clamp-2 font-normal">
                      {getCardDescription(item.description)}
                    </p>
                  </div>
                  
                  {item.role && (
                    <div className="mt-3.5 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#8A8A93] font-medium">
                      <span className="truncate">{item.role}</span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Pop-out Modal */}
      {activeItem && (
        <div id="portfolio-modal-overlay" className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center overflow-y-auto p-4 md:p-6">
          
          <div className="relative bg-[#16161A] border border-white/[0.1] w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden my-auto animate-fade-in">
            
            {/* Modal Exit Toggle */}
            <button
              id="portfolio-modal-close"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-[#1A1A1F]/90 hover:bg-[#222228] border border-white/10 text-white rounded-full transition-colors cursor-pointer"
              title="닫기"
            >
              <X size={18} />
            </button>

            {/* Video Player Display */}
            <div className="aspect-[16/9] w-full bg-black relative">
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
                  <p className="text-sm font-headline tracking-widest uppercase">등록된 영상 링크가 올바르지 않습니다.</p>
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 border-t border-white/[0.08]">
              
              {/* Left Column: Title & Description */}
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <span className="px-2.5 py-1 bg-primary-red text-white text-xs font-headline font-bold rounded uppercase">
                    {activeItem.format}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2.5">
                    {activeItem.title}
                  </h3>
                </div>

                <div>
                  <h4 className="text-xs font-headline font-bold text-[#8A8A93] uppercase tracking-widest mb-2">
                    제작 의도 및 설명
                  </h4>
                  <p className="text-[15px] md:text-base text-[#C9C9CF] leading-[1.7] font-normal whitespace-pre-line bg-[#1A1A1F] border border-white/[0.07] p-4 sm:p-5 rounded-xl">
                    {getCleanDescription(activeItem.description)}
                  </p>
                </div>

                {/* Snapshots Gallery */}
                {activeItem.images && activeItem.images.length > 0 && (
                  <div className="pt-4" id="portfolio-photo-gallery">
                    <h4 className="text-xs font-headline font-bold text-[#8A8A93] uppercase tracking-widest mb-3">
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

              {/* Right Column: Specs */}
              <div className="bg-[#1A1A1F] border border-white/[0.07] p-5 sm:p-6 rounded-xl space-y-5 h-fit">
                <h4 className="text-xs font-headline font-bold text-[#8A8A93] uppercase tracking-widest border-b border-white/[0.07] pb-2.5">
                  제작 정보
                </h4>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs sm:text-sm text-[#8A8A93] font-semibold uppercase">주요 역할</p>
                    <p className="text-sm sm:text-base font-bold text-white mt-1">{activeItem.role}</p>
                  </div>

                  {activeItem.equipment && (
                    <div>
                      <p className="text-xs sm:text-sm text-[#8A8A93] font-semibold uppercase">장비 및 툴</p>
                      <p className="text-sm sm:text-[15px] font-medium text-[#C9C9CF] mt-1 leading-[1.7]">{activeItem.equipment}</p>
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
