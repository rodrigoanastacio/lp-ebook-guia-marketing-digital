import styles from '../styles/components/Hero.module.scss'

const Hero = ({ children }) => {
  return (
    <header className={styles.hero}>
      <img src="bg.jpg" alt=""/>
      { children }
    </header>
  )
}

export default Hero