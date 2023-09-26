import './index.css'
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Companies from "./Components/companies/companies"
import Residencies from "./Components/Residencies/Residencies"
import Value from "./Components/Value/Value"
import Contact from "./Components/Contact/Contact"
import Started from "./Components/GetStarted/Started"
import Footer from "./Components/Footer/Footer"
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Started />
  <Footer />
    </>
  ) 
}

export default App
