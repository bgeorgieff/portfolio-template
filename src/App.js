import './App.scss'
import { NavBar } from './Components/NavBar'
import Particles from 'react-particles-js'
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Particles
        params={{particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900,
            }
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 6,
              color: '#153131'
            }
          }
        }}}
      />
      <div className='sidebar'>
        <NavBar />
      </div>
      <div className='main-content'>      
        <div className='content'>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
