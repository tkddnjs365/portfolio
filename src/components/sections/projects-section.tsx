"use client"

import {AnimatePresence, motion} from "framer-motion"
import {useState} from "react";
import {BarChart3, Building2, Calendar} from "lucide-react";
import {ProjectOutline} from "@/components/ui/project-outline";
import {ProjectDetailTimeline} from "@/components/ui/project-detail-timeline";
import {ProjectDashboard} from "@/components/ui/project-dashboard";

interface ProjectsSectionProps {
    darkMode: boolean
}

export const ProjectsSection = ({darkMode}: ProjectsSectionProps) => {
    const [showTimeline, setShowTimeline] = useState(false)
    const [showStats, setShowStats] = useState(false)

    return (
        <section id="projects" className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <div className={"container mx-auto px-4"}>
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Projects
                    </h2>
                    <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        10년간의 MES 솔루션 및 콜 시스템 개발 프로젝트
                    </p>
                </motion.div>

                {/* 상단 탭 */}
                <div className="flex justify-center mb-12">
                    <div
                        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-2 inline-flex gap-2 flex-wrap">
                        <button
                            onClick={() => {
                                setShowTimeline(false)
                                setShowStats(false)
                            }}
                            className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                                !showTimeline && !showStats
                                    ? "bg-blue-500 text-white"
                                    : `${darkMode ? "text-white hover:bg-white hover:bg-opacity-10" : "text-gray-700 hover:bg-gray-100"}`
                            }`}
                        >
                            <Building2 className="w-4 h-4"/>
                            프로젝트 개요
                        </button>
                        <button
                            onClick={() => {
                                setShowTimeline(true)
                                setShowStats(false)
                            }}
                            className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                                showTimeline && !showStats
                                    ? "bg-blue-500 text-white"
                                    : `${darkMode ? "text-white hover:bg-white hover:bg-opacity-10" : "text-gray-700 hover:bg-gray-100"}`
                            }`}
                        >
                            <Calendar className="w-4 h-4"/>
                            상세 타임라인
                        </button>
                        <button
                            onClick={() => {
                                setShowTimeline(false)
                                setShowStats(true)
                            }}
                            className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                                !showTimeline && showStats
                                    ? "bg-blue-500 text-white"
                                    : `${darkMode ? "text-white hover:bg-white hover:bg-opacity-10" : "text-gray-700 hover:bg-gray-100"}`
                            }`}
                        >
                            <BarChart3 className="w-4 h-4"/>
                            통계 대시보드
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {showStats ? (
                        <ProjectDashboard darkMode={darkMode}/>
                    ) : !showTimeline ? (
                        <ProjectOutline darkMode={darkMode}/>
                    ) : (
                        <ProjectDetailTimeline darkMode={darkMode}/>
                    )}
                </AnimatePresence>


            </div>
        </section>
    )
}