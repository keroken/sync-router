import React from 'react';
import { Redirect, useParams, useLocation } from 'react-router-dom';
import { members } from '../memberData';

const Member = () => {
  const { memberId } = useParams();
  const selectedMember = members.filter(member => member.id === memberId)[0];

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const isLoading = !!queryParams.get('loading');

  if (selectedMember) {
    return (
      <section>
        {!isLoading ? (
          <>
            <h2>{selectedMember.name}</h2>
            <p>age: {selectedMember.age}</p>
          </>
        ) : (
          <p>Loading....</p>
        )}
      </section>
    );
  }
  
  return <Redirect to='/list' />
};

export default Member;