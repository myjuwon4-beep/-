/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";
import { CareerAchievementMetric } from "../types";

interface AnimatedMetricProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedMetricNumber({
  target,
  suffix = "",
  prefix = "",
  duration = 800 // 0.8s
}: AnimatedMetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();

    const frame = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Clean cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * target);

      setValue(currentVal);

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setValue(target);
      }
    };

    requestAnimationFrame(frame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-bold text-white font-mono">
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

interface CareerMetricLineProps {
  metric: string | CareerAchievementMetric;
}

export function CareerMetricLine({ metric }: CareerMetricLineProps) {
  const text = typeof metric === "string" ? metric : metric.text;
  const criteria = typeof metric === "object" ? metric.criteria : undefined;

  const renderAnimatedText = () => {
    if (text.includes("2,000명 → 8,000명")) {
      return (
        <span className="leading-[1.7]">
          운영 1년 만에 유튜브 채널 구독자 2,000명 → <AnimatedMetricNumber target={8000} suffix="명" /> 증가
        </span>
      );
    }

    if (text.includes("롱폼 45만 회 · 쇼츠 54만 회")) {
      return (
        <span className="leading-[1.7]">
          최고 조회수 롱폼 <AnimatedMetricNumber target={45} suffix="만 회" /> · 쇼츠 <AnimatedMetricNumber target={54} suffix="만 회" /> (10만 회 이상 콘텐츠 다수 제작)
        </span>
      );
    }

    if (text.includes("약 48% 증가")) {
      return (
        <span className="leading-[1.7]">
          콘텐츠 기반 고객 문의율 전년 동기 대비 약 <AnimatedMetricNumber target={48} suffix="%" /> 증가
        </span>
      );
    }

    if (text.includes("113명 → 단기간 내 1,800명")) {
      return (
        <span className="leading-[1.7]">
          인스타그램 팔로워 113명 → 단기간 내 <AnimatedMetricNumber target={1800} suffix="명" />으로 증가
        </span>
      );
    }

    if (text.includes("최고 91만 회 달성")) {
      return (
        <span className="leading-[1.7]">
          릴스 최고 조회수 극적 성장 (입사 전 1,000회 미만 → 입사 후 최고 <AnimatedMetricNumber target={91} suffix="만 회" /> 달성)
        </span>
      );
    }

    return <span className="leading-[1.7]">{text}</span>;
  };

  return (
    <div className="space-y-0.5">
      <div>{renderAnimatedText()}</div>
      {criteria && (
        <div className="text-xs sm:text-[13px] text-[#8A8A93] flex items-center gap-1.5 font-mono">
          <span className="inline-block w-1 h-1 rounded-full bg-white/30" />
          <span>{criteria}</span>
        </div>
      )}
    </div>
  );
}
