import './App.css';
import Header from './components/Header/Header';
import Hero from './pages/Hero/Hero';
import Categori from './pages/Categori/Categori';
import Line from './pages/Line/line.jsx'


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Categori />
      <Line />
    </div>
  );
}
export default App;
