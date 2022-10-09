import './App.css';
import Navbar from './components/Navber/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-5xl bg-bold text-center m-6 underline underline-offset-4">
        This is Big heading
      </h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
