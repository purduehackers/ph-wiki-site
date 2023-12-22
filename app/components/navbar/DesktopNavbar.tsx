import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.css'

const DesktopNavbar = () => {
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
