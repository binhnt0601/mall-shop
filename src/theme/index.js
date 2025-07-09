import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e88e5',
      light: '#4a7ebd',
      dark: '#02385a',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fc9a14',
    },
  },
});

export default theme;
