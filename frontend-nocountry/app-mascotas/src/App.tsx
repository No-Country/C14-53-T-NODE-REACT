import './App.css'
import 'tailwindcss/tailwind.css'
import Nav from '../components/Navbar/Navbar'
import HomePage from '../components/HomePage'

function App() {
  return (
    <>
      <div className='min-h-screen'>
        <Nav></Nav>
        <HomePage></HomePage>
      </div>
    </>
  )
}

export default App
