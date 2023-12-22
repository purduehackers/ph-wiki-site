import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

import styles from './styles.module.css'

interface MobileNavbarProps {
  setToggle: Dispatch<SetStateAction<boolean>>
}

const MobileNavbar = (props: MobileNavbarProps) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/purdue-hackers.svg"
          alt="purdue hackers icon"
          width={30}
          height={30}
        />
        <h1>Purdue Hackers Wiki</h1>
      </div>
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
