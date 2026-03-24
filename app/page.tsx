import { motion } from 'framer-motion'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-800 antialiased">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">

          {/* Profile Image */}
          <div className="col-span-1 md:col-span-4 flex justify-center items-center my-6">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img 
                src="buddy.jpg" 
                alt="Buddy" 
                className="rounded-full border-4 border-white shadow-xl w-40 h-40 object-cover hover:scale-105 transition duration-300"
              />
            </a>
          </div>

          {/* Hero */}
          <Hero />

          {/* About + Skills */}
          <About />
          <Skills />

          {/* Experience + Projects */}
          <Experience />
          <Projects />

          {/* Contact */}
          <Contact />

        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 md:px-6 pb-8">
        <div className="text-center text-sm text-gray-500 tracking-wide">
          © {new Date().getFullYear()} <span className="font-semibold text-gray-700">Buddy Custodio</span>. All rights reserved.
        </div>
      </footer>
    </div>
  )
}