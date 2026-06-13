/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Printer, X, AlertTriangle } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Career from "./components/Career";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";
import { PortfolioItem, SiteTexts, CareerItem, SkillCategory } from "./types";
import { getStoredPortfolioItems, getStoredSiteTexts, getStoredCareerItems, getStoredSkills } from "./data";

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPdfGuideOpen, setIsPdfGuideOpen] = useState(false);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [careerItems, setCareerItems] = useState<CareerItem[]>([]);
  const [skillsList, setSkillsList] = useState<SkillCategory[]>([]);
  const [siteTexts, setSiteTexts] = useState<SiteTexts>(getStoredSiteTexts);

  // Initial load
  useEffect(() => {
    setPortfolioItems(getStoredPortfolioItems());
    setCareerItems(getStoredCareerItems());
    setSkillsList(getStoredSkills());
    setSiteTexts(getStoredSiteTexts());

    // Check if simple session auth persists for developer ease
    try {
      const savedAuth = localStorage.getItem("admin_session_active");
      if (savedAuth === "true") {
        setIsAdmin(true);
      }
    } catch (e) {
      // Browser blocks localStorage (e.g., inside an iframe)
    }
  }, []);

  const handleSettingsUpdate = () => {
    // Re-fetch instantly from storage to apply additions/edits
    setPortfolioItems(getStoredPortfolioItems());
    setCareerItems(getStoredCareerItems());
    setSkillsList(getStoredSkills());
    setSiteTexts(getStoredSiteTexts());
  };

  const handleSetIsAdmin = (status: boolean) => {
    setIsAdmin(status);
    try {
      if (status) {
        localStorage.setItem("admin_session_active", "true");
      } else {
        localStorage.removeItem("admin_session_active");
      }
    } catch (e) {}
  };

  const handleLogout = () => {
    setIsAdmin(false);
    try {
      localStorage.removeItem("admin_session_active");
    } catch (e) {}
    alert("관리자 세션이 완전히 로그아웃 되었습니다.");
  };

  const scrollToLayoutSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-cinema-black text-slate-800 min-h-screen selection:bg-primary-red selection:text-white antialiased">
      
      {/* 0. Sticky Cinematic Nav */}
      <Navbar
        isAdmin={isAdmin}
        onAdminToggle={() => setIsAdminOpen(true)}
        onLogout={handleLogout}
        onPdfClick={() => setIsPdfGuideOpen(true)}
        siteTexts={siteTexts}
      />

      {/* 1. Immersive Hero Landing Header */}
      <Hero
        siteTexts={siteTexts}
        onPortfolioCall={() => scrollToLayoutSection("portfolio")}
        onPdfClick={() => setIsPdfGuideOpen(true)}
      />

      {/* 2. Pitch About PD */}
      <About siteTexts={siteTexts} />

      {/* 4. Portfolio Grid (Now fully reactive to Admin actions) */}
      <Portfolio items={portfolioItems} />

      {/* 3. Metric-focused Career Chronology */}
      <Career careerItems={careerItems} />

      {/* 5. Bento Skill Board */}
      <Skills skills={skillsList} />

      {/* 6. Future Vision & Career Commitment */}
      <Vision />

      {/* 7. Footer and Administrative Backdoor triggers */}
      <Footer
        isAdmin={isAdmin}
        onAdminToggle={() => setIsAdminOpen(true)}
        onPdfClick={() => setIsPdfGuideOpen(true)}
      />

      {/* Master Admin Portal overlay */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        items={portfolioItems}
        careerItems={careerItems}
        skills={skillsList}
        isAdmin={isAdmin}
        onSetIsAdmin={handleSetIsAdmin}
        onSettingsUpdate={handleSettingsUpdate}
        siteTexts={siteTexts}
      />

      {/* PDF Export Guidance Modal */}
      {isPdfGuideOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm no-print">
          <div className="bg-cinema-card border border-white/10 rounded-xl w-full max-w-lg p-6 md:p-8 text-left shadow-2xl relative animate-fade-in text-white">
            {/* Close Button */}
            <button
              onClick={() => setIsPdfGuideOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-all cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 bg-primary-red/15 rounded-lg text-primary-red">
                <Printer size={22} className="animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white leading-tight">
                  포토폴리오 PDF 저장 및 인쇄 가이드
                </h3>
                <p className="text-xs text-white/40 mt-0.5">
                  이주원 PD님의 온라인 포트폴리오를 파일(PDF) 또는 종이 인쇄물로 저장하세요.
                </p>
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3.5 items-start p-3 bg-white/5 rounded-lg border border-white/5">
                <div className="w-5 h-5 rounded-full bg-primary-red/20 text-primary-red font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white/90">대상(Destination)에서 PDF 저장 선택</h4>
                  <p className="text-xs text-white/60 mt-1">
                    인쇄 창이 실행되면 대상 목록에서 <strong>[PDF로 저장]</strong> (또는 Save as PDF)을 지정하세요.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start p-3 bg-white/5 rounded-lg border border-white/5">
                <div className="w-5 h-5 rounded-full bg-primary-red/20 text-primary-red font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white/90">배경 그래픽 인쇄 체크 <span className="text-primary-red font-bold text-[10px] ml-1">★ 필수</span></h4>
                  <p className="text-xs text-white/60 mt-1">
                    [설정 더보기]를 눌러 <strong>[배경 그래픽] (Background graphics)</strong> 옵션을 활성화해야 포트폴리오 최적화 서식과 컬러가 누락없이 반영됩니다!
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start p-3 bg-white/5 rounded-lg border border-white/5">
                <div className="w-5 h-5 rounded-full bg-primary-red/20 text-primary-red font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white/90">크기 및 방향 규격 맞추기</h4>
                  <p className="text-xs text-white/60 mt-1">
                    용지 크기는 <strong>[A4]</strong>, 방향은 <strong>[세로]</strong>, 여백은 <strong>[최소]</strong> 또는 <strong>[기본]</strong>으로 설정하시면 가장 완성도 높은 문서가 완성됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Sandbox Iframe Caution */}
            <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 rounded-lg text-xs flex gap-2.5 mb-6">
              <AlertTriangle size={16} className="shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">내장 뷰어(iFrame) 사용시 주의:</span> 브라우저 보안 규정상 이 내장된 미리보기 창에서는 인쇄 팝업이 차단될 수 있습니다. 정상적으로 인쇄되지 않을 경우, 상단의 <strong className="text-white">새 창으로 열기 (Open in New Tab)</strong> 또는 공유 받으신 링크로 브라우저에서 직접 페이지를 연 다음 [PDF 저장]을 다시 눌러주시길 바랍니다.
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setIsPdfGuideOpen(false);
                  setTimeout(() => {
                    window.print();
                  }, 150);
                }}
                className="flex-1 py-3 bg-primary-red hover:bg-primary-red/90 text-white font-bold text-sm tracking-wide rounded-lg flex items-center justify-center space-x-2 cursor-pointer transition-colors"
              >
                <Printer size={16} />
                <span>인쇄 창 열기 / PDF 저장</span>
              </button>
              <button
                onClick={() => setIsPdfGuideOpen(false)}
                className="px-5 py-3 bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white/70 hover:text-white font-medium text-sm rounded-lg cursor-pointer transition-colors"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
