import React from 'react';
import { Link } from 'react-router-dom';
import { members } from '../memberData';
import { Helmet } from 'react-helmet';
import classes from './List.module.css';

const List = () => {

  return (
    <>
      <Helmet>
        <title>Member List</title>
      </Helmet>
      <div>
        <h2>This is List</h2>
        <ul className={classes.list}>
        {members.map(member => (
          <li key={member.id} className={classes['list-item']}>
            <Link to={`member/${member.id}`}>
              <span>{member.name}</span>
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </>
  );
};

export default List;
