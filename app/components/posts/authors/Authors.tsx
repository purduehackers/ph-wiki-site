import Image from 'next/image'

import GithubUser from '@/types/GithubUser'

import styles from './styles.module.css'

interface AuthorsProps {
  users: GithubUser[]
}

const Authors = ({ users }: AuthorsProps) => {
  return (
    <div className={styles.authorContainer}>
      {users.map((user) => (
        <div className={styles.imageNameContainer} key={user.login}>
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={30}
            height={30}
            className={styles.avatar}
          />
          <a href={user.html_url}>{user.login}</a>
        </div>
      ))}
    </div>
  )
}

export default Authors
