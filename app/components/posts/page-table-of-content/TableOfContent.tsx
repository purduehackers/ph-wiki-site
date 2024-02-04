import { headingNode } from '@/utils/getheadings'

import ContentList from './ContentList'
import styles from './styles.module.css'

interface TableOfContentProps {
  headings: headingNode[]
}

const TableOfContent = ({ headings }: TableOfContentProps) => {
  return (
    <div className={styles.TableOfContentBox}>
      <div className={styles.TableOfContentBoxTitle}>Table Of Content</div>
      <hr className={styles.divider} />
      <ContentList headings={headings} />
    </div>
  )
}

export default TableOfContent
