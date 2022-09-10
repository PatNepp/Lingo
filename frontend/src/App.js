import React from 'react';
import { Container, AppBar, Typography } from '@mui/material'
import {data} from './fruit'
import SubjectCards from './components/SubjectCards/SubjectCards';

function App() {
  return (
    <Container>
      <AppBar position='static'>
        <Typography variant='h2' align='center'>LINGO</Typography>
      </AppBar>
      <SubjectCards data={data} />
    </Container>
  );
}

export default App;
