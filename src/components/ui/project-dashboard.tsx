"use client"

import {BarChart3,} from "lucide-react"

interface ProjectDashboardProps {
    darkMode: boolean
    isActive: boolean
    onSelectAction: () => void
}

export const ProjectDashboard = ({darkMode, isActive, onSelectAction}: ProjectDashboardProps) => {
    return (
        <button
            onClick={onSelectAction}
            className=
                {`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2
                ${isActive ? "bg-blue-500 text-white" :
                    darkMode ? "text-white hover:bg-white hover:bg-opacity-10" : "text-gray-700 hover:bg-gray-100"}`
                }>
              <BarChart3 className="w-4 h-4" />
              통계 대시보드
        </button>
    )
}