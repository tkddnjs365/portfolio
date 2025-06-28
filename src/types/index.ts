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