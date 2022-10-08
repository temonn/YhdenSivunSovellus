import './App.css';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className='container'>
        <Routes>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
