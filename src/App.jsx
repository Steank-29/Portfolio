import Layout from "./components/Layout"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import About from "./components/About"
import Services from "./components/Services"

function App() {
 

  return (
    <>
      <Layout>
        <Home />
        <Projects />
        <Services />
        <About />
        <Contact />
      </Layout>
    </>
  )
}

export default App
