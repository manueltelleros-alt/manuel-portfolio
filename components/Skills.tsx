import React from 'react'
import { FadeIn } from './FadeIn'
import { CodeIcon, LayersIcon, WrenchIcon } from 'lucide-react'

interface SkillCardProps {
  title: string
  skills: string[]
  icon: React.ReactNode
  accentColor: string
  delay: number
  className?: string
  id?: string
}

function SkillCard({
  title,
  skills,
  icon,
  accentColor,
  delay,
  className = '',
  id,
}: SkillCardProps) {
  return (
    <FadeIn delay={delay} className={className}>
      <div
        id={id}
        className="h-full bg-white rounded-2xl shadow-sm p-6 text-center border border-gray-200 
                hover:border-green-500 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        <div
          className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${accentColor} mb-4`}
        >
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

export function Skills() {
  return (
    <>
      <SkillCard
        title="Languages"
        skills={['HTML & CSS', 'JavaScript', 'Go', 'Swift / Kotlin', 'SQL']}
        icon={
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeIcon className="w-5 h-5 text-blue-600" />
          </a>
        }
        accentColor="bg-blue-100"
        delay={0.15}
        className="col-span-1"
        id="skills"
      />
      <SkillCard
        title="Frameworks"
        skills={['React', 'Node.js', 'Next.js', 'Laravel']}
        icon={<LayersIcon className="w-5 h-5 text-purple-600" />}
        accentColor="bg-purple-100"
        delay={0.2}
        className="col-span-1"
      />
      <SkillCard
        title="Tools"
        skills={['MySQL', 'XAMPP', 'phpAdmin', 'Visual Studio Code', 'Chatgpt', 'Git']}
        icon={<WrenchIcon className="w-5 h-5 text-emerald-600" />}
        accentColor="bg-emerald-100"
        delay={0.25}
        className="col-span-1"
      />
    </>
  )
}