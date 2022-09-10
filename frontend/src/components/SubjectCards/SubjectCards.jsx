import React from 'react'
import SubjectCard from './SubjectCard/SubjectCard'

const SubjectCards = ({data}) => {
  console.log(data)
  return (
    <div>
      {data.map(info => <SubjectCard info={info} />)}
    </div>
  )
}

export default SubjectCards