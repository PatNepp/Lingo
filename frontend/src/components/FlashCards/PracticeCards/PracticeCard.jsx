import { AppBar, Box, Container, Divider, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { data } from '../../../data'
import CommonButton from '../../common/CommonButton'

const PracticeCard = () => {
    const stuff = data[0]
    const [num, setNum] = useState(0)
    console.log(stuff.subjectWords[num].english)

  return (
    <Container>
        <AppBar position='static'><Toolbar sx={{display: 'flex', justifyContent:'center'}}><Typography>Fruit</Typography></Toolbar></AppBar>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography p={5}>{stuff.subjectWords[num].english}</Typography>
            <Divider orientation='vertical' variant='middle' flexItem/>
            <Typography p={5}>{stuff.subjectWords[num].translated}</Typography>
        </Box>
        <Box display='flex' justifyContent='center'>
            <CommonButton
                color='warning' 
                disabled={num === 0 && true}
                onClick={() => setNum(num - 1)}
            >
                Back
            </CommonButton>
            <CommonButton 
                color='success'
                onClick={() => setNum(num + 1)}
            >
                {num === stuff.subjectWords.length - 1 ? 'Finish' : 'Next'} 
            </CommonButton>
        </Box>
    </Container>
  )
}

export default PracticeCard