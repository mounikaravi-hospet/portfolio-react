import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <div>
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                <a href="mailto:hospet.mounikaravi@gmail.com">hospet.mounikaravi@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
                <a href="https://www.linkedin.com/in/mounikaravi989/">https://linkedin.com/in/mounikaravi989/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
                <a href="https://github.com/mounikaravi-hospet">https://github.com/mounikaravi-hospet</a>
            </li>
        </ul>

        
    </footer>
    <a href="https://www.freepik.com/free-vector/3d-cartoon-young-woman-sitting-using-laptop-character-illustration-vector-design_24325547.htm">Image by felicities</a> on Freepik</div>
  )
}
