import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import InfoLetter from '../components/InfoLetter/InfoLetter'


const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <InfoLetter />
        
    </div>
  )
}

export default Shop