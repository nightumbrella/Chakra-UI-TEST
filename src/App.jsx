import { useState } from 'react'
import './App.css'
import { Container } from '@chakra-ui/react'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
    <Login/>
    </Container>
  )
}

export default App
