import { Box, Button, Typography, useTheme } from '@mui/material';

export default function QuizCardSettingsButton({ onConfigurationToggled }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        marginTop: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant='body1'>Za najbolje iskustvo, prilagodi kviz po svojoj mjeri</Typography>
      <Button
        size='small'
        variant='contained'
        color='secondary'
        onClick={onConfigurationToggled}
        sx={{
          color: theme.palette.text.primary,
          minWidth: 92,
          maxWidth: 92,
        }}
      >
        Postavke
      </Button>
    </Box>
  );
}
