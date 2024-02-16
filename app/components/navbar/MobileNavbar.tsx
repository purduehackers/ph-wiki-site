import Image from 'next/image'
import Link from 'next/link'

import Logo from './Logo'
import styles from './styles.module.css'

const MobileNavbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <div className={styles.house}>
        <Link href={'/mobile/menu'}>
          <Image
            src="/icons/house.png"
            alt="three lines"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  )
}

export default MobileNavbar
