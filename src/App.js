import './Styles/App.css';
import { createBrowserRouter } from 'react-router-dom';
import Shape from './Components/Shape';
import Summary from './Components/Summary';
import ButtonAppBar from './Components/ButtonAppBar';
import Projects from './Components/Projects';
import Education from './Components/Education';
// import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Box } from '@mui/material';

function App() {
  const router = createBrowserRouter([
    {
      path: "/Education",
      element: <Education />
    },
    {
      path: "/Projects",
      element: <Projects />
    },
  ]);

  return (
    <>
      <ButtonAppBar />
      
      {/* Add padding-bottom to leave space for the fixed footer */}
      <Box sx={{ pb: 12 }}>
        <Shape />
        <div id="Summary">
          <Summary />
        </div>
        {/* You can also render Projects, Education, etc., here if needed */}
      </Box>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
