import Header from './components/Header';
import './index.css';
import './App.css';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Search from './components/Search';
import Download from './components/Download';
import Footer from './Footer';

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header/>
      <Hero/>
      <Experience/>
      <Search/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
