import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Typography, useTheme } from '@mui/material';
import { PlayArrow as PlayIcon } from '@mui/icons-material';
import routes from '../../constants/routes';

export default function AccountingTransactionsQuizCard() {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleQuizStarted = () => navigate(routes.accountingTransactionsQuiz);

  return (
    <Paper
      sx={{
        width: {
          xs: '100%',
          md: '55%',
        },
        borderRadius: '12px',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.disabled,
        padding: 3,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h4'>Knjigovodstvene promjene</Typography>
        <Typography variant='h6'>Vježba knjiženja (nasumičnih) knjigovodstvenih promjena</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 2,
        }}
      >
        <Button
          variant='contained'
          size='large'
          onClick={handleQuizStarted}
          disabled={false}
          startIcon={<PlayIcon />}
          sx={{
            paddingY: 1.5,
            paddingX: 4,
            borderRadius: 3,
            fontWeight: 'bold',
            color: '#1D1939',
            backgroundColor: '#FEFCAE',
            border: '1px solid #FEFCAE',
          }}
        >
          Početak
        </Button>
      </Box>
    </Paper>
  );
}
