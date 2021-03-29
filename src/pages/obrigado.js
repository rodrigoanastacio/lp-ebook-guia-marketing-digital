import Head from 'next/head'
import Hero from '../components/Hero'
import ThankYou from '../components/ThankYou'

import styles from '../styles/components/Hero.module.scss'

const Thanks = () => {
  return (
    <>
      <Head>
        <title>Parabéns por adquirir o e-book | Dayane Silva</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <div className={styles.container}>
          <ThankYou/>
        </div>
      </Hero>
    </>
  )
}

export default Thanks