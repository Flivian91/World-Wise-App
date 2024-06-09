import React from 'react'
import styles from './Button.module.css'
function Button({children, type, onClick}) {
  return (
    <button onClick={onclick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  )
}

export default Button
