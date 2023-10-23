import './App.css'
import 'tailwindcss/tailwind.css'
import Nav from './components/Navbar/Navbar'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import MyCalendar from './components/MyCalendar'
import { MyPets } from './pages/MyPets'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Background from './components/Background'

function App() {
  return (
    <Router>
      <>
        <div className='min-h-screen'>
          <Nav></Nav>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/calendar' element={<MyCalendar />} />
            <Route path='/mypets' element={<MyPets />} />
          </Routes>
        </div>
        <Background />
      </>
    </Router>
  )
}

export default App
