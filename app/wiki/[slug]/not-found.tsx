import styles from './styles.module.css'

const NotFoundPage = () => {
  return (
    <div className={styles.postContainer}>
      <h1>404 - Not found</h1>
      <p>Unfortunately, the page you are looking for does not exist {`:<`}</p>
      <p>
        Contact us if you think this is an issue:{' '}
        <a href="mailto:purduehackers@gmail.com">purduehackers@gmail.com</a>
      </p>
    </div>
  )
}

export default NotFoundPage
