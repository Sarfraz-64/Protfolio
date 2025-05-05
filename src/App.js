import './App.css';
import ButtonAppBar from './ButtonAppBar'
import Projects from './Projects'
import Education from './Education'
import Contact from './Contact'
function App() {
  return (
    <>
    <ButtonAppBar/>
    {/* <h2>Summary:</h2> */}
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
