
import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <main>{children}</main>
        <div/>

    </div>
  )
}

export default Layout