import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = props => {
  return (
    <>
      <Helmet>
          <title>Page Not Found</title>
        </Helmet>
      <div>
        <h2>The Page is not found at {props.location.pathname}</h2>
      </div>
    </>
  );
};

export default NotFound;