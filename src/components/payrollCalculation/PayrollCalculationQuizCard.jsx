import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import StartQuizButton from '../shared/StartQuizButton';
import routes from '../../constants/routes';

export default function PayrollCalculationQuizCard() {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleQuizStarted = () => navigate(routes.payrollCalculationQuiz);

  return (
    <Paper
      sx={{
        width: {
          xs: '100%',
          md: '55%',
        },
        borderRadius: '12px',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        padding: 3,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h4'>Obračun plata</Typography>
        <Typography variant='h6'>Vježba obračuna plata sa svim pratećim troškovima</Typography>
      </Box>
      <StartQuizButton onQuizStarted={handleQuizStarted} />
    </Paper>
  );
}
