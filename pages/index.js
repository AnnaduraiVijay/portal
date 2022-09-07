import { useState } from 'react';
import Head from 'next/head'
import Dashboard from '../component/dashboard/Dashboard';
import Login from '../component/login/Login'
import Register from '../component/register/register'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [isUserLoggedIn, setUserIsLoggedIn] = useState(false);
  const [loggedUserInfo, setLoggedUserInfo] = useState(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>Interview</title>
        <meta name="Interview" content="Interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!isUserLoggedIn && <Login
          setUserIsLoggedIn={setUserIsLoggedIn}
          setLoggedUserInfo={setLoggedUserInfo}
        />}
        {/* <Register /> */}
        {isUserLoggedIn && <Dashboard loggedUserInfo={loggedUserInfo} />}
      </main>
    </div>
  )
}
