import React from 'react'
import { FadeIn } from './FadeIn'
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'
interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  gradient: string
  github: string
  live: string
  delay: number
  className?: string
  id?: string
}
function ProjectCard({
  title,
  description,
  tech,
  gradient,
  github,
  live,
  delay,
  className = '',
  id,
}: ProjectCardProps) {
  return (
    <FadeIn delay={delay} className={className}>
      <div
        id={id}
        className="h-full bg-white rounded-2xl shadow-sm p-6 text-center border border-gray-200 
                hover:border-green-500 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        {/* Gradient header strip */}
        <div className={`h-2 ${gradient}`} />

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed flex-1">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-gray-500 bg-gray-100 rounded"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
            <a
              href={github}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors"
              aria-label={`View ${title} on GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Code
            </a>
            <a
              href={live}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLinkIcon className="w-3.5 h-3.5" />
              Demo
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
export function Projects() {
  return (
    <>
      <ProjectCard
        title="Nexus Analytics"
        description="Real-time event tracking and analytics dashboard for SaaS products."
        tech={['React', 'TypeScript', 'ClickHouse', 'Go']}
        gradient="bg-gradient-to-r from-blue-400 to-cyan-400"
        github="#"
        live="#"
        delay={0.35}
        className="col-span-1 md:col-span-2"
        id="projects"
      />
      <ProjectCard
        title="Lumina Editor"
        description="Block-based rich text editor with real-time collaboration."
        tech={['Next.js', 'ProseMirror', 'Yjs']}
        gradient="bg-gradient-to-r from-violet-400 to-purple-400"
        github="#"
        live="#"
        delay={0.4}
        className="col-span-1"
      />
      <ProjectCard
        title="Aura UI"
        description="Minimalist, accessible component library for React applications."
        tech={['React', 'Tailwind', 'Radix UI']}
        gradient="bg-gradient-to-r from-rose-400 to-pink-400"
        github="#"
        live="#"
        delay={0.45}
        className="col-span-1 md:col-span-2"
      />
      <ProjectCard
        title="Orbit CLI"
        description="Command-line tool for managing multi-cloud deployments with ease."
        tech={['Rust', 'AWS SDK', 'Docker']}
        gradient="bg-gradient-to-r from-amber-400 to-orange-400"
        github="#"
        live="#"
        delay={0.5}
        className="col-span-1 md:col-span-2"
      />
    </>
  )
}
