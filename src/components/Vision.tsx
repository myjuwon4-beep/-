/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Play, Phone, ArrowUpRight } from "lucide-react";

export default function Vision() {
  const phoneNumber = "010-4820-0441";
  const telUrl = "tel:010-4820-0441";

  return (
    <section id="vision" className="py-24 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary-red" />
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
              VISION & CONTACT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            입사 지원 포부
          </h2>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="vision-content-grid">
          
          {/* Left Column: Ambition Statements */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 bg-[#F8F9FA] rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug whitespace-pre-wrap">
                저는 영상을 제작하는 사람을 넘어 콘텐츠를 통해{"\n"}
                브랜드 성장을 만드는 사람이 되고 싶습니다.
              </h3>
              
              <div className="h-0.5 bg-primary-red w-12" />

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal whitespace-pre-wrap">
                홍보 영상 부터 유튜브, 인스타그램(릴스) 콘텐츠 채널 운영까지 경험하며{"\n"}
                기획, 제작, 운영, 성장의 전 과정을 수행해 왔습니다.
              </p>
              
              <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-semibold whitespace-pre-wrap">
                앞으로도 데이터와 크리에이티브를 기반으로{"\n"}
                브랜드와 고객을 연결하는 콘텐츠를 만들겠습니다.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Box */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 bg-[#F8F9FA] rounded-2xl border border-slate-200/80 shadow-2xs">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                <h4 className="text-xl font-bold tracking-tight text-slate-900">
                  연락처
                </h4>
              </div>

              {/* Direct Call Link Card */}
              <div className="space-y-4">
                <a
                  href={telUrl}
                  className="flex items-center justify-between p-5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl transition-all duration-200 group shadow-3xs"
                  title="바로 전화 걸기"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-red-50 text-primary-red rounded-lg border border-red-100 group-hover:bg-primary-red group-hover:text-white transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 block tracking-wider uppercase">휴대폰 번호</span>
                      <span className="text-base sm:text-lg font-bold text-slate-900 tracking-wide font-mono">
                        {phoneNumber}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500 leading-relaxed">
                궁금하신 점이 있으시거나 면접 일정을 조율하고자 하실 때 언제든 편하게 연락 주시면 감사하겠습니다.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
