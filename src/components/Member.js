import React from 'react';
import { Redirect, useParams, useLocation } from 'react-router-dom';
import { members } from '../memberData';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Member = () => {
  const { memberId } = useParams();
  const selectedMember = members.find(member => member.id === memberId);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const isLoading = !!queryParams.get('loading');

  if (selectedMember) {
    return (
      <>
        <Helmet>
          <title>Member List | {selectedMember.name}</title>
        </Helmet>
        <section>
          {!isLoading ? (
            <StyledBase>
              <h2>{selectedMember.name}</h2>
              <p>age: {selectedMember.age}</p>
            </StyledBase>
          ) : (
            <p>Loading....</p>
          )}
        </section>
      </>
    );
  }
  
  return <Redirect to='/list' />
};

export default Member;

const StyledBase = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
`;