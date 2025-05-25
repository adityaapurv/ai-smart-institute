import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';
import DoubtSolver from '../DoubtSolver';
import SubjectBoxes from '../SubjectBoxes';

const AppContainer = styled.div`
  min-height: 400px;
  min-width: 320px;
  background: #f8fafc;
  border-radius: 18px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.10);
  padding: 32px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

const Main = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  return (
    <AppContainer>
      {selectedSubject ? (
        <DoubtSolver subject={selectedSubject} />
      ) : (
        <SubjectBoxes onSelectSubject={handleSubjectSelect} />
      )}
    </AppContainer>
  );
};

export default Main;