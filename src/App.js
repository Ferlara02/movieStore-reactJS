import ItemListContainer from "./components/ItemListContainer";
import './styles.css';
import Layout from "./components/layout";


function App() {
  return (
    <div className="App">
      <Layout>
        <ItemListContainer/>
      </Layout>
    </div>
  );
}

export default App;
