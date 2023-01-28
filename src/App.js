import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './views/Login';
import Profile from './views/Profile';
import Translation from './views/Translations';
function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/translation" element= { <Translation/> } />

       </Routes>
       </div>
      </BrowserRouter>
  );
}

export default App;
