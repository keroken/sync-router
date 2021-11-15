import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import About from './About';
import People from './People';

function App() {
  return (
    <main>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/people">
            <People />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
