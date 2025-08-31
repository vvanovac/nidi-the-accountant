import { Box, Typography } from '@mui/material';

const DEFAULT_SUBTITLE = 'Ako ne uspiješ iz prvog pokušaja, ne brini se - savladaćeš!';

export default function PageTitle({ title, subtitle = DEFAULT_SUBTITLE }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        paddingTop: {
          xs: 0,
          sm: 4,
        },
      }}
    >
      <Typography variant='h4'>{title}</Typography>
      <Typography
        variant='h5'
        sx={{
          fontSize: {
            xs: 20,
            sm: 24,
          },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
