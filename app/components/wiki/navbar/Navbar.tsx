import { PathRepo } from '@/db/repo/PathRepo'

import MenuList from './MenuList'
import styles from './styles.module.css'

const getRootMenuItem = async () => {
  const rootMenuItem = PathRepo.getRootMenuItem()
  return rootMenuItem
}

const Navbar = async () => {
  const rootMenuItemData = getRootMenuItem()
  const [rootMenuItem] = await Promise.all([rootMenuItemData])
  return (
    <div className={styles.navbar}>
      <div className={styles.hero}>
        <div className={`${styles.card} card`}>Purdue Hackers</div>
      </div>
      <div className={`${styles.menuBox} card`}>
        <MenuList menuItems={rootMenuItem.children} />
      </div>
    </div>
  )
}

export default Navbar
