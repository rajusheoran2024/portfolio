import React from "react"

function Hero() {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Hi, I’m{" "}
          <span className="text-green-600 dark:text-green-400">
            Raju Sheoran
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-400">
          Full Stack JavaScript Developer (MERN + SQL)
        </h2>

        {/* Description */}
        <p className="max-w-2xl mb-8 text-gray-700 dark:text-gray-400 leading-relaxed">
          I build scalable web and desktop applications using React, Node.js,
          Express, MongoDB, and AWS. I focus on clean architecture, performance,
          and real-world problem solving.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">

          <a
            href="/assets/Raju_Sheoran_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noreferrer"
            className="
    bg-green-600 dark:bg-green-500
    text-white dark:text-black
    px-6 py-3 rounded font-medium
    hover:bg-green-700 dark:hover:bg-green-400
    transition
  "
          >
            View Resume
          </a>

          <a
            href="/assets/Raju_Sheoran_Full_Stack_Developer.pdf"
            download
            className="
              px-6 py-3 rounded font-medium
              border border-gray-300 dark:border-gray-700
              text-gray-800 dark:text-gray-200
              hover:border-gray-400 dark:hover:border-gray-500
              transition
            "
          >
            Download Resume
          </a>

        </div>
      </div>
    </section>
  )
}

export default Hero