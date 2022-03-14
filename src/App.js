import { useState } from 'react'
import './App.css'
import Header from './Header'
import { ThemeContextProvider } from './ThemeContext/ThemeContext'

export default function App() {
  const [theme, setTheme] = useState({
    theme: 'light',
    isLight: true,
  })

  const changeTheme = (option) => {
    //option is boolean
    if (option) {
      document.body.classList.add('dark-background')
      setTheme({
        theme: 'dark',
        isLight: false,
      })
    } else {
      document.body.classList.remove('dark-background')
      setTheme({
        theme: 'light',
        isLight: true,
      })
    }
  }

  return (
    <ThemeContextProvider
      value={{
        theme: theme,
        changeTheme: changeTheme,
      }}
    >
      <div className="App">
        <Header />
      </div>
    </ThemeContextProvider>
  )
}
