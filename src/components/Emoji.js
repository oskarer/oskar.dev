import { lazy, Suspense } from 'react';

const Emojione = lazy(() =>
  import(/* webpackChunkName: 'emojione' */ '../utils/emojione'),
);

const Emoji = ({ text, className }) => (
  <Suspense fallback={<></>}>
    <Emojione text={text} className={className} />
  </Suspense>
);

export default Emoji;
