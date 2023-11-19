'use client'
import Link from 'next/link'

import menuItemI from '@/interfaces/MenuItem'
import MenuItem from '@/interfaces/MenuItem'

import styles from './styles.module.css'

interface MenuListProps {
  menuItems: MenuItem[]
}

const MenuList = ({ menuItems }: MenuListProps) => {
  return (
    <div>
      {menuItems.map((menuItem: menuItemI) => {
        if (menuItem.type === 'path') {
          return (
            <div key={menuItem.id}>
              <MenuListPath menuItem={menuItem} />
            </div>
          )
        } else {
          return (
            <div key={menuItem.id}>
              <Link href={'/wiki/' + menuItem.slug}>
                <div className={styles.menuItem}># {menuItem.name}</div>
              </Link>
            </div>
          )
        }
      })}
    </div>
  )
}

interface MenuListPathProps {
  menuItem: MenuItem
}

const MenuListPath = ({ menuItem }: MenuListPathProps) => {
  return (
    <details key={menuItem.id} className={styles.menuFolder}>
      <summary className={styles.menuItem}>{menuItem.name}</summary>
      <div className={styles.indent}>
        <MenuList menuItems={menuItem.children} />
      </div>
    </details>
  )
}

export default MenuList
