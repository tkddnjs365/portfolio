import {
    Briefcase,
    Car,
    Code,
    Coffee,
    Database,
    Folder,
    Globe,
    Home,
    ListIcon as ThList,
    Mail,
    Palette,
    Server,
    Wrench,
} from "lucide-react"
import {Category, Certification, ClientProject, NavItem, Project, ProjectStats, SkillCategory} from "@/types";

export const navItems: NavItem[] = [
    {id: "home", label: "홈", icon: Home},
    {id: "experience", label: "경력 & 시스템", icon: Briefcase},
    {id: "skills", label: "기술", icon: Code},
    {id: "projects", label: "프로젝트", icon: Folder},
    {id: "contact", label: "연락", icon: Mail},
]

/* skills-section */
export const skillCategories: SkillCategory[] = [
    {
        title: "주요 기술",
        skills: [
            {name: "C# (WinForms)", icon: Code},
            {name: "DevExpress", icon: Palette},
            {name: "Java Spring", icon: Coffee},
            {name: "MS-SQL", icon: Database},
            {name: "Windows Server IIS", icon: Server},
        ],
    },
    {
        title: "학습 중인 기술",
        skills: [
            {name: "React", icon: Code},
            {name: "Next.js", icon: Globe},
            {name: "JavaScript", icon: Code},
            {name: "TypeScript", icon: Code},
            {name: "Vue.js", icon: Code},
            {name: "MariaDB", icon: Database},
        ],
    },
]

export const certifications: Certification[] = [
    {
        name: "운전면허 1종",
        issuer: "경찰청",
        date: "2015.05",
        icon: Car,
        color: "from-purple-500 to-purple-600",
    },
    {
        name: "정보처리기능사",
        issuer: "한국산업인력공단",
        date: "2016.03",
        icon: Code,
        color: "from-blue-500 to-blue-600",
    },
    {
        name: "SQLD",
        issuer: "한국데이터산업진흥원",
        date: "2022.06",
        icon: Database,
        color: "from-green-500 to-green-600",
    },
]

/* project-outline */
export const categories: Category[] = [
    {id: "all", label: "전체", icon: ThList},
    {id: "mes", label: "MES 솔루션", icon: Wrench},
    {id: "development", label: "개발", icon: Code},
]

export const projects: Project[] = [
    {
        title: "MES 솔루션 유지보수 및 커스터마이징",
        category: "mes",
        description: "기존 MES 솔루션의 유지보수와 고객사별 요구사항에 맞춘 커스터마이징 업무",
        technologies: ["C#", "WinForms", "MS-SQL", "WebService", "DevExpress", "ActiveReports", "IIS"],
        achievements: [
            "10개이상 고객사 성공적 구축",
            "10년간 무중단 서비스 운영",
            "고객 맞춤형 기능 구현",
            "업무 프로세스 최적화",
        ],
    },
    {
        title: "MES 모바일 개발",
        category: "mes",
        description: "기존 MES 시스템의 모바일 버전 개발로 현장 접근성 향상",
        technologies: ["Vue.js", "MS-SQL", "REST API", "C#"],
        achievements: ["모바일 접근성 확보", "현장 업무 효율성 증대", "실시간 데이터 조회"],
    },
    {
        title: "CRM 시스템 화면 개발",
        category: "development",
        description: "기존 CRM 시스템에 조회화면 추가 개발",
        technologies: ["Java Spring", "MariaDB", "Ag-Grid"],
        achievements: ["조회 기능 구현", "사용자 편의성 향상", "데이터 시각화"],
    },
]

/* project-detail-timeline */
export const clientProjects: ClientProject[] = [
    {
        period: "2015.03 ~ 2015.09",
        client: "KH엘텍(주)",
        project: "스마트공장 지원사업",
        scope: "영업시스템, 커스터마이징",
        description: "고객사 MES 솔루션 구축 프로젝트 및 고객 프로세스에 맞춰 커스터마이징하여 적용",
        status: "완료",
        type: "MES",
    },
    {
        period: "2015.08 ~ 2016.02",
        client: "월성전자",
        project: "스마트공장 지원사업",
        scope: "영업시스템, 커스터마이징",
        description: "고객사 MES 솔루션 구축 프로젝트 및 고객 프로세스에 맞춰 커스터마이징하여 적용",
        status: "완료",
        type: "MES",
    },
    {
        period: "2016.04 ~ 2017.01",
        client: "기주산업(주)",
        project: "스마트공장 지원사업",
        scope: "영업시스템, 커스터마이징",
        description: "고객사 MES 솔루션 구축 프로젝트 및 고객 프로세스에 맞춰 커스터마이징하여 적용",
        status: "완료",
        type: "MES",
    },
    {
        period: "2016.08 ~ 2017.02",
        client: "(주)파인일렉컴",
        project: "스마트공장 지원사업",
        scope: "영업시스템, 사양시스템, 커스터마이징",
        description: "고객사 MES 솔루션 구축 프로젝트 및 고객 프로세스에 맞춰 커스터마이징하여 적용",
        status: "완료",
        type: "MES",
    },
    {
        period: "2017.11 ~ 2018.11",
        client: "월성전자",
        project: "스마트공장 지원사업 / MES 고도화",
        scope: "초중종물 시스템 개발",
        description: "기존 고객사의 시스템 고도화 프로젝트로 초중종물 관리 시스템 개발",
        status: "완료",
        type: "MES",
    },
    {
        period: "2017.12 ~ 2018.11",
        client: "하나써키트(주)",
        project: "스마트공장 지원사업",
        scope: "영업시스템, 사양시스템, 커스터마이징",
        description: "고객사 MES 솔루션 구축 프로젝트 및 고객 프로세스에 맞춰 커스터마이징하여 적용",
        status: "완료",
        type: "MES",
    },
    {
        period: "2019.05 ~ 2019.10",
        client: "아름일렉트로닉스(주)",
        project: "스마트공장 지원사업",
        scope: "영업시스템, 사양시스템, 커스터마이징",
        description: "고객사 MES 솔루션 구축 프로젝트 및 고객 프로세스에 맞춰 커스터마이징하여 적용",
        status: "완료",
        type: "MES",
    },
    {
        period: "2020.02 ~ 2020.08",
        client: "이레전자(주)",
        project: "스마트공장 지원사업",
        scope: "영업시스템, 사양시스템, 자재시스템, 커스터마이징",
        description: "고객사 MES 솔루션 구축 프로젝트 및 고객 프로세스에 맞춰 커스터마이징하여 적용",
        status: "완료",
        type: "MES",
    },
    {
        period: "2020.10 ~ 2021.04",
        client: "(주)해윤이노베이션",
        project: "스마트공장 지원사업",
        scope: "영업시스템, 사양시스템, 자재시스템, 커스터마이징",
        description: "고객사 MES 솔루션 구축 프로젝트 및 고객 프로세스에 맞춰 커스터마이징하여 적용",
        status: "완료",
        type: "MES",
    },
    {
        period: "2021.09 ~ 2022.04",
        client: "(주)지에스일렉트로닉스",
        project: "스마트공장 지원사업",
        scope: "영업시스템, 사양시스템, 자재시스템, 커스터마이징",
        description: "고객사 MES 솔루션 구축 프로젝트 및 고객 프로세스에 맞춰 커스터마이징하여 적용",
        status: "완료",
        type: "MES",
    },
    {
        period: "2022.03 ~ 2022.10",
        client: "CSY TECH",
        project: "스마트공장 지원사업",
        scope: "영업시스템, 사양시스템, 자재시스템, 커스터마이징",
        description: "고객사 MES 솔루션 구축 프로젝트 및 고객 프로세스에 맞춰 커스터마이징하여 적용",
        status: "완료",
        type: "MES",
    },
    {
        period: "2022.10 ~ 2023.05",
        client: "내부 프로젝트",
        project: "MES 모바일 개발",
        scope: "Vue.js 기반 모바일 시스템 개발",
        description: "기존 MES 시스템의 모바일 버전 개발로 현장 접근성 향상",
        status: "완료",
        type: "MES",
    },
    {
        period: "2023.06 ~ 2024.01",
        client: "(주)멀티텍",
        project: "스마트공장 지원사업",
        scope: "영업시스템, 사양시스템, 자재시스템, 물류시스템, 커스터마이징",
        description: "고객사 MES 솔루션 구축 프로젝트 및 고객 프로세스에 맞춰 커스터마이징하여 적용",
        status: "완료",
        type: "MES",
    },
    {
        period: "2023.10 ~ 2024.06",
        client: "(주)이노트로",
        project: "스마트공장 지원사업",
        scope: "영업시스템, 사양시스템, 자재시스템, 물류시스템, 커스터마이징",
        description: "고객사 MES 솔루션 구축 프로젝트 및 고객 프로세스에 맞춰 커스터마이징하여 적용",
        status: "완료",
        type: "MES",
    },
    {
        period: "2023.11 ~ 2024.06",
        client: "YST",
        project: "자동차용 시트제조업체 MES 구축",
        scope: "영업시스템 개발",
        description: "자동차용 시트 제조업체를 위한 전용 MES 시스템 구축 프로젝트",
        status: "완료",
        type: "MES",
    },
    {
        period: "2024.10 ~ 2025.05",
        client: "호서텔넷",
        project: "스마트공장 지원사업",
        scope: "영업시스템, 사양시스템, 자재시스템, 물류시스템, 커스터마이징",
        description: "고객사 MES 솔루션 구축 프로젝트 및 고객 프로세스에 맞춰 커스터마이징하여 적용",
        status: "완료",
        type: "MES",
    },
    {
        period: "2025.01 ~ 2025.03",
        client: "(주)오플러스",
        project: "CRM 시스템 화면 개발",
        scope: "조회화면 개발",
        description: "기존 CRM 시스템에 조회화면 추가 개발",
        status: "완료",
        type: "CRM",
    },
]

/* project-dashboard */
export const projectStats: ProjectStats = {
    totalProjects: clientProjects.length,
    completedProjects: clientProjects.filter((p) => p.status === "완료").length,
    ongoingProjects: clientProjects.filter((p) => p.status === "진행중").length,
    mesProjects: clientProjects.filter((p) => p.type === "MES").length,
    callSystemProjects: clientProjects.filter((p) => p.type === "CRM").length,
    totalDuration: "10년",
    averageProjectDuration: "7개월",
    clientSatisfaction: "100%",
    systemTypes: {
        "영업시스템": clientProjects.filter((p) => p.scope.includes("영업시스템")).length,
        "사양시스템": clientProjects.filter((p) => p.scope.includes("사양시스템")).length,
        "자재시스템": clientProjects.filter((p) => p.scope.includes("자재시스템")).length,
        "물류시스템": clientProjects.filter((p) => p.scope.includes("물류시스템")).length,
    },
    yearlyStats: clientProjects.reduce(
        (acc, project) => {
            const year = project.period.split(".")[0]
            acc[year] = (acc[year] || 0) + 1
            return acc
        },
        {} as Record<string, number>,
    ),
}
