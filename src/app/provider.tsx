'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

type ProviderProps = {
  children: ReactNode
}

export default function Provider({ children }: ProviderProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
