import {Briefcase, Code, Folder, Home, Mail, User,} from "lucide-react"
import {NavItem} from "@/types";

export const navItems: NavItem[] = [
    {id: "home", label: "홈", icon: Home},
    {id: "about", label: "소개", icon: User},
    {id: "experience", label: "경력 & 시스템", icon: Briefcase},
    {id: "skills", label: "기술", icon: Code},
    {id: "projects", label: "프로젝트", icon: Folder},
    {id: "contact", label: "연락", icon: Mail},
]
