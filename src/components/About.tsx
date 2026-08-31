/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { Camera, Upload, Check } from "lucide-react";
import { SiteTexts } from "../types";
import { defaultSiteTexts } from "../data";
import { compressImage } from "../lib/imageCompressor";

interface AboutProps {
  siteTexts?: SiteTexts;
  onSettingsUpdate?: () => void;
}

export default function About({ siteTexts = defaultSiteTexts, onSettingsUpdate }: AboutProps) {
  const [imageError, setImageError] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const profileSrc = siteTexts.aboutImage && !siteTexts.aboutImage.includes("unsplash.com") 
    ? siteTexts.aboutImage 
    : "/profile.svg";

  const handleFileUpload = async (file: File) => {
    if (!file || !file.type.startsWith("image/")) return;
    try {
      setIsUploading(true);
      const compressed = await compressImage(file, 900, 1125, 0.85);
      
      const stored = localStorage.getItem("site_texts");
      const currentTexts = stored ? JSON.parse(stored) : { ...defaultSiteTexts };
      const updatedTexts = {
        ...currentTexts,
        aboutImage: compressed,
        profileImage: compressed
      };
      
      localStorage.setItem("site_texts", JSON.stringify(updatedTexts));
      setImageError(false);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 2500);
      
      if (onSettingsUpdate) {
        onSettingsUpdate();
      }
    } catch (err) {
      console.error("Failed to upload profile image:", err);
      alert("이미지를 처리하는 중 오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const values = [
    {
      title: "시청층 맞춤형 스토리 설계",
      description: (
        <>
          단순히 예쁜 영상이 아닙니다.{" "}
          <strong className="text-white font-bold">주 타겟층</strong>이 가장
          궁금해하고 <strong className="text-white font-bold">몰입하는 지점</strong>과{" "}
          <br className="hidden sm:inline" />
          <strong className="text-white font-bold">숨은 소구 포인트</strong>를
          파악하여 자연스러운{" "}
          <strong className="text-white font-bold">브랜드 신뢰</strong>로 연결합니다.
        </>
      )
    },
    {
      title: "올인원 책임 프로듀서 & 조직 빌딩",
      description: (
        <>
          <strong className="text-white font-bold">이투스교육에서 8년간</strong> 스튜디오 운영과 촬영팀·외주 인력 관리를 총괄했습니다.{" "}
          장비 유지보수 체계, 라이브 송출 가이드라인, 제작 프로세스 표준화까지 없던 시스템을 직접 세웠습니다.{" "}
          <br className="hidden sm:inline" />
          <strong className="text-white font-bold">영상 담당이 없는 조직에 들어가도 혼자 체계를 만들 수 있습니다.</strong>
        </>
      )
    },
    {
      title: "데이터 기반 콘텐츠 기획 및 성장",
      description: (
        <>
          단순 감에 의존하지 않고 타겟 시청자의 검색 키워드와 시청 지속 시간 데이터를 분석하여,{" "}
          <strong className="text-white font-bold">브랜드 인지도와 실질적인 고객 문의 전환</strong>을{" "}
          이끌어내는 고효율 콘텐츠를 설계하고 운영합니다.
        </>
      )
    }
  ];

  return (
    <section id="about" className="py-24 md:py-28 bg-[#1A1A21] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Intro */}
        <div className="mb-14 pb-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-headline text-[13px] sm:text-sm text-[#8A8A93] font-bold tracking-widest uppercase block mb-2">
              01 / ABOUT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              소개 및 핵심 역량
            </h2>
          </div>
          <p className="text-[13px] sm:text-base text-[#8A8A93] font-medium max-w-md">
            기획부터 촬영, 정밀 편집, 채널 성장까지 단절 없이 책임집니다.
          </p>
        </div>

        {/* Content Box Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Block: Profile Portrait (4:5 ratio) with graceful JW fallback */}
          <div className="lg:col-span-5 relative" id="about-photo-wrapper">
            <div className="relative aspect-[4/5] w-full bg-[#202028] border border-white/[0.12] border-t-white/[0.16] rounded-2xl overflow-hidden flex items-center justify-center shadow-xl">
              {!imageError ? (
                <>
                  <img
                    src={profileSrc}
                    alt="이주원 PD 프로필 사진 (/public/profile.jpg)"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                </>
              ) : (
                <div className="w-full h-full bg-[#202028] flex flex-col items-center justify-center p-8 text-center select-none">
                  <div className="w-24 h-24 rounded-2xl bg-[#2A2A34] border border-white/10 flex items-center justify-center mb-5 shadow-lg">
                    <span className="font-headline text-3xl sm:text-4xl font-black text-white tracking-wider">JW</span>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[13px] sm:text-sm font-headline font-bold text-white tracking-widest uppercase block">
                      LEE JU WON
                    </span>
                    <span className="text-[13px] text-[#8A8A93] font-medium tracking-tight block">
                      BRAND CONTENT PRODUCER
                    </span>
                  </div>
                </div>
              )}
              
              {/* Studio Card overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#202028]/95 backdrop-blur-md border border-white/[0.12] border-t-white/[0.16] rounded-xl flex items-center justify-between shadow-md">
                <div>
                  <h4 className="text-base font-bold text-white">이주원</h4>
                  <p className="text-[13px] text-[#8A8A93] font-medium mt-0.5">브랜드 콘텐츠 프로듀서</p>
                </div>
                <span className="text-[13px] font-headline font-bold px-2.5 py-0.5 bg-white/10 border border-white/10 text-white rounded">
                  PD
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: Pitch Copy & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {siteTexts.aboutTagline && (
              <span className="text-[#C9C9CF] text-[13px] sm:text-sm font-bold tracking-wide mb-2 uppercase block">
                {siteTexts.aboutTagline}
              </span>
            )}
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug whitespace-pre-line tracking-tight">
              {siteTexts.aboutTitle}
            </h3>
            
            <p className="mt-5 text-[15px] sm:text-base text-[#C9C9CF] leading-[1.7] font-normal whitespace-pre-line bg-[#202028] border border-white/[0.12] border-t-white/[0.16] p-6 rounded-xl">
              {siteTexts.aboutDescription}
            </p>

            {/* Core Value Pillars - "Why Me" */}
            <div className="mt-8 space-y-3.5">
              <h4 className="text-[13px] font-bold text-[#8A8A93] mb-3">핵심 강점</h4>
              
              {values.map((v, idx) => (
                <div 
                  key={idx}
                  className="p-5 sm:p-6 bg-[#202028] border border-white/[0.12] border-t-white/[0.16] hover:bg-[#2A2A34] hover:border-white/[0.18] rounded-xl transition-all duration-200"
                  id={`about-pillar-${idx}`}
                >
                  <h5 className="text-base sm:text-lg font-bold text-white">{v.title}</h5>
                  <p className="text-[15px] md:text-base text-[#C9C9CF] mt-2 leading-[1.7] font-normal">{v.description}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
