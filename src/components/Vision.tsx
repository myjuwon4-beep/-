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
    <section id="vision" className="py-24 md:py-28 bg-[#16161A] relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="mb-14 pb-6 border-b border-white/[0.07] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-headline text-sm text-[#8A8A93] font-bold tracking-widest uppercase block mb-2">
              05 / ASPIRATION &amp; CONTACT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              입사 지원 포부
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#8A8A93] font-medium max-w-md">
            영상을 넘어 브랜드의 성장을 견인하는 프로듀서로서의 약속
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="vision-content-grid">
          
          {/* Left Column: Ambition Statements */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 bg-[#1A1A1F] border border-white/[0.07] rounded-xl">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug whitespace-pre-wrap">
                저는 영상을 제작하는 사람을 넘어 콘텐츠를 통해{"\n"}
                브랜드 성장을 만드는 사람이 되고 싶습니다.
              </h3>
              
              <div className="h-0.5 bg-white/20 w-12" />

              <p className="text-[15px] sm:text-base md:text-lg text-[#C9C9CF] leading-[1.7] font-normal whitespace-pre-wrap">
                홍보 영상부터 유튜브, 인스타그램(릴스) 콘텐츠 채널 운영까지 경험하며{"\n"}
                기획, 제작, 운영, 성장의 전 과정을 수행해 왔습니다.
              </p>
              
              <p className="text-[15px] sm:text-base md:text-lg text-white leading-[1.7] font-semibold whitespace-pre-wrap">
                앞으로도 데이터와 크리에이티브를 기반으로{"\n"}
                브랜드와 고객을 연결하는 콘텐츠를 만들겠습니다.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Box */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 bg-[#1A1A1F] border border-white/[0.07] rounded-xl">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <h4 className="text-xl font-bold tracking-tight text-white">
                  연락처
                </h4>
              </div>

              {/* Direct Call Link Card */}
              <div className="space-y-4">
                <a
                  href={telUrl}
                  className="flex items-center justify-between p-5 bg-[#16161A] border border-white/[0.06] hover:bg-[#222228] hover:border-white/[0.12] rounded-xl transition-all duration-200 group cursor-pointer"
                  title="바로 전화 걸기"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#1A1A1F] border border-white/[0.06] text-white rounded-lg group-hover:bg-white group-hover:text-black transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-headline font-bold text-[#8A8A93] block tracking-wider uppercase">휴대폰 번호</span>
                      <span className="text-base sm:text-lg font-bold text-white group-hover:text-white tracking-wide font-mono transition-colors">
                        {phoneNumber}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-[#8A8A93] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.07]">
              <p className="text-sm text-[#8A8A93] leading-[1.7]">
                궁금하신 점이 있으시거나 면접 일정을 조율하고자 하실 때 언제든 편하게 연락 주시면 감사하겠습니다.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
