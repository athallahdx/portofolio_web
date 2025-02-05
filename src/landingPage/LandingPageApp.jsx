import AboutMe from './AboutMe';
// import NavBar from './NavBar';
import Profile from './Profile';
import Service from './Service';
import LatestWork from './LatestWork';
// import Footer from './Footer';
import '../css/styles.css';

export default function LandingPageApp() {
  return (
    <>
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
    </>
  )
}