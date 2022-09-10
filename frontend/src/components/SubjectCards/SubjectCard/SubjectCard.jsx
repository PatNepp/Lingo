import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { subjectCardStyles } from './styles'

const SubjectCard = ({info}) => {
    const [firstTime, setFirstTime] = useState(true)
    
  return (
    <Card sx={subjectCardStyles.card} xs={4}>
      <CardMedia sx={subjectCardStyles.media} component='img' image={info.img} height="140" alt='fruit' />
      <CardContent sx={subjectCardStyles.content}>
          <Typography variant='h4'>{info.germanTitle}</Typography>
          <Typography variant='h5'>{info.title}</Typography>
      </CardContent>
      <CardActions>
        {firstTime ? (
          <Button size='large' onClick={() => setFirstTime(false)}>Practice</Button>
        ) : (
          <>
            <Button size="small">Practice</Button>
            <Button size="large">Challenge</Button>
          </>      
        )}
      </CardActions>
    </Card>
  )
}

export default SubjectCard