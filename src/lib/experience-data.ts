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
        period: "2014 - 2024",
        company: "(주)트러시스시스템",
        position: "MES 솔루션 개발자",
        description: "MES 솔루션 유지보수, 커스터마이징 및 확장 개발을 담당하며 제조업체들의 디지털 전환을 지원",
        achievements: [
            "다중 고객사 MES 솔루션 안정적 운영",
            "영업/사양/자재/재고/물류 모듈 담당",
            "제조 장비 연동 시스템 구축",
            "고객 맞춤형 솔루션 개발",
        ],
        technologies: [
            "C#",
            ".NET Framework",
            "WinForms",
            "DevExpress",
            "MS-SQL Server",
        ],
        systems: [
            {
                id: "sales",
                title: "영업시스템",
                description: "고객 관리부터 수주, 매출까지 영업 전 과정을 통합 관리하는 시스템",
                icon: "💼",
                color: "from-blue-500 to-blue-700",
                features: [
                    {
                        title: "제품생성",
                        description:
                            "신규 제품 등록 및 제품 정보 관리 시스템으로, 제품 코드, 사양, 가격 등을 체계적으로 관리합니다.",
                        images: [
                            {
                                src: "/next.svg?height=300&width=500",
                                alt: "제품 등록 화면",
                                description: "제품 기본정보 입력 화면 - 제품코드, 제품명, 규격, 단위 등 기본 정보를 입력합니다.",
                            },
                            {
                                src: "/vercel.svg?height=300&width=500",
                                alt: "제품 상세정보 화면",
                                description: "제품 상세정보 관리 화면 - 제품 이미지, 상세 사양, 가격 정보 등을 관리합니다.",
                            },
                        ],
                    },
                    {
                        title: "수주등록",
                        description: "고객 주문을 접수하고 관리하는 시스템으로, 납기 관리와 진행 상황을 실시간으로 추적합니다.",
                        images: [
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "수주 등록 화면",
                                description: "수주 기본정보 입력 화면 - 고객정보, 제품, 수량, 납기일 등을 입력합니다.",
                            },
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "수주 현황 조회",
                                description: "수주 현황 조회 화면 - 진행 중인 수주의 상태와 납기 현황을 한눈에 확인합니다.",
                            },
                        ],
                    },
                    {
                        title: "매출마감등록",
                        description: "월별/분기별 매출 데이터를 집계하고 분석하여 경영진에게 정확한 매출 현황을 제공합니다.",
                        images: [
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "매출 마감 화면",
                                description: "매출 마감 처리 화면 - 기간별 매출 집계 및 마감 처리를 수행합니다.",
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
                color: "from-green-500 to-green-700",
                features: [
                    {
                        title: "사양등록",
                        description: "제품별 상세 사양을 등록하고 관리하는 시스템으로, 기술 문서와 도면 정보를 통합 관리합니다.",
                        images: [
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "사양 기본정보 입력",
                                description: "사양 기본정보 입력 화면 - 사양코드, 사양명, 버전 정보 등을 입력합니다.",
                            },
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "사양 상세정보 관리",
                                description: "사양 상세정보 관리 화면 - 기술 사양, 품질 기준, 검사 항목 등을 상세히 관리합니다.",
                            },
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "사양 도면 관리",
                                description: "사양 도면 관리 화면 - CAD 도면 파일과 기술 문서를 첨부하고 버전 관리합니다.",
                            },
                        ],
                    },
                    {
                        title: "BOM생성",
                        description: "제품 구성 부품의 소요량과 구조를 정의하는 BOM(Bill of Materials)을 생성하고 관리합니다.",
                        images: [
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "BOM 구조 관리",
                                description: "BOM 구조 관리 화면 - 제품의 계층 구조와 부품 소요량을 트리 형태로 관리합니다.",
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
                color: "from-purple-500 to-purple-700",
                features: [
                    {
                        title: "자재등록",
                        description: "신규 자재 정보를 등록하고 자재 마스터 데이터를 관리하는 시스템입니다.",
                        images: [
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "자재 등록 화면",
                                description: "자재 기본정보 등록 화면 - 자재코드, 자재명, 규격, 단위, 공급업체 정보 등을 입력합니다.",
                            },
                        ],
                    },
                    {
                        title: "자재발주",
                        description: "자재 소요량 계산부터 발주서 생성까지 자재 구매 프로세스를 자동화합니다.",
                        images: [
                            {
                                src: "/placeholder.svg?height=300&width=500",
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
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "자재 입고 등록",
                                description: "자재 입고 등록 화면 - 입고 수량, 입고일, 검사 결과 등을 입력하고 재고에 반영합니다.",
                            },
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "입고 검사 관리",
                                description: "입고 검사 관리 화면 - 품질 검사 항목과 결과를 기록하고 합격/불합격을 판정합니다.",
                            },
                        ],
                    },
                    {
                        title: "자재출고",
                        description: "생산 계획에 따른 자재 출고와 재고 차감을 실시간으로 처리합니다.",
                        images: [
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "자재 출고 화면",
                                description: "자재 출고 처리 화면 - 생산 지시에 따른 자재 출고량을 입력하고 재고를 차감합니다.",
                            },
                        ],
                    },
                    {
                        title: "자재사용",
                        description: "생산 현장에서의 실제 자재 사용량을 기록하고 관리하는 시스템입니다.",
                        images: [
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "자재 사용 등록",
                                description: "자재 사용 등록 화면 - 작업 지시별 실제 자재 사용량을 입력하고 추적합니다.",
                            },
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "자재 사용 현황",
                                description: "자재 사용 현황 조회 화면 - 기간별, 제품별 자재 사용 현황을 분석합니다.",
                            },
                        ],
                    },
                    {
                        title: "자재마감",
                        description: "월별 자재 재고 실사와 장부 마감을 처리하는 시스템입니다.",
                        images: [
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "자재 마감 화면",
                                description: "자재 마감 처리 화면 - 월말 재고 실사 결과와 장부 재고를 대사하고 마감 처리합니다.",
                            },
                        ],
                    },
                    {
                        title: "자재수불",
                        description: "자재의 입출고 내역을 상세히 추적하고 재고 변동 이력을 관리합니다.",
                        images: [
                            {
                                src: "/placeholder.svg?height=300&width=500",
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
                color: "from-orange-500 to-orange-700",
                features: [
                    {
                        title: "출고등록",
                        description: "완제품 출고 처리와 배송 관리를 통합적으로 수행하는 시스템입니다.",
                        images: [
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "출고 등록 화면",
                                description: "출고 등록 화면 - 수주 정보를 기반으로 출고할 제품과 수량을 입력하고 출고 처리합니다.",
                            },
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "출고 현황 관리",
                                description: "출고 현황 관리 화면 - 출고 예정, 출고 완료 상태를 실시간으로 모니터링합니다.",
                            },
                        ],
                    },
                    {
                        title: "제품입고등록",
                        description: "생산 완료된 제품의 입고 처리와 품질 검사를 관리합니다.",
                        images: [
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "제품 입고 화면",
                                description: "제품 입고 등록 화면 - 생산 완료된 제품의 입고 수량과 품질 검사 결과를 입력합니다.",
                            },
                        ],
                    },
                    {
                        title: "제품수불",
                        description: "완제품의 입출고 내역과 재고 현황을 실시간으로 추적 관리합니다.",
                        images: [
                            {
                                src: "/placeholder.svg?height=300&width=500",
                                alt: "제품 수불 현황",
                                description: "제품 수불 현황 화면 - 제품별 입출고 내역과 현재 재고량을 실시간으로 확인합니다.",
                            },
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
