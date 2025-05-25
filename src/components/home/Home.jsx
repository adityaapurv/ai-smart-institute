import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../Main/Main';
import Paper from '../paper/Paper';
import Quiz from '../quiz/Quiz';
import Revision from '../revision/Revision';

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%);
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 32px;
  color: #1976d2;
  letter-spacing: 1px;
`;

const BoxGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 24px;
  justify-content: center;
`;

const ActionBox = styled.button`
  width: 200px;
  height: 120px;
  background: #fff;
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(25, 118, 210, 0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  font-weight: 600;
  color: #1976d2;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  position: relative;
  white-space: nowrap; /* Ensures text stays in one line */
  &:hover {
    background: #e3f0ff;
    transform: translateY(-4px) scale(1.04);
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.18);
  padding: 32px 24px 24px 24px;
  min-width: 340px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 1.4rem;
  color: #888;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 8px;
  transition: color 0.2s;

  &:hover {
    color: #1976d2;
  }
`;

const Home = () => {
  const [showDoubts, setShowDoubts] = useState(false);
  const [showPaper, setShowPaper] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);

  return (
    <Container>
      <Title>What would you like to do?</Title>
      <BoxGrid>
        <ActionBox onClick={() => setShowPaper(true)}>
          📝<div style={{marginTop: 8}}>Paper Generator</div>
        </ActionBox>
        <ActionBox onClick={() => setShowDoubts(true)}>
          ❓<div style={{marginTop: 8}}>Doubts</div>
        </ActionBox>
        <ActionBox onClick={() => setShowQuiz(true)}>
          🧠<div style={{marginTop: 8}}>Smart Quiz Generator</div>
        </ActionBox>
        <ActionBox onClick={() => setShowPlanner(true)}>
          📅<div style={{marginTop: 8}}>Revision Planner</div>
        </ActionBox>
      </BoxGrid>
      {showDoubts && (
        <Popup>
          <CloseBtn onClick={() => setShowDoubts(false)}>✖</CloseBtn>
          <Main />
        </Popup>
      )}
      {showPaper && (
        <Popup>
          <CloseBtn onClick={() => setShowPaper(false)}>✖</CloseBtn>
          <Paper />
        </Popup>
      )}
      {showQuiz && (
        <Popup>
          <CloseBtn onClick={() => setShowQuiz(false)}>✖</CloseBtn>
          <Quiz/>
        </Popup>
      )}
      {showPlanner && (
        <Popup>
          <CloseBtn onClick={() => setShowPlanner(false)}>✖</CloseBtn>
          <Revision/>
        </Popup>
      )}
    </Container>
  );
};

export default Home;