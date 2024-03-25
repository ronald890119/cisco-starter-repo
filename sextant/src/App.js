import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IP from './IP';

function App() {
  return (
    <div className="App">
      <Banner banner="Sextant"></Banner>
      <Exhibit title="Test1" children="text1"></Exhibit>
      <Exhibit title="Test2" children="text2text2text2"></Exhibit>
      <Exhibit title="IPv4 Address">
        <IP IPv4={true}/>
      </Exhibit>
      <Exhibit title="IPv6 Address">
        <IP IPv4={false}/>
      </Exhibit>
    </div>
  );
}

export default App;
