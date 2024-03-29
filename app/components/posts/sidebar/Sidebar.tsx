import { PathRepo } from '@/db/repo/PathRepo'

import Logo from '../../navbar/Logo'
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
    <section className={styles.card}>
      <div className={styles.cardHead}>
        <Logo />
      </div>
      <div className={styles.menuBox}>
        <div className={styles.menuBoxTitle}>
          Content [
          <a href="https://github.com/purduehackers/ph-wiki-posts">edit</a>]
        </div>
        <hr className={styles.divider} />
        <MenuList menuItems={rootMenuItem.children} />
      </div>
    </section>
  )
}

export default Sidebar
