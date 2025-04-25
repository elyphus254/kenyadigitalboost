import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { message } = await request.json()
  
  // Here you would typically process the message and generate a response
  // For this example, we'll just echo the message back
  const response = `You said: "${message}". How can I help you further?`

  // Simulate some processing time
  await new Promise(resolve => setTimeout(resolve, 1000))

  return NextResponse.json({ message: response })
}

export async function oPOST(request: Request) {
    const { message } = await request.json()
    
    // Here you would typically process the message and generate a response
    // For this example, we'll just echo the message back
    const response = `You said: "${message}". How can I help you further?`
  
    // Simulate some processing time
    await new Promise(resolve => setTimeout(resolve, 1000))
  
    return NextResponse.json({ message: response })