import { Suspense } from 'react'

import MobileNavbar from '../components/navbar/MobileNavbar'
import Sidebar from '../components/posts/sidebar/Sidebar'
import PostLoading from './loading'
import styles from './styles.module.css'

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <MobileNavbar />
      <div className={styles.mainFrame}>
        <div className={styles.menuFrame}>
          <Sidebar />
        </div>
        <Suspense fallback={<PostLoading />}>
          <div className={styles.contentFrame}>{children}</div>
        </Suspense>
      </div>
    </section>
  )
}
