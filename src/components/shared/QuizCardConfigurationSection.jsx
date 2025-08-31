import { Box, Typography, useTheme } from '@mui/material';

export default function QuizCardConfigurationSection({ title, isLastSection, children }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: 1,
        borderRadius: '12px',
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.main,
        marginBottom: isLastSection ? 0 : 1,
      }}
    >
      <Typography variant='body1' sx={{ marginBottom: 1 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
