import { Suspense } from 'react'

import NavbarWrapper from '../components/navbar/NavbarWrapper'
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
      <NavbarWrapper />
      <div className={styles.mainFrame}>
        <div className={styles.menuFrame}>
          <Sidebar />
        </div>
        <Suspense fallback={<PostLoading />}>
          <div className={styles.contentFrame}>
            <div className={styles.contentBox}>{children}</div>
          </div>
          {/* <div>
            <PageTableOfContent />
          </div> */}
        </Suspense>
      </div>
    </section>
  )
}
