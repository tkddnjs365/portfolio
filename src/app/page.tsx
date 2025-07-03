"use client"

import {useEffect, useState} from "react";
import {ThemeToggle} from "@/components/ui/theme-toggle";
import {Navigation} from "@/components/ui/navigation";
import {ExperienceSection} from "@/components/sections/experience-section";
import {SkillsSection} from "@/components/sections/skills-section";
import {ProjectsSection} from "@/components/sections/projects-section";
import {ContactSection} from "@/components/sections/contact-section";
import {Footer} from "@/components/sections/footer";
import {MainSection} from "@/components/sections/main-section";

// 스크롤 컴포넌트 구현
const ScrollIndicator = () => {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScrollProgress = () => {
            // 화면이 지금 얼마나 내려왔는지 픽셀 단위로 확인
            const scrollPx = document.documentElement.scrollTop
            // 전체 페이지 높이에서 화면에 보이는 높이를 뺀 값이 전체 스크롤 가능한 높이
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = scrollPx / winHeightPx
            setScrollProgress(scrolled)
        }

        //사용자가 스크롤할 때마다 퍼센트를 다시 계산해서 막대 길이를 업데이트
        window.addEventListener("scroll", updateScrollProgress)
        //컴포넌트가 사라질 때 이벤트도 제거!
        return () => window.removeEventListener("scroll", updateScrollProgress)
    }, [])

    return (
        /*
         * fixed top-0 left-0 w-full h-1: 화면 상단에 가로로 꽉 찬 얇은 막대
         */
        <div
            className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform-gpu origin-left z-50"
            style={{transform: `scaleX(${scrollProgress})`}}
        />
    )
}

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode)
    }, [darkMode])

    return (
        /*
        * min-h-screen : 화면 한 페이지 크기 만큼의 높이로 설정
        * transition-colors : 색상이 변할 때 부드럽게 애니메이션처럼 전환되도록 설정
        * duration-300 : 애니메이션 지속시간을 0.3초로 설정
        * */
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-white"}`}>
            <ScrollIndicator/>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode}/> {/* 다크모드 버튼 */}
            <Navigation/> {/* 사이드 네비게이션 */}
            <MainSection/>
            {/*
                <FirstSection/>  첫번째 화면
                <AboutSection darkMode={darkMode}/>  About Me 화면
            */}
            <ExperienceSection darkMode={darkMode}/> {/* 경력 & 시스템 */}
            <SkillsSection darkMode={darkMode}/> {/* 스킬 */}
            <ProjectsSection darkMode={darkMode}/> {/* 프로젝트 */}
            <ContactSection darkMode={darkMode}/> {/* Contact */}
            <Footer darkMode={darkMode}/>
        </div>
    );
}
