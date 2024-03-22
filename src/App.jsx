import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/NavBar/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Bienvenidos a esta nueva experiencia" />
    </div>
  );
}

export default App;
