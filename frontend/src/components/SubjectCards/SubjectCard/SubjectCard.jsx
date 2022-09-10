import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './subjectCard.css'

const SubjectCard = ({info}) => {
    console.log('info', info)
  return (
    <Card className='card'>
        <CardMedia className='media' component='img' image={info.img} alt='fruit' />
        <CardContent className='content'>
            <Typography variant='h4'>{info.germanTitle}</Typography>
            <Typography variant='h5'>{info.title}</Typography>
        </CardContent>
        <CardActions>
            <Button variant='outlined'>Practice</Button>
        </CardActions>
    </Card>
  )
}

export default SubjectCard