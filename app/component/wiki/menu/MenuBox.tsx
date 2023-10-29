import Link from 'next/link'

import menuItemI from '@/interfaces/menuItem'

import styles from './styles.module.css'

const getMenu = async () => {
  const appURI = process.env.APP_URI
  const menuItems = await fetch(`${appURI}/api/post`)
  if (menuItems.ok) {
    return menuItems.json()
  }
  return []
}

const MenuBox = async () => {
  const menuItemsData = getMenu()
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
