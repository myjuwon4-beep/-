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
    title: "K트레일러&큐브렉 자사 기업 홍보용 영상",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 1인 제작",
    format: "PROMOTION",
    description: "입사 직후 사내 브랜딩 영상의 부재를 인지하고, 견인장치 제조 업체와 콜라보레이션을 통해 기업 납품 및 장착 역량을 높게 완성한 공식 홍보 영상입니다.\n\n[제작 의도]\n기업 신뢰도를 강화하기 위해, 견인장치 설치 전문 프로세스의 정밀성과 최고 수준의\n 기술력을 시청자들이 감각적으로 신뢰할 수 있도록 고급스러운 톤앤매너로 \n시인성 높게 담아내고자 하였습니다.\n\n[핵심 비하인드]\n외부 외주 제작 없이 기획부터 연출, 촬영, 편집을 진행 하였고,\n최저 예산으로 프리미엄 프로덕션 퀄리티를 만들어 냈습니다.\n타 제조 협력사와의 콜라보 시너지를 극대화하여 유기적인 연계 \n마케팅 성과를 만들어 냈습니다.",
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
    description: "한국관광공사 유니크베뉴로 지정된 전통 한옥 호텔 '왕의지밀'의 우아함과 공간적 정취를 \n완성도 높은 미장센으로 그려낸 홍보 영상입니다.\n\n[제작 의도]\n관광공사 VR360 프로젝트 수주 현장 지원 중, 한옥 고유의 가치를 대외적으로 알릴 브랜디드 에셋의 필요성을 느끼고, 왕의지밀과 주변 관광지를 독특한 매력 포인트 항공 및 실내 다각도 연출로 극대화하기 위해 직접 추가 기획 및 제작했습니다.\n\n[핵심 비하인드]\n최종 영상물은 별도 마케팅 예산 없이도 한국관광공사 공식 채널 및 호텔 로비 전시 메인 \n홍보 리소스로 브랜드 가치를 창출했습니다.",
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
    description: "대한민국의 국제 회의 시설(MICE) 인프라를 전 세계 글로벌 바이어와 주최사들에게 시공간을 초월해 생생하게 전달하는 다각도 360VR 공간 홍보 콘텐츠입니다.\n\n[제작 의도]\n웹과 오프라인 어디서든 대형 컨벤션 센터의 내부 규모와 회의 동선 및 편의 시설을 직접 체험하는 것처럼 실감 나고 명확히 파악할 수 있도록 공간 메타데이터를 안정적으로 시각화하는 \n방향으로 설계했습니다.\n\n[핵심 비하인드]\n360도 왜곡이 불가피한 VR 카메라 특성을 극복하기 위해 천장 및 동선 조명 조율과\n고난도 수평 스티칭 기술을 적용했으며, 한국관광공사의 글로벌 MICE 바이어 유치\n 세일즈 미팅 시 핵심 프레젠테이션 툴로 장기 활용되어 국익 매력도를 높였습니다.",
    videoUrl: "https://youtu.be/Ioh8RRnDAcg",
    imageUrl: "https://img.youtube.com/vi/Ioh8RRnDAcg/hq2.jpg",
    previewVideoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b1851722e1de7fe50ddf7cfda&profile_id=139&oauth2_token_id=57447761",
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
    description: "PPF를 시공하는 기업의 홍보영상을 제작한 콘텐츠로\n기획 촬영 편집 1인 제작한 영상 입니다.",
    videoUrl: "https://youtu.be/MwlKk7E2ZSs",
    imageUrl: "https://img.youtube.com/vi/MwlKk7E2ZSs/maxresdefault.jpg",
    previewVideoUrl: "",
    equipment: "Sony a7c2, DJI Mini 4 Pro | Premiere Pro",
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
    description: "신차 출고 후 회사의 제품과 함께\n차량과 제품을 홍보하는 영상 제작\n기획부터 촬영, 편집까지 1인 제작 하였으며,\n촬영은 1일 편집은 2.5일 소요 되었습니다.",
    videoUrl: "https://youtu.be/Z2995_gc2VA",
    imageUrl: "https://img.youtube.com/vi/Z2995_gc2VA/maxresdefault.jpg",
    previewVideoUrl: "",
    equipment: "카메라 | Premiere Pro",
    duration: "03:20",
    date: "2025-03",
    order: 1.7
  },

  // YOUTUBE LONG (유튜브 롱폼) - 13 items
  {
    id: "portfolio-long-1",
    title: "PV5 전기차 23시간 전기 테스트",
    client: "K-TRAILER",
    role: "기획, 촬영, 편집 (1인제작)",
    format: "YOUTUBE LONG",
    description: "캠핑 혹은 차박을 위해 전기 PBV를 구입한다면 가장 우려되고 궁금해하는 '1박 동안의 전력 소비량'을 직접 실증하여 예비 구매자들의 의구심을 단번에 불식시킨 최고 조회수 기획 콘텐츠입니다. 구독자 2,000명 시기에 최고 조회수 43만을 기록했습니다.\n\n[제작 의도]\n말뿐인 스펙 나열이 아닌, 혹한기 겨울에 히터를 장시간 켜놓고 전기 기기들을 동시 사용하는 하드코어 1박 2일 캠핑 시나리오를 설계하여 소비자가 피부로 체감할 수 있는 사실적인 정보를 제공하고자 했습니다.\n\n[핵심 비하인드]\n촬영 당시 장비 고장으로 오즈모 포켓3와 드론으로만 촬영을 진행 했고 \n솔직하고 투명한 테스트 포맷은 소셜 알고리즘을 타고 폭발적인 조회수 43만 회를 \n이끌어 냈으며, 전국 예비 전기 오너들의 자발적인 커뮤니티 공유로 이어져 \nK트레일러 채널의 브랜딩 신뢰도 제고와 문의 상담량을 폭등 시켰습니다.",
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
    description: "'신형 무쏘' 출고 직후, 일상 속 도심 안정 성능과 거친 야생의 오프로드 극단 상황 성능까지 \n직접 체험 주행해 보며 타겟 오너들의 의심 어린 주행력 궁금증을 통쾌하게 \n풀어 주는 콘텐츠입니다.\n\n[제작 의도]\n스펙북 수치를 너머 거친 노면의 생동감과 차량의 서스펜션 능력, 뒤틀림 억제력, \n실주행 피로도를 차체 다각도에 부착한 고프로 카메라 멀티 앵글을 활용해 입체적이고 \n역동적인 비주얼로 표현하고자 연출 했습니다.\n\n[핵심 비하인드]\n주행 위험 요인을 철저히 방지하기 위해 로케이션 사전 답사를 진행하고 무선 통신망을 통해 원격 모니터링하며 안전하게 제작했습니다. 오프로드 테스트 편은 정통 SUV 애호가층과 \n마니아 커뮤니티의 뜨거운 반응을 유도하여 브랜드 전문 이미지를 상승 시켰습니다.",
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
    description: "무쏘EV, 기아 타스만 국내 자동차 시장을 달구고 있는 신차들과 견인장치를 가장 많이 \n장착하는 카니발, 렉스턴 스포츠 칸 차량을 동원하여 무거운 카라반 견인 상태로 \n극단적인 급경사 길을 등판하는 하드코어 필드 콘텐츠입니다.\n\n[제작 의도]\n무거운 카라반을 견인하는 오너들이 가장 불안해하는 언덕길 제동력과 재출발 견인 토크를 \n국내 최초의 리얼 배틀 테스트 형식으로 시원하게 증명하여 타사 영상들과의 \n시각적 비교 우위를 확보하고자 기획했습니다.\n\n[핵심 비하인드]\n등판 각도계로 테크니컬한 디테일을 직관적으로 연출했고, 이를 통해 수많은 시청자로부터 \n'그동안 그 어디서도 볼 수 없었던 속 시원한 기획 전개'라는 극찬의 실댓글 과 함께\n 입소문을 타고 높은 브랜드 문의 전환을 창출했습니다.",
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
    description: "10년간 견인장치 안전 장착을 증명해 온 대표님과 최정예 엔지니어들이 직접 나서\n 유럽식 스완넥과 미국식 히치 등 견인 장치 타입의 날 선 토론을 유쾌하게 펼친 \n정보 가치형 배틀 콘텐츠입니다.\n\n[제작 의도]\n제조사 관점의 맹목적인 단순 정보 광고를 탈피하고, 현업 전문가들의 가감 없는 \n배틀 토크 설전을 유도하여 시청자에게 가장 맞는 \n제품 구매 기준점을 일깨워 주고자 기획했습니다.\n\n[핵심 비하인드]\n자칫 지루할 수 있는 제품 사양 비교를 빠른 템포의 배틀 편집 디자인과 자막 효과를 적용해 \n'예능형 토크쇼'로 탈바꿈시켰습니다. 본 콘텐츠는 자사 제품에 대한 \n과감한 필터 없는 단점 언급까지 시원하게 소통해 브랜드 진정성과 \n신뢰를 이끄는 바이럴 성공을 거두었습니다.",
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
    description: "신형 무쏘 픽업트럭과 고버랜드 캠퍼를 결합하여 극동계 노지 설원에서 직접 캠핑하고 히터의 성능과 야생 생존 편의성을 체감 연출해 낸 겨울 영하의 차박 캠핑 브이로그 입니다.\n\n[제작 의도]\n영하 15도 이하 극한 동계 환경 속에서 난방 효율성, 밀폐 능력, 동계 주행 역량 등 \n오너들이 직접 체험하기 두려운 혹한 실전 테스트를 캠핑 브이로그 형식을 차용하여 영상에서 경험할 수 있도록 기획했습니다.\n\n[핵심 비하인드]\n실감 나는 겨울 분위기 조성을 위해 산속 깊은 설산 오지를 탐색하여 드론을 활용해 탁 트인 설경의 수려한 가치를 촬영했습니다. 차가운 겨울과 따뜻한 내부의 자연스러운 색감을 표현 하였고 고가의 하이엔드 캠퍼 제품에 대한 직접적인 구매 욕구를 대폭 끌어올렸습니다.",
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
    description: "국내 최초 전기 픽업트럭 '신형 무쏘EV'의 등장을 기념해, 거대한 패밀리 카라반을 직접 뒤에 견인한 채 커브와 고속 직진 코스, 노면 충격 구간을 주행하며 차량의 하중 분배 및 견인 안전 피드백을 보여주는 정보 콘텐츠입니다.\n\n[제작 의도]\n'과연 전기 픽업이 내연기관만큼의 묵직한 견인 장치 파워와 고급스러운 승차감을 구현할 수 있는가?'라는 시장의 편견 어린 호기심에 영감을 얻어, 주행 진동과 회생제동등 을 실 체험 \n하면서 안정성을 팩트로 입증하고자 기획하였습니다.\n\n[핵심 비하인드]\n실주행 견인 안정성을 입증하기 위해, 탑승자가 실제로 체감하는 실 견인 주행 을 하였고, 대형 카라반 보유 예비 전기차주 고객들의 실제 시승 문의 및 견인장치 의뢰 예약 전환이 30% 이상 폭증하는 성과를 도출했습니다.",
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
    description: "K트레일러 대구 직영점의 친근하고 유쾌한 신뢰감을 전파하기 위해,\n'대표님이 자리를 비운 특별한 하루'라는 VLOG 컨셉을 활용해 루프탑텐트의 \n세부 사용 가이드와 직원의 자연스러운 열정을 재치 있는 스토리텔링 기술로\n담아낸 마케팅 콘텐츠입니다.\n\n[제작 의도]\n부담스럽고 뻔한 지점 광고를 피하고, 지점 직원들의 각기 다른 독특하고 정감 어린\n 캐릭터성을 입체화하는 세련되고 위트 있는 디자인을 설계했습니다. \n제품을 직접 오퍼레이팅하는 모습을 유쾌하게 그려 고객들이 언제든 믿고 \n놀러 올 수 있는 아지트 감성의 직영점 브랜딩을 기획했습니다.\n\n[핵심 비하인드]\n비대면으로 대구 직영점 직원들과 실시간 콘티와 연출법을 소통하며 촬영 클립의 포인트를\n원격 코칭했습니다. 러프한 스마트폰 영상 소스들을 감각적인 컷 템포, 귀여운 오버레이 \n모션 자막 및 절묘한 오디오 싱크로나이징을 통해 입체적 예능으로 복원해 내어\n고객들의 단골 친근도를 상승시키는 결과를 냈습니다.",
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
    description: "신형 무쏘 차량 전용 캐노피, 하드탑 끝판왕을 가리기 위해, 순정 하드탑과 \n하이엔드 튜닝 브랜드인 '진텍', '오브로(OBRO)'의 캐노피를 재질, 디자인 마감 등 핵심 부분들을 속 시원하게 검증·비교한 초밀착 튜닝 가이드입니다.\n\n[제작 의도]\n값비싼 튜닝 품목의 선택에서 고장 극성이나 호환성 고민으로 시달리는 무쏘 예비 오너분들을 위해, 각 장비의 장점만을 늘어놓는 편협한 광고를 극복하고 가감 없는 단점까지 공정하게 \n비교하는 정밀 가이드 포맷을 설정했습니다.\n\n[핵심 비하인드]\n실물을 한자리에 모으기 힘든 브랜드를 K트레일러만의 조율망으로 제품 섭외 완료했으며, \n디테일한 금속 밴딩이나 잠금장치 디테일을 촬영해 오프라인 매장의 실제 시연을 그대로 화면 \n속에 담았습니다. 각 캐노피 브랜드 대리점 예약률을 상승시키는 성과를 낳았습니다.",
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
    description: "이전 직장 '루씨드드림'에서 어플 마케팅 목적으로 기획·제작하여, 반려견의 실제 행동 특성과 전문 육아 지식 솔루션을 조화롭게 풀어내 반려인들의 높은 공감을 이끌어낸 콘텐츠입니다.\n\n[제작 의도]\n대본에 따른 인위적인 클리셰들을 배제하고, 실제 가정환경에서 흘러가는 강아지의 내밀한 자연적 몸짓 언어를 포착해 전문 반려 육아 지식 솔루션을 조화롭게 분배해 내는 것에 완성의 목표를 두었습니다.\n\n[핵심 비하인드]\n반려견의 시선 패스를 완벽히 담아내기 위해, 바닥과 평행한 저고도 로우 앵글 장비 세팅 및 초점 전이를 극대화하는 카메라 워크를 직접 연구하여 적용했습니다. 또한 반려인들이 가장 공감하는 백그라운드 오디오와 따뜻한 색감의 시네컬러 그레이딩 처리를 공들여 수행하였습니다.",
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
    description: "스타 강사 최태성 선생님과 함께 역사 속 김지섭 의사의 이야기를 되짚고 의미를 깊이 전달한 다큐 프로젝트 영상입니다.\n\n[제작 의도]\n이투스교육 근무 시기 기획 영상 담당으로서, 최태성 선생님의 '오늘' 이라는 주제로 역사적 사건들을 돌아보고 기억하는 콘텐츠의 촬영을 담당하였습니다.\n\n[핵심 비하인드]\n선생님의 강렬하면서도 섬세한 강의 호흡과 감정의 깊이를 그대로 시청자에게 전달하기 위해 여러 대의 카메라를 배치하여 촬영했습니다.",
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
    description: "국가대표 출신 전설 '김재성 선수'의 참다운 지도 아래, 좌충우돌 왕초보 레크레이션 축구 도전자들의 실시간 극적 도전기를 기획한 예능 콘텐츠입니다.\n\n[제작 의도]\n이투스 교육 근무 기간에 유튜브 채널 '스터디요'의 콘텐츠로서, 촬영팀 6명과 함께 현장을 총괄하여 촬영을 진행했던 콘텐츠입니다.\n\n[핵심 비하인드]\n경기장 피치 위의 숨소리와 생동감 있는 움직임을 담기 위해, 촬영팀과 카메라 배치 및 동선을 실시간으로 꼼꼼하게 조율하며 완성했습니다.",
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
    description: "스타 강사 최태성 선생님의 쿡방 요리 역사 콘텐츠 촬영을 진행했던 영상입니다.\n\n[제작 의도]\n최태성 선생님의 궁중떡볶이 요리 과정과 조선 시대 한국사 이야기가 자연스럽게 연결되는 \n재미를 전하기 위해 촬영팀 5명과 함께 촬영 총괄해서 전담하였습니다.\n\n[핵심 비하인드]\n요리하는 실감 나는 모습과 식재료의 색감, 자글자글 끓는 소리가 시청자에게 생생하게 전달되도록 세심하게 앵글과 조명을 맞춰가며 촬영했습니다.",
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
    description: "스타 강사 정승제 선생님의 기획 영상용 콘텐츠입니다.\n\n[제작 의도]\n정승제 선생님이 학생 6명과 함께 특별한 하루를 보내는 콘텐츠에서 촬영을 담당하였습니다.\n\n[핵심 비하인드]\n선생님과 학생들의 자연스러운 대화와 따뜻한 현장 리액션을 꾸밈없이 생생하게 담기 위해 집중하여 촬영했습니다.",
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
    description: "기존에 타 작업자가 제작해 아쉬움이 짙던 안전 연결법 원본 자료에서 오너들이 반드시 엄수해야 할 생명 직결 핵심 노하우 부위만을 완벽히 크롭 가공하고 스피디한 시각적 장치 효과를 버무려 리바이벌한 숏폼 콘텐츠입니다. 누적 17만 회의 높은 반응을 모았습니다.\n\n[제작 의도]\n카라반 연결법이라는 다소 딱딱하고 장황해질 수 있는 매뉴얼을 단 40초 만에 직관적으로 터득할 수 있도록 제작하였고, 안전사고 리스크를 획기적으로 낮추는 기능성 숏폼 가이드를 만드는 목적을 두었습니다.\n\n[핵심 비하인드]\n기존의 제작되어 있던 영상을 입사 직후 핵심 포인트를 발굴 및 재구조화하여 역주행 트래픽(17만 회)을 유도했으며, 안전에 민감한 실제 견인 오너들로부터 신뢰의 구심점을 확보 하였습니다.",
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
    description: "기아의 목적 기반 모빌리티(PBV)인 'PV5 큐브밴'의 오프라인 전시 현장을 빠르고 매력적으로 소개해 많은 예비 오너들의 주목을 이끌어 낸 홍보용 숏폼 콘텐츠입니다.\n\n[제작 의도]\n오프라인 전시 공간에 직접 방문하지 못하시는 소비자분들을 위해,\n단 3일, 인구 밀도가 높은 서울 현대 백화점 오프라인 부스에 전시 하고\nPV5 큐브밴만의 유니크하고 똑똑한 공간 레이아웃을 1분 내외로 속도감 있게 \n담아내어 정보를 명확하게 전달하고 접근성이 좋은 장소와 주말이라는 \n시기를 이용해 관심도를 끌어 올렸습니다.\n\n[핵심 비하인드]\n단기 전시 기간 동안의 현장 열기를 극대화하여 전달하고, 영상 게시 이후 K트레일러 채널로의 유입과 차량 견인장치 및 캠핑 관련 문의가 대폭 증가하는 등 단순 차량 소개를 넘어 브랜드 \n관심도로 이어지게 하는 실질적인 비즈니스 가치 변화를 이끌어 냈습니다. \n전시 기간 3일만에 10만 조회수를 달성 했습니다.",
    videoUrl: "https://youtube.com/shorts/hj6aLYEcVeY?si=9U6Cae0QG00QWCsP",
    imageUrl: "",
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
    description: "현대백화점 시티 아웃도어 3일간의 짧은 팝업 전시 한정성을 활용해 시청자의 후킹 심리를 유도하고, 복잡한 인파 속에서 캠핑 맞춤형 유니크 내부 레이아웃을 감각적으로 조명한 전시 숏폼 마케팅 작입니다.\n\n[제작 의도]\n대형 유통점이라는 트렌디한 로케이션의 공간감을 바탕으로 썸네일과 앞단 3초 내에 시각적인 흥미 유발을 성공시키고, 좁은 단시간 내에 예비 오너들이 꼭 봐야 할 '가구 슬라이딩 기믹' 및 공간 확장성을 다이내믹한 연출로 전달하고자 했습니다.\n\n[핵심 비하인드]\n매우 혼잡한 오프라인 방문객 군더더기 동선을 최소 슬림화 앵글로 우회 처리하여 오롯이 차량의 공간 쾌적함에만 눈이 가도록 극적 편집을 감행했습니다. 팝업 기간 짧은 게시 즉시 K트레일러 오프라인 매장의 주말 상담 예약 콜백을 최고치로 활성화해, 단기 팝업 홍보 역량의 극한을 달성했습니다.",
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
    description: "정통 픽업 무쏘의 마스크를 야성적으로 극대화할 수 있는 필수 끝판왕 튜닝 옵션 4가지를 빠르고 명철하게 제안하여 액티비티 오너들을 저격한 속사포 릴리즈 숏폼입니다.\n\n[제작 의도]\n자사에서 판매하는 튜닝 제품을 홍보 하기 위해 실 테스트를 진행 했던 롱폼 콘텐츠\n와 추가 촬영을 통해 판매 제품을 홍보하는데 목적을 두었습니다.\n\n[핵심 비하인드]\n불필요한 인트로나 대기 시간 없이 오직 세련된 영상연출과 박력 있는 비트 음원에 맞추어 각 파트 장단점을 쏟아내듯 기획했습니다. 업로드 이후 무쏘 튜닝 파츠 관련 자사 네이버 샵 스토어 및 현장 패키지 장착 의뢰율을 40% 이상 증가시켰습니다.",
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
    description: "화제의 신차 '기아 타스만' 블랙과 화이트 실전 차량을 한 곳에 매칭하여 오너들의 최고 애고민인 색상 선택과 프리미엄 오브로 캐노피의 핏한 매치 실물을 감각적으로 조명한 하이 스피드 비교 쇼츠입니다.\n\n[제작 의도]\n자사 사업 확장으로 판매 하는 캐노피+판도라 제품을 BGM 템포에 맞춰\n홍보 하는 목적으로 제작 하였습니다.",
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
    description: "최고의 패밀리 SUV 팰리세이드 오너층의 온 가족 안전 승하차를 보우할 GSC 프리미엄 하이테크 전동 사이드 스텝의 작동성과 순정 부품급의 완성도를 스마트하게 세밀 피칭한 숏폼 콘텐츠입니다.\n\n[제작 의도]\n야간에도 안전하게 발밑을 비추는 고급 오토 LED 조명 전동 사이드 스텝 역동적이면서도 품위 높게 촬영하고 편집하여 오너들이 꼭 장착해야 할 가치를 시각적으로 표현시켰습니다.\n\n[핵심 비하인드]\n패밀리카를 구매하는 대부분의 목적이 가족을 위함이기 때문에\n거동이 불편하신 어르신이나 어린아이들을 위해 꼭 해야 한다.\n라는 구매 욕구를 충족 시키는 목적을 두었습니다.",
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
    description: "순수 전기 정통 픽업 '무쏘EV'를 대리점이 아닌 실제 필드 오너의 생생한 목소리로 2만km 장기 누적 실주행 가치와 필수 적재 파츠인 '진텍 캐노피'의 우수한 실사용 만족성을 팩트에 충실히 가감 없이 풀어낸 초밀착 오너 인터뷰입니다.\n\n[제작 의도]\n'전기차의 실제 적재 주행 연비는 어떠한가?', '캐노피 장착 후 소음이나 누수 문제는 정녕 없었는가?' 등 신차 예비 구매자들이 한 치의 의심 없이 알고자 하는 현실적인 오너 체험담을 가식 없는 인터뷰 형식으로 담아냈습니다.\n\n[핵심 비하인드]\n가식 없는 인터뷰를 편집하여 K트레일러 브랜드의 솔직함과 신뢰도에 중점을 두었습니다.",
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
    description: "글로벌 명품 캐리어 툴레(THULE)와의 프리미엄 전략적 기획 하에, 실제 자전거 인플루언서 오너들과 야외 라이딩의 명소에서 우연히 조우하며 전국 대표 6대 성지 코스를 추천받고 신형 '툴레 에포스 캐리어'의 정밀 필드 깜짝 장착 이벤트까지 함께 직조해 낸 다큐 에듀 미니 예능 작입니다.\n\n[제작 의도]\n정형화된 광고가 아닌 자전거 덕후 시청자층의 마음을 열기 위해, 라이더들의 쉼터 성지에서 로드 인터뷰를 따내고 코스 맵 정보와 장비 편의 가치를 결합 기획했습니다.\n\n[핵심 비하인드]\n단순히 인터뷰를 하는게 아니라 자사에서 판매하는 제품과 함께\n공식 행사가 아닌 게릴라 이벤트를 준비해 자전거 라이더들에게 정말 쉬어가는\n시간을 준비해 브랜드를 알리는 목적을 중점으로 생각 했습니다.",
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
    description: "대한민국 픽업의 혁신 '기아 타스만' 차량과 견인장치 장착형 오토 테크 하이엔드 텐트 '툴레 아웃셋'의 영혼의 결합을 이룩하고, 프리미엄 들판 속에서의 실전 감성 차박 만족도와 로드 주행 질감을 기품 어린 비주얼 다큐멘터리 인터뷰로 빚어낸 콘텐츠입니다.\n\n[제작 의도]\n'왜 지붕 위의 루프탑 텐트가 아닌 견인볼 결합형 아웃셋이어야 하는가?'라는 인터뷰와 함께 타스만 주행 후기를 함께 담아 타스만의 오너와 구매 고민중인 분들의 니즈를\n풀어주는 목적을 갖고 제작 하였습니다.\n\n[핵심 비하인드]\n비인기 제품인 아웃셋을 팔기 위해 타스만의 검색량을 이용 하였고\n조회수 보다는 제품을 모르는 소비자들에게 제품을 알리기 위함을\n중점으로 생각 했습니다.",
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
    description: "코로나 팬데믹 시기에 대응하여 비대면 인강을 전송할 수 있는 쌍방향 라이브 인터넷 방송 시스템과 주요 지점 간 생중계 인프라를 설계 및 구축한 프로젝트입니다.\n\n[제작 의도]\n이투스교육에서 근무 할 시 코로나팬데믹 시기가 찾아 왔고, 비대면의 시대에 맞춰\n라이브 시스템을 구축하고 테스트, 송출, 가이드까지 제작하여 진행 하였습니다.\n\n[핵심 비하인드]\n대표적으로 스타 강사 최태성 선생님의 라이브를 담당 하였고, 스튜디오와 야외 현장의 라이브를 함께 송출 하는 등 다양한 송출 방식을 사용해 라이브 시스템을 구축 했습니다.",
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
    achievements: [
      {
        platform: "YouTube 콘텐츠 부문",
        metrics: [
          "운영 1년 만에 유튜브 채널 구독자 2,000명 → 7,200명 증가",
          "최고 조회수 43만 회 (10만 회 이상 콘텐츠 다수 제작)",
          "콘텐츠 기반 고객 문의율 전년 동기 대비 약 48% 증가"
        ],
        link: "https://www.youtube.com/@k_trailer",
        linkName: "@k_trailer 유튜브 바로가기"
      },
      {
        platform: "Instagram 릴스 채널 운영",
        metrics: [
          "독립적인 숏폼 콘텐츠 전략 수립 및 주도적 채널 운영",
          "인스타그램 팔로워 100명대 → 단기간 내 1,600명으로 증가",
          "릴스 최고 조회수 극적 성장 (입사 전 1,000회 미만 → 입사 후 최고 91만 회 달성)",
          "트렌드 분석 및 연출 최적화를 통한 릴스 평균 조회수 지속 성장 견인"
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
      "스튜디오 운영 총괄",
      "촬영 장비 유지보수 체계 구축",
      "라이브 송출 가이드라인 수립",
      "촬영팀 운영 및 외주 인력 관리",
      "대형 프로젝트 촬영 총괄",
      "교육 콘텐츠 제작 프로세스 표준화"
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
      stored.includes("유럽 명품 COCHET 트레일러") ||
      stored.includes("현장 중계, 촬영, 편집") ||
      stored.includes("Sony a7m3, 다중 카메라도 촬영 구도") ||
      stored.includes("Sony a7m3, 고성능 외장 마이크") ||
      stored.includes("Sony FX3, 고해상도 조명 장비") ||
      stored.includes("Sony DSLR, 무선 마이크") ||
      !stored.includes("K트레일러&큐브렉") ||
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
      !stored.includes("최고 조회수 43만") ||
      !stored.includes("PV5 큐브밴 단기 전시 홍보") ||
      !stored.includes("(견생연구소)") ||
      !stored.includes("이투스교육 근무 할 시기") ||
      !stored.includes("촬영팀 6명") ||
      !stored.includes("스타 강사 최태성 선생님") ||
      !stored.includes("학생 6명") ||
      !stored.includes("촬영팀 5명") ||
      !stored.includes("안전사고 리스크를 획기적으로 낮추는 기능성") ||
      !stored.includes("전시 기간 3일만에 10만 조회수") ||
      !stored.includes("대형 유통점이라는 트렌디한 로케이션") ||
      !stored.includes("자사에서 판매하는 튜닝 제품을 홍보") ||
      !stored.includes("자사 사업 확장으로 판매 하는 캐노피+판도라") ||
      !stored.includes("야간에도 안전하게 발밑을 비추는 고급 오토 LED") ||
      !stored.includes("가식 없는 인터뷰를 편집하여 K트레일러") ||
      !stored.includes("게릴라 이벤트를 준비해 자전거 라이더들에게") ||
      !stored.includes("비인기 제품인 아웃셋을 팔기 위해") ||
      !stored.includes("이투스교육에서 근무 할 시 코로나팬데믹") ||
      stored.includes("이투스교육의 차세대") ||
      stored.includes("당시 촬영 기획안을 초과하는") ||
      !stored.includes("Cook史") ||
      !stored.includes("MwlKk7E2ZSs") ||
      !stored.includes("Z2995_gc2VA")
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
        // Force-sync specific content updates to bypass browser local storage caching
        if (["portfolio-shorts-1", "portfolio-shorts-2", "portfolio-shorts-3", "portfolio-shorts-4", "portfolio-shorts-5", "portfolio-shorts-6", "portfolio-interview-1", "portfolio-interview-2", "portfolio-interview-3", "portfolio-live-1", "portfolio-promo-1", "portfolio-promo-2", "portfolio-promo-4", "portfolio-long-1", "portfolio-long-2", "portfolio-long-3", "portfolio-long-4", "portfolio-long-7", "portfolio-long-8", "portfolio-long-9", "portfolio-long-10", "portfolio-long-11", "portfolio-long-12", "portfolio-long-13"].includes(item.id)) {
          if (
            item.title !== defaultItem.title ||
            item.description !== defaultItem.description ||
            item.videoUrl !== defaultItem.videoUrl ||
            item.role !== defaultItem.role
          ) {
            item.title = defaultItem.title;
            item.description = defaultItem.description;
            item.videoUrl = defaultItem.videoUrl;
            item.role = defaultItem.role;
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
      stored.includes("인하우스 영상기획총괄 PD") ||
      stored.includes("영상제작팀 팀장 및 APM") ||
      stored.includes("캠핑 시장이 죽어 가면서") ||
      stored.includes("한계 견력을 테스트하는") ||
      stored.includes("소비자들의 니즈를 풀어주는") ||
      !stored.includes("편집 전담 제작 및 전반적인 브랜드 마케팅 전략 수립") ||
      stored.includes("자사 인스타그램 릴스 최고 조회수") ||
      !stored.includes("독립적인 숏폼 콘텐츠 전략 수립") ||
      !stored.includes("인스타그램 팔로워 100명대") ||
      stored.includes("360% 폭발적 성장") ||
      stored.includes("260% 폭발적 성장") ||
      !stored.includes("2,000명 → 7,200명 증가") ||
      !stored.includes("10만 회 이상 콘텐츠 다수 제작") ||
      !stored.includes("콘텐츠 기반 고객 문의율 전년 동기 대비 약 48% 증가") ||
      stored.includes("42만 회") ||
      !stored.includes("43만 회") ||
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
      !stored.includes("1,600명으로 증가") ||
      !stored.includes("스튜디오 운영 총괄") ||
      !stored.includes("촬영 장비 유지보수 체계 구축") ||
      !stored.includes("라이브 송출 가이드라인 수립") ||
      !stored.includes("촬영팀 운영 및 외주 인력 관리") ||
      !stored.includes("대형 프로젝트 촬영 총괄") ||
      !stored.includes("교육 콘텐츠 제작 프로세스 표준화")
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
      etoosItem.description[1] !== "촬영 장비 유지보수 체계 구축"
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
  heroTitle: "CONTENT PRODUCER",
  heroSubtitle: "",
  heroSlogan: "콘텐츠 제작, 조직 운영, 채널 성장을 통해\n비즈니스 성과를 만들어 온 콘텐츠 리더",
  heroCompetence1: "홍보 · 유튜브 · 쇼츠/릴스 영상 전문",
  heroCompetence2: "기획 · 촬영 · 편집 · 브랜디드 콘텐츠 총괄",
  aboutTagline: "",
  aboutTitle: "안녕하세요.\n브랜드 콘텐츠 프로듀서\n이주원 PD 입니다.",
  aboutDescription: "단순한 영상 제작을 넘어 전략적인 마케팅과 브랜딩을 전개하여,\n브랜드의 신뢰도와 본연의 가치를 극대화하겠습니다.",
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
       parsed.heroSlogan === "콘텐츠 제작, 조직 운영, 채널 성장을 통해 비즈니스 성과를 만들어 온 콘텐츠 리더" ||
       parsed.heroSlogan?.includes("기획부터 촬영") ||
       parsed.heroSlogan?.includes("장기 비즈니스 파트너십") ||
       parsed.heroSlogan?.includes("견고한 신뢰성") ||
       parsed.heroSlogan?.includes("콘텐츠 제작을 넘어") ||
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
    if (parsed && (parsed.heroTagline === "HIGH-END VIDEO PRODUCER" || parsed.heroTitle === "VIDEO MARKETING" || parsed.heroSubtitle === "DIRECTOR")) {
      parsed.heroTagline = "";
      parsed.heroTitle = "CONTENT PRODUCER";
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
