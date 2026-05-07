import React, { useContext } from 'react'
import { ThemeContext } from './Context'

const Themebtn = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <button onClick={toggleTheme}>
        {theme==='Light'?'Dark':'Light'}
    </button>
  )
}

export default Themebtn