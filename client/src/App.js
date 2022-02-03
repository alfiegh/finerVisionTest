import './App.css';
import Nav from './components/Navbar';
import Home from './pages/Home';
import MultiStepForm from './forms/MultiStepForm';
import People from './pages/People';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme='dark'
        transition={Zoom}
      />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<MultiStepForm />} />
        <Route path='/people' element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
