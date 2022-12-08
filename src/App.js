import ItemListContainer from "./components/ItemListContainer";
import './styles.css';
import Layout from "./components/layout";
import beforesunset from "./assets/beforesunset.png";
import {CartContextProvider} from "./context/cartContext.js";

function App() {
  return (
    <div className="App">
      
        <Layout>
          <div className="portadaIndex">
            <h1>Reivindiquemos la colección.</h1>
            <img className="cd" src={beforesunset}/>
          </div>
          <h2 className="h2">Productos</h2>
          <ItemListContainer/>
        </Layout>
      
      
    </div>
  );
}

export default App;
