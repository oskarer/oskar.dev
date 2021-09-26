import React from 'react';
import Emoji from './Emoji';

const Fact = ({ emoji, children }) => (
  <p className="flex items-center justify-center">
    <Emoji
      text={`:${emoji}:`}
      className="flex-shrink-0 mr-3 text-2xl"
    />
    {children}
  </p>
);

export default Fact;
