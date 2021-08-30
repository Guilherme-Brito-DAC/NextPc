import './App.css';
import Button from '@material-ui/core/Button';
import Header from './Header';

function App() {
  return (
    <>
      <Header></Header>
      <div className="Home">
        <div className="home">
          <h1 className="homeIntro">O computador dos seus sonhos pode estar e apenas alguns cliques de distância!</h1>
          <Button size="large" variant="contained" color="primary" style={{fontWeight: 'bold'}}>
            Comece agora !
          </Button>
        </div>
      </div>
    </>
  )
}
export default App;
