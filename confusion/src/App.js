import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar dark color="primary"> 
<div className="container"> 
<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand> 
<div>Aluno: Paulo Cesar</div> 
</div> 
        </Navbar> 
      </header>
    </div>
  );
}

export default App;
