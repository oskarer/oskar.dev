import { lazy, Suspense } from 'react';

const Emojione = lazy(() =>
  import(/* webpackChunkName: 'emojione' */ '../utils/emojione'),
);

const Emoji = ({ text, className, imgClassName }) => (
  <Suspense fallback={<></>}>
    <Emojione
      text={text}
      className={className}
      options={{
        props: { loading: 'lazy', className: imgClassName },
      }}
    />
  </Suspense>
);

export default Emoji;
