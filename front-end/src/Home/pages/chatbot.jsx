import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

export default function Chatbot() {
    // const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate()

  const handleSendMessage = () => {
        if (input.trim()) {
        setMessages([...messages, input]);
        setInput('');
        }
    };

    const handleCloseChat = () => {
      navigate('/');
    }

  return (
    <div className="">
      
      <button 

        className=" absolute top-20 md:top-28 right-2 p-2 bg-red-500 text-white rounded m-2 "
        onClick={handleCloseChat}
      >

        Close Chat
      </button>


        <div className=" bg-white border border-gray-300 shadow-lg w-screen h-screen flex flex-col">
          <div className="flex-1 p-2 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="p-2 border-b border-gray-200">
                {msg}
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-200 flex ">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 p-2 bg-blue-500 text-white rounded"
            >
              Send
            </button>
          </div>
        </div>

    </div>
  )
}
