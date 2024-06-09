import { Outlet } from 'react-router-dom'
import AppNav from './AppNav'
import Footer from './Footer'
import Logo from './Logo'
import styles from './Sidebar.module.css'
import React from 'react'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo/>
      <AppNav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Sidebar
