import Link from 'next/link'

import styles from './styles.module.css'

interface TagsProps {
  tags: string[]
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className={styles.tagContainer}>
      {tags.map((tag) => (
        <Link className={styles.tag} key={tag} href={'/wiki/tag/' + tag}>
          {tag}
        </Link>
      ))}
    </div>
  )
}

export default Tags
