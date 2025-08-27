import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5F0F40',
      light: '#8B1538',
      dark: '#3D0A2A',
      contrastText: '#FBE1D0',
    },
    secondary: {
      main: '#D4A574',
      light: '#E6C19A',
      dark: '#B8945F',
      contrastText: '#2A1810',
    },
    error: {
      main: '#D32F2F',
      light: '#EF5350',
      dark: '#C62828',
      contrastText: '#FBE1D0',
    },
    warning: {
      main: '#F57C00',
      light: '#FFB74D',
      dark: '#E65100',
      contrastText: '#FBE1D0',
    },
    info: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#FBE1D0',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#FBE1D0',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#FBE1D0',
      secondary: '#E6C19A',
      disabled: '#B8945F',
    },
  },
});

export default theme;
