import ConfigSection from './components/ConfigSection'
import Navbar from './components/Navbar'
import Output from './components/Output'

function App() {

  return (
    <>
      <Navbar/>
      <main className='grid grid-cols-5 pt-16 bg-gray-700 h-screen'>
        <Output/>
        <ConfigSection/>
      </main>
    </>
  )
}

export default App
