import { Box, Paper, Typography, useTheme } from '@mui/material';
// import StartQuizButton from '../shared/StartQuizButton';

export default function PayrollCalculationQuizCard() {
  const theme = useTheme();

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
        <Typography variant='h4'>Obračun plata</Typography>
        <Typography variant='h6'>Vježba obračuna plata sa svim pratećim troškovima</Typography>
      </Box>
      <Typography variant='body1' sx={{ textAlign: 'center', marginTop: 2, fontStyle: 'italic' }}>
        U pripremi, strpi se... :)
      </Typography>
    </Paper>
  );
}
