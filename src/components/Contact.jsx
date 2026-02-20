import React from "react"

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Section heading */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Contact
        </h2>

        {/* Description */}
        <p className="mb-6 max-w-xl text-gray-700 dark:text-gray-400">
          I’m open to full-time or contract roles where I can build and scale real-world applications as a Full Stack JavaScript Developer.
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-6">

          <a
            href="mailto:rajusheoran427@gmail.com"
            className="
              font-medium
              text-green-600 dark:text-green-400
              hover:underline
            "
          >
            Email
          </a>

          <a
            href="https://github.com/rajusheoran2024"
            target="_blank"
            rel="noreferrer"
            className="
              font-medium
              text-green-600 dark:text-green-400
              hover:underline
            "
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/rajuwebdev/"
            target="_blank"
            rel="noreferrer"
            className="
              font-medium
              text-green-600 dark:text-green-400
              hover:underline
            "
          >
            LinkedIn
          </a>

        </div>
      </div>
    </section>
  )
}

export default Contact