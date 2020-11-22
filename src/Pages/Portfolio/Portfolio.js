import logo from '../../logo.svg';
import './Portfolio.css';
import Zoom from 'react-reveal/Zoom';

function Portfolio() {
  return (
    <div className="Base">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            SAZUMAIN
          </p>
        </header>   
    </div>
  );
}

export default Portfolio;
