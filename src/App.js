import './App.css';
import Feed from './Feed/Feed';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
function App() {
  return (
    <div className="App">
        <Header  />
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>

    </div>
  );
}

export default App;
