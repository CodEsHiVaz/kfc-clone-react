
import './App.css';
import GroceryDetails from './components/Menupage';
import Sidebar from "./components/Sidebar"
function App() {
  return (

  <div style={{display: 'flex', flexDirection: 'row'}}>
     <div className="App">
     <Sidebar/>

    </div>
    <GroceryDetails/>
  </div>
  );
}

export default App;
