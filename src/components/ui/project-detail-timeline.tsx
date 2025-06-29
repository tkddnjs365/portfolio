"use client"

import {Calendar,} from "lucide-react"

interface ProjectDetailTimelineProps {
    darkMode: boolean
    isActive: boolean
    onSelectAction: () => void
}

export const ProjectDetailTimeline = ({darkMode, isActive, onSelectAction}: ProjectDetailTimelineProps) => {
    return (
        <button
            onClick={onSelectAction}
            className=
                {`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 
                ${isActive ? "bg-blue-500 text-white" :
                    darkMode ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"}`
                }>


            <Calendar className="w-4 h-4"/>
            상세 타임라인
        </button>
    )
}