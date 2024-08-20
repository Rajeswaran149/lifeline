import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Chatbot from './chatbot'

export default function QueryChatbot() {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <div className='flex justify-center items-center h-screen m-10'>
          {/* <h1> you can add QueryChatbot  content here</h1> */}
          <Chatbot />
        </div>
        <Footer />
    </div>
  )
}
