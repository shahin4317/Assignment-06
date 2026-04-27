
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner/Banner'
import Rating from './Components/Rating/Rating'

import Itemcard from './Components/Itemcard/Itemcard'
import { Suspense, useState } from 'react'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import PricingCard from './Components/PricingCard/PricingCard'
import Ready from './Components/ReadySection/Ready'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'

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

  const [carts, setCarts] = useState([])

  
  return (
    <>
    <header>
      <Navbar carts={carts}></Navbar>
    </header>
    <main>
      <Banner></Banner>
      <Rating></Rating>
     
      <Suspense fallback={"loding...."}>
        <Itemcard carts={carts} setCarts={setCarts} itemPromise={itemPromise}></Itemcard>
        <ToastContainer />
      </Suspense>
    </main>
    <footer>
      <DigitalTools></DigitalTools>

      <Suspense fallback={"Loding..."}>
        <PricingCard pricingCardPromise={pricingCardPromise}></PricingCard>
      </Suspense>
      <Ready></Ready>
      <Footer></Footer>
    </footer>
    
    
 
   

    </>
  )
}

export default App
