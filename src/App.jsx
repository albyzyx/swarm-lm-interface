import './App.css';
import Chat from './components/messageComponents/Chat';
import { TableLayout } from './components/TableComponents/TableLayout';
import { Routes, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/table' element={<TableLayout/>} />
      </Routes>
    </>
  )
}

export default App
