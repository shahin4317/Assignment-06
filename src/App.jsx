
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner/Banner'
import Rating from './Components/Rating/Rating'
import PremiumToolsSection from './Components/PremiumToolsSection/PremiumToolsSection'
import Itemcard from './Components/Itemcard/Itemcard'
function App() {


  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <main>
      <Banner></Banner>
      <Rating></Rating>
      <PremiumToolsSection></PremiumToolsSection>
      <br />
      <br />
    </main>
    <Itemcard></Itemcard>
    
 
   

    </>
  )
}

export default App
