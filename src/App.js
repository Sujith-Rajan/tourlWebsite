import './App.css'
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import Main from './component/main/Main';
import Navbar from './component/navbar/Navbar';
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Home/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
