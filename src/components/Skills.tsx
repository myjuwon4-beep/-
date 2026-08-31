/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { initialSkills } from "../data";
import { SkillCategory } from "../types";

interface SkillsProps {
  skills?: SkillCategory[];
}

export default function Skills({ skills = [] }: SkillsProps) {
  const displaySkills = skills && skills.length > 0 ? skills : initialSkills;

  return (
    <section id="skills" className="py-20 md:py-24 bg-[#131318] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="mb-12 pb-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-headline text-[13px] sm:text-sm text-[#8A8A93] font-bold tracking-widest uppercase block mb-2">
              04 / CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              보유 기술 및 역량
            </h2>
          </div>
          <p className="text-[13px] sm:text-base text-[#8A8A93] font-medium max-w-md">
            기획·연출부터 멀티캠 촬영, 색보정, 사운드 믹싱, AI 워크플로우까지
          </p>
        </div>

        {/* Skills Grid */}
        <div className={`grid grid-cols-1 ${displaySkills.length === 2 ? "md:grid-cols-2 max-w-5xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"} gap-6`} id="skills-matrix">
          
          {displaySkills.map((section, sIdx) => (
            <div
              key={sIdx}
              className="p-6 sm:p-7 bg-[#202028] border border-white/[0.12] border-t-white/[0.16] hover:bg-[#2A2A34] hover:border-white/[0.18] rounded-xl flex flex-col justify-between transition-all duration-200"
              id={`skill-card-${sIdx}`}
            >
              <div>
                {/* Header Tag Category */}
                <div className="mb-5 pb-3.5 border-b border-white/[0.08]">
                  <span className="font-headline text-[13px] text-[#8A8A93] font-bold tracking-widest uppercase block mb-1">
                    CATEGORY {sIdx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {section.category}
                  </h3>
                </div>

                {/* Skills Bullet Items */}
                <div className="space-y-2">
                  {section.skills.map((skill, skIdx) => (
                    <div
                       key={skIdx}
                       className="px-3.5 py-2.5 bg-[#1A1A21] border border-white/[0.08] rounded-lg text-sm sm:text-[15px] text-[#C9C9CF] font-medium"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
