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
    <section id="portfolio" className="py-24 bg-cinema-black relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 md:flex-row md:items-end justify-between">
          <div>
            <span className="text-sm tracking-[0.4em] text-primary-red font-black block mb-2 font-display">
              02 / 주요 영상 포트폴리오
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900 animate-pulse-slow">
              포트폴리오
            </h2>
          </div>
        </div>

        {/* Channel Links Row */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6" id="portfolio-external-channels">
          {/* YouTube Channel Link Banner */}
          <div className="animate-fade-in-up" id="longform-youtube-link-banner">
            <a
              href="https://youtube.com/@k_trailer?si=EPUoTm4DX4WhMCUP"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden h-full"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#E30613]" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 h-full pt-1">
                <div className="flex items-start gap-4 text-left">
                  <div className="p-3.5 bg-red-50 text-[#E30613] rounded-xl shrink-0 group-hover:bg-[#E30613] group-hover:text-white transition-all duration-300 shadow-sm border border-red-100">
                    <Youtube size={26} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] tracking-[0.15em] font-black uppercase text-[#E30613] bg-red-50/70 border border-red-250 px-2 py-0.5 rounded font-display">
                        유튜브 롱폼 채널
                      </span>
                    </div>
                    <h3 className="text-[17px] md:text-lg font-black text-slate-900 mt-2 font-display tracking-tight leading-snug">
                      인하우스 PD 유튜브 채널 관리 바로가기
                    </h3>
                  </div>
                </div>
                <div className="shrink-0 self-end sm:self-center">
                  <div className="flex items-center gap-1.5 px-4.5 py-2.5 bg-slate-900 hover:bg-[#E30613] text-white font-extrabold text-xs tracking-wider rounded-lg shadow-sm transition-all duration-300 group-hover:scale-105">
                    <span>유튜브 바로가기</span>
                    <ExternalLink size={12} className="ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Instagram Reels Link Banner */}
          <div className="animate-fade-in-up" id="shorts-instagram-link-banner">
            <a
              href="https://www.instagram.com/ktrailer1/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden h-full"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ffd200] via-[#ff006c] to-[#7f00ff]" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 h-full pt-1">
                <div className="flex items-start gap-4 text-left">
                  <div className="p-3.5 bg-rose-50 text-[#e1306c] rounded-xl shrink-0 group-hover:bg-gradient-to-tr group-hover:from-[#ffd200] group-hover:via-[#ff006c] group-hover:to-[#7f00ff] group-hover:text-white transition-all duration-300 shadow-sm border border-rose-100">
                    <Instagram size={26} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] tracking-[0.15em] font-black uppercase text-[#e1306c] bg-rose-50/70 border border-rose-250 px-2 py-0.5 rounded font-display">
                        인스타그램 릴스 채널
                      </span>
                    </div>
                    <h3 className="text-[17px] md:text-lg font-black text-slate-900 mt-2 font-display tracking-tight leading-snug">
                      인하우스 PD 인스타그램 릴스 채널 바로가기
                    </h3>
                  </div>
                </div>
                <div className="shrink-0 self-end sm:self-center">
                  <div className="flex items-center gap-1.5 px-4.5 py-2.5 bg-slate-900 hover:bg-slate-950 text-white font-extrabold text-xs tracking-wider rounded-lg shadow-sm transition-all duration-300 group-hover:scale-105">
                    <span>릴스 바로가기</span>
                    <ExternalLink size={12} className="ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Categories Tab Bar Filter */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 overflow-x-auto pb-4 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat.code}
              id={`portfolio-tab-${cat.code}`}
              onClick={() => setSelectedCategory(cat.code)}
              className={`px-4.5 py-2.5 text-sm md:text-base font-black tracking-widest transition-all duration-300 rounded font-display select-none cursor-pointer ${
                selectedCategory === cat.code
                  ? "bg-primary-red text-white font-extrabold shadow-md hover:bg-primary-red/95"
                  : "bg-cinema-card border border-slate-200 hover:border-primary-red/50 text-slate-650 hover:text-primary-red shadow-sm transition-all"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Recruiter Polite Notice Message */}
        <div className="mb-10 p-4.5 bg-red-50/50 border border-primary-red/20 rounded-md flex items-start space-x-3.5 max-w-4xl" id="portfolio-recruiter-notice">
          <Sparkles className="text-primary-red shrink-0 mt-0.5" size={16} />
          <div className="space-y-1">
            <h4 className="text-xs tracking-[0.15em] uppercase font-black text-primary-red font-display">
              안내 가이드
            </h4>
            <p className="text-slate-600 text-xs sm:text-[13px] md:text-[14px] font-bold leading-relaxed">
              홍보, 유튜브 롱폼 및 쇼츠/릴스 등 전체 작업물 중에서 <span className="text-slate-900 font-extrabold">1인 제작 중심의 프로젝트와</span>
              <br />
              역량을 직관적으로 확인하실 수 있는 <span className="text-slate-900 font-extrabold">대표 프로젝트 위주로 선별하여</span> 링크 하였습니다.
            </p>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-cinema-card rounded-lg border border-slate-200 shadow-lg" id="portfolio-empty-state">
            <AlertCircle size={32} className="mx-auto text-slate-400 mb-4 animate-bounce" />
            <p className="text-base text-slate-800 tracking-wider font-extrabold">해당 카테고리에 업로드된 포트폴리오 영상이 없습니다.</p>
            <p className="text-sm text-slate-500 mt-2 font-mono font-bold">ADMIN PANEL을 통하여 언제든 새 포토폴리오를 작성할 수 있습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                id={`portfolio-item-${item.id}`}
                className="group relative bg-cinema-card rounded-lg border border-slate-200/80 overflow-hidden cursor-pointer transition-all duration-500 scale-100 hover:scale-[1.02] hover:border-primary-red/50 hover:shadow-xl shadow-md shadow-slate-100 flex flex-col justify-between"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
                onClick={() => setActiveItem(item)}
              >
                {/* Image / Video Dynamic Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-150">
                  
                  {/* Default Cover Static Photo */}
                  {item.format === "SHORTS" ? (
                    <div className="w-full h-full relative flex items-center justify-center bg-black overflow-hidden pointer-events-none">
                      {/* Blurred Background */}
                      <img
                        src={getYoutubeThumbnailUrl(item.videoUrl, item.imageUrl)}
                        alt=""
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover blur-md opacity-30 scale-110 pointer-events-none"
                      />
                      {/* Crisp Centered Portrait Image */}
                      <img
                        src={getYoutubeThumbnailUrl(item.videoUrl, item.imageUrl)}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className={`h-full w-auto object-contain relative z-10 transition-transform duration-700 ${
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
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredId === item.id ? "scale-105" : "scale-100"
                      }`}
                    />
                  )}

                  {/* Netflix-style Hover Video autoloop */}
                  {item.previewVideoUrl && (
                    <video
                      ref={(el) => (videoRefs.current[item.id] = el)}
                      muted
                      loop
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 z-10 ${
                        hoveredId === item.id ? "opacity-100 scale-105" : "opacity-0 scale-100 pointer-events-none"
                      }`}
                    >
                      <source src={item.previewVideoUrl} type="video/mp4" />
                    </video>
                  )}

                  {/* Hover Overlay Red Vignette */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-cinema-black via-black/20 to-transparent transition-opacity duration-300 pointer-events-none z-20 ${
                    hoveredId === item.id ? "opacity-40" : "opacity-0"
                  }`} />

                  {/* Corners Focus Marks on Hover */}
                  <div className="absolute inset-3 border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-primary-red" />
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-primary-red" />
                    <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-primary-red" />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-primary-red" />
                  </div>



                  {/* Centered Play Indicator on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="p-3 bg-primary-red text-white rounded-full shadow-lg shadow-primary-red/50 scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play size={16} fill="currentColor" />
                    </span>
                  </div>

                </div>

                {/* Meta details text card column bottom fill */}
                <div className="p-6 flex-grow flex flex-col justify-between bg-cinema-card">
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-slate-800 group-hover:text-primary-red transition-colors duration-200 line-clamp-1 font-display">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mt-2.5 line-clamp-2 font-bold select-none">
                      {getCardDescription(item.description)}
                    </p>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Dynamic Immersive Pop-out Modal */}
      {activeItem && (
        <div id="portfolio-modal-overlay" className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center overflow-y-auto p-4 md:p-8 animate-fade-in">
          
          <div className="relative bg-[#1A1A1E] w-full max-w-5xl rounded-lg border border-white/10 shadow-2xl overflow-hidden my-auto">
            
            {/* Modal Exit Toggle */}
            <button
              id="portfolio-modal-close"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-50 p-2.5 bg-black/80 hover:bg-primary-red hover:text-white text-white/70 rounded-full border border-white/10 transition-all duration-200 cursor-pointer"
              title="닫기"
            >
              <X size={18} />
            </button>

            {/* Video Player Display widescreen */}
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
                  <Film size={48} className="text-white/20 mb-4 animate-pulse" />
                  <p className="text-sm font-mono tracking-widest text-warning">등록된 영상 링크가 올바르지 않습니다.</p>
                </div>
              )}
            </div>

            {/* Dynamic details description matrix underneath */}
            <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-white/10">
              
              {/* Intent Text & Primary Info left columns */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2.5 mb-2">
                  <span className="px-3 py-0.5 bg-primary-red/10 border border-primary-red/30 text-xs md:text-sm font-bold tracking-widest text-primary-red rounded uppercase font-display">
                    {activeItem.format}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-3xl font-extrabold tracking-tight text-white mb-4 font-display">
                  {activeItem.title}
                </h3>

                <h4 className="text-xs md:text-sm tracking-[0.2em] uppercase font-bold text-white/60 font-display mb-2 flex items-center">
                  <Sparkles size={12} className="text-primary-red mr-1.5" />
                  <span>제작 의도 및 핵심 비하인드</span>
                </h4>
                <p className="text-sm md:text-base text-white/95 leading-relaxed font-medium whitespace-pre-line bg-black/50 p-5 rounded border border-white/5 shadow-inner">
                  {getCleanDescription(activeItem.description)}
                </p>

                {/* Multiple snapshots/images dynamic gallery */}
                {activeItem.images && activeItem.images.length > 0 && (
                  <div className="mt-8 border-t border-white/10 pt-6 bg-transparent" id="portfolio-photo-gallery">
                    <h4 className="text-xs md:text-sm tracking-[0.2em] uppercase font-bold text-white/60 font-display mb-4 flex items-center">
                      <span>📸 제작 현장 스냅샷 & 이미지 갤러리</span>
                      <span className="ml-2 text-xs font-mono text-primary-red/80 font-normal font-sans">({activeItem.images.length})</span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {activeItem.images.map((img, idx) => (
                        <div key={idx} className="relative aspect-[16/9] rounded overflow-hidden border border-white/10 group bg-black/50 shadow">
                          <img
                            src={img}
                            alt={`${activeItem.title} custom screenshot ${idx + 1}`}
                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 cursor-zoom-in"
                            referrerPolicy="no-referrer"
                            onClick={() => window.open(img, "_blank")}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Specifications Panel parameters columns right */}
              <div className="space-y-4 bg-black/70 p-5 rounded border border-white/10">
                <h4 className="text-xs tracking-[0.25rem] uppercase font-bold text-white/50 font-display border-b border-white/10 pb-2">
                  상세 제작 정보
                </h4>

                <div className="space-y-3.5 font-sans animate-fade-in">
                  
                  {/* Role specification */}
                  <div className="flex items-start">
                    <Award size={15} className="text-primary-red mr-2.5 mt-0.5" />
                    <div>
                      <p className="text-xs font-mono text-white/50 tracking-wider font-extrabold uppercase">담당 주 역할</p>
                      <p className="text-sm md:text-base text-white font-bold">{activeItem.role}</p>
                    </div>
                  </div>

                  {/* Gear specifications */}
                  {activeItem.equipment && (
                    <div className="flex items-start">
                      <Hammer size={15} className="text-primary-red mr-2.5 mt-0.5" />
                      <div>
                        <p className="text-xs font-mono text-white/50 tracking-wider font-extrabold uppercase">제작 장비 및 툴</p>
                        <p className="text-sm md:text-base text-white/90 leading-relaxed font-medium">{activeItem.equipment}</p>
                      </div>
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
