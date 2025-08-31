import { Box, Button } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

export default function StartQuizButton({ onQuizStarted, disabled = false }) {
  return (
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
        color='secondary'
        onClick={onQuizStarted}
        disabled={disabled}
        startIcon={<PlayArrow />}
        sx={{
          paddingY: 1.5,
          paddingX: 4,
          borderRadius: 3,
          fontWeight: 'bold',
        }}
      >
        Početak
      </Button>
    </Box>
  );
}
