/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Hammer, Cpu, Landmark, Sliders, Play, Settings, Check, Radio } from "lucide-react";
import { initialSkills } from "../data";
import { SkillCategory } from "../types";

interface SkillsProps {
  skills?: SkillCategory[];
}

export default function Skills({ skills = [] }: SkillsProps) {
  const displaySkills = skills && skills.length > 0 ? skills : initialSkills;

  const getIcon = (categoryName: string) => {
    if (categoryName.includes("Production") || categoryName.includes("촬영")) {
      return <Radio size={16} className="text-slate-800" />;
    }
    if (categoryName.includes("Post") || categoryName.includes("편집")) {
      return <Sliders size={16} className="text-slate-800" />;
    }
    return <Cpu size={16} className="text-slate-800" />;
  };

  return (
    <section id="skills" className="py-24 bg-[#F8F9FA] border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary-red" />
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              SKILLS & GEAR
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            보유 기술 및 역량
          </h2>
        </div>

        {/* Skills Grid */}
        <div className={`grid grid-cols-1 ${displaySkills.length === 2 ? "md:grid-cols-2 max-w-5xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"} gap-6`} id="skills-matrix">
          
          {displaySkills.map((section, sIdx) => (
            <div
              key={sIdx}
              className="p-7 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-200 flex flex-col justify-between shadow-2xs"
              id={`skill-card-${sIdx}`}
            >
              <div>
                {/* Header Tag Category */}
                <div className="flex items-center space-x-3 mb-6 border-b border-slate-100 pb-4">
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                    {getIcon(section.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {section.category}
                    </h3>
                  </div>
                </div>

                {/* Skills Bullet Items */}
                <div className="space-y-2.5">
                  {section.skills.map((skill, skIdx) => (
                    <div
                       key={skIdx}
                       className="flex items-center space-x-3 px-3.5 py-2.5 bg-[#F8F9FA] rounded-xl border border-slate-150"
                    >
                      <Check size={14} className="text-primary-red shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-750 font-medium">{skill}</span>
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
