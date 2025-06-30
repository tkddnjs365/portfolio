"use client"

import {motion} from "framer-motion"
import {Award, Building2, Calendar, CheckCircle, Clock, Phone, Play, TrendingUp, Users} from "lucide-react";
import {projectStats} from "@/lib/data";

interface ProjectDashboardProps {
    darkMode: boolean
}

export const ProjectDashboard = ({darkMode}: ProjectDashboardProps) => {
    return (
        <motion.div
            key="stats"
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -50}}
            transition={{duration: 0.5}}
        >
            <div className={`text-center mb-8 ${darkMode ? "text-white" : "text-gray-800"}`}>
                <h3 className="text-2xl font-bold mb-4">📊 프로젝트 통계 대시보드</h3>
                <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    10년간의 프로젝트 수행 현황과 성과 지표
                </p>
            </div>

            {/* 주요 통계 */}
            <div className={"grid grid-cols-2 md:grid-col-4 gap-4 mb-12"}>
                <div
                    className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 text-center ${darkMode ? "text-white" : "text-gray-800"}`}>
                    <Building2 className={"w-8 h-8 mx-auto mb-2 text-blue-500"}/>
                    <div className={"text-3xl font-bold text-blue-500"}>{projectStats.totalProjects}</div>
                    <div className={"text-sm opacity-75"}>총 프로젝트</div>
                </div>
                <div
                    className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 text-center ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                    <CheckCircle className="w-8 h-8 mx-auto mb-2 text-green-500"/>
                    <div className="text-3xl font-bold text-green-500">{projectStats.completedProjects}</div>
                    <div className="text-sm opacity-75">완료 프로젝트</div>
                </div>
                <div
                    className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 text-center ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                    <Play className="w-8 h-8 mx-auto mb-2 text-orange-500"/>
                    <div className="text-3xl font-bold text-orange-500">{projectStats.ongoingProjects}</div>
                    <div className="text-sm opacity-75">진행중</div>
                </div>
                <div
                    className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 text-center ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                    <Award className="w-8 h-8 mx-auto mb-2 text-purple-500"/>
                    <div className="text-3xl font-bold text-purple-500">{projectStats.clientSatisfaction}</div>
                    <div className="text-sm opacity-75">고객 만족도</div>
                </div>
            </div>

            {/* 프로젝트 유형별 통계 */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div
                    className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-blue-500"/>
                        프로젝트 유형별 분포
                    </h4>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-blue-500"/>
                        MES 프로젝트
                      </span>
                            <span className="font-bold text-blue-500">{projectStats.mesProjects}개</span>
                        </div>
                        <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-green-500"/>콜 시스템 프로젝트
                      </span>
                            <span className="font-bold text-green-500">{projectStats.callSystemProjects}개</span>
                        </div>
                    </div>
                </div>

                <div
                    className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 ${darkMode ? "text-white" : "text-gray-800"}`}>
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-500"/>
                        시스템별 커스터마이징 현황
                    </h4>
                    <div className="space-y-3">
                        {/*
                           Object.entries : 객체의 key와 value 쌍을 배열로 추출하는 자바스크립트 내장 함수
                        */}
                        {Object.entries(projectStats.systemTypes).map(([system, count]) => (
                            <div key={system} className="flex items-center justify-between">
                                <span className="text-sm">{system}</span>
                                <span className="font-bold text-purple-500">{count}회</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 연도별 프로젝트 수행 현황 */}
            <div
                className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 ${darkMode ? "text-white" : "text-gray-800"}`}>
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-orange-500"/>
                    연도별 프로젝트 수행 현황
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-11 gap-3">
                    {Object.entries(projectStats.yearlyStats)
                        .sort(([a], [b]) => Number.parseInt(a) - Number.parseInt(b))
                        .map(([year, count]) => (
                            <div key={year} className="text-center">
                                <div className="text-sm opacity-75 mb-1">{year}</div>
                                <div
                                    className="w-full bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                    style={{height: `${Math.max(count * 8, 24)}px`}}
                                >
                                    {count}
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/* 추가 성과 지표 */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div
                    className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 text-center ${darkMode ? "text-white" : "text-gray-800"}`}>
                    <Clock className="w-8 h-8 mx-auto mb-2 text-indigo-500"/>
                    <div className="text-2xl font-bold text-indigo-500">{projectStats.totalDuration}</div>
                    <div className="text-sm opacity-75">총 경력 기간</div>
                </div>
                <div
                    className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 text-center ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                    <TrendingUp className="w-8 h-8 mx-auto mb-2 text-pink-500"/>
                    <div className="text-2xl font-bold text-pink-500">{projectStats.averageProjectDuration}</div>
                    <div className="text-sm opacity-75">평균 프로젝트 기간</div>
                </div>
                <div
                    className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 text-center ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                    <Award className="w-8 h-8 mx-auto mb-2 text-yellow-500"/>
                    <div className="text-2xl font-bold text-yellow-500">15+</div>
                    <div className="text-sm opacity-75">협력 고객사</div>
                </div>
            </div>
        </motion.div>
    )
}