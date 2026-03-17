'use client'
import React from 'react'
import { FadeIn } from './FadeIn'
export function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }
  return (
    <FadeIn className="col-span-1 md:col-span-4">
      <section
        id="top"
       className="relative bg-white rounded-2xl shadow-sm overflow-hidden 
                hover:bg-green-100 transition-colors duration-300 ease-in-out"
      >
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 gradient-mesh opacity-60 hover" />

        {/* Content */}
        <div className="relative z-10s p-8 md:p-12 lg:p-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-900 tracking-tight 
               transform transition duration-700 ease-out hover:scale-105 hover:text-green-500">
            Buddy Custodio
          </h1>
            <p className="mt-6 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center sm:text-left tracking-wide font-serif text-lg text-gray-700 flex justify-center">
            I enjoy designing efficient solutions, automating processes, and building applications that make a difference. Through my academic projects and practical experience, I’ve honed my ability to adapt to new technologies and collaborate effectively in team environments.
          </p>
  
          <div className="mt-8 flex flex-wrap justify-center gap-3">
  <a
    href="#projects"
    onClick={(e) => handleScroll(e, '#projects')}
    className="inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 text-sm font-medium rounded-full 
             text-center transition-all duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-105 hover:shadow-lg"
  >
    View Projects
  </a>
  <a
    href="#contact"
    onClick={(e) => handleScroll(e, '#contact')}
    className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 text-sm font-medium rounded-full hover:border-gray-400 hover:text-gray-900 transition-colors text-center transition-all duration-300 ease-in-out transform hover:bg--800 hover:scale-105 hover:shadow-lg"
  >
    Get in Touch
  </a>
</div>
        </div>
      </section>
    </FadeIn>
  )
}
