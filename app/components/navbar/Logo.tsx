import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.css'

const Logo = () => {
  return (
    <Link className={styles.logo} href="/wiki">
      <Image
        src="/images/purdue-hackers.svg"
        alt="purdue hackers icon"
        width={30}
        height={30}
      />
      <h1>Purdue Hackers Wiki</h1>
    </Link>
  )
}

export default Logo
