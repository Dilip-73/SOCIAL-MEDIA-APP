import { Routes, Route } from 'react-router-dom'
import CreatePostPage from './pages/CreatePostPage'

function App() {

  return (

    <Routes>
      <Route path="/" element={<>Home...</>}/>
      <Route path='/create' element={<CreatePostPage />} />
    </Routes>
    
  )
}

export default App
