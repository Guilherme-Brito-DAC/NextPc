import './App.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function App() {
  return (
    <div className="App">
      <div class="header">
        <Button variant="contained">Home</Button>
        <Button variant="contained">Meu PC</Button>
        <Button variant="contained">Procurar Peças</Button>
        <Button variant="contained">Contato</Button>
        <Button variant="contained">Sobre</Button>
        <div class="account_button">
          <Button>
            Minha Conta
          </Button>
          <Menu>
            <MenuItem onClick="">Editar</MenuItem>
            <MenuItem onClick="">Sair</MenuItem>
          </Menu>
        </div>





      </div>
    </div>
  )
}
export default App;
