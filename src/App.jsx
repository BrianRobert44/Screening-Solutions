import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/HeroSection'
import Verification from './Components/VerificationServices'
import WhyChooseUs from './Components/WhyChooseUs'
import Purpose from './Components/OurPurpose'
import Integration from './Components/integration'
import Footer from './Components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Verification />
      <WhyChooseUs />
      <Purpose />
      <Integration />
      <Footer />
    </>
  )
}

export default App
