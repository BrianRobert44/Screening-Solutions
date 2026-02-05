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
import Services from './Pages/Services.jsx'
import Blog from './Pages/Blog.jsx'
import Careers from './Pages/Careers.jsx'
import ScrollToTop from "./Components/ScrollToTop.jsx";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import TalkToTeam from './Pages/TalkToTeam.jsx'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton /> 
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
        <Route path="/Service" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path='/TalkToOurTeam' element={<TalkToTeam />}/>

      </Routes>
      <Footer />
    </Router>
  )
}

export default App
