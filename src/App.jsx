
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner/Banner'
import Rating from './Components/Rating/Rating'

import Itemcard from './Components/Itemcard/Itemcard'
import { Suspense } from 'react'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import PricingCard from './Components/PricingCard/PricingCard'

const fetchItem= async()=>{
  const res = await fetch('./ProductData.json')
  return res.json();
}
const fetchCard = async() =>{
  const res = await fetch('./PricingCard.json')
  return res.json();
}

function App() {
  const itemPromise = fetchItem();
  const pricingCardPromise = fetchCard()

  
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <main>
      <Banner></Banner>
      <Rating></Rating>
     
      <Suspense fallback={"loding...."}>
        <Itemcard itemPromise={itemPromise}></Itemcard>
      </Suspense>
    </main>
    <footer>
      <DigitalTools></DigitalTools>

      <Suspense fallback={"Loding..."}>
        <PricingCard pricingCardPromise={pricingCardPromise}></PricingCard>
      </Suspense>
    </footer>
    
    
 
   

    </>
  )
}

export default App
