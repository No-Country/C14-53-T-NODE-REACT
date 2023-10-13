import './App.css'
import 'tailwindcss/tailwind.css'
import Nav from './components/Navbar/Navbar'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <>
        <div className='min-h-screen'>
          <Nav></Nav>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </>
    </Router>
  )
}

export default App
