import './App.css'
import 'tailwindcss/tailwind.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Profile } from './components/Profile'

// connection?.init(useGlobalStore)

function App() {
  return (
    <Router>
      <>
        <div>
          <Navbar></Navbar>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
      </>
    </Router>
  )
}

export default App
