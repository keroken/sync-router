import React from 'react';
import { useParams } from 'react-router-dom';
import { members } from '../memberData';

const Member = () => {
  const { memberId } = useParams();
  console.log(memberId);
  const selectedMember = members.filter(member => member.id === memberId)[0];
  console.log(selectedMember);

  return (
    <section>
      <h2>{selectedMember.name}</h2>
      <p>age: {selectedMember.age}</p>
    </section>
  );
};

export default Member;