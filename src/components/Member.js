import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { members } from '../memberData';

const Member = () => {
  const { memberId } = useParams();
  const selectedMember = members.filter(member => member.id === memberId)[0];

  if (selectedMember) {
    return (
      <section>
        <h2>{selectedMember.name}</h2>
        <p>age: {selectedMember.age}</p>
      </section>
    );
  }
  
  return <Redirect to='/list' />
};

export default Member;