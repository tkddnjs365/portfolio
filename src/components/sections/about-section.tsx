"use client"

import {motion} from "framer-motion"
import {CheckCircle, User} from "lucide-react"

interface AboutSectionProps {
    darkMode: boolean
}

export const AboutSection = ({darkMode}: AboutSectionProps) => {
    return (
        <section id="about" className={`min-h-screen py-16 md:py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
            {/*
                container : 너비를 자동 조정하며 가운데 정렬
                mx-auto : 자동으로 양옆 여백이 같게 되면서 딱 중앙에 설정
            */}
            <div className="container mx-auto px-4">
                {/*
                    initial : 시작상태
                    whileInView : 화면에 보일때 상태
                    md:mb-16 : 화면이 medium(768px 이상)일 때 아래 여백을 더 크게 (16 단위) 설정
                */}
                <motion.div
                    initial={{opacity: 0, y: 50}} /* 처음에는 투명하고 아래쪽(50px) 위치에서 시작 */
                    whileInView={{opacity: 1, y: 0}} /* 불투명(보임) 상태로 올라오면서 이동 */
                    transition={{duration: 0.8}} /* 애니메이션이 0.8초 동안 부드럽게 실행 */
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className={`text-base md:text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        제조업 IT 솔루션 전문가로서의 여정
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/*
                       order-2 : Flexbox나 Grid 레이아웃에서 이 요소의 표시 순서를 두 번째로 설정
                    */}
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        className="order-2 md:order-1"
                    >
                        <div className="relative">
                            <div
                                className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <User className="text-white w-24 h-24 md:w-32 md:h-32"/>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        className={`order-1 md:order-2 ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">10년의 MES 솔루션 개발 경험</h3>
                        <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                            (주)트러시스시스템에서 MES 솔루션의 유지보수, 커스터마이징, 그리고 확장 개발을 담당하며 제조업체들의 디지털 전환을 지원해왔습니다.
                        </p>

                        {/*
                           space-y-3 : 세로 방향으로 요소 간 12px 간격 생성 (세로 정렬일 때만)
                           flex : 내부 요소들을 가로로 정렬
                        */}
                        <div className="space-y-3 md:space-y-4">
                            <div className="flex items-center">
                                <CheckCircle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0"/>
                                <span className="text-sm md:text-base">MES 솔루션 커스터마이징 및 유지보수</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0"/>
                                <span className="text-sm md:text-base">영업, 사양, 자재, 재고, 물류 모듈 개발</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0"/>
                                <span className="text-sm md:text-base">다중 고객사 환경에서의 솔루션 배포 및 운영</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0"/>
                                <span className="text-sm md:text-base">C#, WinForms, DevExpress 기반 UI 개발</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}