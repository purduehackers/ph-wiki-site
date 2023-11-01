import { Suspense } from 'react'

import MenuBox from '../component/wiki/menu/MenuBox'
import PostLoading from './loading'
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
          <Suspense fallback={<PostLoading />}>
            <div className={styles.contentBox}>{children}</div>
          </Suspense>
        </div>
      </div>
    </section>
  )
}
