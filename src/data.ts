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

  // YOUTUBE LONG (유튜브 롱폼) - 13 items
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
  {
    id: "portfolio-long-8",
    title: "[신형 무쏘] 순정 하드탑 vs 진텍·오브로 캐노피 완벽 비교!",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "YOUTUBE LONG",
    description: "신형 무쏘 차량의 순정 하드탑과 진텍·오브로 캐노피 제품의 장단점 및 특징을 완벽하게 비교하여 고객들의 선택을 돕는 유익하고 직관적인 콘텐츠",
    videoUrl: "https://www.youtube.com/watch?v=4keiyUtKJIA",
    imageUrl: "https://img.youtube.com/vi/4keiyUtKJIA/hqdefault.jpg",
    equipment: "a7c2, 오즈모 포켓3 | Premiere Pro",
    duration: "13:45",
    date: "2024-11",
    order: 11
  },
  {
    id: "portfolio-long-9",
    title: "[EP3] 강아지가 낑낑거리며 인형에 집착합니다..😢 #견생연구소",
    client: "버찌 BUDZZI",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "YOUTUBE LONG",
    description: "인위적인 연출을 배제하고 강아지의 자연스러운 행동 습성과 집착 행동에 따른 전문 교육 조언을 담아 시청자 공감을 자아내는 반려동물 정보성 예능 다큐멘터리.",
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
    description: "역사적 의거인 김지섭 의사의 니중바시 투탄 의거일을 알기 위해 대중적인 역사 스토리텔링 기법을 적용하여 교육 지식과 감동을 동시에 제공하는 브랜디드 콘텐츠.",
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
    description: "왕초보들의 생생한 축구 도전기를 김재성 은퇴 선수와의 유쾌한 지도를 통해 흥미롭게 구성하고, 인간 집중력의 한계를 재치 있는 과학적 서사로 풀어낸 스포츠 예능 콘텐츠.",
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
    role: "촬영, 총괄",
    format: "YOUTUBE LONG",
    description: "전통 요리 궁중떡볶이에 숨겨진 한국사의 역사적 맥락과 조리 방식을 결합한 푸드 인문학 다큐멘터리 예능으로, 요리 초보의 좌충우돌 스토리를 즐겁게 연출.",
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
    description: "인기 수학 강사 정승제의 오프라인 강연회이자 토크 콘서트 '특별한 하루'의 생생한 현장 라이브 및 강연 실황을 감동적으로 기록한 풀 다큐멘터리 영상.",
    videoUrl: "https://www.youtube.com/watch?v=CT03HGVmg-g",
    imageUrl: "https://img.youtube.com/vi/CT03HGVmg-g/maxresdefault.jpg",
    equipment: "",
    duration: "58:20",
    date: "2019-12",
    order: 11.5
  },
  // SHORTS (쇼츠 / 릴스) - 6 items
  {
    id: "portfolio-shorts-1",
    title: "견인장치 무사고 연결법 (유럽식 커플러)",
    client: "K-TRAILER",
    role: "편집",
    format: "SHORTS",
    description: "기존에 다른 PD가 제작했던 영상에서 keypoint 부분을 재 편집하여 고객들의 트레일러 장착 방법을 짧고 굵게 전달 17만 조회수 달성",
    videoUrl: "https://www.youtube.com/shorts/upLsH4PXbrM",
    imageUrl: "https://img.youtube.com/vi/upLsH4PXbrM/hqdefault.jpg",
    duration: "00:45",
    date: "2024-08",
    order: 12
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
    order: 13
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
    order: 14
  },
  {
    id: "portfolio-shorts-4",
    title: "무쏘를 무쏘 답게 타는 4가지 튜닝 옵션",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "SHORTS",
    description: "무쏘 차량 오너들을 저격하는 필수 튜닝 옵션 4가지를 빠르고 직관적으로 소개하여 흥미와 정보 전달력 극대화",
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
    description: "기아 타스만 블랙과 화이트 컬러 차량의 오브로 캐노피 장착 모습을 감각적으로 비교 연출하여 예비 구매자들의 취향 저격 및 기획전 유도",
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
    description: "팰리세이드 차량 패밀리 오너를 저격하는 편리하고 안전한 GSC 전동 사이드 스텝의 실사용 모습 및 장점을 임팩트 있게 전달",
    videoUrl: "https://www.youtube.com/shorts/gDIrYKh8fkw",
    imageUrl: "https://img.youtube.com/vi/gDIrYKh8fkw/hqdefault.jpg",
    equipment: "a7c2, 오즈모 포켓3 | Premiere Pro",
    duration: "00:50",
    date: "2024-10",
    order: 17
  },

  // INTERVIEW (인터뷰) - 3 items
  {
    id: "portfolio-interview-1",
    title: "무쏘EV 2만km 주행 후기 | 진텍 캐노피",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "INTERVIEW",
    description: "회사 사업 확장을 위해 판매하고 있는 제품과 무쏘EV 차량을 구매 고민하는 시청자들의 궁금증을 풀어 주는 주행 후기 인터뷰",
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
    description: "자전거 라이딩 하는 유명한 장소에서 '툴레'와 협업하여 자전거를 즐기는 시청자들에게 자전거 캐리어 설치 이벤트를 진행하여 구매 유도 및 유명한 라이딩 장소를 소개해 드리는 콘텐츠 제작",
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
    description: "기아 타스만 차량에 혁신적인 견인장치 장착형 텐트 '툴레 아웃셋'을 결합하고 주행 질감 및 감성 가득한 캠핑 실사용 장단점을 풀어내는 밀착 인터뷰 및 리뷰",
    videoUrl: "https://www.youtube.com/watch?v=d8EEun7E8J0",
    imageUrl: "https://img.youtube.com/vi/d8EEun7E8J0/hqdefault.jpg",
    previewVideoUrl: "",
    equipment: "a7c2, 오즈모 포켓3, DJI Mini 4 Pro | Premiere Pro",
    duration: "10:15",
    date: "2024-12",
    order: 20
  },
  {
    id: "portfolio-live-1",
    title: "[LIVE] 이투스교육 라이브 시스템 전반적인 구축",
    client: "이투스교육",
    role: "라이브 중계 전송 및 방송 시스템 총괄 구축",
    format: "LIVE",
    description: "이투스교육의 전국 대형 지점 라이브 생중계 및 인터넷 방송 전송 하드웨어, 소프트웨어 시스템을 전반적으로 인프라 설계 구축하고 기술 오퍼레이팅 프로세스를 완성한 프로젝트.",
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
    role: "인하우스 영상기획총괄 PD",
    description: [
      "유튜브 및 인스타그램 채널의 카라반/트레일러/캠핑 레저 용품 전문 브랜디드 영상 기획, 촬영, 최적화 편집 전담",
      "캠핑 아웃도어 트렌드와 EV 친환경 차량의 한계 견력을 테스트하는 유니크 오토모티브 로드마크 콘텐츠 개발"
    ],
    achievements: [
      {
        platform: "YouTube 콘텐츠 부문",
        metrics: [
          "운영 1년 만에 유튜브 채널 구독자 약 2,000명 대에서 7,200명 돌파 (260% 폭발적 성장)",
          "핵심 오토모티브 기획 영상 최고 누적 조회수 43만 회, 19만, 10만 등 파격 상승 기록",
          "연계 오더 문의율 전년 동 분기 대비 약 48% 가치 신장 기여"
        ],
        link: "https://www.youtube.com/@k_trailer",
        linkName: "@k_trailer 유튜브 바로가기"
      },
      {
        platform: "Instagram 릴스 채널 운영",
        metrics: [
          "인스타그램 100명 대 팔로워에서 릴스 연출을 장려하여 단기간 내 1,600명으로 증가",
          "입사 전 인스타그램 릴스 최고 조회수 1,000회를 넘지 못했으나 입사 후 최고 조회수 91만 기록.",
          "채널의 방향성을 캐치 하여 최근 업로드한 릴스 영상들의 조회수의 평균치를 상승 기여."
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
      "1타 강사 전담 촬영, 인하우스 기획 영상 촬영, 이투스 공식 유튜브 채널 촬영",
      "촬영팀 아르바이트, 파견직 관리 및 프로젝트 촬영 총괄 PD 업무 진행",
      "라이브 시스템 가이드라인 구축",
      "자사 스튜디오 총 관리",
      "촬영 장비 유지보수 전반 총괄"
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
    skills: ["미러리스", "DSLR", "DJI Drone", "액션 캠", "짐벌"]
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
      stored.includes("현장 중계, 촬영, 편집") ||
      stored.includes("Sony a7m3, 다중 카메라도 촬영 구도") ||
      stored.includes("Sony a7m3, 고성능 외장 마이크") ||
      stored.includes("Sony FX3, 고해상도 조명 장비") ||
      stored.includes("Sony DSLR, 무선 마이크") ||
      !stored.includes("대한민국 견인장치") ||
      !stored.includes("portfolio-shorts-4") ||
      !stored.includes("portfolio-shorts-5") ||
      !stored.includes("portfolio-shorts-6") ||
      !stored.includes("portfolio-long-8") ||
      !stored.includes("portfolio-long-13") ||
      !stored.includes("portfolio-interview-3") ||
      !stored.includes("portfolio-live-1") ||
      !stored.includes("XVEqu1hdato")
    ) {
      // Force migrate to show the beautiful updated titles/descriptions instantly
      try {
        localStorage.setItem("portfolio_items", JSON.stringify(initialPortfolioItems));
      } catch (inner) {}
      return initialPortfolioItems;
    }
    let parsed = JSON.parse(stored) as PortfolioItem[];

    // Auto-remove deleted items from user's local storage if they exist
    const filteredParsed = parsed.filter(item => !["portfolio-shorts-7", "portfolio-shorts-8", "portfolio-shorts-9"].includes(item.id));
    let updated = filteredParsed.length !== parsed.length;
    parsed = filteredParsed;

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
      stored.includes("캠핑 시장이 죽어 가면서") ||
      stored.includes("자사 인스타그램 릴스 최고 조회수") ||
      !stored.includes("입사 전 인스타그램 릴스 최고 조회수") ||
      !stored.includes("인스타그램 100명 대 팔로워") ||
      stored.includes("360% 폭발적 성장") ||
      !stored.includes("260% 폭발적 성장") ||
      stored.includes("42만 회") ||
      !stored.includes("43만 회") ||
      stored.includes(" (@k_trailer)") ||
      stored.includes(" (@ktrailer1)") ||
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
      !stored.includes("촬영 팀 관리") ||
      stored.includes("1,500명으로 증가") ||
      !stored.includes("1,600명으로 증가") ||
      !stored.includes("1타 강사 전담 촬영") ||
      stored.includes("라이브 시스템 가이드라인 구축 및 스튜디오 관리") ||
      !stored.includes("라이브 시스템 가이드라인 구축") ||
      !stored.includes("자사 스튜디오 총 관리") ||
      !stored.includes("촬영 장비 유지보수 전반 총괄") ||
      !stored.includes("프로젝트 촬영 총괄 PD 업무 진행")
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
      etoosItem.description[1] !== "촬영팀 아르바이트, 파견직 관리 및 프로젝트 촬영 총괄 PD 업무 진행"
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
      !stored.includes("촬영") || 
      !stored.includes("영상편집") ||
      stored.includes("a7m4") ||
      stored.includes("a7c2")
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
  heroTagline: "HIGH-END VIDEO PRODUCER",
  heroTitle: "VIDEO MARKETING",
  heroSubtitle: "DIRECTOR",
  heroSlogan: "기획부터 촬영, 편집까지 브랜드 가치를 관통하는 1인 제작\n장기 근속 경력의 신뢰성과 플래그십 팀 협업 프로젝트 리드 경력",
  heroCompetence1: "홍보 · 유튜브 · 쇼츠/릴스 영상 전문",
  heroCompetence2: "기획 · 촬영 · 편집 · 브랜디드 콘텐츠 총괄",
  aboutTagline: "\"브랜드 가치를 주행시키는 시네마 크리에이터\"",
  aboutTitle: "안녕하세요, 비디오 마케팅 디렉터\n이주원 PD 입니다.",
  aboutDescription: "단순한 영상 제작을 넘어 전략적인 마케팅과 브랜딩을 전개하여, 브랜드의 신뢰도와 본연의 가치를 극대화하겠습니다.",
  profileName: "이주원",
  profileAge: "41세",
  profilePhone: "010-4820-0441",
  profileEmail: "seoulpotato@naver.com",
  aboutImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
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
    
    // Migration: If about image is empty or features older cameras, update to modern video analysis / editing workstation
    if (
      parsed &&
      (!parsed.aboutImage || 
       parsed.aboutImage === "" || 
       parsed.aboutImage.includes("photo-1542038784456") ||
       parsed.aboutImage.includes("photo-1554941068-a252680d25d9") ||
       parsed.aboutImage.includes("photo-1626544827763") ||
       parsed.aboutImage.includes("photo-1616440347437"))
    ) {
      parsed.aboutImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800";
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

    // Migration: If user has local storage with the old default slogan variants, migrate it automatically to the upgraded professional Korean slogan
    if (
      parsed &&
      (parsed.heroSlogan === "기획부터 촬영, 완벽한 편집까지 브랜드 가치를 관통하는 1인 제작" ||
       parsed.heroSlogan?.includes("장기 비즈니스 파트너십") ||
       parsed.heroSlogan?.includes("견고한 신뢰성") ||
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
    if (parsed && (!parsed.heroTagline || parsed.heroTagline === "")) {
      parsed.heroTagline = "HIGH-END VIDEO PRODUCER";
      try {
        localStorage.setItem("site_texts", JSON.stringify(parsed));
      } catch (inner) {}
    }
    if (parsed && (parsed.aboutTitle === "안녕하세요, 비디오 마케팅 디렉터 이주원 PD 입니다." || !parsed.aboutTitle?.includes("\n") || parsed.aboutDescription?.includes("코어 메시지") || parsed.aboutDescription?.includes("도구적 대행"))) {
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
