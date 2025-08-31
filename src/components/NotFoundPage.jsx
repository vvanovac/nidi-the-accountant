import { Box, Typography } from '@mui/material';
import Page from '../components/shared/Page';

export default function NotFoundPage() {
  return (
    <Page>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant='h3'
          sx={{
            textAlign: 'center',
            marginBottom: 2,
          }}
        >
          Stranica nije pronađena.
        </Typography>
        <Typography variant='h5' sx={{ textAlign: 'center' }}>
          Vrati se na početak i nastavi sa učenjem!
        </Typography>
      </Box>
    </Page>
  );
}
