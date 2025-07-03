"use client"

import {motion} from "framer-motion"
import {useEffect, useState} from "react";
import {Code, Database, Mail, Settings, Users} from "lucide-react";

export const MainSection = () => {
    const [typingText, setTypingText] = useState("")
    const fullText = "끊임없이 성장하는 개발자"
    const name = "한상원"

    // 랜덤 별 데이터 상태
    const [stars, setStars] = useState<
        {
            id: number
            x: number
            y: number
            move: number
            duration: number
            delay: number
        }[]
    >([])

    useEffect(() => {
        let index = 0

        // fullText 문자를 한글자씩 표현
        const timer = setInterval(() => {
            setTypingText(fullText.slice(0, index))
            index++
            if (index > fullText.length) {
                clearInterval(timer)
            }
        }, 100)
        return () => clearInterval(timer)
    }, [])

    // 별 랜덤 값 생성
    useEffect(() => {
        const generatedStars = Array.from({length: 60}, (_, i) => ({
            id: i,
            x: Math.random() * 100, // 시작 X좌표
            y: Math.random() * 100, // 시작 Y좌표
            move: 50 + Math.random() * 100, // 움직이는 거리
            duration: 8 + Math.random() * 12, // 움직일 속도
            delay: Math.random() * 5, // 시작되기 전에 기다리는 시간
        }))
        setStars(generatedStars)
    }, [])

    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})
    }

    const skills = [
        {icon: Code, text: "10년 이상 MES 솔루션 구축 및 운영 경험"},
        {icon: Users, text: "고객 맞춤형 기능 설계 및 지속적인 개선"},
        {icon: Database, text: "영업, 사양, 자재, 재고, 물류 주요 업무 모듈 경험"},
        {icon: Settings, text: "C#, WinForms, DevExpress 기반 UI/UX 개발"}
    ]

    return (
        <section id="home" className={"min-h-screen relative overflow-hidden"}>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-800 to-gray-900 opacity-90"/>

            {/* 움직이는 별 애니메이션
                absolute : 부모를 기준으로 위치 고정
                inset-0 : top, right, bottom, left 전부 0 → 완전히 덮는 느낌
            */}
            <div className="absolute inset-0">
                {stars.map((star) => (
                    <motion.div
                        key={`floating-star-${star.id}`}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                        }}
                        animate={{
                            x: [0, star.move, -star.move, 0],
                            y: [0, -star.move, star.move, 0],
                            opacity: [0.2, 1, 0.3, 0.8, 0.2], // 투명도
                            scale: [0.5, 1.2, 0.8, 1.5, 0.5], //크기
                        }}
                        transition={{
                            duration: star.duration, // 한사이클을 완료하는데 걸리는 시간
                            repeat: Number.POSITIVE_INFINITY, // 애니메이션 무한반복
                            repeatType: "loop", // loop : 계속 처음부터 다시, mirror : 왔다갔다, reverse : 뒤에서 앞으로
                            delay: star.delay, // 시작되기전에 기다리는 시간
                            ease: "easeInOut", // easeInOut : 처음엔 천천히 -> 중간에 빨라지고 -> 끝에는 다시 느려지기
                        }}
                    />
                ))}
            </div>

            {/* 메인 콘텐츠 */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                {/* 상단 히어로 섹션
                    max-w-4xl : 최대 너비: 56rem (896px)
                    mx-auto : 좌우마진 자동 (가로방향 가운데 배치)
                */}
                <div className="text-center z-10 text-white px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                        className="mb-4"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">{name}</h1>
                        <div className="text-lg md:text-xl lg:text-2xl mb-8 h-8">
                            <span className="border-r-2 border-white animate-pulse pr-2">
                                {typingText}
                            </span>
                        </div>
                        <p className="text-lg md:text-xl lg:text-2xl mb-2 max-w-4xl mx-auto leading-relaxed">
                            10년 이상의 개발 경험을 바탕으로 꾸준히 성장해왔습니다.
                        </p>
                        <p className="text-lg md:text-xl lg:text-2xl mb-2 max-w-4xl mx-auto leading-relaxed">
                           변화에 민감하게 대응하며, 더 나은 방향을 위해 오늘도 배우고 고민합니다.
                        </p>
                    </motion.div>

                    {/* 경력 정보 카드 */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.8}}
                        className="mb-4"
                    >
                        <div
                            className={"bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl max-w-4xl mx-auto"}>
                            <p className={"text-base md:text-lg mb-4 leading-relaxed opacity-90 text-center max-w-2xl mx-auto"}>
                                MES 솔루션의 유지보수, 커스터마이징, 그리고 확장 개발을 담당하며<br />
                                다양한 고객사 요구사항을 바탕으로 기능 구현 및 기술 개선을 수행해왔습니다.
                            </p>

                            <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 0.5, delay: 1 + index * 0.1}}
                                        className="flex items-center p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                                    >
                                        <div
                                            className="mr-4 p-2 bg-gradient-to-r from-blue-700 to-purple-800 rounded-lg">
                                            <skill.icon className="w-5 h-5 text-white"/>
                                        </div>
                                        <span className="text-sm md:text-base opacity-90 leading-relaxed">
                                            {skill.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* 연락하기 버튼 */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 1.2}}
                        className={"flex gap-4 justify-center flex-wrap"}
                    >
                        <button
                            onClick={scrollToContact}
                            className="group px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg md:text-xl hover:from-blue-800 hover:to-purple-900 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3"
                        >
                            <Mail
                                className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300"/>
                            연락하기
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* 하단 그라디언트 페이드 */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"/>
        </section>
    )
}