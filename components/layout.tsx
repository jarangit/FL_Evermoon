import React from 'react'
import gradient from '../styles/gradient.module.css'
import Footer from './footer'
import Header from './header'

const Layout = (props: any) => {
  return (
    <div>
      <Header />
      <main>
        <div className="relative bg">
          <div className={`p-1 text-white `}>
            <div>{props.children}</div>
          </div>
          <div className="h-16" />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout
