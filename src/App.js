import './App.css';
import Landing from './components/Landing';
import Noticeboard from './components/Noticeboard';
import Gallery from './components/Gallery';
import Members from './components/Members';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Landing />
      <Noticeboard />
      <Gallery />
      <Members />
      <Footer />
    </div>
  );
}

export default App;
