import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import data from '../../../data'
import CommonButton from '../../common/CommonButton'

const PracticeCard = () => {
  return (
    <Container>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography bgcolor='red' p={5}></Typography>
            <Divider orientation='vertical' variant='middle' flexItem/>
            <Typography bgcolor='blue' p={5}></Typography>
        </Box>
        <Box>
            <CommonButton>Back</CommonButton>
            <CommonButton>Next</CommonButton>
        </Box>
    </Container>
  )
}

export default PracticeCard