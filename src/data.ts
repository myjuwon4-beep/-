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
    title: "유럽 명품 COCHET 트레일러 국내 최초 론칭 필름",
    client: "COCHET / K-TRAILER",
    role: "Lead PD / Cinematographer / Editor",
    format: "PROMOTION",
    description: "유럽 명품 COCHET 폴딩 트레일러의 다이내믹 라이프스타일. 드론 FPV 원테이크 샷과 시네마틱 프레임으로 프리미엄 아웃도어의 미학을 완성했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=XM2E0Eqf_8U",
    imageUrl: "https://img.youtube.com/vi/XM2E0Eqf_8U/maxresdefault.jpg",
    previewVideoUrl: "https://player.vimeo.com/external/490898514.sd.mp4?s=c8afbdcf7ad1ea5408a688d0b679a9ccb2f6efba&profile_id=164&oauth2_token_id=57447761",
    equipment: "Sony FX3, DJI Mavic 3 Pro, DaVinci Resolve",
    duration: "03:45",
    date: "2025-01",
    order: 1
  },
  {
    id: "portfolio-promo-2",
    title: "K-TRAILER 수입 SUV 견인장치 공식 브랜드 무비",
    client: "K-TRAILER",
    role: "Director of Photography / Sound Editor",
    format: "PROMOTION",
    description: "플래그십 SUV 전용 완벽 시스템의 고정밀 공정 시각화. 로우키 하이컨트라스트 조명과 감각적 비트 SFX로 가치적 신뢰를 압도적으로 증명합니다.",
    videoUrl: "https://www.youtube.com/watch?v=cZLWRn6voS0",
    imageUrl: "https://img.youtube.com/vi/cZLWRn6voS0/maxresdefault.jpg",
    previewVideoUrl: "https://player.vimeo.com/external/459389137.sd.mp4?s=89e900593b4a53fa38eafca6f2cc9689e3a6c5eb&profile_id=165&oauth2_token_id=57447761",
    equipment: "Sony FX3, Sirui Anamorphic, Logic Pro X, Premiere Pro",
    duration: "04:15",
    date: "2024-11",
    order: 2
  },
  {
    id: "portfolio-promo-3",
    title: "이지캠퍼 올테레인 폴딩 트레일러 기동 쇼케이스",
    client: "EASYCAMPER / K-TRAILER",
    role: "Visual Director / Drone Pilot / Colorist",
    format: "PROMOTION",
    description: "산악 요철지부터 오프로드 주행까지 거침없는 질감 스케치. 릴스 특성에 맞춘 긴장감 넘치는 편집과 숲속 시그니처 톤으로 주행성을 강조했습니다.",
    videoUrl: "https://youtu.be/Ioh8RRnDAcg",
    imageUrl: "https://img.youtube.com/vi/Ioh8RRnDAcg/maxresdefault.jpg",
    previewVideoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b1851722e1de7fe50ddf7cfda&profile_id=139&oauth2_token_id=57447761",
    equipment: "DJI Avata FPV, GoPro Hero 12, FilmConvert",
    duration: "02:50",
    date: "2024-09",
    order: 3
  },

  // YOUTUBE LONG (유튜브 롱폼) - 7 items
  {
    id: "portfolio-long-1",
    title: "팰리세이드 페이스리프트 수입 견인장치 장착기 & 안전 견인 가이드",
    client: "K-TRAILER (케이 트레일러)",
    role: "Project Director / Cameraman",
    format: "YOUTUBE LONG",
    description: "실차 시공 공정부터 카라반 정렬, 수직 하중 제어까지 상세 정보 기획. 시청자들이 가장 신뢰하는 가이드로 엄청난 유입과 정비 의뢰를 이뤄냈습니다.",
    videoUrl: "https://www.youtube.com/watch?v=5Vhtzdd1Pyw",
    imageUrl: "",
    equipment: "Sony FX3, Wireless GO II, Premiere Pro",
    duration: "11:24",
    date: "2025-02",
    order: 4
  },
  {
    id: "portfolio-long-2",
    title: "반드시 체크할 견인볼 규격의 진실! 50mm vs 2인치 정밀 분석",
    client: "K-TRAILER (케이 트레일러)",
    role: "Lead PD / Storyboard / Motion Graphics",
    format: "YOUTUBE LONG",
    description: "카라반 이탈 사고 요인 분석과 유려한 HUD 오버레이 3D 모션 디자인. 메커니즘을 시각적으로 알기 쉽게 이해시켜 완벽한 정보성을 소구했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=zILYhYno5Ps",
    imageUrl: "",
    equipment: "Sony FX3, After Effects, DaVinci Resolve",
    duration: "13:10",
    date: "2025-01",
    order: 5
  },
  {
    id: "portfolio-long-3",
    title: "수입 SUV 툴레 루프박스 정밀 인스톨 & 주행 풍절 소음 해결 백서",
    client: "K-TRAILER",
    role: "Main Producer / Video Editor",
    format: "YOUTUBE LONG",
    description: "루프 캐리어 한계치 실시간 풍하중 테스트와 해결 꿀팁 제공. 일인칭 포커싱 구도와 정밀 SFX 사운드로 전문가의 장인 기술을 몰입감 있게 담았습니다.",
    videoUrl: "https://www.youtube.com/watch?v=x9j9Erj4chU",
    imageUrl: "",
    equipment: "Sony FX3, Rode Shotgun Mic, Premiere Pro",
    duration: "12:15",
    date: "2024-10",
    order: 6
  },
  {
    id: "portfolio-long-4",
    title: "미국형 트레일러 제동의 핵심! 디지털 브레이크 컨트롤러 완벽 조작법",
    client: "K-TRAILER",
    role: "Project Director / Sound Designer",
    format: "YOUTUBE LONG",
    description: "트레일러 스웨이 방지를 위한 비례식 전기 제동기 세팅. 스플릿 스크린 편집을 적용해 긴급 상황 시 작동 원리와 대안을 일목요연하게 짚어줍니다.",
    videoUrl: "https://www.youtube.com/watch?v=bCnX5uOil5U",
    imageUrl: "",
    equipment: "Sony FX3, Custom Sound Effects, DaVinci Resolve",
    duration: "10:50",
    date: "2024-08",
    order: 7
  },
  {
    id: "portfolio-long-5",
    title: "모든 캠퍼들의 로망! 툴레 어닝 & 루프탑 텐트 감성 매치업 리뷰",
    client: "K-TRAILER",
    role: "PD / Multi-Camera Operator / Grading",
    format: "YOUTUBE LONG",
    description: "1인 단독 전개 피칭과 아궁이 감성 빗소리 수음. 풍부하고 화사한 올리브 톤 매핑을 통해 아웃도어 특유의 생동감 넘치는 질감을 명징하게 촬영했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=g489MFvrbZ0",
    imageUrl: "",
    equipment: "Sony FX3, Mavic 3 Drone, Premiere Pro",
    duration: "15:40",
    date: "2024-06",
    order: 8
  },
  {
    id: "portfolio-long-6",
    title: "미국식 카고 트레일러 캠핑 오피스 개조! 완벽 배선 & 우레탄 단열백서",
    client: "K-TRAILER",
    role: "Lead PD / Storyboard Creator / Colorist",
    format: "YOUTUBE LONG",
    description: "골조 보강, 전력 자립용 부품 라인 설계 및 세그먼트 타임랩스 기록. 극적 공간 변화를 고화질 시네마틱 속도로 담아내 정비 연계 폭증을 유도했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=B5KUOagAOoA",
    imageUrl: "",
    equipment: "Sony FX3, Timelapse Rig, DaVinci Resolve",
    duration: "18:25",
    date: "2024-04",
    order: 9
  },
  {
    id: "portfolio-long-7",
    title: "하이브리드 SUV 수직 하중 측정 실험 & 견인 스펙 데이터 정밀 검증",
    client: "K-TRAILER",
    role: "Project Director / Cinematographer / FX Operator",
    format: "YOUTUBE LONG",
    description: "친환경 전기 및 HEV 차량의 후륜 서스펜션 내구 측정 다큐멘터리 리포트. 하중 센서 연계 분석 연출로 대안 솔루션을 학술적 완성도로 소구했습니다.",
    videoUrl: "https://youtu.be/0lA9uVIcWK4",
    imageUrl: "",
    equipment: "Sony FX3, Sennheiser Mic, ProTools Suite",
    duration: "14:12",
    date: "2024-03",
    order: 10
  },

  // SHORTS (쇼츠 / 숏폼) - 3 items
  {
    id: "portfolio-shorts-1",
    title: "견고하게 착! 카라반 커플러 자동 결속 1초 타격 꿀 쇼츠",
    client: "K-TRAILER",
    role: "Cinematographer / Sound Design",
    format: "SHORTS",
    description: "커플러에 잠금 레버가 '철컥' 체결되는 고진동 타격 메커니즘을 극근접 클로즈업 샷과 사운드로 흥미진진하게 만든 90만뷰 돌풍 쇼츠.",
    videoUrl: "https://www.youtube.com/shorts/upLsH4PXbrM",
    imageUrl: "",
    duration: "00:45",
    date: "2024-08",
    order: 11
  },
  {
    id: "portfolio-shorts-2",
    title: "초대형 미국 픽업트럭 안전 장치 견인 완충력 실시간 모의 실증",
    client: "K-TRAILER",
    role: "Editor / Motion Graphic / Colorist",
    format: "SHORTS",
    description: "오프로드 노면 요철 통과 시 히치 커플러 충격 흡수를 다이내믹 앵글 크롭과 역동적인 배속으로 쉽고 명쾌하게 소구한 숏폼.",
    videoUrl: "https://www.youtube.com/shorts/vTMvqP2QkVU",
    imageUrl: "",
    duration: "00:38",
    date: "2024-07",
    order: 12
  },
  {
    id: "portfolio-shorts-3",
    title: "좁은 공간도 문제없다! 카라반 직각 제어 무버 스마트 꿀팁",
    client: "K-TRAILER",
    role: "Drone Pilot / Post Director",
    format: "SHORTS",
    description: "회전 구동을 드론 버드아이 탑뷰 앵글로 흥미진진하게 수직 촬영하여 시청자들의 이탈을 막고 유용한 정보를 초스피드로 제공한 클립.",
    videoUrl: "https://www.youtube.com/shorts/-kx8OpMUvvs",
    imageUrl: "",
    duration: "00:52",
    date: "2024-05",
    order: 13
  },

  // INTERVIEW (인터뷰) - 2 items
  {
    id: "portfolio-interview-1",
    title: "K-TRAILER 10년 마스터 명장이 말하는 대한민국 견인장치의 진실",
    client: "K-TRAILER",
    role: "Lead Director / Camera Operator / Interviewer",
    format: "INTERVIEW",
    description: "누적 수천 대 돌파 마스터 명장의 연륜 짙은 현장 고백과 가치 설계. 수려한 스튜디오 조명 음영과 잡음 제어로 인물의 전문 신뢰도를 드높였습니다.",
    videoUrl: "https://www.youtube.com/watch?v=LleqHF6Zmcs",
    imageUrl: "",
    equipment: "Sony FX3, Sony A7SIII, Sennheiser MKH416 Shotgun Mic",
    duration: "08:50",
    date: "2024-04",
    order: 14
  },
  {
    id: "portfolio-interview-2",
    title: "지프 랭글러 오프로드 견인 전문가가 밝힌 필드 리얼 탐험 토크",
    client: "JEEP CAMPER CAMPAIGN",
    role: "Main PD / Sound Recording / Drone Cinematographer",
    format: "INTERVIEW",
    description: "우렁찬 현장 앰비언스를 온전히 믹싱하여 야생의 날것을 그대로 전수. 기어의 견고함과 자연을 개척하는 정수를 진중감 넘치게 대담 촬영했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=g1EDO_dBD7E",
    imageUrl: "",
    equipment: "Sony FX3, Mavic Drone, Rode Wireless, Logic Pro",
    duration: "11:05",
    date: "2023-11",
    order: 15
  }
];

export const initialCareerItems: CareerItem[] = [
  {
    id: "career-1",
    period: "2024 ~ 2026",
    title: "견인장치 및 오토모티브 미디어 (K트레일러)",
    role: "인하우스 영상기획총괄 PD",
    description: [
      "유튜브(@k_trailer) 및 이력 채널의 카라반/트레일러/수입 SUV 견인 전문 브랜디드 영상 기획, 촬영, 최적화 편집 전담",
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
          "기초 120명 대 팔로워에서 인지 릴스 연출을 장려하여 단기간 내 1,300명으로 증가",
          "특수 고중량 트레일러 회전법 및 체결 트릭 숏폼 콘텐츠 최고 누적 조회수 91만 회 달성"
        ],
        link: "https://www.instagram.com/ktrailer1/",
        linkName: "@ktrailer1 인스타그램 바로가기"
      }
    ]
  },
  {
    id: "career-2",
    period: "2021 ~ 2024",
    title: "인하우스 PD + 국가 정보 홍보 사업 콘텐츠 사업부",
    role: "메인 카메라 감독 및 총 연출가",
    description: [
      "한국관광공사 주관 국제회의 고품질 테마시설(유니크베뉴)의 메인 8K 다각 및 360° VR 감각 시네마 촬영 총괄",
      "지역 거점 한옥 명소 및 융복합 복합문화공간을 세계 시장 바이어에게 고전미와 첨단 기술로 선보이는 공간 연출 구축",
      "관련 국가사업 미디어 지자체 입찰 프레젠테이션용 메탈릭 테크 디렉팅 리딩"
    ],
    achievements: [
      {
        platform: "한국관광공사 (KTO)",
        metrics: [
          "국제 바이어 유치용 고해상도 테마 VR 투어 프로덕션 리딩",
          "메타버스 플랫폼 및 주요 글로벌 마케팅 컨퍼런스 기프트 홍보관 메인 비주얼 채택"
        ]
      }
    ]
  },
  {
    id: "career-3",
    period: "2013 ~ 2021",
    title: "이투스 (ETOOS) 교육 미디어 스튜디오",
    role: "인하우스 메인 영상 기획 & 촬영 책임 PD",
    description: [
      "이투스 공식 유튜브 채널 기획 다큐멘터리, 수강 동기화 트렌드 및 대형 성명 쇼츠 예능 영상 제작",
      "라이브 대형 세미나 중계 및 파견직 촬영 크루(10여 명) 인력 수급/관리 및 스튜디오 실시간 운영 설계",
      "스타 강사 맞춤형 시각 이펙트 설계 가이드라인 구축 및 촬영 장비 유지보수 전반 총괄"
    ]
  }
];

export const initialSkills: SkillCategory[] = [
  {
    category: "Automotive Production",
    skills: ["Directing", "Cinematography (Cinema Rig)", "Drone Shooting (Mavic Pro / FPV)", "Action Cam Tracking", "In-Depth Tech Interview", "Lighting Setup (High Contrast / Low Key)"]
  },
  {
    category: "Post-Production",
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve (Color Grading)", "Audio SFX Design", "3D Motion HUD Overlay", "Virtual Tour / VR Stitching"]
  },
  {
    category: "Digital Growth & Content Strategy",
    skills: ["YouTube Channel Optimization", "Viewer Retention Analytics", "Thumbnails Styling Strategy", "Branded Film Storyboarding", "Vimeo / High-End Showcase Deployment"]
  }
];

// Helper to handle client-side updates instantly and persist
export const getStoredPortfolioItems = (): PortfolioItem[] => {
  if (typeof window === "undefined") return initialPortfolioItems;
  try {
    const stored = localStorage.getItem("portfolio_items");
    if (!stored || stored.includes("portfolio-1") || !stored.includes("portfolio-long-1") || stored.includes("portfolio-promo-1") === false) {
      // Force migrate to show the beautiful new real YouTube videos instantly
      try {
        localStorage.setItem("portfolio_items", JSON.stringify(initialPortfolioItems));
      } catch (inner) {}
      return initialPortfolioItems;
    }
    const parsed = JSON.parse(stored) as PortfolioItem[];
    let updated = false;
    const migrated = parsed.map(item => {
      if (item && item.id === "portfolio-promo-1" && item.imageUrl && item.imageUrl.includes("unsplash.com")) {
        item.imageUrl = "https://img.youtube.com/vi/XM2E0Eqf_8U/maxresdefault.jpg";
        updated = true;
      }
      if (item && item.id === "portfolio-promo-2" && item.imageUrl && item.imageUrl.includes("unsplash.com")) {
        item.imageUrl = "https://img.youtube.com/vi/cZLWRn6voS0/maxresdefault.jpg";
        updated = true;
      }
      if (item && item.id === "portfolio-promo-3" && item.imageUrl && item.imageUrl.includes("unsplash.com")) {
        item.imageUrl = "https://img.youtube.com/vi/Ioh8RRnDAcg/maxresdefault.jpg";
        updated = true;
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
    if (!stored) {
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
    if (!stored) {
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
  heroSlogan: "기획부터 촬영, 편집까지 브랜드 가치를 관통하는 1인 제작\n장기 근속 경력의 견고한 신뢰성과 플래그십 협업 프로젝트 리드 경력",
  heroCompetence1: "유튜브 · 숏폼 콘텐츠 전문",
  heroCompetence2: "기획 · 촬영 · 편집 · 브랜디드 콘텐츠 총괄 프로덕션",
  aboutTagline: "\"브랜드 가치를 주행시키는 시네마 크리에이터\"",
  aboutTitle: "안녕하세요, 비디오 마케팅 디렉터 이주원 PD 입니다.",
  aboutDescription: "단순한 기획·촬영·편집의 도구적 대행이 아닌, 브랜드가 시장에 전달하고픈 코어 메시지를 눈을 뗄 수 없는 영상 구조로 설계하고 실행합니다.",
  profileName: "이주원",
  profileAge: "41세",
  profilePhone: "010-4820-0441",
  profileEmail: "seoulpotato@naver.com",
  aboutImage: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
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
       parsed.heroSlogan?.includes("장기 비즈니스 파트너십"))
    ) {
      parsed.heroSlogan = defaultSiteTexts.heroSlogan;
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
