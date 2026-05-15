'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'

/**
 * Wrap your app with this ThemeProvider
 */
function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeHotkey />
      {children}
    </NextThemesProvider>
  )
}

/**
 * Helper function to detect if the target is typing (input, textarea, select, contentEditable)
 */
function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false

  return (
    target.isContentEditable ||
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    target.tagName === 'SELECT'
  )
}

/**
 * Hotkey component: toggles theme when pressing "D", but ignores typing
 */
function ThemeHotkey() {
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      // Ignore repeated keys or default prevented events
      if (event.defaultPrevented || event.repeat) return

      // Ignore if any modifier keys are pressed
      if (event.metaKey || event.ctrlKey || event.altKey) return

      // SAFETY: event.key might be undefined
      if (!event.key) return

      // Only toggle on "d" key
      if (event.key.toLowerCase() !== 'd') return

      // Ignore if typing in input/textarea/select/contenteditable
      if (isTypingTarget(event.target)) return

      // Toggle theme
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export { ThemeProvider }