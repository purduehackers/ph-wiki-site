import { Suspense } from 'react'

import Navbar from '../components/wiki/navbar/Navbar'
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
          <Navbar />
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
