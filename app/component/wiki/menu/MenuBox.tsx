import Link from 'next/link'

import { postRepo } from '@/db/repo/post'
import menuItemI from '@/interfaces/menuItem'

import styles from './styles.module.css'

const getAllMenuItems = async () => {
  return postRepo.getAllMenuItems()
}

const MenuBox = async () => {
  const menuItemsData = getAllMenuItems()
  const [menuItems] = await Promise.all([menuItemsData])
  return (
    <div className={styles.menuBox}>
      <h1>Purdue Hackers Wiki</h1>
      <h2>Chapters</h2>
      <ol>
        {menuItems.map((menuItem: menuItemI) => {
          return (
            <li key={menuItem.id}>
              <Link href={'/wiki/' + menuItem.id}>{menuItem.title}</Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default MenuBox
