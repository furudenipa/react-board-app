import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Thread } from './components/Thread'
import { Threads } from "./components/Threads"
import { ThreadNew } from "./components/ThreadNew"
import Header from "./components/Header"

function App() {
  const [threads, setThreads] = useState<Thread[]>([])
  return (
    <Router>
      <Header header={'All Threads'} />
      <Routes>
        <Route path="/threads/new" element={<ThreadNew />} />
        <Route path="/" element={<Threads threads={threads} setThreads={setThreads} />} />
      </Routes>
    </Router>
  )
}

export default App
