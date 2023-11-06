import Link from 'next/link'

import { pathRepo } from '@/db/repo/PathRepo'
import menuItemI from '@/interfaces/MenuItem'
import MenuItem from '@/interfaces/MenuItem'

import styles from './styles.module.css'

const getAllMenuItems = async () => {
  return pathRepo.getAllMenuItems()
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
            {menuItem.children.length && (
              <MenuList menuItems={menuItem.children} />
            )}
          </li>
        )
      })}
    </ol>
  )
}

const MenuBox = async () => {
  const menuItemsData = getAllMenuItems()
  const [menuItems] = await Promise.all([menuItemsData])
  return (
    <div className={styles.menuBox}>
      <h1>Purdue Hackers Wiki</h1>
      <h2>Chapters</h2>
      <MenuList menuItems={menuItems.children} />
    </div>
  )
}

export default MenuBox
