"use client"

import {motion} from "framer-motion"
import {certifications, skillCategories} from "@/lib/data"

interface SkillsSectionProps {
    darkMode: boolean
}

export const SkillsSection = ({darkMode}: SkillsSectionProps) => {
    return (
        <section id="skills" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"} `}>
            {/*
                container : 중앙정렬
                mx-auto : 좌우마진을 자동으로 줘서 가운데 정렬시킨다.
                px-4 : 좌우 패딩 1rem (16px) 설정
                lg:px-8 : lg 사이즈 (1024px)이상 일때는 좌우 패딩을 32px
            */}
            <div className={"container mx-auto px-4 lg:px-8"}>
                <motion.div
                    initial={{opacity: 0, y: 50}} /* opacity : 불투명도 0, y : 아래쪽에서 50px 아래에 있음*/
                    whileInView={{opacity: 1, y: 0}} /* opacity : 스크롤로 해당 div가 화면에 들어오면 완전히 보임, y : 0위치로 올라옴 */
                    transition={{duration: 0.8}} /* 애니메이션이 0.8초에 걸쳐서 작동함*/
                    className={"text-center mb-16"} /* mb-16 : 아래여백 4rem */
                >
                    {/* # 제목 표시 #
                        text-4xl : 텍스트크기를 36px로 설정
                        font-bold : 텍스트를 굵게
                        mb-4 : 아래여백 16px
                        bg-gradient-to-r : 오른쪽 방향으로 그라디언트 효과 지정 (left -> right)
                        from-blue-600 : 그라디언트의 시작색 : 파란색
                        to-purple-600 : 그라디언트의 끝 색 : 보라색
                        bg-clip-text : 배경 그라디언트를 텍스트 모양대로 잘라서 입히기
                        text-transparent : 텍스트 색상을 투명하게
                    */}
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Skills & Certifications
                    </h2>
                    <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        기술 스택과 보유 자격증
                    </p>
                </motion.div>

                {/* # 3개의 카테고리 표시 #
                    grid : div 내부를 그리드 레이아웃 컨테이너로 설정 (<br> 테그)
                    lg:grid-cols- : 화면 사이즈가 lg(1024px)이상 일때 가로로 3개의 열을 생성
                    gap-8 : 그리드 칸 사이에 여백 2rem(32px)
                    lg:ml-24 : 화면 사이즈가 lg 이상일때 왼쪽 마진 6rem (96px)
                    lg:mr-4 : 화면 사이즈가 lg 이상일때 오른쪽 마진 1rem (16px)
                */}
                <div className={"grid lg:grid-cols-3 gap-8 lg:ml-24 lg:mr-4"}>
                    {/* 주요 기술 */}
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.1}}
                        className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 hover:scale-105 transition-all duration-300 ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                        <h3 className="text-xl font-bold mb-6 text-center">💻 주요 기술</h3>
                        {/*
                            space-y-4 : 수직간격설정으로 위아래 요소사이에 16px 간격 설정
                        */}
                        <div className={"space-y-4"}>
                            {skillCategories[0].skills.map((skill, i) => {
                                const IconComponent = skill.icon
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{opacity: 0, x: -20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{duration: 0.5, delay: i * 0.1}}
                                        className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <IconComponent className="w-5 h-5 mr-3 text-blue-400"/>
                                        <span className={"font-medium text-base"}>{skill.name}</span>
                                    </motion.div>
                                )
                            })}
                        </div>
                        {/* # 밑에 선 추가 #
                            mt-6 : 상단마진 24px
                            pt-4 : 상단패딩 16px
                            border-t : 상단테두리
                        */}
                        <div className={`mt-6 pt-4 border-t ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
                            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                10년간 실무에서 사용한 핵심 기술들
                            </p>
                        </div>
                    </motion.div>

                    {/* 학습 중인 기술 */}
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 hover:scale-105 transition-all duration-300 ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                        <h3 className="text-xl font-bold mb-6 text-center">📚 학습 중인 기술</h3>
                        <div className="space-y-4">
                            {skillCategories[1].skills.map((skill, i) => {
                                const IconComponent = skill.icon
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{opacity: 0, x: -20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{duration: 0.5, delay: i * 0.1}}
                                        className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <IconComponent className="w-5 h-5 mr-3 text-green-400"/>
                                        <span className="font-medium text-base">{skill.name}</span>
                                    </motion.div>
                                )
                            })}
                        </div>
                        <div className={`mt-6 pt-4 border-t ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
                            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                새로운 기술 트렌드 학습을 위한 자기계발
                            </p>
                        </div>
                    </motion.div>

                    {/* 보유 자격증 */}
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.3}}
                        className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 hover:scale-105 transition-all duration-300 ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                        <h3 className="text-xl font-bold mb-6 text-center">🏆 보유 자격증</h3>
                        <div className="space-y-4">
                            {certifications.map((cert, i) => {
                                const IconComponent = cert.icon
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{opacity: 0, x: -20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{duration: 0.5, delay: i * 0.1}}
                                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="flex items-center mb-2">
                                            <div
                                                className={`w-8 h-8 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center mr-3`}
                                            >
                                                <IconComponent className="w-4 h-4 text-white"/>
                                            </div>
                                            <span className="font-medium text-base">{cert.name}</span>
                                        </div>
                                        <div className="ml-11">
                                            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{cert.issuer}</p>
                                            <p className={`text-xs font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                                                취득일: {cert.date}
                                            </p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                        <div className={`mt-6 pt-4 border-t ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
                            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>전문성을 인증하는 보유
                                자격증</p>
                        </div>
                    </motion.div>
                </div>

                {/* 학습 의지 표현 섹션 */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.4}}
                    className="mt-16 text-center"
                >
                    <div
                        className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 lg:ml-24 lg:mr-4 ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                        <h4 className="text-lg font-bold mb-3">🚀 지속적인 학습과 성장</h4>
                        <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                            10년간 MES 솔루션 개발 경험을 바탕으로, 현재는 새로운 기술과 최신 프레임워크를 학습하며 기술 스택을
                            확장하고 있습니다. 새로운 도전을 통해 더 나은 개발자로 성장하고자 합니다.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}