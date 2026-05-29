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
    if (categoryName.includes("Production")) {
      return <Radio size={16} className="text-primary-red" />;
    }
    if (categoryName.includes("Post")) {
      return <Sliders size={16} className="text-primary-red" />;
    }
    return <Cpu size={16} className="text-primary-red" />;
  };

  return (
    <section id="skills" className="py-24 bg-cinema-black border-y border-white/5 relative overflow-hidden">
      {/* Immersive Dark glow on corners */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent-orange/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:flex-row md:items-end justify-between">
          <div>
            <span className="text-sm tracking-[0.4em] text-primary-red font-bold block mb-2 font-display">
              03 / PROFESSIONAL CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white">
              SKILLS
            </h2>
          </div>
          <div className="h-[2px] bg-white/10 flex-grow mx-8 hidden md:block mb-3" />
          <p className="text-white/40 text-sm font-mono mt-4 md:mt-0 tracking-widest">
            OPERATING WORKSTATION
          </p>
        </div>

        {/* Tactical Skills Bento-Style Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="skills-matrix">
          
          {displaySkills.map((section, sIdx) => (
            <div
              key={sIdx}
              className="p-8 bg-cinema-card rounded border border-white/10 hover:border-primary-red/40 transition-all duration-400 flex flex-col justify-between"
              id={`skill-card-${sIdx}`}
            >
              <div>
                {/* Header Tag Category */}
                <div className="flex items-center space-x-3 mb-6 border-b border-white/5 pb-4">
                  <div className="p-2 bg-black rounded border border-white/10">
                    {getIcon(section.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-widest uppercase font-display">
                      {section.category}
                    </h3>
                    <span className="text-xs text-white/50 tracking-[0.1em] font-mono">AUTHORIZED ENGINE</span>
                  </div>
                </div>

                {/* Skills Bullet Items */}
                <div className="space-y-3">
                  {section.skills.map((skill, skIdx) => (
                    <div
                       key={skIdx}
                       className="flex items-center space-x-3 px-3 py-2 bg-black/40 rounded border border-white/5 hover:border-white/15 hover:bg-neutral-900 transition-all duration-200"
                    >
                      <Check size={13} className="text-primary-red mt-0.5 shrink-0" />
                      <span className="text-sm md:text-base text-white/90 font-mono tracking-wide">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Small branding footer tag */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40 tracking-widest">
                <span>VER: LJW_PRO_V3.2</span>
                <span className="text-primary-red">● OPERATIONAL</span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
