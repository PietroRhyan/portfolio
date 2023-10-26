'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type SwicthThemeType = {
  isInDarkTheme: boolean
  toggleThemeHandler: () => void
}

type Props = {
  children: ReactNode
}

const SwitchThemeDefaultValues: SwicthThemeType = {
  isInDarkTheme: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleThemeHandler: () => {},
}

export const SwitchThemeContext = createContext<SwicthThemeType>(
  SwitchThemeDefaultValues,
)

export function SwitchTheme() {
  return useContext(SwitchThemeContext)
}

export function SwitchThemeProvider({ children }: Props) {
  const [isInDarkTheme, setIsInDarkTheme] = useState(false)

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem('darkTheme')
  }

  function InitialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem('darkTheme', 'false')
      setIsInDarkTheme(false)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const darkTheme: boolean = JSON.parse(localStorage.getItem('darkTheme')!)

      darkTheme && document?.querySelector('html')?.classList.add('dark')
      setIsInDarkTheme(darkTheme)
    }
  }

  useEffect(() => {
    InitialThemeHandler()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function toggleThemeHandler(): void {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const darkTheme: boolean = JSON.parse(localStorage.getItem('darkTheme')!)

    setIsInDarkTheme(!darkTheme)
    toggleDarkClassToHtmlTag()
    setValueToLocalStorage()
  }

  function toggleDarkClassToHtmlTag(): void {
    document?.querySelector('html')?.classList.toggle('dark')
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem('darkTheme', `${!isInDarkTheme}`)
  }

  return (
    <SwitchThemeContext.Provider value={{ isInDarkTheme, toggleThemeHandler }}>
      {children}
    </SwitchThemeContext.Provider>
  )
}
