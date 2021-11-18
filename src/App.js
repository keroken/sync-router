import { Link, Route, Switch } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import List from './components/List';
import styled from 'styled-components';

function App() {
  return (
    <StyledBase>
      <StyledMenu>
        <li className="menu-item">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item">
          <Link to="/list">List</Link>
        </li>
      </StyledMenu>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/list">
          <List />
        </Route>
      </Switch>
    </StyledBase>
  );
}

export default App;

const StyledBase = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  & .menu-item {
    margin-right: 24px;
    & a {
      text-decoration: none;
      &:hover {
        opacity: 0.6;
      }
    }
  }
`;
