import "./styles.css";
import logo from './logo-react.jpg'

function App01() {
  return (
    <div className="container">
      <img src={logo} alt="Exemple d'image" className="image-style" />
      <h1>Mon premier composant React</h1>
    </div>
  );
}

export default App01
