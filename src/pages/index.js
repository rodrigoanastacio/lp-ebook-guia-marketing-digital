import Head from 'next/head'
import Hero from '../components/Hero'
import Headline from '../components/Headline'
import Form from '../components/Form'
import SubHeadline from '../components/SubHeadline'

import styles from '../styles/components/Hero.module.scss'
// import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ebook: Guia Simplificado do Marketing Digital | Dayane Silva</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <div className={styles.container}>
          <div className={styles.contentText}>
            <Headline/>
            <SubHeadline/>
            <Form/>
          </div>

          <div className={styles.contentImage}>
            <img src="ebook-guia-simplificado-do-marketing-digital.jpg" alt="Imagem ilustrativa da capa do ebook"/>
          </div>
        </div>
      </Hero>
    </>
  )
}
