'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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
            <div key={menuItem.id} className={styles.menuItemFile}>
              <Link href={'/wiki/' + menuItem.slug}>{menuItem.name}</Link>
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
  const [open, setOpen] = useState<boolean>(false)

  const triangleStyle = {
    transform: open ? 'rotate(90deg)' : '',
    transition: 'transform 150ms ease',
  }

  return (
    <div key={menuItem.id} className={styles.menuItemFolder}>
      <div className={styles.menuItemFolderLink}>
        <div style={triangleStyle}>
          <Image
            src="/icons/triangle.png"
            alt="triangle"
            width={10}
            height={10}
          />
        </div>
        <div
          className={styles.menuItemFolderName}
          onClick={() => {
            setOpen(!open)
          }}
        >
          {menuItem.name}
        </div>
      </div>
      <div className={styles.indent}>
        {open && <MenuList menuItems={menuItem.children} />}
      </div>
    </div>
  )
}

export default MenuList
