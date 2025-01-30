import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import LatestWork from './components/LatestWork';
import Footer from './components/Footer';
import '/src/css/styles.css';

export default function App() {
  return (
    <>
      <div id='base' className='flex flex-col bg-custom-gradient min-h-screen'>
        <section id='Home'>
          <NavBar />
        </section>
        <section id='Profile'>
          <Profile />
        </section>
        <section id='About'>
          <AboutMe />
        </section>
        <section>
          <LatestWork />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  )
}