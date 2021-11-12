import Helmet from 'react-helmet';
import { useInView } from 'react-intersection-observer';

import Facts from './sections/Facts';

import TimelineEntry from './components/TimelineEntry';

import samlyImage from './images/samly.webp';
import inforImage from './images/infor.webp';
import liuImage from './images/liu.webp';
import ethImage from './images/eth.webp';
import teamtailorImage from './images/teamtailor.webp';
import meImage from './images/me.webp';

import FrontImage from './images/front.svg';

import './styles.scss';

function App() {
  const currentYear = new Date().getFullYear();
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
        titleTemplate={`Home | oskar.dev`}
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
        ].concat([])}
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
      <section className="flex justify-center px-6 text-center text-gray-200 pb-60 pt-14 bg-dark-bg lg:pb-80 lg:pt-28">
        <div className="max-w-[800px]">
          <h1 className="mb-4 text-3xl font-bold">
            Full stack developer with a frontend focus
          </h1>
          <p>
            I'm comfortable taking responsibility and ownership of a
            project, finding the right tools for the job and turning
            requirements into a good user experience. While I'm not a
            designer myself I can quite easily take an rough design
            idea and turn it into something complete.
          </p>
        </div>
      </section>
      <section
        ref={inviewRef}
        className="px-6 py-12 bg-white lg:px-12"
      >
        <div className="lg:max-w-[1200px] xl:max-w-[1344px] -mt-60 mx-auto px-6 py-12 bg-white border border-gray-200 rounded-lg shadow-md lg:px-36">
          <h1 className="max-w-[750px] mb-20 mx-auto text-center text-3xl font-normal">
            {currentYear - 2015}+ years experience building apps that
            are well-tested and maintainable
          </h1>
          <TimelineEntry
            image={
              <figure>
                <img
                  src={teamtailorImage}
                  width="100"
                  height="100"
                  alt="Teamtailor"
                  loading="lazy"
                />
              </figure>
            }
            time="2019-"
            title="Teamtailor"
            text="Building the best candidate and recruiter experience out there. Doing magic in our majestic Ruby on Rails & Ember app."
          />
          <TimelineEntry
            image={
              <figure>
                <img
                  src={ethImage}
                  width="120"
                  height="120"
                  alt="Ethereum"
                  loading="lazy"
                />
              </figure>
            }
            time="2017-2019"
            title="Cryptocurrency exchange"
            text="Architected and built the React frontend for a real-time cryptocurrency exchange. As the sole frontend developer I was responsible for turning existing designs into a well-optimized PWA for both mobile and desktop."
          />
          <TimelineEntry
            image={
              <figure>
                <img
                  src={inforImage}
                  width="100"
                  height="100"
                  alt="Infor"
                  loading="lazy"
                />
              </figure>
            }
            time="2015-2017"
            title="Infor"
            text="As part of a small team I helped lay the groundwork for developing offline-first React PWA's and Cordova apps for retail applications."
          />
          <TimelineEntry
            image={
              <figure>
                <img
                  src={samlyImage}
                  width="250"
                  height="123"
                  alt="Samly"
                  loading="lazy"
                />
              </figure>
            }
            time="2013-2015"
            title="Samly"
            text="Co-founder and developer of a cost sharing and event planning app. Did both business development and full stack development."
          />
          <TimelineEntry
            image={
              <figure>
                <img
                  src={liuImage}
                  width="250"
                  height="90"
                  alt="LiU"
                  loading="lazy"
                />
              </figure>
            }
            time="2010-2015"
            title="Linköping University"
            text="MSc in Computer Science with focus on software/web development."
          />
        </div>
      </section>
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
          I'm constantly exploring and messing around with new
          technologies and not afraid of throwing myself into unknown
          areas. Got a challenge for me? Lets chat!
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
