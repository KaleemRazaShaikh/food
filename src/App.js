import './App.css';
import Header from './components/header/header';
import Home from './components/Home/home';
// import Everyone from './components/Everyone/Everyone';
import Account from './components/account/Account';
import DownloadApp from './components/downloadApp/DownloadApp';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Everyone/> */}
      <Account/>
      <DownloadApp/>
      <Footer/>
    </div>
  );
}

export default App;
