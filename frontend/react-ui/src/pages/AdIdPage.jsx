import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 18px;
  margin-top: 16px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  background-color: #f4f4f4;
  border-radius: 8px;
`;

const CopyButton = styled.button`
  margin-top: 16px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #005fa3;
  }
`;

const AdIdPage = () => {
    const { state } = useLocation();
    const uuidRef = useRef(null);

    const handleCopyClick = () => {
        uuidRef.current.select();
        document.execCommand('copy');
    };

    return (
        <Container>
            <Box>
                <h1>Ad ID, please save and use it to update or delete your ad:</h1>
                <Input type="text" value={state.create} readOnly ref={uuidRef} />
                <CopyButton onClick={handleCopyClick}>Copy to Clipboard</CopyButton>
            </Box>
        </Container>
    );
};

export default AdIdPage;
