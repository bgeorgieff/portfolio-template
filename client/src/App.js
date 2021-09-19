import './App.scss'
import { NavBar } from './Components/NavBar'
import Particles from 'react-particles-js'
import { Home } from './Pages/Home'
import { Switch, Route } from 'react-router-dom'
import { About } from './Pages/About'
import { Projects } from './Pages/Projects'
import { ContactPage } from './Pages/Contact'
import { useState } from 'react'

function App() {
  const [navToggle, setNavToggle] = useState(false)

  const navClick = () => {
    setNavToggle(!navToggle)
  }

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
      <div className={`sidebar${navToggle ? ' nav-toggle' : ''}`}>
        <NavBar />
      </div>

      <div className='main-content'>  
        <div className='nav-btn' onClick={navClick}>
          <div className='lines-1'></div>
          <div className='lines-2'></div>
          <div className='lines-3'></div>
        </div>    
        <div className='content'>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/about' exact>
              <About />
            </Route>
            <Route path='/projects' exact>
              <Projects />
            </Route>
            <Route path='/contact' exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
