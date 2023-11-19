import { PathRepo } from '@/db/repo/PathRepo'

import MenuList from './MenuList'
import styles from './styles.module.css'

const getRootMenuItem = async () => {
  const rootMenuItem = PathRepo.getRootMenuItem()
  return rootMenuItem
}

const Sidebar = async () => {
  const rootMenuItemData = getRootMenuItem()
  const [rootMenuItem] = await Promise.all([rootMenuItemData])
  return (
    <section>
      <div className={styles.menuBox}>
        <div className={styles.menuBoxTitle}>Content</div>
        <hr />
        <MenuList menuItems={rootMenuItem.children} />
      </div>
    </section>
  )
}

export default Sidebar
