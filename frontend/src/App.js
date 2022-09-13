import React from 'react';
import { Container, AppBar, Typography } from '@mui/material'
import {data} from './data'
import SubjectCards from './components/SubjectCards/SubjectCards';
import Navbar from './components/Navbar';

function App() {
  return (
    <Container>
      <Navbar />
      <SubjectCards data={data} />
    </Container>
  );
}

export default App;
