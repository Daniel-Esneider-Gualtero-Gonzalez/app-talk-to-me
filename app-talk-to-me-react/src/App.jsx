import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavigationBar from './components/nav-foooter/NavigationBar';

import Chats from './components/Pages/Chats';

function App() {
  

  return (
    <>
    
    
     <BrowserRouter >
     <NavigationBar />
      <Routes>

          <Route path='/chats'  element={<Chats />} />


      </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
