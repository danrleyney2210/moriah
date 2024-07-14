import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { ResidencialCleaning } from '../components/molecules/ResidencialCleaning'

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residencial-cleaning" element={<ResidencialCleaning />} />
      </Routes>
    </Router>
  )
}

export default Rotas