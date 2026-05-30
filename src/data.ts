/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, CareerItem, SkillCategory, SiteTexts } from "./types";

// Dynamic Video Loops & authentic high-quality Unsplash headers representing outdoor camper & premium automotive
export const DEFAULT_HERO_VIDEO = "https://player.vimeo.com/external/554868018.sd.mp4?s=5543c740292cc2cca0b8ece493c06e23296c0964&profile_id=165&oauth2_token_id=57447761";

export const initialPortfolioItems: PortfolioItem[] = [
  // PROMOTION (홍보) - 3 items
  {
    id: "portfolio-promo-1",
    title: "대한민국 견인장치 NO.1 K트레일러 홍보",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "PROMOTION",
    description: "입사 후 회사를 홍보하는 영상이 없어 견인장치 제조 업체와 함께 회사를 홍보하는 영상 제작",
    videoUrl: "https://www.youtube.com/watch?v=XM2E0Eqf_8U",
    imageUrl: "https://img.youtube.com/vi/XM2E0Eqf_8U/maxresdefault.jpg",
    previewVideoUrl: "https://player.vimeo.com/external/490898514.sd.mp4?s=c8afbdcf7ad1ea5408a688d0b679a9ccb2f6efba&profile_id=164&oauth2_token_id=57447761",
    equipment: "Sony a7m3, DJI Mini 4 Pro | Premiere Pro, After effect",
    duration: "03:45",
    date: "2025-01",
    order: 1
  },
  {
    id: "portfolio-promo-2",
    title: "한국 관광공사 유니크베뉴 | 왕의지밀 홍보 영상",
    client: "왕의지밀",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "PROMOTION",
    description: "한국관광공사 유니크베뉴로 선정된 '왕의지밀'를 홍보 하고 주변 관광지를 함께 홍보",
    videoUrl: "https://www.youtube.com/watch?v=cZLWRn6voS0",
    imageUrl: "https://img.youtube.com/vi/cZLWRn6voS0/maxresdefault.jpg",
    previewVideoUrl: "https://player.vimeo.com/external/459389137.sd.mp4?s=89e900593b4a53fa38eafca6f2cc9689e3a6c5eb&profile_id=165&oauth2_token_id=57447761",
    equipment: "Sony a7m3, DJI Mavic 2 | Premiere Pro, After effect",
    duration: "04:15",
    date: "2024-11",
    order: 2
  },
  {
    id: "portfolio-promo-3",
    title: "한국 관광공사 국제회의시설 VR360홍보",
    client: "한국관광공사",
    role: "PM, 편집",
    format: "PROMOTION",
    description: "국제 회의 시설 VR360 홍보 영상으로 각 회의 시설 및 전시관을 세세하게 보여주기 위함",
    videoUrl: "https://youtu.be/Ioh8RRnDAcg",
    imageUrl: "https://img.youtube.com/vi/Ioh8RRnDAcg/hq2.jpg",
    previewVideoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b1851722e1de7fe50ddf7cfda&profile_id=139&oauth2_token_id=57447761",
    equipment: "인스타 360 | Premiere Pro",
    duration: "02:50",
    date: "2024-09",
    order: 3
  },

  // YOUTUBE LONG (유튜브 롱폼) - 7 items
  {
    id: "portfolio-long-1",
    title: "PV5 전기차 23시간 전기 테스트",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "YOUTUBE LONG",
    description: "사람들이 전기차를 구입하면서 가장 궁금해 하는 부분 전기 사용량을 테스트 해서 궁금증을 풀어 주기 위함 캠핑 브이로그와 정보성을 함께 기획하여 진행",
    videoUrl: "https://www.youtube.com/watch?v=5Vhtzdd1Pyw",
    imageUrl: "",
    equipment: "오즈모 포켓3, DJI Mini 4 Pro | Premiere Pro",
    duration: "11:24",
    date: "2025-02",
    order: 4
  },
  {
    id: "portfolio-long-2",
    title: "신형 무쏘 차량 오프로드, 일반도로 테스트",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "YOUTUBE LONG",
    description: "신형 무쏘 출고 후 일반도로 주행과 픽업트럭 특성상 오프로드 테스트까지 시청자가 궁금해 하는 부분들을 해소해 주기 위함",
    videoUrl: "https://www.youtube.com/watch?v=zILYhYno5Ps",
    imageUrl: "",
    equipment: "a7c2, 오즈모 액션5, 오즈모 포켓, 고프로10, DJI Mini 4 Pro | Premiere Pro",
    duration: "13:10",
    date: "2025-01",
    order: 5
  },
  {
    id: "portfolio-long-3",
    title: "무쏘EV, 타스만 등 급 경사 등판 테스트",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "YOUTUBE LONG",
    description: "무쏘EV, 타스만, 카니발, 렉스턴 스포츠 칸 국내에서 많이 사용하고 견인장치를 많이 장착하는 차량을 이용해 카라반을 견인하고 등판 테스트 진행 구매를 고민하는 고객들에게 궁금증을 풀어주기 위함",
    videoUrl: "https://www.youtube.com/watch?v=x9j9Erj4chU",
    imageUrl: "",
    equipment: "a7c2, 오즈모 액션5, 오즈모 포켓3, 고프로10, DJI Mini 4 Pro | Premiere Pro",
    duration: "12:15",
    date: "2024-10",
    order: 6
  },
  {
    id: "portfolio-long-4",
    title: "견인장치 선택 고민 해결해 드립니다.",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "YOUTUBE LONG",
    description: "구매 고민을 하는 고객들의 고민을 털어 주기 위해 견인장치 전문 직원들이 견인장치 2가지 타입을 비교해서 배틀 형식으로 토론을 하는 콘텐츠 제작",
    videoUrl: "https://www.youtube.com/watch?v=bCnX5uOil5U",
    imageUrl: "",
    equipment: "a7m3, 핸드폰, 고프로10, | Premiere Pro",
    duration: "10:50",
    date: "2024-08",
    order: 7
  },
  {
    id: "portfolio-long-5",
    title: "무쏘 신형 +고버랜드 캠퍼 동계 캠핑",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "YOUTUBE LONG",
    description: "신형 무쏘 차량과 픽업트럭 전용 고버랜드 캠퍼를 이용해 동계 캠핑을 하고 극 동계에도 사용 가능한 제품을 선보이기 위해 직접 체험하는 콘텐츠 제작",
    videoUrl: "https://www.youtube.com/watch?v=g489MFvrbZ0",
    imageUrl: "",
    equipment: "a7c2, 오즈모 액션5, 오즈모 포켓3, DJI Mini 4 Pro | Premiere Pro",
    duration: "15:40",
    date: "2024-06",
    order: 8
  },
  {
    id: "portfolio-long-6",
    title: "신형 무쏘EV 전기차의 승차감 과 견인 주행 테스트",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "YOUTUBE LONG",
    description: "전기차로 카라반을 견인 했을 때의 주행감을 고객들에게 보여주고 구매 유도를 하기 위함",
    videoUrl: "https://www.youtube.com/watch?v=B5KUOagAOoA",
    imageUrl: "",
    equipment: "a7c2, 오즈모 액션5, 오즈모 포켓3, DJI Mini 4 Pro | Premiere Pro",
    duration: "18:25",
    date: "2024-04",
    order: 9
  },
  {
    id: "portfolio-long-7",
    title: "대구 직영점의 대표님 없는 하루 VLOG&루프탑텐트 리뷰",
    client: "K-TRAILER",
    role: "편집",
    format: "YOUTUBE LONG",
    description: "대구직영점을 알리기 위해 대구 직원들께 루프탑텐트를 직접 사용하고 리뷰하는 영상을 촬영 요청 캐릭터 이미지를 바탕으로 재미 있게 편집 구성",
    videoUrl: "https://youtu.be/0lA9uVIcWK4",
    imageUrl: "",
    equipment: "핸드폰 | Premiere Pro",
    duration: "14:12",
    date: "2024-03",
    order: 10
  },

  // SHORTS (쇼츠 / 숏폼) - 5 items
  {
    id: "portfolio-shorts-1",
    title: "견인장치 무사고 연결법 (유럽식 커플러)",
    client: "K-TRAILER",
    role: "편집",
    format: "SHORTS",
    description: "기존에 다른 PD가 제작했던 영상에서 keypoint 부분을 재 편집하여 고객들의 트레일러 장착 방법을 짧고 굵게 전달 17만 조회수 달성",
    videoUrl: "https://www.youtube.com/shorts/upLsH4PXbrM",
    imageUrl: "/coupling_thumb_hq1.jpg",
    duration: "00:45",
    date: "2024-08",
    order: 11
  },
  {
    id: "portfolio-shorts-2",
    title: "리비안 EDV500 차량 소개",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "SHORTS",
    description: "미국 아마존에서만 사용되는 목적성 차량을 소개하여 K트레일러 회사가 우리나라 연구소 차량의 연구를 위해 견인장치를 달고 있다는 홍보성 영상 제작",
    videoUrl: "https://www.youtube.com/shorts/vTMvqP2QkVU",
    imageUrl: "",
    duration: "00:38",
    date: "2024-07",
    order: 12
  },
  {
    id: "portfolio-shorts-3",
    title: "PV5 튜닝하면 차가 달라진다.",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "SHORTS",
    description: "신차 PV5의 부족함을 채워줄수 있는 튜닝 제품을 홍보하기 위함",
    videoUrl: "https://www.youtube.com/shorts/-kx8OpMUvvs",
    imageUrl: "",
    duration: "00:52",
    date: "2024-05",
    order: 13
  },

  // INTERVIEW (인터뷰) - 2 items
  {
    id: "portfolio-interview-1",
    title: "무쏘EV 2만km 주행 후기 | 진텍 캐노피",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "INTERVIEW",
    description: "회사 사업 확장을 위해 판매하고 있는 제품과 무쏘EV 차량을 구매 고민하는 시청자들의 궁금증을 풀어 주는 주행 후기 인터뷰",
    videoUrl: "https://www.youtube.com/watch?v=LleqHF6Zmcs",
    imageUrl: "",
    previewVideoUrl: "",
    equipment: "a7c2, 오즈모 포켓3, DJI Mini 4 Pro | Premiere Pro",
    duration: "08:50",
    date: "2024-04",
    order: 16
  },
  {
    id: "portfolio-interview-2",
    title: "자전거 덕후들이 뽑은 BEST 6 자전거 코스 | 에포스",
    client: "THULE",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "INTERVIEW",
    description: "자전거 라이딩 하는 유명한 장소에서 '툴레'와 협업하여 자전거를 즐기는 시청자들에게 자전거 캐리어 설치 이벤트를 진행하여 구매 유도 및 유명한 라이딩 장소를 소개해 드리는 콘텐츠 제작",
    videoUrl: "https://www.youtube.com/watch?v=g1EDO_dBD7E",
    imageUrl: "",
    previewVideoUrl: "",
    equipment: "a7c2, 오즈모액션5, 오즈모 포켓3, 고프로10, DJI Mini 4 Pro | Premiere Pro",
    duration: "11:05",
    date: "2023-11",
    order: 17
  }
];

export const initialCareerItems: CareerItem[] = [
  {
    id: "career-1",
    period: "2024 ~ 2026",
    title: "K트레일러",
    role: "인하우스 영상기획총괄 PD",
    description: [
      "유튜브 및 인스타그램 채널의 카라반/트레일러/캠핑 레저 용품 전문 브랜디드 영상 기획, 촬영, 최적화 편집 전담",
      "캠핑 아웃도어 트렌드와 EV 친환경 차량의 한계 견력을 테스트하는 유니크 오토모티브 로드마크 콘텐츠 개발"
    ],
    achievements: [
      {
        platform: "YouTube 콘텐츠 부문 (@k_trailer)",
        metrics: [
          "운영 1년 만에 유튜브 채널 구독자 약 2,000명 대에서 7,200명 돌파 (360% 폭발적 성장)",
          "핵심 오토모티브 기획 영상 최고 누적 조회수 42만 회 돌파",
          "연계 오더 문의율 전년 동 분기 대비 약 48% 가치 신장 기여"
        ],
        link: "https://www.youtube.com/@k_trailer",
        linkName: "@k_trailer 유튜브 바로가기"
      },
      {
        platform: "Instagram 숏폼 채널 운영 (@ktrailer1)",
        metrics: [
          "입사 후 120명 대 팔로워에서 릴스 연출을 장려하여 단기간 내 1,300명으로 증가",
          "캠핑 시장이 죽어 가면서 모터홈에 관심을 갖는 시청자들에게 원하고 필요로하는 콘텐츠를 제작하여 최고 누적 조회수 91만 회 달성"
        ],
        link: "https://www.instagram.com/ktrailer1/",
        linkName: "@ktrailer1 인스타그램 바로가기"
      }
    ]
  },
  {
    id: "career-2",
    period: "2021 ~ 2024",
    title: "루씨드 드림",
    role: "영상제작팀 팀장 및 APM(어시스턴트 PM)",
    description: [
      "한국관광공사 주관 국제회의시설(유니크베뉴)의 메인 8K 다각 및 360° VR 감각 시네마 촬영 총괄 및 홍보 영상 제작"
    ],
    achievements: [
      {
        platform: "한국관광공사 (KTO)",
        metrics: [
          "국제 바이어 유치용 고해상도 테마 VR 투어 프로덕션 리딩",
          "유니크 베뉴 관광 홍보용 영상 제작"
        ]
      }
    ]
  },
  {
    id: "career-3",
    period: "2013 ~ 2021",
    title: "이투스 (ETOOS) 교육",
    role: "기획 영상 촬영 & 스튜디오 관리 &\n촬영 팀 관리 & 라이브",
    description: [
      "이투스 공식 유튜브 채널 기획 다큐멘터리, 수강 동기화 트렌드 및 대형 성명 쇼츠 예능 영상 제작",
      "라이브 대형 세미나 중계 및 파견직 촬영 크루(10여 명) 인력 수급/관리 및 스튜디오 실시간 운영 설계",
      "스타 강사 맞춤형 시각 이펙트 설계 가이드라인 구축 및 촬영 장비 유지보수 전반 총괄"
    ]
  },
  {
    id: "career-4",
    period: "2012 ~ 2013",
    title: "한국영상프로덕션",
    role: "홍보 영상 촬영",
    description: [
      "수자원 공사 홍보 영상 촬영",
      "한국도로공사 홍보 영상 촬영",
      "남한산성 홍보 영상 촬영"
    ]
  }
];

export const initialSkills: SkillCategory[] = [
  {
    category: "촬영",
    skills: ["a7m4", "a7c2", "DJI Drone", "액션 캠", "짐벌"]
  },
  {
    category: "영상편집",
    skills: ["Premiere", "After effect", "Photoshop"]
  }
];

// Helper to handle client-side updates instantly and persist
export const getStoredPortfolioItems = (): PortfolioItem[] => {
  if (typeof window === "undefined") return initialPortfolioItems;
  try {
    const stored = localStorage.getItem("portfolio_items");
    if (
      !stored || 
      stored.includes("유럽 명품 COCHET 트레일러") ||
      !stored.includes("대한민국 견인장치") ||
      stored.includes("portfolio-shorts-4") ||
      stored.includes("portfolio-shorts-5")
    ) {
      // Force migrate to show the beautiful updated titles/descriptions instantly
      try {
        localStorage.setItem("portfolio_items", JSON.stringify(initialPortfolioItems));
      } catch (inner) {}
      return initialPortfolioItems;
    }
    const parsed = JSON.parse(stored) as PortfolioItem[];
    let updated = false;
    const migrated = parsed.map(item => {
      const defaultItem = initialPortfolioItems.find(x => x.id === item.id);
      if (defaultItem) {
        // Sync thumbnail if the code definition has updated to a fresh thumbnail URL
        if (item.imageUrl !== defaultItem.imageUrl) {
          item.imageUrl = defaultItem.imageUrl;
          updated = true;
        }
      }
      return item;
    });
    if (updated) {
      try {
        localStorage.setItem("portfolio_items", JSON.stringify(migrated));
      } catch (inner) {}
      return migrated;
    }
    return parsed;
  } catch (e) {
    return initialPortfolioItems;
  }
};

export const saveStoredPortfolioItems = (items: PortfolioItem[]) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("portfolio_items", JSON.stringify(items));
    } catch (e) {}
  }
};

export const getStoredCareerItems = (): CareerItem[] => {
  if (typeof window === "undefined") return initialCareerItems;
  try {
    const stored = localStorage.getItem("career_items");
    if (
      !stored || 
      !stored.includes("career-4") || 
      stored.includes("이투스 (ETOOS) 교육 미디어 스튜디오") ||
      stored.includes("기초 120명 대") ||
      !stored.includes("캠핑 레저 용품") ||
      stored.includes("국가 정보 홍보 사업 콘텐츠 사업부") ||
      !stored.includes("국제회의시설(유니크베뉴)") ||
      stored.includes("견인장치 및 오토모티브 미디어") ||
      stored.includes("인하우스 PD + 국가 정보 홍보 사업 콘텐츠") ||
      stored.includes("인하우스 메인 영상 기획 & 촬영 책임 PD") ||
      stored.includes("홍보 영상 촬영 PD") ||
      !stored.includes("루씨드 드림") ||
      !stored.includes("스튜디오 관리 &") ||
      !stored.includes("촬영 팀 관리")
    ) {
      try {
        localStorage.setItem("career_items", JSON.stringify(initialCareerItems));
      } catch (inner) {}
      return initialCareerItems;
    }
    return JSON.parse(stored);
  } catch (e) {
    return initialCareerItems;
  }
};

export const saveStoredCareerItems = (items: CareerItem[]) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("career_items", JSON.stringify(items));
    } catch (e) {}
  }
};

export const getStoredSkills = (): SkillCategory[] => {
  if (typeof window === "undefined") return initialSkills;
  try {
    const stored = localStorage.getItem("skill_categories");
    if (!stored || stored.includes("Automotive Production") || !stored.includes("촬영") || !stored.includes("영상편집")) {
      try {
        localStorage.setItem("skill_categories", JSON.stringify(initialSkills));
      } catch (inner) {}
      return initialSkills;
    }
    return JSON.parse(stored);
  } catch (e) {
    return initialSkills;
  }
};

export const saveStoredSkills = (items: SkillCategory[]) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("skill_categories", JSON.stringify(items));
    } catch (e) {}
  }
};

export const defaultSiteTexts: SiteTexts = {
  heroTagline: "HIGH-END VIDEO PRODUCER",
  heroTitle: "VIDEO MARKETING",
  heroSubtitle: "DIRECTOR",
  heroSlogan: "기획부터 촬영, 편집까지 브랜드 가치를 관통하는 1인 제작\n장기 근속 경력의 신뢰성과 플래그십 팀 협업 프로젝트 리드 경력",
  heroCompetence1: "홍보 · 유튜브 · 숏폼 영상 콘텐츠 전문",
  heroCompetence2: "기획 · 촬영 · 편집 · 브랜디드 콘텐츠 총괄",
  aboutTagline: "\"브랜드 가치를 주행시키는 시네마 크리에이터\"",
  aboutTitle: "안녕하세요, 비디오 마케팅 디렉터\n이주원 PD 입니다.",
  aboutDescription: "단순한 기획·촬영·편집의 도구적 대행이 아닌, 브랜드가 시장에 전달하고픈 코어 메시지를 \n눈을 뗄 수 없는 영상 구조로 설계하고 실행합니다.",
  profileName: "이주원",
  profileAge: "41세",
  profilePhone: "010-4820-0441",
  profileEmail: "seoulpotato@naver.com",
  aboutImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800",
  profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
};

export const getStoredSiteTexts = (): SiteTexts => {
  if (typeof window === "undefined") return defaultSiteTexts;
  try {
    const stored = localStorage.getItem("site_texts");
    if (!stored) {
      try {
        localStorage.setItem("site_texts", JSON.stringify(defaultSiteTexts));
      } catch (inner) {}
      return defaultSiteTexts;
    }
    const parsed = JSON.parse(stored);
    // Migration: If user has local storage with the old default slogan variants, migrate it automatically to the upgraded professional Korean slogan
    if (
      parsed &&
      (parsed.heroSlogan === "기획부터 촬영, 완벽한 편집까지 브랜드 가치를 관통하는 1인 제작" ||
       parsed.heroSlogan?.includes("장기 비즈니스 파트너십") ||
       parsed.heroSlogan?.includes("견고한 신뢰성") ||
       !parsed.heroCompetence1?.includes("홍보"))
    ) {
      parsed.heroSlogan = defaultSiteTexts.heroSlogan;
      parsed.heroCompetence1 = defaultSiteTexts.heroCompetence1;
      try {
        localStorage.setItem("site_texts", JSON.stringify(parsed));
      } catch (inner) {}
    }
    if (parsed && (parsed.heroCompetence2 === "기획 · 촬영 · 편집 · 브랜디드 콘텐츠 총괄 프로덕션" || parsed.heroCompetence2?.includes("프로덕션"))) {
      parsed.heroCompetence2 = defaultSiteTexts.heroCompetence2;
      try {
        localStorage.setItem("site_texts", JSON.stringify(parsed));
      } catch (inner) {}
    }
    if (parsed && (parsed.aboutTitle === "안녕하세요, 비디오 마케팅 디렉터 이주원 PD 입니다." || !parsed.aboutTitle?.includes("\n"))) {
      parsed.aboutTitle = defaultSiteTexts.aboutTitle;
      parsed.aboutDescription = defaultSiteTexts.aboutDescription;
      try {
        localStorage.setItem("site_texts", JSON.stringify(parsed));
      } catch (inner) {}
    }
    return { ...defaultSiteTexts, ...parsed };
  } catch (e) {
    return defaultSiteTexts;
  }
};

export const saveStoredSiteTexts = (texts: SiteTexts) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("site_texts", JSON.stringify(texts));
    } catch (e) {}
  }
};
