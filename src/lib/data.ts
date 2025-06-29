import {
    Briefcase,
    Building2,
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
    User,
    Wrench,
} from "lucide-react"
import {Category, Certification, NavItem, Project, SkillCategory} from "@/types";

export const navItems: NavItem[] = [
    {id: "home", label: "홈", icon: Home},
    {id: "about", label: "소개", icon: User},
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
        name: "정보처리기능사",
        issuer: "한국산업인력공단",
        date: "2024.12.01",
        icon: Code,
        color: "from-blue-500 to-blue-600",
    },
    {
        name: "SQLD",
        issuer: "한국데이터산업진흥원",
        date: "2024.12.01",
        icon: Database,
        color: "from-green-500 to-green-600",
    },
    {
        name: "운전면허 1종",
        issuer: "경찰청",
        date: "2024.12.01",
        icon: Car,
        color: "from-purple-500 to-purple-600",
    },
]

/* project-outline */
export const categories: Category[] = [
    {id: "all", label: "전체", icon: ThList},
    {id: "mes", label: "MES 솔루션", icon: Wrench},
    {id: "development", label: "개발", icon: Code},
    {id: "construction", label: "구축", icon: Building2},
]

export const projects: Project[] = [
  {
    title: "MES 솔루션 유지보수 및 커스터마이징",
    category: "mes",
    description: "기존 MES 솔루션의 유지보수와 고객사별 요구사항에 맞춘 커스터마이징 업무",
    technologies: ["C#", "WinForms", "MS-SQL", "DevExpress", "Crystal Reports"],
    achievements: [
      "15개 고객사 성공적 구축",
      "10년간 무중단 서비스 운영",
      "고객 맞춤형 기능 구현",
      "업무 프로세스 최적화",
    ],
  },
  {
    title: "MES 모바일 개발",
    category: "development",
    description: "기존 MES 시스템의 모바일 버전 개발로 현장 접근성 향상",
    technologies: ["Vue.js", "JavaScript", "REST API", "Mobile UI"],
    achievements: ["모바일 접근성 확보", "현장 업무 효율성 증대", "실시간 데이터 조회"],
  },
  {
    title: "콜 시스템 화면 개발",
    category: "development",
    description: "기존 콜 시스템에 조회화면 추가 개발",
    technologies: ["Java Spring", "MariaDB", "MyBatis", "JSP"],
    achievements: ["조회 기능 구현", "사용자 편의성 향상", "데이터 시각화"],
  },
  {
    title: "자동차 시트제조업체 MES 구축",
    category: "construction",
    description: "자동차용 시트 제조업체를 위한 전용 MES 시스템 구축 (진행중)",
    technologies: ["C#", "WinForms", "MS-SQL", "DevExpress"],
    achievements: ["제조업 특화 시스템 설계", "영업시스템 개발 담당", "고객 요구사항 반영"],
  },
]