import React from 'react'
import { FadeIn } from './FadeIn'
export function About() {
  return (
    <FadeIn delay={0.1} className="col-span-1 md:col-span-2">
      <section
        id="about"
        className="h-full bg-white rounded-2xl shadow-sm p-6 text-center border border-gray-200 
                hover:border-green-500 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
          About
        </span>
        <p className="mt-4 text-gray-700 leading-relaxed">
          My goal is to create applications that not only function perfectly but also
              provide an intuitive user experience. I enjoy collaborating with teams and
              continuously learning new technologies to improve my craft.
        </p>
        <p className="mt-3 text-gray-600 leading-relaxed text-sm">
          When I'm not coding, I love exploring design trends, contributing to open-source
              projects, and sharing knowledge with the developer community.
        </p>
      </section>
    </FadeIn>
  )
}