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
    <div className="min-h-screen bg-[#F0FDF4] text-gray-900">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">

          {/* Row 1: Centered Image */}
          <div className="col-span-1 md:col-span-4 flex justify-center items-center my-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img 
                src="buddy.jpg" 
                alt="Buddy" 
                className="rounded-full border border-green-300 shadow-lg w-40 h-40 object-cover"
              />
            </a>
          </div>

          {/* Row 1: Hero */}
          <Hero />

          {/* Row 2: About + Skills */}
          <About />
          <Skills />

          {/* Row 3-4: Experience + Projects */}
          <Experience />
          <Projects />

          {/* Row 5: Contact */}
          <Contact />

        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 md:px-6 pb-8">
        <div className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Buddy Custodio
        </div>
      </footer>
    </div>
  )
}