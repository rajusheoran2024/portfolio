import React from "react"

function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Section Heading */}
        <h2 className="text-2xl font-semibold mb-10 text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="space-y-10">

          {/* Project 1 */}
          <div className="border border-gray-300 dark:border-gray-800 p-6 rounded">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Appointment Booking & E-Commerce Platform
            </h3>

            <p className="text-gray-700 dark:text-gray-400 mb-3">
              Full-stack web application with appointment booking, e-commerce,
              and an admin dashboard.
            </p>

            <p className="text-gray-700 dark:text-gray-400 mb-4">
              React, Node.js, Express, MongoDB, AWS
            </p>

            <div className="flex gap-4 text-sm">
              <a href="https://drmayankabatra.in" target="_blank" className="cursor-pointer text-green-600 dark:text-green-400 hover:underline">
                Live
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-300 dark:border-gray-800 p-6 rounded">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Restaurant Management System (POS)
            </h3>

            <p className="text-gray-700 dark:text-gray-400 mb-2">
              Company Project – My Tech Boat
            </p>

            <p className="text-gray-700 dark:text-gray-400 mb-3">
              Offline-first desktop POS application for restaurant billing and
              order management.
            </p>

            <p className="text-gray-700 dark:text-gray-400 mb-4">
              JavaScript, Electron.js, SQLite
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-500">
              🔒 Internal company project (not publicly accessible)
            </p>
          </div>

          {/* Project 3 – React Native */}
          <div className="border border-gray-300 dark:border-gray-800 p-6 rounded">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Habitly – Habit Tracker App
            </h3>

            <p className="text-gray-700 dark:text-gray-400 mb-3">
              Mobile habit tracking application focused on consistency,
              discipline, and daily progress tracking.
            </p>

            <p className="text-gray-700 dark:text-gray-400 mb-4">
              React Native, JavaScript, Local Storage
            </p>
            <div className="flex gap-4 text-sm">
              <a href="https://play.google.com/apps/testing/com.optimizelabs.habitly" target="_blank" className="cursor-pointer text-green-600 dark:text-green-400 hover:underline">
                Install from Playstore
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects