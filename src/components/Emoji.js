import React, { Suspense } from 'react';

const Emojione = React.lazy(() => import('../utils/emojione'));

const Emoji = ({ text }) => (
  <Suspense fallback={<></>}>
    <Emojione text={text} />
  </Suspense>
);

export default Emoji;
