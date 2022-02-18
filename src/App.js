import Helmet from 'react-helmet';
import { useInView } from 'react-intersection-observer';

import Timeline from './sections/Timeline';
import Facts from './sections/Facts';
import meImage from './images/me.webp';
import Emoji from './components/Emoji';

import FrontImage from './images/front.svg';

import './styles.scss';

function App() {
  const { ref: inviewRef, inView: showContent } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title="oskar.dev"
        titleTemplate="oskar.dev"
        meta={[
          {
            name: `description`,
            content: 'Frontend engineer',
          },
          {
            property: `og:title`,
            content: 'oskar.dev',
          },
          {
            property: `og:description`,
            content: 'Frontend engineer',
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: '@oskar_eriksson9',
          },
          {
            name: `twitter:title`,
            content: 'oskar.dev',
          },
          {
            name: `twitter:description`,
            content: 'Frontend engineer',
          },
        ]}
      />
      <section className="flex flex-col items-stretch justify-between h-screen bg-light-bg">
        <div className="flex flex-col justify-center flex-grow p-4 lg:p-16">
          <div className="lg:mt-[150px] lg:ml-[50px]">
            <h1 className="mb-4 text-5xl font-bold">Hi! I'm Oskar</h1>
            <h2 className="text-3xl font-normal">
              I like to build stuff
            </h2>
          </div>
        </div>
        <div className="flex-none">
          <FrontImage />
        </div>
      </section>
      <section className="flex justify-center px-6 text-center text-gray-200 pb-60 pt-14 bg-dark-bg md:pb-80 md:pt-28">
        <div className="max-w-[700px]">
          <h1 className="mb-4 text-3xl font-bold">
            Full stack developer with a frontend focus
          </h1>
          <p>
            I'm driven by building innovative things that make an
            impact. Doing that together with awesome people and cool
            tech is <Emoji text=":fire:" imgClassName="inline" />.
          </p>
        </div>
      </section>

      <Timeline ref={inviewRef} />
      {showContent && <Facts />}
      <section className="flex flex-col items-center px-8 py-24 text-center bg-dark-bg">
        <figure>
          <img
            src={meImage}
            loading="lazy"
            alt="Me"
            width="150"
            height="150"
            className="mb-10 rounded-full"
          />
        </figure>
        <p className="max-w-[600px] mb-10 text-gray-200">
          Want to talk?
        </p>
        <a
          className="text-3xl text-pop"
          href="mailto:hello@oskar.dev"
        >
          hello@oskar.dev
        </a>
      </section>
    </>
  );
}

export default App;
