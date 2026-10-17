/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, ArrowUpRight } from "lucide-react";

export default function Vision() {
  const phoneNumber = "010-4820-0441";
  const telUrl = "tel:010-4820-0441";

  return (
    <section id="vision" className="py-24 md:py-28 bg-[#EFECE6]/60 relative border-t border-[#E6E4DC]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="mb-14 pb-6 border-b border-[#E6E4DC] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-headline text-[13px] sm:text-sm text-slate-500 font-bold tracking-widest uppercase block mb-2">
              05 / ASPIRATION &amp; CONTACT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              입사 지원 포부
            </h2>
          </div>
          <p className="text-[13px] sm:text-base text-slate-600 font-medium max-w-md">
            영상을 넘어 브랜드의 성장을 견인하는 프로듀서로서의 약속
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="vision-content-grid">
          
          {/* Left Column: Ambition Statements */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 bg-white border border-[#E6E4DC] rounded-2xl shadow-2xs">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 leading-snug whitespace-pre-wrap">
                저는 영상을 제작하는 사람을 넘어 콘텐츠를 통해{"\n"}
                브랜드 성장을 만드는 사람이 되고 싶습니다.
              </h3>
              
              <div className="h-0.5 bg-[#E6E4DC] w-12" />

              <p className="text-[15px] sm:text-base md:text-lg text-slate-600 leading-[1.7] font-normal whitespace-pre-wrap">
                홍보 영상부터 유튜브, 인스타그램(릴스) 콘텐츠 채널 운영,{"\n"}
                그리고 시대 흐름에 맞춘 최신 AI 도구 학습 및 실무 접목까지{"\n"}
                기획, 제작, 운영, 성장의 전 과정을 주도적으로 수행해 왔습니다.
              </p>
              
              <p className="text-[15px] sm:text-base md:text-lg text-slate-950 leading-[1.7] font-semibold whitespace-pre-wrap">
                앞으로도 14년의 탄탄한 기본기와 시대 흐름에 뒤처지지 않는 배움의 태도로,{"\n"}
                브랜드와 고객을 연결하는 가치 있는 콘텐츠를 만들겠습니다.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Box */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 bg-white border border-[#E6E4DC] rounded-2xl shadow-2xs">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <h4 className="text-xl font-bold tracking-tight text-slate-950">
                  연락처
                </h4>
              </div>

              {/* Direct Call Link Card */}
              <div className="space-y-4">
                <a
                  href={telUrl}
                  className="flex items-center justify-between p-5 bg-[#FAF9F5] border border-[#ECEAE2] hover:bg-[#F3EFE6] rounded-2xl transition-all duration-200 group cursor-pointer shadow-2xs"
                  title="바로 전화 걸기"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white border border-[#E6E4DC] text-slate-800 rounded-xl group-hover:bg-slate-900 group-hover:text-white transition-colors shadow-2xs">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[13px] font-bold text-slate-500 block mb-0.5">휴대폰 번호</span>
                      <span className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-rose-600 tracking-wide font-mono transition-colors">
                        {phoneNumber}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-slate-400 group-hover:text-slate-950 transition-colors" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E6E4DC]/60">
              <p className="text-sm text-slate-500 leading-[1.7]">
                궁금하신 점이 있으시거나 면접 일정을 조율하고자 하실 때 언제든 편하게 연락 주시면 감사하겠습니다.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
