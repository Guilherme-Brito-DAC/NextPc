import Button from '@material-ui/core/Button';

function header() {
  return (
    <div className="App">
      <div class="header">
        <Button variant="contained" style={{ fontWeight: 'bold' }}>Home</Button>
        <Button variant="contained" style={{ fontWeight: 'bold' }}>Meu PC</Button>
        <Button variant="contained" style={{ fontWeight: 'bold' }}>Procurar Peças</Button>
        <Button variant="contained" style={{ fontWeight: 'bold' }}>Contato</Button>
        <Button variant="contained" style={{ fontWeight: 'bold' }}>Sobre</Button>
        <Button variant="contained" style={{ fontWeight: 'bold', backgroundColor: 'red', color: 'white'}}>Minha Conta</Button>
      </div>
    </div>
  )
}
export default header;
