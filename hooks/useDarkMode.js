import { useEffect, useState } from "react";
export default function useDarkMode() {

    let savedTheme = 'light'
    if (typeof window !== 'undefined') {
            savedTheme = localStorage.theme;
        }
    
    const [theme, setTheme] = useState(savedTheme)
    const colorTheme = theme === 'light' ? 'dark' : 'light'
    useEffect(()=> {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    },[theme, colorTheme])

    return [colorTheme, setTheme]
}
