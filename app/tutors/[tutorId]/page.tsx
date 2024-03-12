'use client'
import { useParams } from 'next/navigation'
import React from 'react'



const Tutor = () => {
    const params = useParams<{tutorId: string}>();
    console.log(params?.tutorId)
  return (
    <div>
      <h1>Tutor</h1>
      <p>tutorId: {params?.tutorId}</p>
    </div>
  )
}

export default Tutor