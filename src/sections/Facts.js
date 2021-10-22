import { Suspense, lazy } from 'react';

const Age = lazy(() =>
  import(/* webpackChunkName: 'age' */ '../components/Age'),
);

const Fact = lazy(() =>
  import(/* webpackChunkName: 'fact' */ '../components/Fact'),
);

export default () => (
  <section className="px-6 bg-white">
    <h2 className="pt-6 text-center text-3xl font-bold">
      Quick facts about me
    </h2>
    <div className="gap-x-[200px] flex flex-wrap gap-y-6 justify-center pb-20 pt-14">
      <Suspense fallback={<></>}>
        <div className="flex flex-col gap-y-6">
          <Fact emoji="older_man">
            <Age /> years old
          </Fact>
          <Fact emoji="snowman">I live in Sweden</Fact>
          <Fact emoji="deciduous_tree">Enjoys nature</Fact>
          <Fact emoji="minibus">Part-time vanlifer</Fact>
        </div>
        <div className="max-w-[300px] flex flex-col gap-y-6">
          <Fact emoji="rocket">
            Longtime (in Javascript-time) React developer
          </Fact>
          <Fact emoji="bomb">I think tests are important</Fact>
          <Fact emoji="zap">Performance junkie</Fact>
          <Fact emoji="chart_with_downwards_trend">
            Really excited about blockchain tech and decentralization
          </Fact>
        </div>
      </Suspense>
    </div>
  </section>
);
