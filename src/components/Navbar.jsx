import React, { useState } from "react"

function Navbar({ toggleTheme, theme }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-bold text-lg text-black dark:text-white">
          Raju.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">

          <a
            href="#projects"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            Contact
          </a>

          <button
            onClick={toggleTheme}
            className="ml-2 px-3 py-1 rounded border border-gray-300 dark:border-gray-700
                       text-gray-700 dark:text-gray-200
                       hover:bg-gray-100 dark:hover:bg-gray-800
                       transition"
          >
            {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-6 py-4 space-y-4">

          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="block text-gray-700 dark:text-gray-300"
          >
            Projects
          </a>

          <a
            href="#experience"
            onClick={() => setOpen(false)}
            className="block text-gray-700 dark:text-gray-300"
          >
            Experience
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-gray-700 dark:text-gray-300"
          >
            Contact
          </a>

          <button
            onClick={() => {
              toggleTheme()
              setOpen(false)
            }}
            className="px-3 py-1 rounded border border-gray-300 dark:border-gray-700
                       text-gray-700 dark:text-gray-200
                       hover:bg-gray-100 dark:hover:bg-gray-800
                       transition"
          >
            {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar