import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

import Logo from './Logo'
import styles from './styles.module.css'

interface MobileNavbarProps {
  setToggle: Dispatch<SetStateAction<boolean>>
}

const MobileNavbar = (props: MobileNavbarProps) => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <div onClick={() => props.setToggle(true)} className={styles.threeLines}>
        <Image
          src="/icons/three-lines.svg"
          alt="three lines"
          width={30}
          height={30}
        />
      </div>
    </div>
  )
}

export default MobileNavbar
