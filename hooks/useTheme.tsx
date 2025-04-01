import { Colors, ThemeType } from '@/constants/Colors'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'

interface ThemeContextType {
  theme: ThemeType
  colors: typeof Colors.light
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemTheme = useColorScheme()
  const [theme, setTheme] = useState<ThemeType>(systemTheme || 'light')

  useEffect(() => {
    setTheme(systemTheme || 'light')
  }, [systemTheme])

  const toggleTheme = () => {
    setTheme((prev: ThemeType) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider
      value={{ theme, colors: Colors[theme], toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }
  return context
}
