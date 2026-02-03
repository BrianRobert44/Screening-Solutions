// App.jsx
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './Components/Navbar'
import Hero from './Components/HeroSection'
import Verification from './Components/VerificationServices'
import WhyChooseUs from './Components/WhyChooseUs'
import Purpose from './Components/OurPurpose'
import Integration from './Components/integration'
import Footer from './Components/footer'
import About from './Pages/About'

function App() {
  return (
    <Router>
     
      <Navbar />

     
      <Routes>
       
        <Route path="/" element={
            <>
              <Hero />
              <Verification />
              <WhyChooseUs />
              <Purpose />
              <Integration />
             
              
            </>
          }
        />

        
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
