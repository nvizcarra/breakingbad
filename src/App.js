// useState for the Phrases and useEffect is used to show a random phrase itself when the user lands on our website
import React, { useState, useEffect } from 'react';
// Import Emotion Styled
import styled from '@emotion/styled';
// Import Phrase component
import Phrase from './components/Phrase';

// Create Button Container
const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

// Create Button
const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  // Create phrases state
  const [phrase, keepPhrase] = useState({});


  const callAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await api.json()
    keepPhrase(phrase[0]);
    
  }

  // Show a random phrase with useEffect
  useEffect( () => {
    callAPI()
  }, []);

  return (
    <Container>
      {/* Insert Phrase before button */}
      <Phrase
        phrase={phrase}
      />
      <Button
        onClick={callAPI}
      >
        Obtain Phrase
      </Button>
    </Container>
  );
}

export default App;