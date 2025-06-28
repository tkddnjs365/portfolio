import {Briefcase, Code, Coffee, Database, Folder, Globe, Home, Mail, Palette, Server, User, Car} from "lucide-react"
import {Certification, NavItem, SkillCategory} from "@/types";

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