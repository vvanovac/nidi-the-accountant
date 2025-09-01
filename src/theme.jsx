import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6255B4',
      light: '#6F63BB',
      dark: '#574BAA',
      contrastText: '#FBE1D0',
    },
    secondary: {
      main: '#FEFCAE',
      light: '#FEFDC2',
      dark: '#FEFC9A',
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
      default: '#50449C',
      paper: '#D3D3D3',
    },
    text: {
      primary: '#1D1939',
      secondary: '#FBE1D0',
      disabled: '#9E9E9E',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});

export default theme;
