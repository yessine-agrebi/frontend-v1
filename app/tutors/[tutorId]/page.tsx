import { useParams } from 'next/navigation'
import React from 'react'



const Tutor = () => {
    const tutorId = useParams()
    console.log(tutorId)
  return (
    <div>
      <h1>Tutor</h1>
      <p>tutorId: {tutorId}</p>
    </div>
  )
}

export default Tutor