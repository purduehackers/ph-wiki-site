import Image from 'next/image'

import styles from './styles.module.css'

const Navbar = () => {
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
      <ul>
        <li>Documentation</li>
      </ul>
    </div>
  )
}

export default Navbar