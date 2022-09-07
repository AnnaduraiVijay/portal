import Head from 'next/head'
import Register from '../component/register/register'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Interview</title>
                <meta name="Interview" content="Interview" />
            </Head>

            <main className={styles.main}>
                <Register />
                <Link href="/"> Home </Link>
            </main>
        </div>
    )
}
