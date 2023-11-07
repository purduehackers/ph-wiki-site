import Link from 'next/link'

import { pathRepo } from '@/db/repo/PathRepo'
import menuItemI from '@/interfaces/MenuItem'
import MenuItem from '@/interfaces/MenuItem'

import styles from './styles.module.css'

const getRootMenuItem = async () => {
  const rootMenuItem = pathRepo.getRootMenuItem()
  return rootMenuItem
}

interface MenuListProps {
  menuItems: MenuItem[]
}

const MenuList = ({ menuItems }: MenuListProps) => {
  return (
    <ol>
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
    </ol>
  )
}

const MenuBox = async () => {
  const rootMenuItemData = getRootMenuItem()
  const [rootMenuItem] = await Promise.all([rootMenuItemData])
  return (
    <div className={styles.menuBox}>
      <h1>Purdue Hackers Wiki</h1>
      <h2>Chapters</h2>
      <MenuList menuItems={rootMenuItem.children} />
    </div>
  )
}

export default MenuBox
