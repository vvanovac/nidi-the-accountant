import { Container } from '@mui/material';

export default function Page({ children }) {
  return (
    <Container
      sx={{
        paddingTop: 5,
        width: '100%',
        minHeight: '100vh',
      }}
    >
      {children}
    </Container>
  );
}
