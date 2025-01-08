import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Deals from './Deals'
import DealsPage from './DealsPage.js'
import Menu from './Meun'
import Gallery from './Gallery'
import TableWare from './TableWare'
import Kitchenware from './kitchenware'

const Frontend = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='menu/*' element={<Menu />} />
        <Route path='deals' element={<Deals />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='tableware' element={<TableWare />} />
        <Route path='kitchenequipment' element={<Kitchenware />} />
        <Route path='dealspage/*' element={<DealsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Frontend