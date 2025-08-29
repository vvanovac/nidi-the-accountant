import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './components/LandingPage';
import BalanceSheetQuizPage from './components/BalanceSheetQuizPage';
import routes from './constants/routes';
import theme from '../src/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path={routes.home} element={<LandingPage />} />
          <Route path={routes.balanceSheetQuiz} element={<BalanceSheetQuizPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
