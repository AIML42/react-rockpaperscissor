
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScoreContext from './Context/ScoreContext.jsx'

createRoot(document.getElementById('root')).render(
  <ScoreContext>
    <App />
  </ScoreContext>


)
