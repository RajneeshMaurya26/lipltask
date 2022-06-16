import logo from './logo.svg';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Cards from './components/Cards';
import MainCards from './components/MainCards';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
          <Navbar />
      </div>
      <div className='row'>
        <div className='col-sm-12'>
          <Slider />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 pt-4'>
          <Cards/>
        </div>
      </div>
      <div className='row mb-5 mt-5'>
          <MainCards/>
      </div>
    </div>

  )
}

export default App;
