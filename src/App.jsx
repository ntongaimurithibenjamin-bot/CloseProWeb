import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Vision from './pages/vision';
import Agents from './pages/agents';
import Team from './pages/team';
import Listings from './pages/listings';
import Services from './pages/services';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/listings' element={<Listings />} />
          <Route path='/team' element={<Team />} />
          <Route path='/agents' element={<Agents/>} />
          <Route path='/vision' element={<Vision />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/get-started' element={<SignUp />} />
          <Route path='/' element={<Home />} />
          <Route path='/clients' element={<Services />} />
          <Route path='/analytics' element={<Services/>} />
          <Route path='/verfication' element={<Services />} />
          <Route path='/growth' element={<Services />} />
        </Routes>
       
      </div>
    </Router>
    )
}

export default App
