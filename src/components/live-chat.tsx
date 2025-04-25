'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, X } from 'lucide-react'

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }])
      setInputValue('')

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: inputValue }),
        })

        if (response.ok) {
          const data = await response.json()
          setMessages(msgs => [...msgs, { text: data.message, sender: 'bot' }])
        } else {
          throw new Error('Failed to get response')
        }
      } catch (error) {
        console.error('Error in chat:', error)
        setMessages(msgs => [...msgs, { text: "Sorry, there was an error. Please try again.", sender: 'bot' }])
      }
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Live Chat</h3>
            <button onClick={toggleChat} aria-label="Close chat">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow"
              />
              <Button type="submit" size="icon" className="ml-2">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button onClick={toggleChat} size="icon" className="rounded-full h-12 w-12">
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}