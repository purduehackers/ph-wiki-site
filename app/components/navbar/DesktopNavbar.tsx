import Link from 'next/link'

import Logo from './Logo'
import styles from './styles.module.css'

const DesktopNavbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <ul className={styles.desktopLinks}>
        <li>
          <Link href="https://www.purduehackers.com/">Official Website</Link>
        </li>
        <li>
          <Link href="https://blog.purduehackers.com/">Blog</Link>
        </li>
        <li>
          <Link className={styles.active} href="/wiki/readme-1">
            Wiki
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default DesktopNavbar
