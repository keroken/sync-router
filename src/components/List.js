import React from 'react';

const List = () => {
  return (
    <div>
      <h2>This is List</h2>
      {members.map(member => (
        <li>
          <span>{member.name}</span>
          <span>{member.age}</span>
        </li>
      ))}
    </div>
  );
};

export default List;

const members = [
  {
    id: 1,
    name: 'Steve',
    age: '24'
  },
  {
    id: 2,
    name: 'Amy',
    age: '21'
  },
  {
    id: 3,
    name: 'Lisa',
    age: '18'
  },
  {
    id: 4,
    name: 'Paul',
    age: '22'
  },
  {
    id: 5,
    name: 'Dan',
    age: '26'
  },
];