/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { Film, Filter, Play, Clock, Hammer, Calendar, Award, X, Sparkles, AlertCircle } from "lucide-react";
import { PortfolioItem } from "../types";

interface PortfolioProps {
  items: PortfolioItem[];
}

export default function Portfolio({ items }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const categories = [
    { code: "ALL", label: "ALL WORK" },
    { code: "PROMOTION", label: "홍보" },
    { code: "YOUTUBE LONG", label: "유튜브 롱폼" },
    { code: "SHORTS", label: "쇼츠 / 숏폼" },
    { code: "INTERVIEW", label: "인터뷰" }
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
    <section id="portfolio" className="py-24 bg-cinema-black relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 md:flex-row md:items-end justify-between">
          <div>
            <span className="text-sm tracking-[0.4em] text-primary-red font-bold block mb-2 font-display">
              02 / SIGNATURE PROJECT DIRECTING
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white animate-pulse-slow">
              PORTFOLIO
            </h2>
          </div>
          <div className="h-[2px] bg-white/10 flex-grow mx-8 hidden md:block mb-3" />
          <p className="text-white/40 text-sm font-mono mt-4 md:mt-0 tracking-widest">
            CINEMATIC AUTOPLAY READY
          </p>
        </div>

        {/* Categories Tab Bar Filter */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 overflow-x-auto pb-4 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat.code}
              id={`portfolio-tab-${cat.code}`}
              onClick={() => setSelectedCategory(cat.code)}
              className={`px-4.5 py-2.5 text-sm md:text-base font-semibold tracking-widest transition-all duration-300 rounded font-display select-none cursor-pointer ${
                selectedCategory === cat.code
                  ? "bg-primary-red text-white font-bold"
                  : "bg-cinema-card border border-white/10 hover:border-white/30 text-white/70 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-cinema-card rounded border border-white/5" id="portfolio-empty-state">
            <AlertCircle size={32} className="mx-auto text-white/30 mb-4 animate-bounce" />
            <p className="text-base text-white/50 tracking-wider font-medium">해당 카테고리에 업로드된 포트폴리오 영상이 없습니다.</p>
            <p className="text-sm text-white/30 mt-2 font-mono">ADMIN PANEL을 통하여 언제든 새 포토폴리오를 작성할 수 있습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                id={`portfolio-item-${item.id}`}
                className="group relative bg-cinema-card rounded border border-white/10 overflow-hidden cursor-pointer transition-all duration-500 scale-100 hover:scale-[1.03] hover:border-primary-red/50 hover:shadow-2xl hover:shadow-primary-red/10 flex flex-col justify-between"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
                onClick={() => setActiveItem(item)}
              >
                {/* Image / Video Dynamic Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black border-b border-white/5">
                  
                  {/* Default Cover Static Photo */}
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
                      hoveredId === item.id ? "scale-105 opacity-0" : "scale-100 opacity-100"
                    }`}
                  />

                  {/* Netflix-style Hover Video autoloop */}
                  {item.previewVideoUrl && (
                    <video
                      ref={(el) => (videoRefs.current[item.id] = el)}
                      muted
                      loop
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        hoveredId === item.id ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <source src={item.previewVideoUrl} type="video/mp4" />
                    </video>
                  )}

                  {/* Hover Overlay Red Vignette */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-cinema-black via-black/15 to-transparent transition-opacity duration-300 pointer-events-none ${
                    hoveredId === item.id ? "opacity-100" : "opacity-80"
                  }`} />

                  {/* Centered Play Indicator on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="p-3 bg-primary-red text-white rounded-full shadow-lg shadow-primary-red/50 scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play size={16} fill="currentColor" />
                    </span>
                  </div>


                </div>

                {/* Meta details text card column bottom fill */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-primary-red transition-colors duration-200 line-clamp-1 font-display">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 leading-relaxed mt-2.5 line-clamp-2 font-light">
                      {item.description}
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
          
          <div className="relative bg-cinema-card w-full max-w-5xl rounded-lg border border-white/10 shadow-2xl overflow-hidden my-auto">
            
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
            <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-white/5">
              
              {/* Intent Text & Primary Info left columns */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2.5 mb-2">
                  <span className="px-3 py-0.5 bg-primary-red/10 border border-primary-red/30 text-xs md:text-sm font-bold tracking-widest text-primary-red rounded uppercase font-display">
                    {activeItem.format}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white mb-4 font-display">
                  {activeItem.title}
                </h3>

                <h4 className="text-sm tracking-[0.2em] uppercase font-bold text-white/50 font-display mb-2 flex items-center">
                  <Sparkles size={12} className="text-primary-red mr-1.5" />
                  <span>제작 의도 및 핵심 비하인드</span>
                </h4>
                <p className="text-sm md:text-base text-white/95 leading-relaxed font-light whitespace-pre-line bg-black/40 p-4 rounded border border-white/5">
                  {activeItem.description}
                </p>

                {/* Multiple snapshots/images dynamic gallery */}
                {activeItem.images && activeItem.images.length > 0 && (
                  <div className="mt-8 border-t border-white/5 pt-6 bg-transparent" id="portfolio-photo-gallery">
                    <h4 className="text-sm tracking-[0.2em] uppercase font-bold text-white/50 font-display mb-4 flex items-center">
                      <span>📸 제작 현장 스냅샷 & 이미지 갤러리</span>
                      <span className="ml-2 text-xs font-mono text-primary-red/80 font-normal">({activeItem.images.length})</span>
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
              <div className="space-y-4 bg-black/50 p-5 rounded border border-white/5">
                <h4 className="text-xs tracking-[0.25rem] uppercase font-bold text-white/50 font-display border-b border-white/5 pb-2">
                  상세 제작 정보
                </h4>

                <div className="space-y-3.5 font-sans">
                  
                  {/* Role specification */}
                  <div className="flex items-start">
                    <Award size={15} className="text-primary-red mr-2.5 mt-0.5" />
                    <div>
                      <p className="text-xs font-mono text-white/40 tracking-wider font-semibold">담당 주 역할</p>
                      <p className="text-sm md:text-base text-white/95 font-medium">{activeItem.role}</p>
                    </div>
                  </div>

                  {/* Gear specifications */}
                  {activeItem.equipment && (
                    <div className="flex items-start">
                      <Hammer size={15} className="text-primary-red mr-2.5 mt-0.5" />
                      <div>
                        <p className="text-xs font-mono text-white/40 tracking-wider font-semibold">제작 장비 및 툴</p>
                        <p className="text-sm md:text-base text-white/90 leading-relaxed">{activeItem.equipment}</p>
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
