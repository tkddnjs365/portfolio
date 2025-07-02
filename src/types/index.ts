import { ElementType } from "react"

export interface NavItem {
  id: string
  label: string
  icon: ElementType
}

/* skills-section */
export interface Skill {
  name: string
  icon: ElementType
}
export interface SkillCategory {
  title: string
  skills: Skill[]
}
export interface Certification {
  name: string
  issuer: string
  date: string
  icon: ElementType
  color: string
}

/* project-outline */
export interface Category {
  id: string
  label: string
  icon: ElementType
}
export interface Project {
  title: string
  category: string
  description: string
  technologies: string[]
  achievements: string[]
}

/* project-detail-timeline */
export interface ClientProject {
  period: string
  client: string
  project: string
  scope: string
  description: string
  status: "완료" | "진행중"
  type: "MES" | "CRM"
}

/* project-dashboard */
export interface ProjectStats {
  totalProjects: number
  completedProjects: number
  ongoingProjects: number
  mesProjects: number
  callSystemProjects: number
  totalDuration: string
  averageProjectDuration: string
  clientSatisfaction: string
  systemTypes: Record<string, number>
  yearlyStats: Record<string, number>
}

/* contact-section */
export interface ContactFormData {
  name: string
  email: string
  message: string
}