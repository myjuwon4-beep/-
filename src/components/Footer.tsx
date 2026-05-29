/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUp, Disc, Shield } from "lucide-react";

interface FooterProps {
  onAdminToggle: () => void;
  isAdmin: boolean;
}

export default function Footer({ onAdminToggle, isAdmin }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="footer" className="bg-cinema-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Core Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm text-white/70 tracking-wider">
            © {new Date().getFullYear()} 이주원 PD. All Rights Reserved.
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-2 font-mono text-[11px] text-white/50 tracking-widest uppercase">
            <Disc size={11} className="text-primary-red animate-spin-slow" />
            <span>Niche Automotive & Campaign Content Director Portfolio</span>
          </div>
        </div>

        {/* Action Panel Links */}
        <div className="flex items-center space-x-6">
          {/* Quick Admin Toggle */}
          <button
            id="footer-admin-btn"
            onClick={onAdminToggle}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded text-xs font-mono tracking-widest border transition-all duration-200 cursor-pointer ${
              isAdmin
                ? "bg-primary-red/20 border-primary-red text-primary-red"
                : "bg-black hover:bg-neutral-900 border-white/15 hover:border-white/30 text-white/50 hover:text-white"
            }`}
          >
            <Shield size={11} className={isAdmin ? "animate-pulse" : ""} />
            <span>{isAdmin ? "ADMIN CONTROL ACTIVE" : "PORTAL ACCESS"}</span>
          </button>

          {/* Scroll back to top */}
          <button
            id="footer-scroll-top"
            onClick={scrollToTop}
            className="p-2.5 bg-cinema-card border border-white/10 hover:border-primary-red text-white/50 hover:text-white rounded-full transition-all duration-200 cursor-pointer"
            title="맨 최고로"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
