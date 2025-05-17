import './Styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shape from './Components/Shape';
import Summary from './Components/Summary';
import ButtonAppBar from './Components/ButtonAppBar';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Footer from './Components/Footer';
import { Box, Container } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      {/* Full-height flex layout */}
      <Box display="flex" flexDirection="column" minHeight="100vh">

        {/* Header/Navbar */}
        <ButtonAppBar />

        {/* Main content area */}
        <Box component="main" flex="1">
          <Shape />
          <div id="Summary">
            <Summary />
          </div>

          <Container sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Container>
        </Box>

        {/* Footer */}
        <Box component="footer" mt="auto">
          <Footer />
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
