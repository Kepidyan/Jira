import Register from './view/pages/auth/register';
import Header from './view/components/global/header';
import Login from './view/pages/auth/login';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Register /> */}
      <Login />
    </div>
  );
}

export default App;



