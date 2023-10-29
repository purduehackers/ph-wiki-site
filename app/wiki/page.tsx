import styles from './styles.module.css'

const WikiPage = () => {
  return (
    <div className={styles.mainFrame}>
      <div className={styles.menuFrame}>
        <div className={styles.menuBox}>
          <h1>Purdue Hackers Wiki</h1>
          <h2>Chapters</h2>
        </div>
      </div>
      <div className={styles.contentFrame}>hi2</div>
    </div>
  )
}

export default WikiPage
