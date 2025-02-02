import AboutMe from './AboutMe';
import NavBar from './NavBar';
import Profile from './Profile';
import Service from './Service';
import LatestWork from './LatestWork';
import Footer from './Footer';
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