import React from "react"

function Skills() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Section heading */}
        <h2 className="text-2xl font-semibold mb-10 text-gray-900 dark:text-white">
          Skills
        </h2>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">

          <p className="text-gray-700 dark:text-gray-400">
            <span className="font-medium text-gray-900 dark:text-white">
              Frontend:
            </span>{" "}
            React, Tailwind CSS, Bootstrap
          </p>

          <p className="text-gray-700 dark:text-gray-400">
            <span className="font-medium text-gray-900 dark:text-white">
              Backend:
            </span>{" "}
            Node.js, Express, REST APIs
          </p>

          <p className="text-gray-700 dark:text-gray-400">
            <span className="font-medium text-gray-900 dark:text-white">
              Databases:
            </span>{" "}
            MongoDB, MySQL, SQLite
          </p>

          <p className="text-gray-700 dark:text-gray-400">
            <span className="font-medium text-gray-900 dark:text-white">
              Cloud:
            </span>{" "}
            AWS (EC2, S3, CloudFront)
          </p>

          <p className="text-gray-700 dark:text-gray-400">
            <span className="font-medium text-gray-900 dark:text-white">
              Other:
            </span>{" "}
            WebSocket, Electron.js
          </p>

          <p className="text-gray-700 dark:text-gray-400">
            <span className="font-medium text-gray-900 dark:text-white">
              Tools:
            </span>{" "}
            Git, GitHub, Postman
          </p>

        </div>
      </div>
    </section>
  )
}

export default Skills