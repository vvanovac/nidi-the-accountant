import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';

function App() {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/nidi-the-accountant' element={<LandingPage />} />
          <Route path='/nidi-the-accountant/quiz' element={<QuizPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
