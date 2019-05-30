import React from 'react';
import QuoteChallenge from '../containers/quotes/QuoteChallenge';
import CharacterAnswers from '../containers/characters/CharacterAnswers';
import CurrentScore from '../containers/score/CurrentScore';

export default function App() {
  return (
    <>
      <CurrentScore />
      <QuoteChallenge />
      <CharacterAnswers />
    </>
  );
}
