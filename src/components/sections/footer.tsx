"use client"

import {Github, Mail} from "lucide-react"

interface FooterProps {
    darkMode: boolean
}

export const Footer = ({darkMode}: FooterProps) => {
    return (
        <footer
            className={`py-8 ${darkMode ? "bg-gray-800 border-t border-gray-700" : "bg-white border-t border-gray-200"}`}
        >
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="text-2xl text-blue-500 hover:text-blue-600 transition-colors">
                        <Github className="w-6 h-6"/>
                    </a>
                    <a href="#" className="text-2xl text-red-500 hover:text-red-600 transition-colors">
                        <Mail className="w-6 h-6"/>
                    </a>
                </div>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    © 개발자 포트폴리오. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
