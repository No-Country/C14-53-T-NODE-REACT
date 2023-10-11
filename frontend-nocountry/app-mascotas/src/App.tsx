import './App.css'
import 'tailwindcss/tailwind.css'
import Nav from '../components/Navbar/Navbar'
import HomePage from '../components/HomePage'
import Background from '../components/Background'

function App() {
  return (
    <>
      <div className='min-h-screen'>
        <Nav></Nav>
        <HomePage></HomePage>
        <Background></Background>
      </div>
    </>
  )
}

export default App
