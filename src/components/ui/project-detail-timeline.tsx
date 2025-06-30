"use client"

import {motion} from "framer-motion"
import {clientProjects} from "@/lib/data"
import {Building2, Calendar, CheckCircle, Phone, Play} from "lucide-react";

interface ProjectDetailTimelineProps {
    darkMode: boolean
}

export const ProjectDetailTimeline = ({darkMode}: ProjectDetailTimelineProps) => {
    // 연도별로 프로젝트 그룹화
    const projectsByYear = clientProjects.reduce(
        (acc, project) => {
            const year = project.period.split(".")[0]
            if (!acc[year]) {
                acc[year] = []
            }
            acc[year].push(project)
            return acc
        },
        {} as Record<string, typeof clientProjects>,
    )
    const years = Object.keys(projectsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

    return (
        <motion.div
            key={"timeline"}
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -50}}
            transition={{duration: 0.5}}
        >
            <div className="max-w-4xl mx-auto">
                <div className={`text-center mb-8 ${darkMode ? "text-white" : "text-gray-800"}`}>
                    <h3 className="text-2xl font-bold mb-4">📋 고객사별 프로젝트 상세 이력</h3>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        총 <span className="font-bold text-blue-500">{clientProjects.length}개</span> 프로젝트 수행 (완료:{" "}
                        {clientProjects.filter((p) => p.status === "완료").length}개, 진행중:{" "}
                        {clientProjects.filter((p) => p.status === "진행중").length}개)
                    </p>
                </div>

                {years.map((year, yearIndex) => (
                    <motion.div
                        key={year}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: yearIndex * 0.1}}
                        className="mb-12"
                    >
                        <div
                            className={`text-xl font-bold mb-6 flex items-center gap-2 ${darkMode ? "text-white" : "text-gray-800"}`}
                        >
                            <Calendar className="w-5 h-5 text-blue-500"/>
                            {year}년 ({projectsByYear[year].length}개 프로젝트)
                        </div>

                        <div className={"space-x-4"}>
                            {projectsByYear[year].map((project, index) => (
                                <motion.div
                                    key={`${year}-${index}`}
                                    initial={{opacity: 0, x: -20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    transition={{duration: 0.5, delay: index * 0.1}}
                                    className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 ${darkMode ? "text-white" : "text-gray-800"}`}
                                >
                                    {/*
                                        items-start : 세로축 기준으로 상단정렬
                                    */}
                                    <div className={"flex items-start justify-between mb-3"}>
                                        <div className={"flex items-center gap-3"}>
                                            <div className={"flex items-center gap-2"}>
                                                {project.type === "MES" ? (
                                                    <Building2 className={"w-5 h-5 text-blue-500"}/>
                                                ) : (
                                                    <Phone className={"w-5 h-5 text-green-500"}/>
                                                )}
                                                <span className={"font-bold text-lg"}>{project.client}</span>
                                            </div>

                                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                project.status === "완료" ? "bg-green-500 text-white" : "bg-orange-500 text-white"
                                            }`}>
                                                {project.status === "완료" ? (
                                                    <div className="flex items-center gap-1">
                                                        <CheckCircle className="w-3 h-3"/>
                                                        완료
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-1">
                                                        <Play className="w-3 h-3"/>
                                                        진행중
                                                    </div>
                                                )}
                                            </div>

                                            <div
                                                className={`px-2 py-1 rounded text-xs ${
                                                    project.type === "MES"
                                                        ? "bg-blue-500/20 "
                                                        : "bg-green-500/20 "
                                                }`}
                                            >
                                                {project.type}
                                            </div>
                                        </div>
                                        <div className="text-sm opacity-75 font-medium">{project.period}</div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="text-blue-400 font-semibold mb-1">{project.project}</div>
                                        <div className="text-sm opacity-90 mb-2">{project.description}</div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.scope.split(", ").map((scope, i) => (
                                            <span key={i}
                                                  className="px-2 py-1 bg-purple-500/20 rounded text-xs"> {scope} </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}