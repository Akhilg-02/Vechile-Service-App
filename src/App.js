import './App.css';
import { Header } from './components/Header';
//import { Mainpage } from './components/Main';
import { MainRoutes } from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
      {/* <Mainpage/> */}
      <Header/>
      <MainRoutes/>
    </div>
  );
}

export default App;
