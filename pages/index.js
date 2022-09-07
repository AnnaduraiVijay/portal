import Head from 'next/head'
import Login from '../component/login/Login'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Interview</title>
        <meta name="Interview" content="Interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Login />
      </main>
    </div>
  )
}
