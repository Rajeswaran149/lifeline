import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function EmergencyAlert() {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <div className='flex justify-center items-center w-screen h-screen '>
          <h1> you can add emergency  content here</h1>
        </div>
        <Footer />
    </div>
  )
}
