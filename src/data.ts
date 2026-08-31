/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, CareerItem, SkillCategory, SiteTexts } from "./types";

// Dynamic Video Loops & authentic high-quality Unsplash headers representing outdoor camper & premium automotive
export const DEFAULT_HERO_VIDEO = "https://player.vimeo.com/external/554868018.sd.mp4?s=5543c740292cc2cca0b8ece493c06e23296c0964&profile_id=165&oauth2_token_id=57447761";

export const initialPortfolioItems: PortfolioItem[] = [
  // PROMOTION (홍보) - 8 items
  {
    id: "portfolio-promo-1",
    title: "[기업홍보]차량시공 기업 홍보 콘텐츠",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 1인 제작",
    format: "PROMOTION",
    description: "사내 공식 브랜딩 영상의 부재를 해결하고 견인장치 장착 기술력에 대한 기업 신뢰도를 높이기 위해 기획했습니다. 견인장치 제조사 큐브렉과의 협업으로 정밀 장착 공정을 1인 제작(기획·촬영·편집)하여 담아냈습니다.",
    videoUrl: "https://www.youtube.com/watch?v=XM2E0Eqf_8U",
    imageUrl: "https://img.youtube.com/vi/XM2E0Eqf_8U/maxresdefault.jpg",
    previewVideoUrl: "",
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
    description: "한국관광공사 프로젝트 현장 지원 중 한옥 호텔 고유의 공간적 가치를 대외에 알릴 영상 자산의 필요성을 느껴 기획했습니다. 호텔 전경 및 한옥 건축미를 항공 드론과 실내 다각도 앵글로 촬영해 1인 제작했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=cZLWRn6voS0",
    imageUrl: "https://img.youtube.com/vi/cZLWRn6voS0/maxresdefault.jpg",
    previewVideoUrl: "",
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
    description: "해외 바이어와 주최사에게 국내 국제회의 시설(MICE) 인프라를 소개하기 위해 제작했습니다. 컨벤션 센터의 규모와 동선을 체감할 수 있도록 수평 스티칭과 360VR 공간 연출을 적용해 편집했습니다.",
    videoUrl: "https://youtu.be/Ioh8RRnDAcg",
    imageUrl: "https://img.youtube.com/vi/Ioh8RRnDAcg/hq2.jpg",
    previewVideoUrl: "",
    equipment: "인스타 360 | Premiere Pro",
    duration: "02:50",
    date: "2024-09",
    order: 3
  },
  {
    id: "portfolio-promo-4",
    title: "PPF 기업 홍보 콘텐츠",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 1인 제작",
    format: "PROMOTION",
    description: "차량 시공 전문 기업의 기술력과 작업 프로세스를 알리기 위해 기획했습니다. 필름 부착 공정과 정밀 마감 디테일을 클로즈업 앵글로 1인 전담 제작했습니다.",
    videoUrl: "https://youtu.be/MwlKk7E2ZSs",
    imageUrl: "https://img.youtube.com/vi/MwlKk7E2ZSs/maxresdefault.jpg",
    previewVideoUrl: "",
    equipment: "SONY ZV-E1, DJI Mini 4 Pro, 오즈모 포켓3 | Premiere Pro, After effect",
    duration: "03:10",
    date: "2025-02",
    order: 1.5
  },
  {
    id: "portfolio-promo-5",
    title: "무쏘EV+진텍 캐노피 제품 홍보",
    client: "진텍 (JINTEC)",
    role: "기획, 촬영, 편집 1인 제작",
    format: "PROMOTION",
    description: "신차 출고에 맞춰 차량과 결합되는 진텍 캐노피 제품의 호환성을 홍보하기 위해 제작했습니다. 실차 장착 상태와 활용도를 중심으로 기획부터 촬영, 편집까지 1인 제작을 진행했습니다.",
    videoUrl: "https://youtu.be/Z2995_gc2VA",
    imageUrl: "https://img.youtube.com/vi/Z2995_gc2VA/maxresdefault.jpg",
    previewVideoUrl: "",
    equipment: "a7m3, dji mini4 Pro, 오즈모 포켓3 | Premiere Pro, After effect",
    duration: "03:20",
    date: "2025-03",
    order: 1.7
  },
  {
    id: "portfolio-promo-6",
    title: "[기업홍보] 차량시공 기업 홍보 콘텐츠",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 1인 제작",
    format: "PROMOTION",
    description: "차량 시공 및 튜닝 전문 기업의 정밀한 시공 공정을 신규 고객에게 전달하기 위해 기획했습니다. 시공 공정의 세부 디테일을 직관적인 컷 편집과 현장감 있는 앵글로 1인 제작했습니다.",
    videoUrl: "https://youtu.be/cwP5oEYEpSY",
    imageUrl: "https://img.youtube.com/vi/cwP5oEYEpSY/maxresdefault.jpg",
    previewVideoUrl: "",
    equipment: "SONY ZV-E1, DJI Mini 4 Pro, 오즈모 포켓3 | Premiere Pro, After effect",
    duration: "03:15",
    date: "2025-02",
    order: 1.8
  },
  {
    id: "portfolio-promo-7",
    title: "[신형 무쏘] 순정 하드탑 vs 진텍·오브로 캐노피 완벽 비교!",
    client: "K-TRAILER / JINTEC",
    role: "기획, 촬영, 편집 1인 제작",
    format: "PROMOTION",
    description: "신형 무쏘 구매 고객이 고민하는 순정 하드탑과 사제 캐노피의 차이점을 알리기 위해 기획했습니다. 순정 하드탑과 진텍·오브로 캐노피의 재질, 디자인, 수납 구조를 다각도 앵글로 비교 촬영했습니다.",
    videoUrl: "https://youtu.be/4keiyUtKJIA",
    imageUrl: "https://img.youtube.com/vi/4keiyUtKJIA/maxresdefault.jpg",
    previewVideoUrl: "",
    equipment: "SONY ZV-E1, DJI Mini 4 Pro, 오즈모 포켓3 | Premiere Pro, After effect",
    duration: "03:30",
    date: "2025-03",
    order: 1.9
  },
  {
    id: "portfolio-promo-8",
    title: "새마을 금고 중앙회_홍보 및 인터뷰",
    client: "새마을금고중앙회 / 스마트콘텐츠연구소",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "PROMOTION",
    description: "지역 금융 서비스의 신뢰도와 조합원 소통 가치를 전달하기 위해 기획했습니다. 지점 현장 스케치와 임직원 인터뷰를 조명 및 오디오 연출을 통해 1인 제작했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=J4W7tFXb36I",
    imageUrl: "https://img.youtube.com/vi/J4W7tFXb36I/maxresdefault.jpg",
    previewVideoUrl: "",
    equipment: "Sony 카메라, 무선 마이크 | Premiere Pro, After effect",
    duration: "04:30",
    date: "2023-08",
    order: 2.1
  },

  // YOUTUBE LONG (유튜브 롱폼) - 15 items
  {
    id: "portfolio-long-14",
    title: "카니발 캠핑카 24시간! 무시동히터&배터리 얼마나 달까?",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "YOUTUBE LONG",
    description: "차박·캠핑 오너들이 궁금해하는 동계 전력 소비량과 난방 지속성을 검증하기 위해 기획했습니다. 24시간 동안 실전 캠핑 환경에서 무시동 히터와 인산철 배터리의 소모량을 시간대별로 실측하여 1인 제작했습니다.",
    videoUrl: "https://youtu.be/TgvGn_i5faw",
    imageUrl: "https://img.youtube.com/vi/TgvGn_i5faw/maxresdefault.jpg",
    equipment: "SONY a7c2, DJI Mini 4 Pro, 오즈모 포켓3 | Premiere Pro",
    duration: "15:20",
    date: "2025-03",
    order: 3.8
  },
  {
    id: "portfolio-long-1",
    title: "PV5 전기차 23시간 전기 테스트",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "YOUTUBE LONG",
    description: "전기 PBV(PV5) 구매를 고려하는 소비자들이 가장 우려하는 1박 캠핑 시 전력 소비량을 검증하기 위해 기획했습니다. 혹한기 환경에서 23시간 동안 히터와 전자기기를 동시 가동하는 실전 필드 테스트로 1인 제작했습니다. 구독자 2,000명 시점에 최고 조회수 46만 회를 기록했습니다.",
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
    description: "신형 무쏘 출고 직후 도심 주행 안정성과 오프로드 주행 성능에 대한 타깃층의 궁금증을 해소하기 위해 기획했습니다. 차체 다각도에 액션캠을 부착하여 노면 반응과 서스펜션 움직임을 멀티 앵글로 1인 제작했습니다.",
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
    description: "카라반 견인 오너들이 불안해하는 급경사 언덕길 등판 및 재출발 성능을 검증하기 위해 기획했습니다. 무쏘EV, 타스만, 카니발, 렉스턴 스포츠에 카라반을 연결하고 실제 급경사로에서 비교 주행을 진행했습니다.",
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
    description: "견인장치 규격(유럽식 스완넥 vs 미국식 히치) 선택으로 고민하는 고객들을 위해 기획했습니다. 10년 경력의 대표와 전문 엔지니어가 장단점을 비교하는 토크쇼 포맷으로 1인 제작했습니다.",
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
    description: "신형 무쏘와 고버랜드 캠퍼 결합 시 혹한기 영하 환경에서의 난방 효율과 거주성을 검증하기 위해 기획했습니다. 영하 15도 설원 노지에서 직접 1박을 진행하며 실내 온도 변화와 주행 반응을 브이로그 포맷으로 1인 제작했습니다.",
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
    description: "전기 픽업트럭의 대형 카라반 견인력과 주행 안정성에 대한 시장의 의구심을 검증하기 위해 기획했습니다. 대형 카라반을 체결한 상태로 코너링, 고속 주행, 회생제동 시 승차감 변화를 실측 주행으로 1인 제작했습니다. 영상 공개 후 대형 카라반 오너들의 견인장치 장착 문의 및 예약이 30% 이상 증가했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=B5KUOagAOoA",
    imageUrl: "",
    equipment: "a7c2, 오즈모 액션5, 오즈모 포켓3, DJI Mini 4 Pro | Premiere Pro",
    duration: "18:25",
    date: "2024-04",
    order: 9
  },
  {
    id: "portfolio-long-7",
    title: "대구 직영점의 대표님 없는 하루 VLOG \n(루프탑텐트 리뷰)",
    client: "K-TRAILER",
    role: "편집",
    format: "YOUTUBE LONG",
    description: "신규 대구 직영점의 인지도 제고와 루프탑텐트 사용법 안내를 위해 기획했습니다. 직영점 직원의 하루 일과와 제품 조작 과정을 현장 브이로그 포맷으로 풀어내 편집했습니다.",
    videoUrl: "https://youtu.be/0lA9uVIcWK4",
    imageUrl: "",
    equipment: "핸드폰 | Premiere Pro",
    duration: "14:12",
    date: "2024-03",
    order: 10
  },
  {
    id: "portfolio-long-8",
    title: "[신형 무쏘] 순정 하드탑 vs 진텍·오브로 캐노피 완벽 비교!",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "YOUTUBE LONG",
    description: "신형 무쏘 오너들의 주요 튜닝 품목인 순정 하드탑과 진텍·오브로 캐노피의 차이점을 안내하기 위해 기획했습니다. 실물 제품 3종을 섭외하여 마감 재질, 결합 구조, 편의 기능을 세부 비교하는 리뷰 포맷으로 1인 제작했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=4keiyUtKJIA",
    imageUrl: "https://img.youtube.com/vi/4keiyUtKJIA/hqdefault.jpg",
    equipment: "a7c2, 오즈모 포켓3 | Premiere Pro",
    duration: "13:45",
    date: "2024-11",
    order: 11
  },
  {
    id: "portfolio-long-9",
    title: "강아지가 낑낑거리며 인형에 집착합니다.. (견생연구소)",
    client: "버찌 BUDZZI",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "YOUTUBE LONG",
    description: "반려견 양육 앱 서비스의 브랜드 인지도와 타깃 유입을 늘리기 위해 기획했습니다. 가정 내 반려견의 실제 행동 패턴을 로우 앵글로 포착하고 전문가 솔루션을 결합해 1인 제작했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=8BfgwkXrD0g",
    imageUrl: "https://img.youtube.com/vi/8BfgwkXrD0g/maxresdefault.jpg",
    equipment: "Sony a7m3 | Premiere Pro",
    duration: "10:14",
    date: "2024-05",
    order: 11.1
  },
  {
    id: "portfolio-long-10",
    title: "[큰별쌤의 오늘] '김지섭 도쿄 니중바시 투탄 의거'의 날",
    client: "최태성 (스터디요)",
    role: "촬영",
    format: "YOUTUBE LONG",
    description: "역사 속 주요 사건과 인물을 기념하고 올바른 역사적 사실을 전달하기 위해 기획했습니다. 최태성 강사의 강의 전달력과 호흡을 다채널 카메라 구도로 안정감 있게 촬영했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=I6L4Uuc61_M",
    imageUrl: "https://img.youtube.com/vi/I6L4Uuc61_M/maxresdefault.jpg",
    equipment: "CANON 5D Mark 2,3,",
    duration: "08:45",
    date: "2023-10",
    order: 11.2
  },
  {
    id: "portfolio-long-11",
    title: "[축구맛집] 인간이 가장 집중력을 발휘하는 시간 7분... with 김재성 ep.09 요약편 (왕초보 축구 도전기⚽)",
    client: "스터디요",
    role: "촬영, 총괄",
    format: "YOUTUBE LONG",
    description: "유튜브 채널 '스터디요'의 오리지널 스포츠 예능 콘텐츠를 제작하기 위해 기획했습니다. 전 국가대표 김재성 선수의 축구 레슨 현장을 촬영팀 6명과 함께 총괄하며 멀티 앵글로 촬영했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=TDFKqqDjG18",
    imageUrl: "https://img.youtube.com/vi/TDFKqqDjG18/maxresdefault.jpg",
    equipment: "CANON 5D Mark 2,3, CANON C300",
    duration: "07:15",
    date: "2023-08",
    order: 11.3
  },
  {
    id: "portfolio-long-12",
    title: "쿡사001_[Cook史] 요리초보 큰별쌤의 요리 역사 이야기_궁중떡볶이",
    client: "최태성 (최태성 2TV)",
    role: "촬영",
    format: "YOUTUBE LONG",
    description: "한국사 스토리텔링과 요리 과정을 결합한 에듀테인먼트 콘텐츠를 만들기 위해 기획했습니다. 최태성 강사의 요리 시연과 역사 해설을 5인 촬영팀과 함께 조명 및 다각도 앵글로 전담 촬영했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=7jBHyQjZMJA",
    imageUrl: "https://img.youtube.com/vi/7jBHyQjZMJA/maxresdefault.jpg",
    equipment: "CANON 5D Mark 2,3, CANON C300",
    duration: "12:30",
    date: "2023-09",
    order: 11.4
  },
  {
    id: "portfolio-long-13",
    title: "[특별한 하루] 정승제쌤의 특별한 하루",
    client: "정승제 (승제튜브)",
    role: "촬영",
    format: "YOUTUBE LONG",
    description: "수험생과 강사 간의 오프라인 소통을 기록하고 친근한 브랜드 이미지를 전달하기 위해 기획했습니다. 정승제 강사와 학생 6명의 하루 일정을 동행하며 자연스러운 현장 반응을 촬영했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=CT03HGVmg-g",
    imageUrl: "https://img.youtube.com/vi/CT03HGVmg-g/maxresdefault.jpg",
    equipment: "",
    duration: "58:20",
    date: "2019-12",
    order: 11.5
  },
  {
    id: "portfolio-long-15",
    title: "[방송통신이용자보호협회] 온라인강의(모션)_사이버안심존",
    client: "방송통신이용자보호협회",
    role: "모션그래픽, 편집",
    format: "YOUTUBE LONG",
    description: "청소년 스마트폰 과몰입 예방 및 유해 매체 차단 서비스의 설치법과 기능을 안내하기 위해 제작했습니다. 복잡한 설정 절차를 2D 모션그래픽과 인포그래픽 애니메이션으로 시각화하여 편집했습니다.",
    videoUrl: "https://youtu.be/1xLWmkim-kE",
    imageUrl: "https://img.youtube.com/vi/1xLWmkim-kE/maxresdefault.jpg",
    equipment: "After Effects, Premiere Pro, Illustrator",
    duration: "06:30",
    date: "2023-05",
    order: 11.6
  },
  // SHORTS (쇼츠 / 릴스) - 8 items
  {
    id: "portfolio-shorts-1",
    title: "견인장치 무사고 연결법 (유럽식 커플러)",
    client: "K-TRAILER",
    role: "편집",
    format: "SHORTS",
    description: "카라반 연결 미숙으로 인한 안전사고를 예방하고 핵심 매뉴얼을 빠르게 전달하기 위해 제작했습니다. 기존 촬영본에서 체결 핵심 구간만을 재편집하고 자막과 그래픽을 보강해 45초 숏폼으로 재구성했습니다. 누적 조회수 17만 회를 기록했습니다.",
    videoUrl: "https://www.youtube.com/shorts/upLsH4PXbrM",
    imageUrl: "https://img.youtube.com/vi/upLsH4PXbrM/hqdefault.jpg",
    duration: "00:45",
    date: "2024-08",
    order: 12
  },
  {
    id: "portfolio-shorts-2",
    title: "PV5 큐브밴 단기 전시 홍보",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "SHORTS",
    description: "현대백화점 오프라인 팝업에 방문하지 못하는 고객에게 신차 공간을 신속히 소개하기 위해 기획했습니다. 차량의 내부 공간 구조와 특화 기능을 1분 이내 숏폼 포맷으로 1인 제작했습니다. 전시 기간 3일 만에 조회수 60만 회를 달성했습니다.",
    videoUrl: "https://youtube.com/shorts/hj6aLYEcVeY?si=9U6Cae0QG00QWCsP",
    imageUrl: "https://img.youtube.com/vi/hj6aLYEcVeY/hqdefault.jpg",
    duration: "00:38",
    date: "2024-07",
    order: 13
  },
  {
    id: "portfolio-shorts-3",
    title: "PV5 큐브밴 캠핑카 홍보",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "SHORTS",
    description: "단기 팝업 전시 기간 동안 캠핑에 최적화된 PV5 큐브밴의 실내 레이아웃을 알리기 위해 기획했습니다. 슬라이딩 가구와 공간 확장성을 3초 내 후킹 컷과 빠른 컷 전환으로 1인 제작했습니다.",
    videoUrl: "https://www.youtube.com/shorts/-kx8OpMUvvs",
    imageUrl: "",
    duration: "00:52",
    date: "2024-05",
    order: 14
  },
  {
    id: "portfolio-shorts-4",
    title: "무쏘를 무쏘 답게 타는 4가지 튜닝 옵션",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "SHORTS",
    description: "무쏘 픽업 오너들의 선호도가 높은 핵심 튜닝 파츠 4종을 소개하기 위해 기획했습니다. 각 파츠의 장착 전후 모습과 기능을 빠른 템포의 숏폼 포맷으로 1인 제작했습니다. 영상 게시 후 자사 스마트스토어 및 현장 튜닝 패키지 의뢰가 40% 이상 증가했습니다.",
    videoUrl: "https://www.youtube.com/shorts/5kTzL12Py50",
    imageUrl: "https://img.youtube.com/vi/5kTzL12Py50/hqdefault.jpg",
    equipment: "a7c2, 오즈모 포켓3 | Premiere Pro",
    duration: "00:58",
    date: "2024-09",
    order: 15
  },
  {
    id: "portfolio-shorts-5",
    title: "기아 타스만 블랙 vs 화이트 (feat. 오브로 캐노피)",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "SHORTS",
    description: "기아 타스만 신차 출고 고객의 색상 선택 고민과 캐노피 장착 실물을 보여주기 위해 기획했습니다. 블랙과 화이트 실차에 오브로 캐노피를 장착한 모습을 대비 구조의 숏폼으로 1인 제작했습니다.",
    videoUrl: "https://www.youtube.com/shorts/J--3np5hqGI",
    imageUrl: "https://img.youtube.com/vi/J--3np5hqGI/hqdefault.jpg",
    equipment: "a7c2, 오즈모 액션5, DJI Mini 4 Pro | Premiere Pro",
    duration: "00:48",
    date: "2024-11",
    order: 16
  },
  {
    id: "portfolio-shorts-6",
    title: "팰리세이드 가족을 위한 필수템! (GSC 전동 사이드 스텝)",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "SHORTS",
    description: "패밀리 SUV 승하차 시 편의성과 안전성을 높이는 전동 사이드스텝의 필요성을 전달하기 위해 기획했습니다. 야간 LED 조명 작동과 실사용 승하차 동작을 클로즈업 앵글로 1인 제작했습니다.",
    videoUrl: "https://www.youtube.com/shorts/gDIrYKh8fkw",
    imageUrl: "https://img.youtube.com/vi/gDIrYKh8fkw/hqdefault.jpg",
    equipment: "a7c2, 오즈모 포켓3 | Premiere Pro",
    duration: "00:50",
    date: "2024-10",
    order: 17
  },
  {
    id: "portfolio-shorts-7",
    title: "PPF 기업 홍보 숏폼",
    client: "PPF 시공 기업",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "SHORTS",
    description: "PPF 필름 시공 공정의 정밀도와 마감 상태를 전달하기 위해 기획했습니다. 정밀 재단과 부착 디테일을 빠른 템포의 숏폼 영상으로 1인 제작했습니다.",
    videoUrl: "https://youtube.com/shorts/XJit4uq6c1I",
    imageUrl: "https://img.youtube.com/vi/XJit4uq6c1I/hqdefault.jpg",
    equipment: "SONY ZV-E1, DJI Mini 4 Pro, 오즈모 포켓3 | Premiere Pro, After effect",
    duration: "00:45",
    date: "2025-02",
    order: 11.8
  },
  {
    id: "portfolio-shorts-8",
    title: "테슬라 모델Y PPF 기업 홍보",
    client: "PPF 시공 기업",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "SHORTS",
    description: "테슬라 모델Y 맞춤형 PPF 시공 기술력과 완성도를 알리기 위해 기획했습니다. 차체 굴곡에 맞춘 밀착 시공과 마감 디테일을 클로즈업 숏폼으로 1인 제작했습니다.",
    videoUrl: "https://youtube.com/shorts/4OPStyGFCBs",
    imageUrl: "https://img.youtube.com/vi/4OPStyGFCBs/hqdefault.jpg",
    equipment: "SONY ZV-E1, DJI Mini 4 Pro, 오즈모 포켓3 | Premiere Pro, After effect",
    duration: "00:45",
    date: "2025-02",
    order: 11.9
  },

  // INTERVIEW (인터뷰) - 4 items
  {
    id: "portfolio-interview-1",
    title: "무쏘EV 2만km 주행 후기 | 진텍 캐노피",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "INTERVIEW",
    description: "전기 픽업 실주행 연비와 진텍 캐노피 장착 후 내구성에 대한 예비 구매자의 궁금증을 해소하기 위해 기획했습니다. 2만km를 주행한 실오너를 인터뷰하여 소음과 누수 여부를 사실 그대로 1인 제작했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=LleqHF6Zmcs",
    imageUrl: "https://img.youtube.com/vi/LleqHF6Zmcs/hqdefault.jpg",
    previewVideoUrl: "",
    equipment: "a7c2, 오즈모 포켓3, DJI Mini 4 Pro | Premiere Pro",
    duration: "08:50",
    date: "2024-04",
    order: 18
  },
  {
    id: "portfolio-interview-2",
    title: "자전거 덕후들이 뽑은 BEST 6 자전거 코스 | 에포스",
    client: "THULE",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "INTERVIEW",
    description: "툴레 신형 자전거 캐리어(에포스)의 브랜드 인지도와 타깃 접점을 확대하기 위해 기획했습니다. 주요 라이딩 성지에서 라이더들에게 코스를 추천받고 캐리어 현장 장착 이벤트를 진행하는 로드 인터뷰로 1인 제작했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=g1EDO_dBD7E",
    imageUrl: "",
    previewVideoUrl: "",
    equipment: "a7c2, 오즈모액션5, 오즈모 포켓3, 고프로10, DJI Mini 4 Pro | Premiere Pro",
    duration: "11:05",
    date: "2023-11",
    order: 19
  },
  {
    id: "portfolio-interview-3",
    title: "타스만 주행 후기 | 툴레 아웃셋",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "INTERVIEW",
    description: "견인볼 결합형 텐트(툴레 아웃셋)의 사용 편의성과 타스만 주행 질감을 알리기 위해 기획했습니다. 타스만 차주 인터뷰와 야외 설치 시연을 결합한 현장 인터뷰 포맷으로 1인 제작했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=d8EEun7E8J0",
    imageUrl: "https://img.youtube.com/vi/d8EEun7E8J0/hqdefault.jpg",
    previewVideoUrl: "",
    equipment: "a7c2, 오즈모 포켓3, DJI Mini 4 Pro | Premiere Pro",
    duration: "10:15",
    date: "2024-12",
    order: 20
  },
  {
    id: "portfolio-interview-4",
    title: "[이투스교육] 기획 영상_윤훈관 강사님 인터뷰",
    client: "이투스교육",
    role: "기획, 촬영, 편집",
    format: "INTERVIEW",
    description: "신규 입성 강사의 교육 철학과 과목별 커리큘럼 경쟁력을 수험생에게 전달하기 위해 기획했습니다. 스튜디오 조명과 다채널 오디오를 세팅하고 핵심 키워드 자막 모션을 적용해 인터뷰 영상으로 제작했습니다.",
    videoUrl: "https://www.youtube.com/watch?v=SiXkOaMNdio",
    imageUrl: "https://img.youtube.com/vi/SiXkOaMNdio/maxresdefault.jpg",
    previewVideoUrl: "",
    equipment: "스튜디오 카메라, 무선 핀마이크, 조명 시스템 | Premiere Pro, After effect",
    duration: "05:40",
    date: "2022-04",
    order: 20.5
  },
  {
    id: "portfolio-live-1",
    title: "[LIVE] 이투스교육 라이브 시스템 전반적인 구축",
    client: "이투스교육",
    role: "라이브 중계 전송 및 방송 시스템 총괄 구축",
    format: "LIVE",
    description: "코로나19 시기 비대면 온라인 강의 전환과 안정적인 생중계 인프라 구축을 위해 추진되었습니다. 최태성 강사 라이브를 비롯해 스튜디오와 야외 현장을 잇는 다원 생중계 송출 프로세스를 설계하고 시스템을 구축했습니다.",
    videoUrl: "https://youtu.be/XVEqu1hdato",
    imageUrl: "https://img.youtube.com/vi/S6L6kCVd8F4/maxresdefault.jpg",
    equipment: "Live Streaming Engine, OBS Studio, DeckLink Capture, CANON Cameras, 다채널 오디오 믹싱 시스템",
    duration: "Live",
    date: "2020-05",
    order: 21
  }
];

export const initialCareerItems: CareerItem[] = [
  {
    id: "career-1",
    period: "2024 ~ 2026",
    title: "K트레일러",
    role: "인하우스PD & 콘텐츠 마케터",
    description: [
      "유튜브 및 인스타그램 채널의 카라반/트레일러/캠핑 레저 용품 전문 브랜디드\n영상 기획, 촬영, 편집 전담 제작 및 전반적인 브랜드 마케팅 전략 수립"
    ],
    proofImages: [
      {
        title: "YouTube 스튜디오 애널리틱스",
        caption: "구독자 4배 성장 및 최고 조회수 45만 회 실측 통계",
        src: "/proof-youtube.jpg"
      },
      {
        title: "Instagram 프로페셔널 대시보드",
        caption: "릴스 최고 91만 조회 및 팔로워 1,800명 유입 지표",
        src: "/proof-instagram.jpg"
      }
    ],
    achievements: [
      {
        platform: "YouTube 콘텐츠 부문",
        metrics: [
          {
            text: "운영 1년 만에 유튜브 채널 구독자 2,000명 → 8,000명 증가",
            criteria: "2024.03 ~ 2025.02 / YouTube 스튜디오 애널리틱스 실측 기준"
          },
          {
            text: "최고 조회수 롱폼 45만 회 · 쇼츠 54만 회 (10만 회 이상 콘텐츠 다수 제작)",
            criteria: "채널 개설 이래 롱폼·숏폼 역대 최고 트래픽 / 단일 영상 기준"
          },
          {
            text: "콘텐츠 기반 고객 문의율 전년 동기 대비 약 48% 증가",
            criteria: "2024.03 ~ 2025.02 / 전년 동기 대비 / 유입 경로 설문 및 사내 인바운드 CRM 기준"
          }
        ],
        link: "https://www.youtube.com/@k_trailer",
        linkName: "@k_trailer 유튜브 바로가기"
      },
      {
        platform: "Instagram 릴스 채널 운영",
        metrics: [
          {
            text: "독립적인 숏폼 콘텐츠 전략 수립 및 주도적 채널 운영",
            criteria: "자체 기획·촬영·편집 1인 제작 파이프라인"
          },
          {
            text: "인스타그램 팔로워 113명 → 단기간 내 1,800명으로 증가",
            criteria: "릴스 바이럴 유입 기반 순수 오가닉 팔로워 성장치"
          },
          {
            text: "릴스 최고 조회수 극적 성장 (입사 전 1,000회 미만 → 입사 후 최고 91만 회 달성)",
            criteria: "Instagram 프로페셔널 대시보드 인사이트 기준"
          },
          {
            text: "트렌드 분석 및 연출 최적화를 통한 릴스 평균 조회수 지속 성장 견인",
            criteria: "주요 타깃 맞춤형 훅(Hook) 설계 및 숏폼 알고리즘 최적화"
          }
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
    role: "영상제작팀 팀장 및 (어시스턴트 PM)",
    description: [
      "국제 바이어 유치용 8K 및 360VR 관광 콘텐츠 제작 총괄",
      "유니크베뉴 홍보 영상 제작",
      "프로젝트 PM 및 촬영 총괄"
    ],
    achievements: []
  },
  {
    id: "career-3",
    period: "2013 ~ 2021",
    title: "이투스 (ETOOS) 교육",
    role: "기획 영상 촬영 & 스튜디오 관리 &\n촬영 팀 관리 & 라이브",
    description: [
      "스튜디오 운영 총괄 — 장비 유지보수 체계 및 예약·운용 프로세스 구축",
      "촬영팀 및 외주·파견 인력 운영 — 인력 스케줄링과 품질 관리 체계 수립",
      "라이브 송출 인프라 설계 — 코로나 시기 비대면 강의 대응, 지점 간 다원 생중계 구축",
      "제작 프로세스 표준화 — 기획·촬영·편집 단계별 가이드라인 문서화",
      "대형 프로젝트 총괄 — 입시 설명회, 1타 강사 기획 영상 촬영 전담"
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
    category: "전략 및 기획 역량",
    skills: ["콘텐츠 전략", "채널 운영", "프로젝트 리딩", "브랜디드 콘텐츠"]
  },
  {
    category: "콘텐츠 제작 역량",
    skills: ["Premiere", "After Effects", "Photoshop"]
  },
  {
    category: "운영 및 시스템 기술",
    skills: [
      "미러리스, DSLR, 짐벌, 드론 등 다양한 촬영 기술 보유",
      "Live Streaming",
      "스튜디오 관리 및 개선",
      "영상 제작팀 빌딩 및 조직 매니지먼트"
    ]
  }
];

// Helper to handle client-side updates instantly and persist
export const getStoredPortfolioItems = (): PortfolioItem[] => {
  if (typeof window === "undefined") return initialPortfolioItems;
  try {
    const stored = localStorage.getItem("portfolio_items");
    if (
      !stored || 
      stored.includes("통쾌하게") ||
      stored.includes("기품 어린") ||
      stored.includes("직조해") ||
      stored.includes("속사포") ||
      stored.includes("저격한") ||
      stored.includes("[제작 의도]") ||
      stored.includes("[핵심 비하인드]") ||
      stored.includes("유럽 명품 COCHET 트레일러") ||
      stored.includes("현장 중계, 촬영, 편집") ||
      stored.includes("Sony a7m3, 다중 카메라도 촬영 구도") ||
      stored.includes("Sony a7m3, 고성능 외장 마이크") ||
      stored.includes("Sony FX3, 고해상도 조명 장비") ||
      stored.includes("Sony DSLR, 무선 마이크") ||
      !stored.includes("[기업홍보]차량시공 기업 홍보 콘텐츠") ||
      !stored.includes("portfolio-shorts-4") ||
      !stored.includes("portfolio-shorts-5") ||
      !stored.includes("portfolio-shorts-6") ||
      !stored.includes("portfolio-long-8") ||
      !stored.includes("portfolio-long-13") ||
      !stored.includes("portfolio-interview-3") ||
      !stored.includes("portfolio-live-1") ||
      !stored.includes("XVEqu1hdato") ||
      !stored.includes("hj6aLYEcVeY") ||
      !stored.includes("PV5 큐브밴") ||
      !stored.includes("360VR") ||
      !stored.includes("PV5 큐브밴 단기 전시 홍보") ||
      !stored.includes("(견생연구소)") ||
      !stored.includes("Cook史") ||
      !stored.includes("MwlKk7E2ZSs") ||
      !stored.includes("Z2995_gc2VA") ||
      !stored.includes("cwP5oEYEpSY") ||
      !stored.includes("XJit4uq6c1I") ||
      !stored.includes("PPF 기업 홍보 숏폼") ||
      !stored.includes("4OPStyGFCBs") ||
      !stored.includes("4keiyUtKJIA") ||
      !stored.includes("TgvGn_i5faw") ||
      !stored.includes("1xLWmkim-kE") ||
      !stored.includes("J4W7tFXb36I") ||
      !stored.includes("새마을 금고 중앙회_홍보 및 인터뷰") ||
      !stored.includes("SiXkOaMNdio")
    ) {
      // Force migrate to show the updated crisp descriptions instantly
      try {
        localStorage.setItem("portfolio_items", JSON.stringify(initialPortfolioItems));
      } catch (inner) {}
      return initialPortfolioItems;
    }
    let parsed = JSON.parse(stored) as PortfolioItem[];

    // Auto-remove deleted items from user's local storage if they exist
    const filteredParsed = parsed.filter(item => !["portfolio-shorts-9"].includes(item.id));
    let updated = filteredParsed.length !== parsed.length;
    parsed = filteredParsed;

    const migrated = parsed.map(item => {
       const defaultItem = initialPortfolioItems.find(x => x.id === item.id);
       if (defaultItem) {
        // Force-sync specific content updates to bypass browser local storage caching
        if (["portfolio-shorts-1", "portfolio-shorts-2", "portfolio-shorts-3", "portfolio-shorts-4", "portfolio-shorts-5", "portfolio-shorts-6", "portfolio-shorts-7", "portfolio-shorts-8", "portfolio-interview-1", "portfolio-interview-2", "portfolio-interview-3", "portfolio-interview-4", "portfolio-live-1", "portfolio-promo-1", "portfolio-promo-2", "portfolio-promo-4", "portfolio-promo-5", "portfolio-promo-6", "portfolio-promo-7", "portfolio-promo-8", "portfolio-long-1", "portfolio-long-2", "portfolio-long-3", "portfolio-long-4", "portfolio-long-7", "portfolio-long-8", "portfolio-long-9", "portfolio-long-10", "portfolio-long-11", "portfolio-long-12", "portfolio-long-13", "portfolio-long-14", "portfolio-long-15"].includes(item.id)) {
          if (
            item.title !== defaultItem.title ||
            item.description !== defaultItem.description ||
            item.videoUrl !== defaultItem.videoUrl ||
            item.role !== defaultItem.role ||
            item.equipment !== defaultItem.equipment
          ) {
            item.title = defaultItem.title;
            item.description = defaultItem.description;
            item.videoUrl = defaultItem.videoUrl;
            item.role = defaultItem.role;
            item.equipment = defaultItem.equipment;
            updated = true;
          }
        }

        // Sync order if defaultItem's order has changed
        if (item.order !== defaultItem.order) {
          item.order = defaultItem.order;
          updated = true;
        }

        // Sync thumbnail if the code definition has updated to a fresh thumbnail URL
        if (item.imageUrl !== defaultItem.imageUrl) {
          item.imageUrl = defaultItem.imageUrl;
          updated = true;
        }
        // Sync videoUrl if code definition has updated to a fresh URL
        if (item.videoUrl !== defaultItem.videoUrl) {
          item.videoUrl = defaultItem.videoUrl;
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
      !stored.includes("proofImages") ||
      !stored.includes("criteria") ||
      stored.includes("인하우스 영상기획총괄 PD") ||
      stored.includes("영상제작팀 팀장 및 APM") ||
      stored.includes("캠핑 시장이 죽어 가면서") ||
      stored.includes("한계 견력을 테스트하는") ||
      stored.includes("소비자들의 니즈를 풀어주는") ||
      !stored.includes("편집 전담 제작 및 전반적인 브랜드 마케팅 전략 수립") ||
      stored.includes("자사 인스타그램 릴스 최고 조회수") ||
      !stored.includes("독립적인 숏폼 콘텐츠 전략 수립") ||
      !stored.includes("인스타그램 팔로워 113명") ||
      stored.includes("360% 폭발적 성장") ||
      stored.includes("260% 폭발적 성장") ||
      stored.includes("2,000명 → 7,800명 증가") ||
      stored.includes("2,000명 → 7,900명 증가") ||
      !stored.includes("2,000명 → 8,000명 증가") ||
      stored.includes("쇼츠 36만") ||
      stored.includes("쇼츠 48만") ||
      !stored.includes("쇼츠 54만 회") ||
      !stored.includes("10만 회 이상 콘텐츠 다수 제작") ||
      !stored.includes("콘텐츠 기반 고객 문의율 전년 동기 대비 약 48% 증가") ||
      stored.includes("42만 회") ||
      !stored.includes("45만 회") ||
      stored.includes(" (@k_trailer)") ||
      stored.includes(" (@ktrailer1)") ||
      stored.includes("이투스 (ETOOS) 교육 미디어 스튜디오") ||
      stored.includes("기초 120명 대") ||
      !stored.includes("캠핑 레저 용품") ||
      stored.includes("국가 정보 홍보 사업 콘텐츠 사업부") ||
      !stored.includes("국제 바이어 유치용 8K 및 360VR 관광 콘텐츠 제작 총괄") ||
      stored.includes("견인장치 및 오토모티브 미디어") ||
      stored.includes("인하우스 PD + 국가 정보 홍보 사업 콘텐츠") ||
      stored.includes("인하우스 메인 영상 기획 & 촬영 책임 PD") ||
      stored.includes("홍보 영상 촬영 PD") ||
      !stored.includes("루씨드 드림") ||
      !stored.includes("스튜디오 관리 &") ||
      !stored.includes("촬영 팀 관리") ||
      stored.includes("1,500명으로 증가") ||
      !stored.includes("1,800명으로 증가") ||
      !stored.includes("스튜디오 운영 총괄 — 장비 유지보수 체계") ||
      !stored.includes("라이브 송출 인프라 설계")
    ) {
      try {
        localStorage.setItem("career_items", JSON.stringify(initialCareerItems));
      } catch (inner) {}
      return initialCareerItems;
    }
    const parsed = JSON.parse(stored) as CareerItem[];
    const etoosItem = parsed.find(item => item.id === "career-3");
    if (
      etoosItem &&
      etoosItem.description &&
      (!etoosItem.description[0].includes("장비 유지보수 체계 및 예약·운용 프로세스 구축") ||
       !etoosItem.description[2].includes("라이브 송출 인프라 설계"))
    ) {
      try {
        localStorage.setItem("career_items", JSON.stringify(initialCareerItems));
      } catch (inner) {}
      return initialCareerItems;
    }
    return parsed;
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
    if (
      !stored || 
      stored.includes("Automotive Production") || 
      stored.includes("촬영") || 
      stored.includes("영상편집") ||
      stored.includes("Strategic Skills") ||
      !stored.includes("전략 및 기획 역량") ||
      !stored.includes("콘텐츠 제작 역량") ||
      !stored.includes("운영 및 시스템 기술") ||
      !stored.includes("다양한 촬영 기술 보유")
    ) {
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
  heroTagline: "",
  heroTitle: "조회수를 매출 문의로 바꾸는 콘텐츠 PD",
  heroSubtitle: "",
  heroSlogan: "채널을 키우는 사람이자, 제작 조직을 세우는 사람입니다.\n교육기업 8년 · 인하우스 10년 · 영상 경력 14년",
  heroCompetence1: "홍보 · 유튜브 · 쇼츠/릴스 영상 전문",
  heroCompetence2: "기획 · 촬영 · 편집 · 브랜디드 콘텐츠 총괄",
  aboutTagline: "",
  aboutTitle: "안녕하세요.\n브랜드 콘텐츠 프로듀서\n이주원 PD 입니다.",
  aboutDescription: "단순한 영상 제작을 넘어 전략적인 마케팅과 브랜딩을 전개하여,\n브랜드의 신뢰도와 본연의 가치를 극대화하겠습니다.",
  profileName: "이주원",
  profileAge: "14년 (인하우스 10년)",
  profilePhone: "010-4820-0441",
  profileEmail: "seoulpotato@naver.com",
  aboutImage: "/profile.jpg",
  profileImage: "/profile.jpg"
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
    
    // Migration: update profileAge to "14년 (인하우스 10년)"
    if (parsed && (parsed.profileAge === "41세" || !parsed.profileAge || parsed.profileAge === "14년")) {
      parsed.profileAge = "14년 (인하우스 10년)";
      try {
        localStorage.setItem("site_texts", JSON.stringify(parsed));
      } catch (inner) {}
    }
    
    // Migration: Update aboutImage to /profile.jpg if empty or using Unsplash stock photos
    if (
      parsed &&
      (!parsed.aboutImage || 
       parsed.aboutImage === "" || 
       parsed.aboutImage.includes("unsplash.com") ||
       parsed.aboutImage.includes("photo-1542038784456") ||
       parsed.aboutImage.includes("photo-1551288049-bebda4e38f71") ||
       parsed.aboutImage.includes("photo-1554941068-a252680d25d9") ||
       parsed.aboutImage.includes("photo-1626544827763") ||
       parsed.aboutImage.includes("photo-1616440347437"))
    ) {
      parsed.aboutImage = "/profile.jpg";
      try {
        localStorage.setItem("site_texts", JSON.stringify(parsed));
      } catch (inner) {}
    }

    // Migration: Prevent showing any foreigner or old placeholder image of a face that does not match the real face of Lee Ju Won
    if (
      parsed && 
      (!parsed.profileImage ||
       parsed.profileImage === "" ||
       parsed.profileImage.includes("photo-1574717024653-61fd2cf4d44d") ||
       parsed.profileImage.includes("photo-1519085360753-af0119f7cbe7") ||
       parsed.profileImage.includes("photo-1536440136628") ||
       parsed.profileImage.includes("svg") ||
       parsed.profileImage.includes("photo-1516035069371-29a1b244cc32"))
    ) {
      parsed.profileImage = defaultSiteTexts.profileImage;
      try {
        localStorage.setItem("site_texts", JSON.stringify(parsed));
      } catch (inner) {}
    }

    // Migration: If user has local storage with old slogan variants, migrate it automatically to the upgraded slogan
    if (
      parsed &&
      (parsed.heroSlogan !== "채널을 키우는 사람이자, 제작 조직을 세우는 사람입니다.\n교육기업 8년 · 인하우스 10년 · 영상 경력 14년" ||
       parsed.heroSlogan === "기획·촬영·편집·채널 운영까지, 브랜드 성장에 책임지는 인하우스 프로듀서" ||
       parsed.heroSlogan?.includes("기획·촬영·편집·채널") ||
       parsed.heroSlogan === "1인 제작부터 중견기업 장기근속까지, 책임감 있는 브랜드 콘텐츠 PD" ||
       parsed.heroSlogan === "1인 제작부터 중견기업 장기근속까지, 책임감 있는 콘텐츠 크리에이터" ||
       parsed.heroSlogan === "콘텐츠 제작, 조직 운영, 채널 성장으로 비즈니스 성과를 만들어온 크리에이터" ||
       parsed.heroSlogan === "기획부터 촬영, 완벽한 편집까지 브랜드 가치를 관통하는 1인 제작" ||
       parsed.heroSlogan === "콘텐츠 제작, 조직 운영, 채널 성장을 통해 비즈니스 성과를 만들어 온 콘텐츠 리더" ||
       parsed.heroSlogan?.includes("기획부터 촬영") ||
       parsed.heroSlogan?.includes("장기 비즈니스 파트너십") ||
       parsed.heroSlogan?.includes("견고한 신뢰성") ||
       parsed.heroSlogan?.includes("콘텐츠 제작을 넘어") ||
       parsed.heroSlogan?.includes("비즈니스 성과를 만들어온") ||
       parsed.heroSlogan?.includes("책임감 있는 콘텐츠 크리에이터") ||
       parsed.heroCompetence1?.includes("쇼츠/숏폼") ||
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
    if (parsed && (parsed.heroTagline === "HIGH-END VIDEO PRODUCER" || parsed.heroTitle === "VIDEO MARKETING" || parsed.heroTitle === "CONTENT PRODUCER" || parsed.heroSubtitle === "DIRECTOR" || parsed.heroTitle === "Content Marketer" || parsed.heroTitle === "Content Marketer & PD" || !parsed.heroTitle?.includes("조회수를 매출 문의로"))) {
      parsed.heroTagline = "";
      parsed.heroTitle = "조회수를 매출 문의로 바꾸는 콘텐츠 PD";
      parsed.heroSubtitle = "";
      try {
        localStorage.setItem("site_texts", JSON.stringify(parsed));
      } catch (inner) {}
    }
    if (parsed && (
      parsed.aboutTitle === "안녕하세요, 비디오 마케팅 디렉터 이주원 PD 입니다." || 
      parsed.aboutTitle === "안녕하세요. 브랜드 콘텐츠 프로듀서\n이주원 PD 입니다." || 
      parsed.aboutTitle?.includes("비디오 마케팅 디렉터") || 
      parsed.aboutTagline?.includes("브랜드 가치를 주행시키는 시네마 크리에이터") ||
      !parsed.aboutTitle?.includes("\n") || 
      parsed.aboutDescription?.includes("코어 메시지") || 
      parsed.aboutDescription?.includes("도구적 대행") ||
      !parsed.aboutDescription?.includes("\n")
    )) {
      parsed.aboutTitle = defaultSiteTexts.aboutTitle;
      parsed.aboutTagline = defaultSiteTexts.aboutTagline;
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
