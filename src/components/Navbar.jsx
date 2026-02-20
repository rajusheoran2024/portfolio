import React from "react";

function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-bold text-lg text-black dark:text-white">
          Raju.dev
        </h1>

        {/* Right side */}
        <div className="flex items-center gap-6 text-sm">

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

          {/* 🔘 TOGGLE BUTTON */}
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
      </div>
    </nav>
  )
}

export default Navbar