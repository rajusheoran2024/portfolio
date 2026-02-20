import React, { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

function App() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"

    document.documentElement.classList.remove("dark", "light")
    document.documentElement.classList.add(savedTheme)

    setTheme(savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"

    document.documentElement.classList.remove("dark", "light")
    document.documentElement.classList.add(newTheme)

    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-200 transition-colors">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App