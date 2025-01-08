import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Burgur from './Burgur'

const Menu = () => {
  return (
    <Routes>
        <Route path='burgur' element={<Burgur />} />
    </Routes>
  )
}

export default Menu