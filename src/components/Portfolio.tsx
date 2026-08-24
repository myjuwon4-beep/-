/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { Film, Filter, Play, Clock, Hammer, Calendar, Award, X, Sparkles, AlertCircle, Instagram, ExternalLink, Youtube } from "lucide-react";
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
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

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

  // Handle play/pause on hover safely
  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {
        // Fallback silently if autoplay gets restricted
      });
    }
  };

  const handleMouseLeave = (id: string) => {
    setHoveredId(null);
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
    }
  };

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
    // If a custom high-quality image is provided, prefer it for gorgeous cinematic overrides
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
    <section id="portfolio" className="py-24 bg-[#F8F9FA] relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary-red" />
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              PORTFOLIO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            주요 영상 포트폴리오
          </h2>
        </div>

        {/* Channel Links Row */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4" id="portfolio-external-channels">
          {/* YouTube Channel Link Banner */}
          <div id="longform-youtube-link-banner">
            <a
              href="https://youtube.com/@k_trailer?si=EPUoTm4DX4WhMCUP"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-5 sm:p-6 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md h-full"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 h-full">
                <div className="flex items-start gap-3.5 text-left">
                  <div className="p-3 bg-red-50 text-primary-red rounded-xl shrink-0 border border-red-100">
                    <Youtube size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary-red">
                      유튜브 롱폼 채널
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 tracking-tight">
                      인하우스 PD 유튜브
                    </h3>
                  </div>
                </div>
                <div className="shrink-0 self-start sm:self-center">
                  <div className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 group-hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors">
                    <span>유튜브 바로가기</span>
                    <ExternalLink size={12} />
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
              className="group block relative bg-white border border-slate-200 hover:border-slate-300 rounded-2xl p-5 sm:p-6 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md h-full"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 h-full">
                <div className="flex items-start gap-3.5 text-left">
                  <div className="p-3 bg-rose-50 text-[#e1306c] rounded-xl shrink-0 border border-rose-100">
                    <Instagram size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#e1306c]">
                      인스타그램 릴스 채널
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 tracking-tight">
                      인하우스 PD 인스타그램 릴스
                    </h3>
                  </div>
                </div>
                <div className="shrink-0 self-start sm:self-center">
                  <div className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 group-hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors">
                    <span>릴스 바로가기</span>
                    <ExternalLink size={12} />
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
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                selectedCategory === cat.code
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Recruiter Polite Notice Message */}
        <div className="mb-8 p-4 bg-white border border-slate-200 rounded-xl flex items-start space-x-3 max-w-3xl shadow-2xs" id="portfolio-recruiter-notice">
          <Sparkles className="text-primary-red shrink-0 mt-0.5" size={15} />
          <div>
            <span className="text-xs font-bold text-primary-red uppercase tracking-wider block mb-0.5">
              안내 가이드
            </span>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              홍보, 유튜브 롱폼 및 쇼츠/릴스 등 전체 작업 물 중 <strong className="text-slate-900 font-semibold">1인 제작 영상을</strong> 직관적으로 확인하실 수 있는 <strong className="text-slate-900 font-semibold">대표 프로젝트 위주로 선별하여</strong> 링크 하였습니다.
            </p>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 shadow-xs" id="portfolio-empty-state">
            <AlertCircle size={28} className="mx-auto text-slate-400 mb-3" />
            <p className="text-sm sm:text-base text-slate-800 font-bold">해당 카테고리에 업로드된 포트폴리오 영상이 없습니다.</p>
            <p className="text-xs text-slate-500 mt-1">ADMIN PANEL을 통하여 언제든 새 포트폴리오를 작성할 수 있습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="portfolio-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`portfolio-item-${item.id}`}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md flex flex-col justify-between"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
                onClick={() => setActiveItem(item)}
              >
                {/* Image / Video Dynamic Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  
                  {/* Default Cover Static Photo */}
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
                        className={`h-full w-auto object-contain relative z-10 transition-transform duration-300 ${
                          hoveredId === item.id ? "scale-105" : "scale-100"
                        }`}
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
                      className={`w-full h-full object-cover transition-transform duration-300 ${
                        hoveredId === item.id ? "scale-105" : "scale-100"
                      }`}
                    />
                  )}

                  {/* Video autoloop on hover */}
                  {item.previewVideoUrl && (
                    <video
                      ref={(el) => (videoRefs.current[item.id] = el)}
                      muted
                      loop
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 z-10 ${
                        hoveredId === item.id ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <source src={item.previewVideoUrl} type="video/mp4" />
                    </video>
                  )}

                  {/* Format Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-2.5 py-1 bg-black/75 backdrop-blur-xs text-white text-[11px] font-semibold rounded-md uppercase tracking-wider">
                      {item.format}
                    </span>
                  </div>

                  {/* Centered Play Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                    <span className="p-3 bg-white text-slate-900 rounded-full shadow-lg transition-transform duration-200 group-hover:scale-105">
                      <Play size={16} fill="currentColor" />
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-primary-red transition-colors duration-150 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-2 line-clamp-2">
                      {getCardDescription(item.description)}
                    </p>
                  </div>
                  
                  {item.role && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
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
        <div id="portfolio-modal-overlay" className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center overflow-y-auto p-4 md:p-6">
          
          <div className="relative bg-white w-full max-w-4xl rounded-2xl border border-slate-200 shadow-2xl overflow-hidden my-auto animate-fade-in">
            
            {/* Modal Exit Toggle */}
            <button
              id="portfolio-modal-close"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full transition-colors cursor-pointer"
              title="닫기"
            >
              <X size={16} />
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
                  <Film size={40} className="text-white/20 mb-3" />
                  <p className="text-sm font-mono tracking-widest">등록된 영상 링크가 올바르지 않습니다.</p>
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 border-t border-slate-100">
              
              {/* Left Column: Title & Description */}
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <span className="px-2.5 py-0.5 bg-red-50 text-primary-red text-xs font-bold rounded uppercase">
                    {activeItem.format}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                    {activeItem.title}
                  </h3>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    제작 의도 및 설명
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal whitespace-pre-line bg-slate-50 p-4 rounded-xl border border-slate-150">
                    {getCleanDescription(activeItem.description)}
                  </p>
                </div>

                {/* Snapshots Gallery */}
                {activeItem.images && activeItem.images.length > 0 && (
                  <div className="pt-4" id="portfolio-photo-gallery">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      제작 현장 스냅샷 ({activeItem.images.length})
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {activeItem.images.map((img, idx) => (
                        <div key={idx} className="relative aspect-[16/9] rounded-lg overflow-hidden border border-slate-200 group bg-slate-100">
                          <img
                            src={img}
                            alt={`${activeItem.title} screenshot ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105 cursor-zoom-in"
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
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-150 space-y-4 h-fit">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200 pb-2">
                  제작 정보
                </h4>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase">주요 역할</p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{activeItem.role}</p>
                  </div>

                  {activeItem.equipment && (
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">장비 및 툴</p>
                      <p className="text-sm font-medium text-slate-700 mt-0.5 leading-relaxed">{activeItem.equipment}</p>
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
