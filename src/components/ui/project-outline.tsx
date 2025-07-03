"use client"

import {AnimatePresence, motion} from "framer-motion"
import {categories, projects} from "@/lib/data";
import {useState} from "react";
import {Check} from "lucide-react";

interface ProjectOutlineProps {
    darkMode: boolean
}

export const ProjectOutline = ({darkMode}: ProjectOutlineProps) => {
    const [filter, setFilter] = useState("all")
    const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

    return (
        <motion.div
            key="overview"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 50}}
            transition={{duration: 0.5}}
        >
            {/* 필터 용 탭 */}
            <div className={"flex justify-center mb-12"}>
                {/*
                    backdrop-blur-md : 배경에 중간단계의 블러 효과
                    inline-flex : 텍스트처럼 흐름에 맞게 옆에 나오면서도 내부 버튼은 flex 정렬
                    flex-wrap : 자식 요소들이 여러줄로 줄바꿈 가능하도록 설정
                    gap-2 : 자식 요소 간 간격 8px
                */}
                <div
                    className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full p-2 inline-flex flex-wrap gap-2">
                    {categories.map((category) => {
                        const IconComponent = category.icon
                        return (
                            <button
                                key={category.id}
                                onClick={() => setFilter(category.id)}
                                className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                                    filter === category.id
                                        ? "bg-purple-500 text-white"
                                        : `${darkMode ? "text-white hover:bg-white hover:bg-opacity-10" : "text-gray-700 hover:bg-gray-100"}`
                                }`}
                            >
                                <IconComponent className="w-4 h-4"/>
                                {category.label}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* 상세 내용 */}
            <div className={"grid md:grid-cols-2 gap-8"}>
                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{opacity: 0, scale: 0.9}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.9}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 hover:scale-105 transition-all duration-300 ${darkMode ? "text-white" : "text-gray-800"}`}
                        >
                            <h3 className={"text-xl font-bold mb-1"}>{project.title}</h3>
                            <div className={`h-0.5 w-full mb-3 ${darkMode ? "bg-blue-200" : "bg-gray-400"}`} />
                            <p className={"mb-3 opacity-80"}>{project.description}</p>

                            <div className={"mb-4"}>
                                <h4 className={"font-semibold mb-2"}>사용기술 :</h4>
                                {/*
                                   flex : 요소들을 가로로 정렬
                                   flex-wrap ; 가로로 공간이 부족하면 자동 줄 바꿈
                                */}
                                <div className={"flex flex-wrap gap-2"}>
                                    {project.technologies.map((tech, i) => (
                                        <span key={i}
                                              className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm"> {tech} </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className={"font-semibold mb-2"}>주요 성과:</h4>
                                <ul className="space-y-1">
                                    {project.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-center">
                                            <Check className="text-green-500 mr-2 w-4 h-4"/>
                                            <span className="text-sm">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}