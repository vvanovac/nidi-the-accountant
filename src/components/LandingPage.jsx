import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Quiz as QuizIcon, PlayArrow as PlayIcon } from '@mui/icons-material';
import { create } from 'zustand';
import Page from './shared/Page';
import Confetti from './shared/Confetti';
import BalanceSheetQuizCard from './balanceSheet/BalanceSheetQuizCard';
import AccountingTransactionsQuizCard from './accountingTransactions/AccountingTransactionsQuizCard';
import PayrollCalculationQuizCard from './payrollCalculation/PayrollCalculationQuizCard';
import mainStore from '../store/mainStore';

export default function LandingPage() {
  const { configuration, setConfiguration } = mainStore();

  useEffect(() => {
    if (!configuration.hasSeenLandingConfetti) {
      setConfiguration({ hasSeenLandingConfetti: false });

      const timer = setTimeout(() => setConfiguration({ hasSeenLandingConfetti: true }), 5000);
      return () => clearTimeout(timer);
    }
  }, [configuration.hasSeenLandingConfetti]);

  return (
    <Page isLandingPage={true}>
      {!configuration.hasSeenLandingConfetti && <Confetti />}
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant='h2'
          sx={{
            fontSize: {
              xs: 50,
              sm: 60,
            },
            marginBottom: {
              xs: 1,
              sm: 0,
            },
          }}
        >
          Dobro došla, Nidi!
        </Typography>
        <Typography
          variant='h3'
          sx={{
            fontSize: {
              xs: 40,
              sm: 48,
            },
            marginBottom: {
              xs: 2,
              sm: 0,
            },
          }}
        >
          Ovo je tvoj interaktivni računovodstveni kviz
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant='h4'>Da li si spremna?</Typography>
        <Typography variant='h6'>
          Testiraj svoje znanje i pripremi se za ispit kroz interaktivnu kviz platformu!
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: 3,
          paddingBottom: 3,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <BalanceSheetQuizCard />
        <AccountingTransactionsQuizCard />
        <PayrollCalculationQuizCard />
      </Box>
    </Page>
  );
}
