import React from 'react'
import SubjectCard from './SubjectCard/SubjectCard'

const SubjectCards = ({data}) => {
  console.log(data)
  return (
    <div style={{ display: "flex", justifyContent: 'space-around'}}>
      {data.map(info => <SubjectCard info={info} />)}
    </div>
  )
}

export default SubjectCards