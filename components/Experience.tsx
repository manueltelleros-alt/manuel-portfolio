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
            <p className="text-xs text-gray-400 font-medium">2024 — Present</p>
            <h3 className="text-sm font-semibold text-gray-900 mt-1">
              Senior Frontend Developer
            </h3>
            <p className="text-sm text-gray-600">Freelance / Next.js Projects</p>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              Lead developer on multiple Next.js apps with SSR and SSG.
              Optimized page load times by 50% and implemented scalable
              component libraries.
            </p>
          </div>

          {/* Previous Role */}
          <div className="relative pl-4 border-l-2 border-gray-200">
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-400" />
            <p className="text-xs text-gray-400 font-medium">2022 — 2024</p>
            <h3 className="text-sm font-semibold text-gray-900 mt-1">
              Next.js Developer
            </h3>
            <p className="text-sm text-gray-600">Private Startup Projects</p>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              Built dynamic dashboards and integrated API routes in Next.js.
              Implemented TypeScript and edge functions for better performance.
            </p>
          </div>

          {/* First Role */}
          <div className="relative pl-4 border-l-2 border-gray-200">
            <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-300" />
            <p className="text-xs text-gray-400 font-medium">2020 — 2022</p>
            <h3 className="text-sm font-semibold text-gray-900 mt-1">
              Frontend Developer
            </h3>
            <p className="text-sm text-gray-600">Personal Projects & Learning</p>
            <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
              Learned Next.js fundamentals. Built and deployed several
              full-stack apps with Next.js, TailwindCSS, and Node.js APIs.
            </p>
          </div>
        </div>
      </section>
    </FadeIn>
  )
}