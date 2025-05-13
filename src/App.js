import './Styles/App.css';
import ButtonAppBar from './Components/ButtonAppBar'
import Projects from './Components/Projects'
import Education from './Components/Education'
import Contact from './Components/Contact'
function App() {
  return (
    <>
    <ButtonAppBar/>
    <h2>Education:</h2>
    <Education/>
    <h2>Projects:</h2>
    <Projects/>
    <h2>Contact:</h2> 
    <Contact/>
    </>
  );
}

export default App;
