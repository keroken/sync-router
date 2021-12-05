import React from 'react';
import { Link } from 'react-router-dom';
import { members } from '../memberData';
import { Helmet } from 'react-helmet';

const List = () => {

  return (
    <>
      <Helmet>
        <title>Member List</title>
      </Helmet>
      <div>
        <h2>This is List</h2>
        {members.map(member => (
          <li key={member.id}>
            <Link to={`member/${member.id}`}>
              <span>{member.name}</span>
            </Link>
          </li>
        ))}
      </div>
    </>
  );
};

export default List;
