import Head from 'next/head'
import styles from '../styles/Home.module.css'

import dynamic from 'next/dynamic'

const FooterDynamicComponent = dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sunrise Movement Orange County</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
    <main>

        
      </main>

      <FooterDynamicComponent/>

    </div>

  )
}
