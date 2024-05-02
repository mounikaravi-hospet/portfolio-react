import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Mounika</h1>
            <p className={styles.description}>
                I am a Software Developer with 2.5 years of experience. I am a Computer Science graduate from Georgia State University
            </p>
            <a className={styles.contactBtn} href="mainto:hospet.mounikaravi@gmail.com">Contact Me</a>
        </div>

        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero-Image" />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
  )
}
