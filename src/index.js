import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>
    <img className="img-module" alt={text} src={text} />
    <img className="img-module" alt={text} src={text}/>
  </div>
}
