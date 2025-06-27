"use client"

/*
* 테마 토글 컴포넌트
*/

import { Sun, Moon } from "lucide-react"

interface ThemeToggleProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export const ThemeToggle = ({ darkMode, setDarkMode }: ThemeToggleProps) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:scale-110 transition-all duration-300"
    >
      {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-blue-600" />}
    </button>
  )
}
