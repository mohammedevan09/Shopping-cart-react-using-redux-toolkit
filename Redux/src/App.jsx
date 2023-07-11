import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
