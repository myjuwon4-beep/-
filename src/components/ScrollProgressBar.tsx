/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none no-print"
      id="scroll-progress-bar-container"
    >
      <div
        id="scroll-progress-bar-fill"
        className="h-full bg-primary-red transition-all duration-75 ease-out shadow-[0_0_8px_rgba(255,77,87,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
