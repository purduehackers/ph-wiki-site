import DesktopNavbar from '@/app/components/navbar/DesktopNavbar'
import MobileMenu from '@/app/components/posts/sidebar/MobileMenu'

import styles from './styles.module.css'

const Menu = () => {
  return (
    <div>
      <DesktopNavbar />
      <div className={styles.menu}>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Menu
