import { Box } from '@mui/material';
import ConfettiExplosion from 'react-confetti-explosion';

export default function Confetti() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ConfettiExplosion
        particleCount={1000}
        duration={5000}
        width={1600}
        colors={[
          '#FF6B6B',
          '#FFD93D',
          '#6BCB77',
          '#4D96FF',
          '#FF922B',
          '#845EF7',
          '#FF5DA2',
          '#38D9A9',
          '#FCC2D7',
          '#A9E34B',
        ]}
      />
    </Box>
  );
}
