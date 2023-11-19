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
      {/* <div className={styles.hero}>
        <div className={`${styles.card} card`}>Purdue Hackers</div>
      </div> */}
      <div className={`${styles.menuBox} card`}>
        <div className={styles.menuBoxTitle}>
          <div>Content</div>
        </div>
        <hr />
        <MenuList menuItems={rootMenuItem.children} />
      </div>
    </section>
  )
}

export default Sidebar
