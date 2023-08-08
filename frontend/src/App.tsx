import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Technologies from "./pages/Technologies";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<Aboutme />} />
        <Route path='/tech' element={<Technologies />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
