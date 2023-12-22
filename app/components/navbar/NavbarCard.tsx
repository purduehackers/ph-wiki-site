import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

import styles from './styles.module.css'

interface NavbarCardProps {
  setToggle: Dispatch<SetStateAction<boolean>>
}

const NavbarCard = (props: NavbarCardProps) => {
  return (
    <div className={styles.mobileLinks}>
      <div
        className={styles.x}
        onClick={() => {
          props.setToggle(false)
        }}
      >
        <Image src="/icons/x.svg" alt="x" width={20} height={20} />
      </div>
      <ul className="">
        <li>
          <Link className={styles.active} href="/wiki/readme-1">
            Wiki
          </Link>
        </li>
        <li>
          <Link href="https://blog.purduehackers.com/">Blog</Link>
        </li>
        <li>
          <Link href="https://www.purduehackers.com/">Official Website</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavbarCard
