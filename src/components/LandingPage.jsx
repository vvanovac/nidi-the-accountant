import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Quiz as QuizIcon, PlayArrow as PlayIcon } from '@mui/icons-material';
import Confetti from 'react-confetti';
import { create } from 'zustand';
import Page from './Page';
import BalanceSheetQuizCard from './BalanceSheetQuizCard';
import useQuizStore from '../store/quizStore';

export default function LandingPage() {
  return (
    <Page>
      <Confetti width={1500} height={850} />
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h2'>Dobro došla, Nidi!</Typography>
        <Typography variant='h3'>Ovo je tvoj interaktivni računovodstveni kviz</Typography>
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
          justifyContent: 'center',
        }}
      >
        <BalanceSheetQuizCard />
      </Box>
    </Page>
  );
}
