import { Box, Container, useTheme } from '@mui/material';
import Header from '../shared/Header';

export default function Page({ isLandingPage = false, children }) {
  const theme = useTheme();

  return (
    <Container
      sx={{
        paddingTop: 2,
        width: '100%',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.paper,
        maxWidth: {
          xs: '100%',
          sm: 1200,
        },
        boxShadow: 24,
        margin: '0 auto',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1000,
          marginX: 'auto',
          minHeight: '90vh',
        }}
      >
        {!isLandingPage && <Header />}
        {children}
      </Box>
    </Container>
  );
}
