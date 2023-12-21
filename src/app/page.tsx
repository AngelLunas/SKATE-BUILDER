import Image from 'next/image'
import styles from './page.module.css'
import Scene from './scene'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.builder}>
        Skate builder
      </div>
      <div className={styles.scene}>
        <Scene />
      </div>
    </div>
  )
}