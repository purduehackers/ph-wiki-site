import Link from 'next/link'

import { PathRepo } from '@/db/repo/PathRepo'
import menuItemI from '@/interfaces/MenuItem'
import MenuItem from '@/interfaces/MenuItem'

import styles from './styles.module.css'

const getRootMenuItem = async () => {
  const rootMenuItem = PathRepo.getRootMenuItem()
  return rootMenuItem
}

interface MenuListProps {
  menuItems: MenuItem[]
}

const MenuList = ({ menuItems }: MenuListProps) => {
  return (
    <ul>
      {menuItems.map((menuItem: menuItemI) => {
        return (
          <li key={menuItem.id}>
            <Link href={'/wiki/' + menuItem.id}>{menuItem.name}</Link>
            {menuItem.children.length > 0 && (
              <MenuList menuItems={menuItem.children} />
            )}
          </li>
        )
      })}
    </ul>
  )
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
