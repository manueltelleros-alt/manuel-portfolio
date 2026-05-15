import React from 'react'
import { FadeIn } from './FadeIn'
import { BriefcaseIcon } from 'lucide-react'

export function Experience() {
  return (
    <FadeIn delay={0.3} className="col-span-1 md:row-span-2">
      <section
        id="experience"
        className="h-full bg-white rounded-2xl shadow-sm p-6 text-center border border-gray-200 
                hover:border-green-500 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        <div className="flex items-center gap-2 mb-5">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100">
            <BriefcaseIcon className="w-4 h-4 text-amber-600" />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Experience
          </span>
        </div>

        <div className="space-y-5">
          {/* Latest Role */}
          <div className="relative pl-4 border-l-2 border-gray-200">
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-900" />
            <p className="text-xs text-gray-400 font-medium">Capstone Project</p>
            <h3 className="text-sm font-semibold text-gray-900 mt-1">
              Description
            </h3>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              Developed SmartRent, a comprehensive web-based system designed to streamline the management of boarding houses and rental properties. The system integrates tenant management, room allocation, payment tracking, and reservation handling into a single platform, improving operational efficiency for property owners.
            </p>
          </div>

          {/* Previous Role */}
          <div className="relative pl-4 border-l-2 border-gray-200">
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-400" />
            <h3 className="text-sm font-semibold text-gray-900 mt-1">
              Technologies Used
            </h3>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              Frontend: HTML, CSS, Tailwind CSS, React / Next.js
              Backend: PHP / Node.js (depending on your stack)
              Database: MySQL
              Tools: Git, GitHub, Nodemailer / SMTP services
            </p>
          </div>

          {/* First Role */}
          <div className="relative pl-4 border-l-2 border-gray-200">
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-300" />
            <h3 className="text-sm font-semibold text-gray-900 mt-1">
              Key Achievements
            </h3>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              Reduced manual workload by automating tenant and payment management processes.
Improved booking efficiency with a seamless online reservation system.
Delivered a scalable solution suitable for small to medium-sized rental businesses.
            </p>
          </div>
        </div>
      </section>
    </FadeIn>
  )
}