
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Events from './components/Events'
// import FeedbackForm from './components/FeedbackForm'
import ShowFeedBack from './components/ShowFeedBack'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Events />
      {/* <FeedbackForm /> */}
      <ShowFeedBack />
      <Footer />
    </>

  )
}

export default App
