import './App.css'
import 'tailwindcss/tailwind.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import MyCalendar from './components/MyCalendar'
import { PageNotFound } from './pages/PageNotFound'
import { MyPets } from './pages/MyPets'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Background from './components/Background'
import { Profile } from './components/Profile'
import { ProtectedRoute } from './components/ProtectedRoute'
import { ProtectedRouteAfterLogin } from './components/ProtectedRouteAfterLogin'
import { useGlobalStore } from './store/globalStore'
import { MedicalRecords } from './pages/MedicalRecords'
import { Medicaments } from './pages/Medicaments'

function App() {
  const isAuth = useGlobalStore(state => state.isAuth)

  return (
    <Router>
      <>
        <div className='relative'>
          <Navbar></Navbar>

          <Routes>
            <Route element={<ProtectedRouteAfterLogin isAllowed={isAuth} />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>

            <Route element={<ProtectedRoute isAllowed={isAuth} />}>
              <Route path='/calendar' element={<MyCalendar />} />
              <Route path='/mypets' element={<MyPets />} />
              <Route path='/medicaments' element={<Medicaments />} />
              <Route path='/medicalrecords' element={<MedicalRecords />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/profile' element={<Profile />} />
            </Route>

            <Route path='*' element={<PageNotFound />}></Route>
          </Routes>
          <Background />
        </div>
      </>
    </Router>
  )
}

export default App
