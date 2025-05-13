import './Styles/App.css';
import Summary from './Components/Summary';
import ButtonAppBar from './Components/ButtonAppBar';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <ButtonAppBar />
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
      <div id="contacts">
        <h2>Contact</h2>
        <Contact />
      </div>
    </>
  );
}

export default App;