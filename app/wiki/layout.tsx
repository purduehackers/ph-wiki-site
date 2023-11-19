import { Suspense } from 'react'

import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/wiki/sidebar/Sidebar'
import PostLoading from './loading'
import styles from './styles.module.css'

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar />
      <div className={styles.mainFrame}>
        <div className={styles.menuFrame}>
          <Sidebar />
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
