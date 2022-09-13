import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import BasicModal from '../../common/BasicModal'
import CommonButton from '../../common/CommonButton'
import PracticeCard from '../../FlashCards/PracticeCards/PracticeCard'
import { subjectCardStyles } from './styles'

const SubjectCard = ({info}) => {
    const [firstTime, setFirstTime] = useState(true)
    const [mouseOver, setMouseOver] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const handleModalClose = () => {
      setModalOpen(false)
      setMouseOver(false)
    }

    const handleModalOpen = () => {
      setFirstTime(false)
      setModalOpen(true)
    }

    const handleMouseEnter = () => {
      setMouseOver(true)
    }

    const handleMouseLeave = () => {
      setMouseOver(false)
    }
    
  return (
    <Card sx={subjectCardStyles.card} xs={4} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CardMedia sx={subjectCardStyles.media} component='img' image={info.img} height="140" alt='fruit' />
      <CardContent sx={subjectCardStyles.content}>
          <Typography variant='h4'>{mouseOver ? info.germanSubject : info.subject}</Typography>
      </CardContent>
      <CardActions>
        {firstTime ? (
          <CommonButton size='large' onClick={handleModalOpen} variant='contained'>Practice</CommonButton>
        ) : (
          <>
            <Button size="small">Practice</Button>
            <Button size="small">Challenge</Button>
          </>      
        )}
        <BasicModal children={<PracticeCard />} open={modalOpen} handleClose={handleModalClose}/>
      </CardActions>
    </Card>
  )
}

export default SubjectCard