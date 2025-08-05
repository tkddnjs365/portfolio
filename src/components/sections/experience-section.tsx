"use client"

import React, {useEffect, useState} from "react"
import {AnimatePresence, motion} from "framer-motion"
import {ArrowRight, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Github} from "lucide-react"
import type {TechSystem} from "@/lib/experience-data"
import {detailedExperiences} from "@/lib/experience-data"
import Image from "next/image";

interface ExperienceSectionProps {
    darkMode: boolean
}

export const ExperienceSection = ({darkMode}: ExperienceSectionProps) => {
    // 선택된 시스템 (초기값은 첫 번째 시스템)
    const [selectedSystem, setSelectedSystem] = useState<TechSystem | null>(detailedExperiences[0]?.systems?.[0] || null)
    // 펼쳐진 경험 항목 인덱스
    const [expandedExperience, setExpandedExperience] = useState<number | null>(1)
    // 선택된 기능(feature)의 인덱스
    const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0)
    // 선택된 이미지의 인덱스
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    // 현재 선택된 기능 객체
    const currentFeature = selectedSystem?.features[selectedFeatureIndex]
    // 현재 기능에서 선택된 이미지 객체
    const currentImage = currentFeature?.images[selectedImageIndex]

    /** 경력 항목 클릭 → 접기/펼치기 토글 */
    const toggleExperience = (index: number) => {
        // 이미 펼쳐진 항목을 다시 클릭하면 닫음, 아니면 해당 항목을 펼침
        setExpandedExperience(expandedExperience === index ? null : index)
        setSelectedSystem(null)
        setSelectedFeatureIndex(0)
        setSelectedImageIndex(0)
    }

    /** 시스템 탭 클릭 → 해당 시스템 선택 */
    const selectSystem = (system: TechSystem) => {
        setSelectedSystem(system)
        setSelectedFeatureIndex(0)
        setSelectedImageIndex(0)
    }

    /** 기능 항목 클릭 → 해당 기능 선택 */
    const selectFeature = (index: number) => {
        setSelectedFeatureIndex(index)
        setSelectedImageIndex(0)
    }

    /** 이미지 좌/우 버튼 클릭 */
    const prevImage = () => {
        if (selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1)
        }
    }
    const nextImage = () => {
        // 시스템이 존재하고, 유효한 기능 인덱스일 때
        if (selectedSystem && selectedFeatureIndex < selectedSystem.features.length) {
            const currentFeature = selectedSystem.features[selectedFeatureIndex]

            // 현재 이미지 인덱스가 마지막이 아니라면 다음 이미지로
            if (selectedImageIndex < currentFeature.images.length - 1) {
                setSelectedImageIndex(selectedImageIndex + 1)
            }
        }
    }

    // 항목 펼쳐졌을 때 시스템 자동 세팅 해서 첫번째 탭 클릭
    useEffect(() => {
        if (expandedExperience !== null && detailedExperiences[expandedExperience]?.systems?.[0]
        ) {
            setSelectedSystem(detailedExperiences[expandedExperience].systems[0])
        }
    }, [expandedExperience])

    return (
        <section id="experience" className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <div className="container mx-auto px-4">
                {/* 상단 타이틀 */}
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Experience & Systems
                    </h2>
                    <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        경력별 상세 프로젝트와 개발한 시스템들을 소개합니다
                    </p>
                </motion.div>

                {/* 경력 리스트 */}
                <div className="max-w-6xl mx-auto">
                    {detailedExperiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, x: -50}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: index * 0.2}}
                            className="relative mb-8"
                        >
                            {/* 왼쪽에 선 추가 */}
                            <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                            <div className="absolute left-2 top-4 w-0.5 h-full bg-blue-200"></div>

                            <div className="pl-8">
                                {/* 경력 기본 정보 */}
                                <div
                                    className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 cursor-pointer hover:bg-white/15 transition-all duration-300 ${darkMode ? "text-white" : "text-gray-800"}`}
                                    onClick={exp.company === "(주)트러시스시스템" ? () => toggleExperience(index) : undefined}
                                >
                                    {/* 경력 정보 */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap items-center gap-4 mb-4">
                                            <span
                                                className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">{exp.period}</span>
                                            <h3 className="text-xl font-bold">{exp.company}</h3>
                                        </div>
                                        {exp.company === "(주)트러시스시스템" ? (
                                            expandedExperience === index ? (
                                                <ChevronUp className="w-5 h-5"/>
                                            ) : (
                                                <ChevronDown className="w-5 h-5"/>
                                            )
                                        ) : null}
                                    </div>

                                    <h4 className="text-lg font-semibold mb-2">{exp.position}</h4>
                                    <p className="mb-4 opacity-80">{exp.description}</p>

                                    {/* 주요 성과 */}
                                    <div className="space-y-2 mb-4">
                                        {exp.achievements.map((achievement, i) => (
                                            <div key={i} className="flex items-center">
                                                <ArrowRight className="text-blue-500 mr-3 w-4 h-4"/>
                                                <span>{achievement}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* 기술 설명 */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i}
                                                  className="px-2 py-1 bg-gray-500/20 rounded text-xs">{tech}</span>
                                        ))}
                                    </div>

                                    {exp.company === "개인 학습 (MES-WEB)" ? (
                                        <div className="mt-6 pt-4 border-t border-white/20">
                                            <div
                                                className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                                                {/* Live Demo Button */}
                                                <a
                                                    href="https://mes-web.vercel.app/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-[140px] overflow-hidden"
                                                >
                                                    {/* 배경 애니메이션 */}
                                                    <div
                                                        className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                    {/* 아이콘과 텍스트 */}
                                                    <div className="relative flex items-center gap-2">
                                                        <div
                                                            className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                                            <span className="text-xs">🌐</span>
                                                        </div>
                                                        <span className="font-semibold">Visit Site</span>
                                                    </div>

                                                    {/* 우측 화살표 애니메이션 */}
                                                    <div
                                                        className="relative ml-auto transform group-hover:translate-x-1 transition-transform duration-300">
                                                        <ArrowRight className="w-4 h-4"/>
                                                    </div>
                                                </a>

                                                {/* GitHub Button */}
                                                <a
                                                    href="https://github.com/tkddnjs365/portfolio/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group relative flex items-center gap-3 px-6 py-3 bg-slate-600/80 hover:bg-slate-500/90 border border-slate-500/50 hover:border-slate-400/70 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm min-w-[140px] overflow-hidden"
                                                >
                                                    <div
                                                        className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-slate-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                    <div className="relative flex items-center gap-2">
                                                        <div
                                                            className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                                            <Github className="w-3 h-3"/>
                                                        </div>
                                                        <span className="font-semibold">GitHub</span>
                                                    </div>

                                                    <div
                                                        className="relative ml-auto transform group-hover:translate-x-1 transition-transform duration-300">
                                                        <ArrowRight className="w-4 h-4"/>
                                                    </div>
                                                </a>
                                            </div>

                                            {/* 부가 정보 */}
                                            <div className="mt-4 text-sm opacity-70">
                                                <p>💡 최신 웹 기술을 활용한 MES 시스템 학습 프로젝트</p>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>

                                {/* 상세 시스템 정보 
                                   AnimatePresence : 요소가 DOM에서 사라질 때도 애니메이션을 적용하게 해주는 컴포넌트
                                */}
                                <AnimatePresence>
                                    {/* 트러시스 항목 자동 오픈 */}
                                    {expandedExperience === index && exp.systems && (
                                        <motion.div
                                            initial={{opacity: 0, height: 0}}
                                            animate={{opacity: 1, height: "auto"}}
                                            exit={{opacity: 0, height: 0}}
                                            transition={{duration: 0.3}}
                                            className="mt-6 overflow-hidden"
                                        >
                                            {/* 시스템 선택 탭 */}
                                            <div className="flex flex-wrap gap-3 mb-6">
                                                {exp.systems.map((system) => (
                                                    <button
                                                        key={system.id}
                                                        onClick={() => selectSystem(system)}
                                                        className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 text-sm ${
                                                            selectedSystem?.id === system.id
                                                                ? `bg-gradient-to-r ${system.color} text-white shadow-lg`
                                                                : `${darkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`
                                                        }`}
                                                    >
                                                        <span>{system.icon}</span>
                                                        <span className="font-medium">{system.title}</span>
                                                    </button>
                                                ))}
                                            </div>

                                            {/* 선택된 시스템의 상세 정보 */}
                                            <AnimatePresence mode="wait">
                                                {selectedSystem && (
                                                    <motion.div
                                                        key={selectedSystem.id}
                                                        initial={{opacity: 0, y: 20}}
                                                        animate={{opacity: 1, y: 0}}
                                                        exit={{opacity: 0, y: -20}}
                                                        transition={{duration: 0.3}}
                                                        className="grid lg:grid-cols-3 gap-6"
                                                    >
                                                        {/* 기능 목록 */}
                                                        <div className="lg:col-span-1">
                                                            <div
                                                                className={`${darkMode ? "bg-gray-900" : "bg-gray-50"} rounded-lg p-4`}>
                                                                <h4 className={`text-lg font-bold mb-3 ${darkMode ? "text-white" : "text-gray-800"}`}>
                                                                    {selectedSystem.title} 기능
                                                                </h4>
                                                                <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                                                    {selectedSystem.description}
                                                                </p>
                                                                <div className="space-y-2">
                                                                    {selectedSystem.features.map((feature, featureIndex) => (
                                                                        <button
                                                                            key={featureIndex}
                                                                            onClick={() => selectFeature(featureIndex)}
                                                                            className={`w-full text-left p-2 rounded-lg transition-all duration-300 text-sm ${
                                                                                selectedFeatureIndex === featureIndex
                                                                                    ? `bg-gradient-to-r ${selectedSystem.color} text-white`
                                                                                    : `${darkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-200 text-gray-700"}`
                                                                            }`}
                                                                        >
                                                                            <div
                                                                                className="font-medium">{feature.title}</div>
                                                                            <div
                                                                                className="text-xs opacity-75 mt-1">{feature.images.length}개
                                                                                화면
                                                                            </div>
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* 이미지 및 설명 */}
                                                        <div className="lg:col-span-2">
                                                            <AnimatePresence mode="wait">
                                                                {currentFeature && (
                                                                    <motion.div
                                                                        key={`${selectedSystem.id}-${selectedFeatureIndex}`}
                                                                        initial={{opacity: 0, x: 20}}
                                                                        animate={{opacity: 1, x: 0}}
                                                                        exit={{opacity: 0, x: -20}}
                                                                        transition={{duration: 0.3}}
                                                                        className={`${darkMode ? "bg-gray-900" : "bg-gray-50"} rounded-lg p-4`}
                                                                    >
                                                                        <div
                                                                            className="flex items-center justify-between mb-3">
                                                                            <div className="flex items-center">
                                                                                <h5 className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                                                                                    {currentFeature.title}
                                                                                </h5>
                                                                                <h5 className="pl-8 text-sm font-bold text-red-700">
                                                                                    [ 본 UI는 업무 경험을 기반으로 재구성한 화면 예시입니다 ]
                                                                                </h5>
                                                                            </div>

                                                                            <div
                                                                                className="flex items-center gap-2 text-sm text-gray-500">
                                                                                {selectedImageIndex + 1} / {currentFeature.images.length}
                                                                            </div>
                                                                        </div>

                                                                        <p
                                                                            className={`text-sm mb-4 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                                                                        >
                                                                            {currentFeature.description}
                                                                        </p>

                                                                        {/* 이미지 표시 */}
                                                                        <div className="relative mb-4">
                                                                            <div
                                                                                className="relative overflow-hidden rounded-lg bg-gray-200 aspect-video">
                                                                                <Image
                                                                                    src={currentImage?.src || "/placeholder.svg"}
                                                                                    alt={currentImage?.alt || "image"}
                                                                                    width={800} // 실제 이미지 너비
                                                                                    height={450} // 실제 이미지 높이
                                                                                    className="w-full h-full object-contain rounded-lg"
                                                                                />


                                                                                {/* 이미지 네비게이션 
                                                                                    이미지가 2건 이상인경우 하단에 이미지 네비게이션 추가
                                                                                */}
                                                                                {currentFeature.images.length > 1 && (
                                                                                    <>
                                                                                        <button
                                                                                            onClick={prevImage}
                                                                                            disabled={selectedImageIndex === 0}
                                                                                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                                                                                        >
                                                                                            <ChevronLeft
                                                                                                className="w-4 h-4"/>
                                                                                        </button>
                                                                                        <button
                                                                                            onClick={nextImage}
                                                                                            disabled={selectedImageIndex === currentFeature.images.length - 1}
                                                                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                                                                                        >
                                                                                            <ChevronRight
                                                                                                className="w-4 h-4"/>
                                                                                        </button>
                                                                                    </>
                                                                                )}
                                                                            </div>

                                                                            {/* 이미지 설명 */}
                                                                            <div
                                                                                className={`mt-3 p-3 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
                                                                            >
                                                                                <p className={`text-xs ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                                                                                    {currentImage?.description}
                                                                                </p>
                                                                            </div>
                                                                        </div>

                                                                        {/* 이미지 썸네일 */}
                                                                        {currentFeature.images.length > 1 && (
                                                                            <div
                                                                                className="flex gap-2 overflow-x-auto pb-2">
                                                                                {currentFeature.images.map((image, imageIndex) => (
                                                                                    <button
                                                                                        key={imageIndex}
                                                                                        onClick={() => setSelectedImageIndex(imageIndex)}
                                                                                        className={`flex-shrink-0 w-16 h-10 rounded overflow-hidden border-2 transition-all duration-300 ${
                                                                                            selectedImageIndex === imageIndex
                                                                                                ? "border-blue-500"
                                                                                                : "border-gray-300 hover:border-gray-400"
                                                                                        }`}
                                                                                    >
                                                                                        <Image
                                                                                            src={image.src || "/placeholder.svg"}
                                                                                            alt={image.alt || "이미지 설명"}
                                                                                            width={128} // 썸네일 가로폭 (원하는 사이즈로 조절)
                                                                                            height={80}  // 썸네일 세로높이
                                                                                            className="w-full h-full object-cover rounded-md"
                                                                                        />

                                                                                    </button>
                                                                                ))}
                                                                            </div>
                                                                        )}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
