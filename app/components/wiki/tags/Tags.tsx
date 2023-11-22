import styles from './styles.module.css'

interface TagsProps {
  tags: string[]
}

const Tags = ({ tags }: TagsProps) => {
  return (
    <div className={styles.tagContainer}>
      {tags.map((tag) => (
        <a key={tag}>{tag}</a>
      ))}
    </div>
  )
}

export default Tags
