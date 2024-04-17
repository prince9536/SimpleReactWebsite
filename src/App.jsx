import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Footer from "./Components/Footer";
import Services from './Components/Service';

import "./Styles/App.scss";
import "./Styles/header.scss";
import "./Styles/home.scss";
import "./Styles/footer.scss";
import "./Styles/contact.scss";
import "./Styles/mediaQuery.scss"


function App() {  

  return (
    <>
        <Router>
        <Header />
                 <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/Contact" element={<Contact />} />
                  <Route path="/Services" element={<Services />} />

                 </Routes>

            <Footer/>
        </Router>
    </>
  )
}

export default App
