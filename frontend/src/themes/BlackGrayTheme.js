import { createTheme } from '@mui/material/styles';

const blackGrayTheme = createTheme({
    palette: {
      primary: {
        light: '#484848',
        main: '#212121',
        dark: '##000000',
      },
      secondary: {
        light: '#efefef',
        main: '#bdbdbd',
        dark: '#8d8d8d',
      },
    },
});

export default blackGrayTheme;