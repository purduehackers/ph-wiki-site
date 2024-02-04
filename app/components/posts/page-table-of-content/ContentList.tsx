import Link from 'next/link'

import { headingNode } from '@/utils/getheadings'

import styles from './styles.module.css'

interface PageTableOfContentProps {
  headings: headingNode[]
}

const ContentList = ({ headings }: PageTableOfContentProps) => {
  return (
    <ul>
      {headings.map((child) => {
        return (
          <li key={child.key} className={styles.item}>
            <Link href={`#${child.key}`}>{child.text}</Link>
            <ContentList headings={child.children} />
          </li>
        )
      })}
    </ul>
  )
}

export default ContentList
