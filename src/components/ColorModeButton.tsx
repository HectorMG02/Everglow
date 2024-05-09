import React, { useEffect, useState } from 'react'

const ColorModeButton = () => {
    const [darkModeEnabled, setDarkModeEnabled] = useState("0")
  
    const changeColorMode = () => {
        document.documentElement.classList.toggle('dark');
        const value = localStorage.getItem('darkModeEnabled') === '1' ? '0' : '1';
        
        localStorage.setItem(
            'darkModeEnabled',
            value
        );


        setDarkModeEnabled(value)
    }
    
    const checkButtonIcon = () => {
        if (localStorage.getItem('darkModeEnabled') === '1') {
            return "sun.png"
        }

        return "moon.png"
    }

    useEffect(() => {
        const darkModeValue = localStorage.getItem('darkModeEnabled');
        if (darkModeValue) {
            setDarkModeEnabled(darkModeValue)
        } else {
            localStorage.setItem('darkModeEnabled', '0')
        }
    }, [])

  return (
    <button 
        onClick={changeColorMode}
        className="btn btn-primary

                bg-transparent
            rounded-lg p-1
        "
    >
        <img 
            src={`/images/${checkButtonIcon()}`}
            className='size-6'
        alt="color mode"/>
    </button>
  )
}

export default ColorModeButton