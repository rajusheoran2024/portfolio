import React from "react"

function Experience() {
  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Section heading */}
        <h2 className="text-2xl font-semibold mb-10 text-gray-900 dark:text-white">
          Experience
        </h2>

        <div className="space-y-8">

          {/* Experience 1 */}
          <div>
            <p className="font-medium text-gray-900 dark:text-white">
              Full Stack Developer – Client Project
            </p>
            <p className="mt-1 text-gray-700 dark:text-gray-400">
              Built and deployed production-ready web applications using
              the MERN stack and AWS infrastructure.
            </p>
          </div>

          {/* Experience 2 */}
          <div>
            <p className="font-medium text-gray-900 dark:text-white">
              Software Developer – Mega Tech Boat
            </p>
            <p className="mt-1 text-gray-700 dark:text-gray-400">
              Developed an offline-first desktop POS system and optimized
              backend performance by 40% for real-world usage.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience