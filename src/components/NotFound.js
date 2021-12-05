import React from 'react';

const NotFound = props => {
  return (
    <div>
      <h2>The Page is not found at {props.location.pathname}</h2>
    </div>
  );
};

export default NotFound;