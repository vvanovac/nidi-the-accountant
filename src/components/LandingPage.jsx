import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Paper, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Quiz as QuizIcon, PlayArrow as PlayIcon } from '@mui/icons-material';
import Confetti from 'react-confetti';
import { create } from 'zustand';
import useQuizStore from '../store/quizStore';

export default function LandingPage() {
  const navigate = useNavigate();

  const { configuration, setConfiguration } = useQuizStore();

  const handleConfigurationChanged = (event) => {
    const { name, checked } = event.target;

    setConfiguration({ [name]: checked });
  };

  const isAnyCategorySelected = useMemo(() => {
    return [
      configuration.includeFixedAssets,
      configuration.includeCurrentAssets,
      configuration.includeEquity,
      configuration.includeNonCurrentLiabilities,
      configuration.includeCurrentLiabilities,
    ].some(Boolean);
  }, [configuration]);

  const handleStartQuiz = () => navigate('/nidi-the-accountant/quiz');

  return (
    <Container
      sx={{
        width: '100%',
        height: '100vh',
        marginX: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Confetti width={1500} height={850} />
      <Box>
        <Box
          sx={{
            textAlign: 'center',
            marginBottom: 3,
          }}
        >
          <QuizIcon sx={{ fontSize: 80 }} />
          <Typography variant='h2' component='h1' gutterBottom>
            Dobro došli!
          </Typography>
          <Typography variant='h3'>Naidin interaktivni računovodstveni kviz</Typography>
        </Box>
        <Paper
          sx={{
            padding: 4,
            backgroundColor: '#FBE1D0',
            color: '#5F0F40',
            borderRadius: 3,
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='h4'>Da li si spremna?</Typography>
            <Typography variant='body1'>
              Testiraj svoje znanje i pripremi se za ispit kroz interaktivnu kviz platformu
            </Typography>
          </Box>
          <Box sx={{ marginY: 2.5 }}>
            <Typography variant='h6'>Prije nego što počnemo, ovdje možeš podesiti svoj kviz.</Typography>
            <FormGroup sx={{ marginTop: 1 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.shuffleQuestions}
                    name='shuffleQuestions'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Promiješaj pitanja'
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.includeFixedAssets}
                    name='includeFixedAssets'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Stalna sredstva'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.includeCurrentAssets}
                    name='includeCurrentAssets'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Tekuća sredstva'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.includeEquity}
                    name='includeEquity'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Kapital'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.includeNonCurrentLiabilities}
                    name='includeNonCurrentLiabilities'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Dugoročne obaveze'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.includeCurrentLiabilities}
                    name='includeCurrentLiabilities'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Kratkoročne obaveze'
              />
            </FormGroup>
            {!isAnyCategorySelected && (
              <Typography variant='body2'>Da bi kviz imao smisla, odaberi bar jednu kategoriju.</Typography>
            )}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant='contained'
              size='large'
              onClick={handleStartQuiz}
              disabled={!isAnyCategorySelected}
              startIcon={<PlayIcon />}
              sx={{
                paddingY: 1.5,
                paddingX: 4,
                borderRadius: 3,
              }}
            >
              Početak
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
