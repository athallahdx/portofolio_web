import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import Profile from './components/Profile'

export default function App() {
  return (
    <>
      <div id='base' className='flex flex-col bg-custom-gradient min-h-screen'>
        <div>
          <NavBar />
        </div>
        <div>
          <Profile />
        </div>
        <div>
          <AboutMe />
        </div>
      </div>
    </>
  )
}