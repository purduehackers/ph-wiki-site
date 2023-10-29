import MenuBox from '../component/wiki/menu/MenuBox'
import styles from './styles.module.css'

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className={styles.mainFrame}>
        <div className={styles.menuFrame}>
          <MenuBox />
        </div>
        <div className={styles.contentFrame}>
          <div className={styles.contentBox}>{children}</div>
        </div>
      </div>
    </section>
  )
}
