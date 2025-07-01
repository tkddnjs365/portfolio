"use client"

import {useEffect, useState} from "react"
import {motion} from "framer-motion"
import {Mail} from "lucide-react"

export const FirstSection = () => {
    const [typingText, setTypingText] = useState("")
    const fullText = "개발자"
    const name = "한상원"

    // 🌟 랜덤 별 데이터 상태
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

    // 🌠 별 랜덤 값은 클라이언트에서만 생성
    useEffect(() => {
        const generatedStars = Array.from({length: 50}, (_, i) => ({
            id: i,
            x: Math.random() * 100, // 시작 X좌표
            y: Math.random() * 100, // 시작 Y좌표
            move: 50 + Math.random() * 100, // 움직이는 거리
            duration: 8 + Math.random() * 12, // 움직일 속도
            delay: Math.random() * 5, // 시작되기 전에 기다리는 시간
        }))
        setStars(generatedStars)
    }, [])

    // “contact”라는 ID를 가진 섹션으로 스무스하게 스크롤하는 함수
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({behavior: "smooth"})
    }

    return (
        /* section = 특정 구역을 나타내는 HTML 태그

          min-h-screen : 최소 높이를 화면 높이만큼 설정
          flex : 내부 요소들을 가로 또는 세로로 정렬할 수 있는 플렉스 박스 레이아웃을 적용
          relative : 자식요소들이 absolute 로 위치 잡을수 있도록 기준점을 만듬 (relative 이걸 안하면 자식에서 absolute 를 쓰면 화면기준으로 처리 됨)
          overflow-hidden : 섹션 바깥으로 삐져나온 요소들은 보이지 않게 처리
        */
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 opacity-90"/>

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

            {/* 중앙에 표시 */}
            <div className="text-center z-10 text-white px-4 max-w-4xl mx-auto">
                <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 1}}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">{name}</h1>
                    <div className="text-lg md:text-xl lg:text-2xl mb-8 h-8">
                        <span className="border-r-2 border-white animate-pulse">{typingText}</span>
                    </div>
                    <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        10년이상의 MES 솔루션 개발 경험으로 제조업의 디지털 전환을 이끌어갑니다
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        {/*
                        <button
                            className="px-6 md:px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm md:text-base">
                            <Download className="w-4 h-4"/>
                            이력서 다운로드
                        </button>
                        */}
                        <button
                            onClick={scrollToContact}
                            className="px-6 md:px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm md:text-base"
                        >
                            <Mail className="w-4 h-4"/>
                            연락하기
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}