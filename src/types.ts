/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  role: string;
  format: string; // "PROMOTION" | "YOUTUBE LONG" | "SHORTS" | "AI" | "INTERVIEW" | "LIVE"
  isPersonal?: boolean; // whether this is a personal project/spec ad
  description: string;
  videoUrl: string; // YT embed or clean URL
  imageUrl: string; // cover image
  images?: string[]; // custom uploaded multiple images
  previewVideoUrl?: string; // silent mp4 for hover autoplay
  equipment?: string; // used gear / software
  duration?: string; // video length
  date?: string; // production date
  order: number;
}

export interface CareerAchievementMetric {
  text: string;
  criteria?: string; // e.g. "2024.03 ~ 2025.02 / 전년 동기 대비 / 사내 CRM 기준"
}

export interface CareerItem {
  id: string;
  period: string; // e.g., "2024 ~ 2026"
  title: string; // e.g., "KTRAILER 인하우스 PD"
  role: string; // e.g., "콘텐츠 총괄 디렉터"
  description: string[];
  proofImages?: {
    title: string;
    caption: string;
    src: string;
  }[];
  achievements?: {
    platform: string;
    metrics: (string | CareerAchievementMetric)[];
    link?: string;
    linkName?: string;
  }[];
}

export interface SkillCategory {
  category: string; // e.g., "Production", "Directing", "Editing"
  skills: string[];
}

export interface SiteTexts {
  heroTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroSlogan: string;
  heroCompetence1: string;
  heroCompetence2: string;
  aboutTagline: string;
  aboutTitle: string;
  aboutDescription: string;
  profileName: string;
  profileAge: string;
  profilePhone: string;
  profileEmail: string;
  aboutImage?: string;
  profileImage?: string;
}

