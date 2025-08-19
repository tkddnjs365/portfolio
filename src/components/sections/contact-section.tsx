"use client"

import type React from "react"
import {motion} from "framer-motion"
import {Download, Github, MailOpenIcon as Envelope} from "lucide-react"

interface ContactSectionProps {
    darkMode: boolean
}

export const ContactSection = ({darkMode}: ContactSectionProps) => {

    return (
        <section id="contact" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contact</h2>
                    <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>함께 일할 기회를 만들어보세요</p>
                </motion.div>

                <div className="grid gap-12 max-w-6xl mx-auto">
                    {/* 연락처 정보 */}
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        className={`mx-auto ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                        <h3 className="text-2xl font-bold mb-8">연락처 정보</h3>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div
                                    className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                    <Envelope className="text-white w-5 h-5"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold">이메일</h4>
                                    <p className="opacity-75">tkddnjs365@naver.com</p>
                                </div>
                            </div>
                            <a
                                href="https://github.com/tkddnjs365"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                            >
                                <div
                                    className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                                    <Github className="text-white w-5 h-5"/>
                                </div>
                                <div>
                                    <h4 className="font-semibold">GitHub</h4>
                                    <p className="opacity-75">github.com/tkddnjs365</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-8 w-96">
                            <a href="/pdf/이력서_한상원.pdf" download className="w-full block">
                                <button
                                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                                    <Download className="w-4 h-4"/>
                                    이력서 PDF 다운로드
                                </button>
                            </a>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
