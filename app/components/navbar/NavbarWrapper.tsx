'use client'
import { useEffect, useState } from 'react'

import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import NavbarCard from './NavbarCard'
import styles from './styles.module.css'

const NavbarWrapper = () => {
  const [toggle, setToggle] = useState(false)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleWindowResize)
      return () => window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

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
