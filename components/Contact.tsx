'use client'
import React, { useState } from 'react'
import { FadeIn } from './FadeIn'
import { MailIcon, LinkedinIcon, GithubIcon, SendIcon } from 'lucide-react'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const payload = {
      senderName: formState.name || "Not provided",
      senderEmail: formState.email || "Not provided",
      message: formState.message || "Not provided",
    }

    try {
      const apiUrl = `${window.location.origin}/api/send-email`

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (data.message === "Email sent successfully") {
        alert("Message sent successfully!")
        setFormState({ name: '', email: '', message: '' })
      } else {
        alert("Error sending message")
      }

    } catch (error) {
      console.error(error)
      alert("Something went wrong")
    }
  }

  return (
    <FadeIn delay={0.55} className="col-span-1 md:col-span-2">
      <section
        id="contact"
        className="h-full bg-white rounded-2xl shadow-sm p-5 md:p-8 duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg relative h-full rounded-2xl p-6 text-center border border-gray-200 bg-gradient-to-br from-green-50 via-green-100 to-green-200 hover:from-green-100 hover:via-green-200 hover:to-green-300 transition-all duration-500 hover:scale-105 hover:shadow-xl" 
      >

        {/* Header */}
        <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-gray-400">
          Get in Touch
        </span>

        <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
          I'm always open to interesting conversations and opportunities.
        </p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Name"
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              required
              className="w-full px-4 py-3 md:py-2.5 text-base md:text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            />

            <input
              type="email"
              placeholder="Email"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              required
              className="w-full px-4 py-3 md:py-2.5 text-base md:text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            />

            <textarea
              rows={4}
              placeholder="Message"
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              required
              className="w-full px-4 py-3 md:py-2.5 text-base md:text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            />

            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 md:py-2.5 text-base md:text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <SendIcon className="w-4 h-4" />
              Send Message
            </button>

          </form>

          {/* Social Links */}
          <div className="flex flex-col justify-center">

            <p className="text-xs md:text-sm font-medium uppercase tracking-wider text-gray-400 mb-4">
              Or connect directly
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">

              <a
               href="https://support.google.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 px-4 py-3 md:py-2.5 text-base md:text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <MailIcon className="w-4 h-4" />
                Email
              </a>

              <a
              href="https://www.linkedin.com/in/manuel-telleros-415b7a3b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 md:py-2.5 text-base md:text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href="https://github.com/manueltelleros-alt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 md:py-2.5 text-base md:text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  )
}