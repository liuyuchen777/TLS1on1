import * as React from 'react';

import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';

import { default as theme } from '../themes/BlackGrayTheme';

function Profile() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
            My Profile
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default Profile;