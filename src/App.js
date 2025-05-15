import './Styles/App.css';
import Shape from './Components/Shape'
import Summary from './Components/Summary';
import ButtonAppBar from './Components/ButtonAppBar';
import Projects from './Components/Projects';
import Education from './Components/Education';
// import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <ButtonAppBar />
      <Shape />
       <div id="Summary">
        <h2 >Summary</h2>
        <Summary/>
      </div>
      <div id="education">
        <h2>Education</h2>
        <Education />
      </div>
      <div id="projects">
        <h2>Projects</h2>
        <Projects />
      </div>
      {/* <div id="contacts">
        <h2>Contact</h2>
        <Contact />
      </div> */}
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;