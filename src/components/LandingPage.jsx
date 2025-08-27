import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import { Quiz as QuizIcon, PlayArrow as PlayIcon } from '@mui/icons-material';
import Confetti from 'react-confetti';

export default function LandingPage() {
  const navigate = useNavigate();

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
            textAlign: 'center',
            backgroundColor: '#FBE1D0',
            color: '#5F0F40',
            borderRadius: 3,
          }}
        >
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant='h4'>Da li si spremna?</Typography>
            <Typography variant='body1'>
              Testiraj svoje znanje i pripremi se za ispit kroz interaktivnu kviz platformu
            </Typography>
          </Box>
          <Button
            variant='contained'
            size='large'
            onClick={handleStartQuiz}
            startIcon={<PlayIcon />}
            sx={{
              paddingY: 1.5,
              paddingX: 4,
              borderRadius: 3,
            }}
          >
            Početak
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}
