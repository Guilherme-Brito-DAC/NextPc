import { BrowserRouter as Router , Switch , Route } from 'react-router-dom' 
import Header from './Components/Header'
import Pecas from './Components/Pecas'
import Home from './Components/Home'
import Comunidade from './Components/Comunidade'
import PCs from './Components/PCs'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Header />
          <Route exact path="/" component={Home} />
          <Route path="/pc" component={PCs} />
          <Route path="/pecas" component={Pecas} />
          <Route path="/comunidade" component={Comunidade} />
      </Router>
    </>
  )
}
export default App
