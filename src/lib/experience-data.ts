/* 시스템 기능 설명 인터페이스 */
export interface SystemFeature {
    title: string
    description: string
    images: {
        src: string
        alt: string
        description: string
    }[]
}

/* 시스템 인터페이스  */
export interface TechSystem {
    id: string
    title: string
    description: string
    icon: string
    color: string
    features: SystemFeature[]
}

export interface DetailedExperience {
    period: string
    company: string
    position: string
    description: string
    achievements: string[]
    technologies: string[]
    systems?: TechSystem[]
}

export const detailedExperiences: DetailedExperience[] = [
    {
        period: "2025.07 ~ 진행중",
        company: "개인 학습 (MES-WEB)",
        position: "Web 개발",
        description: "기존 MES 운영 경험을 바탕으로 최신 웹 기술을 학습하며 개발 중인 프로젝트입니다.",
        achievements: [
            "목적 : 최신 웹 기술 스택 학습 및 적용",
            "특징 : 반응형 디자인, 사용자 친화적 UI/UX",
            "지속적 개발 및 기능 확장 중",
        ],
        technologies: [
            "Next.js",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Ag-Grid",
        ],
        systems: [],
    },

    {
        period: "2014.08 ~ 진행중",
        company: "(주)트러시스시스템",
        position: "MES 솔루션 개발자",
        description: "기존 시스템 유지보수 및 신규 기능 개발, 고객사 맞춤 커스터마이징 담당",
        achievements: [
            "기존 MES 솔루션 기반 신규 고객사 커스터마이징 및 구축",
            "영업/사양/자재/재고/물류 모듈 담당",
            "고객 맞춤형 솔루션 개발",
            "고객사 피드백에 따른 지속적 유지보수",
        ],
        technologies: [
            "C#",
            ".NET Framework",
            "WinForms",
            "DevExpress",
            "MS-SQL Server",
            "Windows Server",
        ],
        systems: [
            {
                id: "mobile",
                title: "모바일",
                description: "기존 MES 시스템의 모바일 버전 개발",
                icon: "📱",
                color: "from-blue-500 to-blue-700",
                features: [
                    {
                        title: "메인화면",
                        description:
                            "모바일 메인 화면입니다.",
                        images: [
                            {
                                src: "/img/MesMob/모바일_메인화면.png?height=300&width=500",
                                alt: "메인 화면",
                                description: "메인 화면 입니다.",
                            },
                        ],
                    },
                    {
                        title: "제품재고조회",
                        description:
                            "실시간 제품재고를 조회하는 화면입니다.",
                        images: [
                            {
                                src: "/img/MesMob/모바일_제품재고조회_1.png?height=300&width=500",
                                alt: "제품재고조회 화면",
                                description: "고객사별 제품재고를 조회합니다.",
                            },
                            {
                                src: "/img/MesMob/모바일_제품재고조회_2.png?height=300&width=500",
                                alt: "제품재고 상세조회 화면",
                                description: "선택된 고객사의 재고를 제품별로 상세 조회합니다.",
                            },
                        ],
                    },
                    {
                        title: "제품출고조회",
                        description:
                            "실시간 출고이력을 조회합니다.",
                        images: [
                            {
                                src: "/img/MesMob/모바일_제품출고현황.png?height=300&width=500",
                                alt: "제품출고 화면",
                                description: "기간별 출고이력을 상세 조회합니다.",
                            },
                        ],
                    },
                    {
                        title: "수주현황",
                        description: "기간별 수주를 실시간 조회하는 화면입니다.",
                        images: [
                            {
                                src: "/img/MesMob/모바일_기간별수주조회.png?height=300&width=500",
                                alt: "수주 조회 화면",
                                description: "기간별 수주를 조회하며 전체 합계를 조회합니다.",
                            },
                        ],
                    },
                ],
            },
            {
                id: "sales",
                title: "영업시스템",
                description: "고객 관리부터 수주, 매출까지 영업 전 과정을 통합 관리하는 시스템",
                icon: "💼",
                color: "from-green-500 to-green-700",
                features: [
                    {
                        title: "제품생성",
                        description:
                            "신규 제품 등록 및 제품 정보 관리 시스템으로, 제품 코드, 제품정보, 단가 등을 체계적으로 관리합니다.",
                        images: [
                            {
                                src: "/img/Mes/MES_제품생성관리.png?height=300&width=500",
                                alt: "제품 등록 화면",
                                description: "제품코드, 제품명, 제품정보, 단가 등 기본 정보를 입력하여 신규 제품을 생성하며 기존 제품에 대해서 REV생성 또는 수정등록 합니다.",
                            },
                        ],
                    },
                    {
                        title: "수주등록",
                        description: "고객 주문을 접수하고 관리하는 화면입니다.",
                        images: [
                            {
                                src: "/img/Mes/MES_수주등록.png?height=300&width=500",
                                alt: "수주 등록 화면",
                                description: "제품을 추가 하여 수주 정보를 입력 후 저장 하여 수주를 생성 합니다.",
                            },
                        ],
                    },
                ],
            },
            {
                id: "specification",
                title: "사양시스템",
                description: "제품 사양 정의부터 BOM 관리까지 제품 설계 정보를 체계적으로 관리하는 시스템",
                icon: "📋",
                color: "from-purple-500 to-purple-700",
                features: [
                    {
                        title: "사양등록",
                        description: "제품별 상세 사양을 등록하고 관리하는 시스템으로, 자재구성, 공정라우팅, 공정별 사양을 관리합니다.",
                        images: [
                            {
                                src: "/img/Mes/MES_사양등록.png?height=300&width=500",
                                alt: "사양 기본정보 입력",
                                description: "사양부서에서 제품에 대한 제품정보, 사양정보, 자재구성, 공정라우팅, 공정별사양을 등록 합니다. 등록된 자재구성으로 BOM을 생성합니다.",
                            },
                        ],
                    },
                ],
            },
            {
                id: "material",
                title: "자재시스템",
                description: "자재 구매부터 사용까지 전체 자재 흐름을 실시간으로 관리하는 통합 자재 관리 시스템",
                icon: "📦",
                color: "from-orange-500 to-orange-700",
                features: [
                    {
                        title: "자재등록",
                        description: "신규 자재 정보를 등록하고 자재 마스터 데이터를 관리하는 시스템입니다.",
                        images: [
                            {
                                src: "/img/Mes/MES_자재생성.png?height=300&width=500",
                                alt: "자재 등록 화면",
                                description: "자재를 생성 후 발주 고객사 추가, 단가를 추가 합니다.",
                            },
                        ],
                    },
                    {
                        title: "자재발주",
                        description: "발주를 등록 하며 발주서를 생성하는 시스템입니다.",
                        images: [
                            {
                                src: "/img/Mes/MES_자재발주.png?height=300&width=500",
                                alt: "자재 발주 화면",
                                description: "고객사별 발주를 생성하며 발주서를 생성합니다.",
                            },
                        ],
                    },
                    {
                        title: "자재입고",
                        description: "발주한 자재의 입고 처리와 품질 검사 결과를 관리하는 시스템입니다.",
                        images: [
                            {
                                src: "/img/Mes/MES_자재입고.png?height=300&width=500",
                                alt: "자재 입고 등록",
                                description: "발주 건에 대해서 입고 수량, 입고일 등을 입력하고 재고에 반영합니다.",
                            },
                        ],
                    },
                    {
                        title: "창고이동",
                        description: "원자재창고 자재를 현장창고로 이동 합니다.",
                        images: [
                            {
                                src: "/img/Mes/MES_자재이동.png?height=300&width=500",
                                alt: "자재 출고 화면",
                                description: "자재 출고량을 입력하고 재고를 창고로 이동 합니다.",
                            },
                        ],
                    },
                ],
            },
            {
                id: "logistics",
                title: "재고/물류시스템",
                description: "완제품의 출고부터 재고 관리까지 물류 전반을 효율적으로 관리하는 시스템",
                icon: "🚛",
                color: "from-yellow-500 to-yellow-700",
                features: [
                    {
                        title: "제품입고등록",
                        description: "생산 완료된 제품의 입고를 관리합니다.",
                        images: [
                            {
                                src: "/img/Mes/MES_제품입고.png?height=300&width=500",
                                alt: "제품 입고 화면",
                                description: "생산 완료된 제품의 입고를 입력합니다.",
                            },
                        ],
                    },
                    {
                        title: "출고등록",
                        description: "완제품 출고 처리를 통합적으로 수행하는 시스템입니다.",
                        images: [
                            {
                                src: "/img/Mes/MES_제품출고.png?height=300&width=500",
                                alt: "출고 등록 화면",
                                description: "수주 정보를 기반으로 출고할 제품과 수량을 입력하고 출고 처리합니다.",
                            },
                        ],
                    },
                ],
            },
        ],
    },

    {
        period: "2024.11 ~ 2025.01",
        company: "(주)오플러스",
        position: "Web 개발",
        description: "CRM (Call System) 추가 개발",
        achievements: [
            "CRM 조회 화면 추가 개발 담당",
            "고객별 통화 이력 조회 개발",
            "조회 화면을 기존 Html 테이블에서 Ag-Grid 기반 그리드로 전면 변경 개발",
        ],
        technologies: [
            "Java Spring",
            "MariaDB",
            "Ag-Grid",
        ],
        systems: [],
    },

    // 나중에 다른 경력 추가 가능
    // {
    //   period: "2024 - 현재",
    //   company: "새로운 회사",
    //   position: "새로운 포지션",
    //   description: "새로운 업무 설명",
    //   achievements: ["새로운 성과들"],
    //   technologies: ["새로운 기술들"],
    //   systems: [
    //     // 새로운 시스템들
    //   ]
    // }
]
