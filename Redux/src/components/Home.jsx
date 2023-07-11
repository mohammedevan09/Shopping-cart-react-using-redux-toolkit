import React, { useState } from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div>
      <h1 className="page">Welcome to Redux toolkit store</h1>
      <section>
        <Products />
      </section>
    </div>
  )
}

export default Home
