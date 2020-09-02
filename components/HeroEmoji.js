import React from 'react';

export const HeroEmoji = ({ currentState }) => {
  if (currentState == 'good') {
    return <div>🥰</div>;
  } else if (currentState == 'okay') {
    return <div>🙂</div>;
  } else if (currentState == 'bad') {
    return <div>😓</div>;
  } else if (currentState == 'extreme') {
    return <div>😷</div>;
  }
};
