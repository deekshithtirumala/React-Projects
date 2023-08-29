import './App.css';
import Navigation from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navigation />
      <Main />
      <hr className='hr' />
      <Footer />
    </div>
  );
}

export default App;
