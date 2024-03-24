import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner banner="Sextant"></Banner>
      <Exhibit title="Test1" children="text1"></Exhibit>
      <Exhibit title="Test2" children="text2text2text2"></Exhibit>
    </div>
  );
}

export default App;
