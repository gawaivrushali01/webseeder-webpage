import React from 'react'
import Content from './components/aboutus/Content.jsx'
import OurTeam from './components/ourstory/OurTeam.jsx'

import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/OurTeam" element={<OurTeam />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
