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
        period: "2014.08 ~ 진행중",
        company: "(주)트러시스시스템",
        position: "MES 솔루션 개발자",
        description: "MES 솔루션 유지보수, 커스터마이징 및 확장 개발을 담당",
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
                                src: "/img/모바일_메인화면.png?height=300&width=500",
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
                                src: "/img/모바일_제품재고조회_1.png?height=300&width=500",
                                alt: "제품재고조회 화면",
                                description: "고객사별 제품재고를 조회합니다.",
                            },
                            {
                                src: "/img/모바일_제품재고조회_2.png?height=300&width=500",
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
                                src: "/img/모바일_제품출고현황.png?height=300&width=500",
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
                                src: "/img/모바일_기간별수주조회.png?height=300&width=500",
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
                            "신규 제품 등록 및 제품 정보 관리 시스템으로, 제품 코드, 제품사양, 가격 등을 체계적으로 관리합니다.",
                        images: [
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "제품 등록 화면",
                                description: "제품 기본정보 입력 화면 - 제품코드, 제품명, 제품사양, 제품단가 등 기본 정보를 입력합니다.",
                            },
                        ],
                    },
                    {
                        title: "수주등록",
                        description: "고객 주문을 접수하고 관리하는 화면입니다.",
                        images: [
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "수주 등록 화면",
                                description: "수주 기본정보 입력 화면 - 고객정보, 제품, 수량, 납기일 등을 입력합니다.",
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
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "사양 기본정보 입력",
                                description: "사양 기본정보 입력 화면 - 사양정보를 입력합니다.",
                            },
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "사양 상세정보 관리",
                                description: "사양 상세정보 관리 화면 - 자재구성, 공정라우팅, 공정별사양 등을 상세히 관리합니다.",
                            },
                        ],
                    },
                    {
                        title: "BOM구성",
                        description: "제품 구성 부품의 소요량과 구조를 정의하는 BOM을 생성하고 관리합니다.",
                        images: [
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "BOM 조회",
                                description: "제품별 구성 부품의 소요량을 관리합니다.",
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
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "자재 등록 화면",
                                description: "자재 기본정보 등록 화면 - 자재코드, 자재명, 규격, 단위, 공급업체 정보 등을 입력합니다.",
                            },
                        ],
                    },
                    {
                        title: "자재발주",
                        description: "발주를 등록 하며 발주서를 생성하는 시스템입니다.",
                        images: [
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "자재 발주 화면",
                                description: "자재 발주 등록 화면 - 발주 수량, 납기일, 공급업체 선택 및 발주서를 생성합니다.",
                            },
                        ],
                    },
                    {
                        title: "자재입고",
                        description: "발주한 자재의 입고 처리와 품질 검사 결과를 관리하는 시스템입니다.",
                        images: [
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "자재 입고 등록",
                                description: "자재 입고 등록 화면 - 입고 수량, 입고일 등을 입력하고 재고에 반영합니다.",
                            },
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "입고 검사 관리",
                                description: "입고 검사 관리 화면 - 품질 검사 항목과 결과를 기록하고 합격/불합격을 판정합니다.",
                            },
                        ],
                    },
                    {
                        title: "창고이동",
                        description: "원자재창고 자재를 현장창고로 이동 합니다.",
                        images: [
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "자재 출고 화면",
                                description: "자재 출고 처리 화면 - 자재 출고량을 입력하고 재고를 창고로 이동 합니다.",
                            },
                        ],
                    },
                    {
                        title: "자재사용",
                        description: "생산 현장에서의 실제 자재 사용량을 기록하고 관리하는 시스템입니다.",
                        images: [
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "자재 사용 등록",
                                description: "자재 사용 등록 화면 - 작업 지시별 실제 자재 사용량을 입력하고 추적합니다.",
                            },
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "자재 사용 현황",
                                description: "자재 사용 현황 조회 화면 - 기간별, 제품별 자재 사용 현황을 분석합니다.",
                            },
                        ],
                    },
                    {
                        title: "자재수불",
                        description: "자재의 입출고 내역을 상세히 추적하고 재고 변동 이력을 관리합니다.",
                        images: [
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "자재 수불 현황",
                                description: "자재 수불 현황 조회 화면 - 자재별 입출고 내역과 재고 변동 추이를 상세히 확인합니다.",
                            },
                        ],
                    },
                ],
            },
            {
                id: "logistics",
                title: "물류시스템",
                description: "완제품의 출고부터 재고 관리까지 물류 전반을 효율적으로 관리하는 시스템",
                icon: "🚛",
                color: "from-yellow-500 to-yellow-700",
                features: [
                    {
                        title: "출고등록",
                        description: "완제품 출고 처리를 통합적으로 수행하는 시스템입니다.",
                        images: [
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "출고 등록 화면",
                                description: "출고 등록 화면 - 수주 정보를 기반으로 출고할 제품과 수량을 입력하고 출고 처리합니다.",
                            },
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "출고 현황 관리",
                                description: "출고 현황 관리 화면 - 출고 예정, 출고 완료 상태를 실시간으로 모니터링합니다.",
                            },
                        ],
                    },
                    {
                        title: "제품입고등록",
                        description: "생산 완료된 제품의 입고를 관리합니다.",
                        images: [
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "제품 입고 화면",
                                description: "제품 입고 등록 화면 - 생산 완료된 제품의 입고를 입력합니다.",
                            },
                        ],
                    },
                    {
                        title: "제품수불",
                        description: "완제품의 입출고 내역과 재고 현황을 실시간으로 추적 관리합니다.",
                        images: [
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "제품 수불 현황",
                                description: "제품 수불 현황 화면 - 제품별 입출고 내역과 현재 재고량을 실시간으로 확인합니다.",
                            },
                        ],
                    },
                ],
            },
        ],
    },

    {
        period: "2024.11 ~ 2025.01",
        company: "오플러스",
        position: "Web 개발",
        description: "Call System 추가 개발",
        achievements: [
            "Call System 조회 화면 추가 개발 담당",
        ],
        technologies: [
            "Spring",
            "JSP",
            "MyBatis",
            "Ag-Grid",
            "MariaDB",
        ],
        systems: [
            {
                id: "call",
                title: "콜시스템",
                description: "고객 관리 시스템",
                icon: "💼",
                color: "from-blue-500 to-blue-700",
                features: [
                    {
                        title: "현황1",
                        description:
                            "현황을 조회합니다.",
                        images: [
                            {
                                src: "/img/imageAdd.png?height=300&width=500",
                                alt: "조회 화면",
                                description: "을 조회합니다.",
                            }
                        ],
                    },

                ],
            },

        ],
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
