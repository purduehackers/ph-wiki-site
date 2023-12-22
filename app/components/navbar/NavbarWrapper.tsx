'use client'
import { useEffect, useState } from 'react'

import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import NavbarCard from './NavbarCard'
import styles from './styles.module.css'

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { width }
}

const NavbarWrapper = () => {
  const [toggle, setToggle] = useState(false)
  const { width } = useViewport()
  const mobileBreakpoint = 600

  useEffect(() => {
    document.body.style.overflow = toggle ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [toggle])

  return (
    <div>
      {toggle && (
        <div>
          <div
            className={styles.mask}
            onClick={() => {
              setToggle(false)
            }}
          ></div>
          <NavbarCard setToggle={setToggle} />
        </div>
      )}
      {width <= mobileBreakpoint ? (
        <MobileNavbar setToggle={setToggle} />
      ) : (
        <DesktopNavbar />
      )}
    </div>
  )
}

export default NavbarWrapper
