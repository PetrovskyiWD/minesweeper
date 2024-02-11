import React from 'react'
import styles from './Legend.module.scss'

const Legend = () => {
  return (
    <legend className={styles.legend}>
      <strong>Flag: </strong>
      <code className={styles.code}>
        <span className={styles.key}>ctrl</span> + <span className={styles.click}>click</span>
      </code>
    </legend>
  )
}

export default Legend

