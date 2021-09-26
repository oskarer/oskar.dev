import React, { Suspense } from 'react';

const Emojione = React.lazy(() =>
  import(/* webpackChunkName: 'emojione' */ '../utils/emojione'),
);

const Emoji = ({ text, className }) => (
  <Suspense fallback={<></>}>
    <Emojione text={text} className={className} />
  </Suspense>
);

export default Emoji;
