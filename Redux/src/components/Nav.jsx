import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../App.css'

const Nav = () => {
  const items = useSelector((state) => state.cart)
  // console.log(items)

  return (
    <nav className="nav">
      <span className="logo">Redux</span>
      <div className="links">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <div className="middle">|</div>
        <NavLink className="navLink" to="/cart">
          Cart
        </NavLink>
      </div>
      <span className="cartCount">Cart items: {items.length}</span>
    </nav>
  )
}

export default Nav
