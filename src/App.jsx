import AboutMe from './landingPage/AboutMe';
import NavBar from './landingPage/NavBar';
import Profile from './landingPage/Profile';
import Service from './landingPage/Service';
import LatestWork from './landingPage/LatestWork';
import Footer from './landingPage/Footer';
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
        <section id='Portfolio'>
          <LatestWork />
        </section>
        <section id='Service'>
          <Service />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  )
}