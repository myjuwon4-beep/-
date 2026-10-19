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
    <section id="skills" className="py-20 md:py-24 bg-[#F7F6F2] relative border-t border-[#E6E4DC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="mb-12 pb-6 border-b border-[#E6E4DC] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-headline text-[13px] sm:text-sm text-slate-500 font-bold tracking-widest uppercase block mb-2">
              04 / CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              보유 기술 및 역량
            </h2>
          </div>
          <p className="text-[13px] sm:text-base text-slate-600 font-medium max-w-md">
            기획·연출부터 멀티캠 촬영, 색보정, 사운드 믹싱, AI 워크플로우까지
          </p>
        </div>

        {/* Skills Grid */}
        <div className={`grid grid-cols-1 ${displaySkills.length === 2 ? "md:grid-cols-2 max-w-5xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"} gap-6`} id="skills-matrix">
          
          {displaySkills.map((section, sIdx) => (
            <div
              key={sIdx}
              className="p-6 sm:p-7 bg-white border border-[#E6E4DC] hover:border-[#D5D2C7] rounded-2xl flex flex-col justify-between transition-all duration-200 shadow-2xs hover:shadow-md"
              id={`skill-card-${sIdx}`}
            >
              <div>
                {/* Header Tag Category */}
                <div className="mb-5 pb-3.5 border-b border-[#E6E4DC]/60">
                  <span className="font-headline text-[13px] text-slate-500 font-bold tracking-widest uppercase block mb-1">
                    CATEGORY {sIdx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950">
                    {section.category}
                  </h3>
                </div>

                {/* Skills Bullet Items */}
                <div className="space-y-2">
                  {section.skills.map((skill, skIdx) => {
                    const isAiSkill = skill.includes("AI 영상");
                    const isLearning = skill.includes("[학습 중]") || skill.includes("(학습 중)");
                    const cleanName = skill.replace(/\[학습 중\]|\(학습 중\)/g, "").trim();

                    return (
                      <div
                        key={skIdx}
                        className={`px-3.5 py-2.5 rounded-xl text-sm sm:text-[15px] font-medium flex items-center justify-between gap-2 border ${
                          isAiSkill
                            ? "bg-amber-50/70 border-amber-200/80 text-slate-900"
                            : "bg-[#FAF9F5] border-[#ECEAE2] text-slate-800"
                        }`}
                      >
                        <span className="leading-snug">{cleanName}</span>
                        {isAiSkill && (
                          <span className="px-2 py-0.5 bg-amber-100 text-amber-900 text-[11px] font-semibold rounded shrink-0 tracking-tight">
                            학습 &amp; 실무 접목
                          </span>
                        )}
                        {isLearning && !isAiSkill && (
                          <span className="px-2 py-0.5 bg-slate-200 text-slate-700 text-[11px] sm:text-xs font-semibold rounded shrink-0 tracking-tight">
                            학습 중
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Realistic, Humble AI Learning Note */}
        <div className="mt-8 p-4.5 bg-white border border-[#E6E4DC] rounded-xl flex items-center justify-between gap-4 max-w-3xl mx-auto shadow-2xs">
          <p className="text-[13px] sm:text-sm text-slate-600 font-medium leading-relaxed">
            💡 <strong className="text-slate-900 font-bold">중견기업 8년 근속의 안정성과 전방위 실무 역량:</strong> 14년간 다져온 제작 조직 빌딩·팀 리딩·다부서 협업 내공을 기반으로, 1인 올인원 제작부터 최신 생성형 AI 실무 파이프라인까지 비즈니스 성과를 창출하는 검증된 실행력을 갖추고 있습니다.
          </p>
        </div>

      </div>
    </section>
  );
}
