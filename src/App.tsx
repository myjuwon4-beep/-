/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Career from "./components/Career";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";
import { PortfolioItem, SiteTexts, CareerItem, SkillCategory } from "./types";
import { getStoredPortfolioItems, getStoredSiteTexts, getStoredCareerItems, getStoredSkills } from "./data";

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
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
    <div className="bg-cinema-black text-white min-h-screen selection:bg-primary-red selection:text-white antialiased">
      
      {/* 0. Sticky Cinematic Nav */}
      <Navbar
        isAdmin={isAdmin}
        onAdminToggle={() => setIsAdminOpen(true)}
        onLogout={handleLogout}
        siteTexts={siteTexts}
      />

      {/* 1. Immersive Hero Landing Header */}
      <Hero
        siteTexts={siteTexts}
        onPortfolioCall={() => scrollToLayoutSection("portfolio")}
      />

      {/* 2. Pitch About PD */}
      <About siteTexts={siteTexts} />

      {/* 4. Portfolio Grid (Now fully reactive to Admin actions) */}
      <Portfolio items={portfolioItems} />

      {/* 3. Metric-focused Career Chronology */}
      <Career careerItems={careerItems} />

      {/* 5. Bento Skill Board */}
      <Skills skills={skillsList} />

      {/* 7. Footer and Administrative Backdoor triggers */}
      <Footer
        isAdmin={isAdmin}
        onAdminToggle={() => setIsAdminOpen(true)}
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

    </div>
  );
}
