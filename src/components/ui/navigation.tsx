"use client"

import {useEffect, useState} from "react";
import {Menu, X} from "lucide-react"
import {navItems} from "@/lib/data";

export const Navigation = () => {
    // 현재 화면에서 보이는 section
    const [activeSection, setActiveSection] = useState("home")
    // 모바일 사이드 메뉴
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // 스크롤 이동 함수
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({behavior: "smooth"})
        setActiveSection(sectionId)
        setIsMobileMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            // 메뉴 List
            const sections = navItems.map((item) => item.id)
            // 지금 스크롤된 위치 + 여유값(100px)
            const scrollPosition = window.scrollY + 100

            // 모든 섹션을 순회하면서 현재 화면에 어떤 섹션이 보이고 있는지 확인
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId)
                if (element) {
                    const {offsetTop, offsetHeight} = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div>
            {/* 사이드 메뉴 설정
                fixed : 화면에서 고정된 위치로 설정
                top-1/2 : 위에서부터 50% 위치에 배치
                left-6 : 왼쪽에서 6단위(보통 4px x 6 = 24px) 떨어짐
                transform -translate-y-1/2 : Y축 방향으로 자기 높이의 절반만큼 위로 당겨서 정중앙에 위치
                lg:block : 화면너비가 large(1024px 이상) 일때만 보임
            */}
            <nav className="fixed top-1/2 left-6 transform -translate-y-1/2 z-40 hidden lg:block">
                {/* 버튼 설정
                    backdrop-blur-md : 배경 흐림 효과
                    rounded-full : 테두리를 완전히 둥글게 처리
                    p-2 : 내부여백을 8px 처리
                */}
                <div className="bg-black/20 backdrop-blur-md border border-white/30 rounded-full p-2">
                    {navItems.map((item) => {
                        const IconComponent = item.icon

                        return (
                            <div key={item.id} className="relative group">
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-12 h-12 rounded-full mb-2 transition-all duration-300 hover:scale-110 ${
                                        activeSection === item.id ? "bg-blue-500 text-white shadow-lg" : "hover:bg-white/20 text-white"
                                    }`}
                                >
                                    <IconComponent className="w-5 h-5 mx-auto"/>
                                </button>

                                {/* 버튼에 마우스 포커스 놓았을때 툴팁 표시
                                   absolute : 부모기준 절대 위치 설정
                                   opacity-0 : 투명 처리
                                   group-hover:opacity-10 : 부모요소에 마우스를 올리면 완전히 보이게 설정
                                   transition-all duration-200 : 스타일 변화가 0.2초 동안 부드럽게 전환
                                   pointer-events-none : 마우스 클릭 비활성화
                                   shadow-lg : 커다란 그림자 효과
                                */}
                                <div
                                    className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-50 pointer-events-none shadow-lg">
                                    {item.label}
                                    <div
                                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900/90"></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </nav>

            {/* 모바일용 네비게이션 */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="fixed top-6 left-6 z-50 lg:hidden p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/30 text-white hover:scale-110 transition-all duration-300"
            >
                {isMobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
            {isMobileMenuOpen && (
                /*
                   inset-0 : top, right, bottom, left 전부 0 → 완전히 덮는 느낌
                */
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                         onClick={() => setIsMobileMenuOpen(false)}/>
                    <div
                        className="absolute top-20 left-6 right-6 bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                        {/*
                           grid : grid 레이아웃 설정
                           grid-cols-2 : 가로방향으로 2개의 칸을 생성 (컬럼 2개)
                           gap-3 : 각 칸마가 여백을 3단위 (3 * 0.25rem 약 12px)
                        */}
                        <div className="grid grid-cols-2 gap-3">
                            {navItems.map((item) => {
                                const IconComponent = item.icon
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                                            activeSection === item.id ? "bg-blue-500 text-white" : "hover:bg-white/10 text-white"
                                        }`}
                                    >
                                        <IconComponent className="w-5 h-5"/>
                                        <span className="font-medium">{item.label}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}