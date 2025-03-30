import { useState } from 'react'
import './App.css'
import { Thread } from './components/Thread'
import Threads from "./components/Threads"
import Header from "./components/Header"

function App() {
  const [threads, setThreads] = useState<Thread[]>([])
  return (
    <>
      <Header header={'All Threads'}></Header>
      <Threads threads={threads} setThreads={setThreads} />
    </>
  )
}

export default App
