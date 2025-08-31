import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LandingPage from './components/LandingPage';
import BalanceSheetQuizPage from './components/balanceSheet/BalanceSheetQuizPage';
import AccountingTransactionsQuizPage from './components/accountingTransactions/AccountingTransactionsQuizPage';
import PayrollCalculationQuizPage from './components/payrollCalculation/PayrollCalculationQuizPage';
import NotFoundPage from './components/NotFoundPage';
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
          <Route path={routes.accountingTransactionsQuiz} element={<AccountingTransactionsQuizPage />} />
          <Route path={routes.payrollCalculationQuiz} element={<PayrollCalculationQuizPage />} />
          <Route path={routes.allRoutes} element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
