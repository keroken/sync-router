import React from 'react';
import { Helmet } from 'react-helmet';
import History from './History';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const About = () => {
  const match = useRouteMatch();
  console.log(match.url, match.path);
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div>
        <h2>This is About</h2>
        <StyledMenu>
          <li className="menu-item">
            <Link to={`${match.url}/history`}>History</Link>
          </li>
        </StyledMenu>
      </div>
      <Switch>
        <Route path={`${match.path}/history`}>
          <Helmet>
            <title>About | History</title>
          </Helmet>
          <History />
        </Route>
      </Switch>
    </>
  );
};

export default About;

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