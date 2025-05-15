import Header from './companents/Header';
import Calculator from './companents/Calculator';
import AdBanner from './companents/AdBanner';
import Footer from './companents/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="ad-banner">Advertisement Space</div>
      <AdBanner>
        <Calculator/>
      </AdBanner>
      <div className="ad-banner">Advertisement Space</div>
      <Footer/>
    </div>
  );
}

export default App;
