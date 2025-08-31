import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Quiz as QuizIcon, PlayArrow as PlayIcon } from '@mui/icons-material';
import Confetti from 'react-confetti';
import { create } from 'zustand';
import Page from './shared/Page';
import BalanceSheetQuizCard from './balanceSheet/BalanceSheetQuizCard';
import AccountingTransactionsQuizCard from './accountingTransactions/AccountingTransactionsQuizCard';
import { useScreenSize } from '../hooks/useScreenSize';
import useQuizStore from '../store/quizStore';

export default function LandingPage() {
  const { width, height } = useScreenSize();

  return (
    <Page isLandingPage={true}>
      {/*@TODO uncomment this*/}
      {/*<Confetti width={width} height={height} />*/}
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
      </Box>
    </Page>
  );
}
