import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dealspage1 from './DealPage1'
import Dealpage2 from './Dealpage2'
import Dealpage3 from './Dealpage3'

const DealsPage = () => {
  return (
    <>
    <Routes>
        <Route path='dealspage1' element={<Dealspage1 />}/>
        <Route path='dealspage2' element={<Dealpage2 />}/>
        <Route path='dealspage3' element={<Dealpage3 />}/>
    </Routes>
    </>
  )
}

export default DealsPage