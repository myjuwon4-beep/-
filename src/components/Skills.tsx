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
      return <Radio size={16} className="text-primary-red" />;
    }
    if (categoryName.includes("Post") || categoryName.includes("편집")) {
      return <Sliders size={16} className="text-primary-red" />;
    }
    return <Cpu size={16} className="text-primary-red" />;
  };

  return (
    <section id="skills" className="py-24 bg-cinema-black border-y border-slate-200 relative overflow-hidden">
      {/* Immersive Dark glow on corners */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#E30613]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:flex-row md:items-end justify-between">
          <div>
            <span className="text-sm tracking-[0.4em] text-primary-red font-bold block mb-2 font-display">
              04 / 보유 전문 역량 및 장비
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900">
              보유 기술 및 역량
            </h2>
          </div>
          <div className="h-[2px] bg-slate-200 flex-grow mx-8 hidden md:block mb-3" />
          <p className="text-slate-500 text-sm font-mono mt-4 md:mt-0 tracking-widest font-black">
            실무 제작 장비 및 소프트웨어
          </p>
        </div>

        {/* Tactical Skills Bento-Style Matrix */}
        <div className={`grid grid-cols-1 ${displaySkills.length === 2 ? "md:grid-cols-2 max-w-5xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"} gap-8`} id="skills-matrix">
          
          {displaySkills.map((section, sIdx) => (
            <div
              key={sIdx}
              className="p-8 bg-cinema-card rounded-lg border border-slate-200 hover:border-primary-red/40 transition-all duration-400 flex flex-col justify-between shadow-md hover:shadow-lg shadow-slate-100"
              id={`skill-card-${sIdx}`}
            >
              <div>
                {/* Header Tag Category */}
                <div className="flex items-center space-x-3 mb-6 border-b border-slate-200 pb-4">
                  <div className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    {getIcon(section.category)}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-black text-slate-800 tracking-widest uppercase font-display">
                      {section.category}
                    </h3>
                    <span className="text-xs text-slate-500 tracking-[0.1em] font-mono font-bold uppercase">전문 분야</span>
                  </div>
                </div>

                {/* Skills Bullet Items */}
                <div className="space-y-3">
                  {section.skills.map((skill, skIdx) => (
                    <div
                       key={skIdx}
                       className="flex items-center space-x-3 px-3.5 py-2.5 bg-slate-50 rounded border border-slate-150 hover:border-primary-red/20 hover:bg-slate-100/50 transition-all duration-200"
                    >
                      <Check size={14} className="text-primary-red mt-0.5 shrink-0" />
                      <span className="text-sm md:text-base text-slate-800 font-mono font-bold tracking-wide">{skill}</span>
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
