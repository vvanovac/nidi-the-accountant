import { Container, useTheme } from '@mui/material';

export default function Page({ children }) {
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
      {children}
    </Container>
  );
}
