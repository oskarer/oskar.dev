import { forwardRef } from 'react';

import TimelineEntry from '../components/TimelineEntry';

import samlyImage from '../images/samly.webp';
import inforImage from '../images/infor.webp';
import liuImage from '../images/liu.webp';
import ethImage from '../images/eth.webp';
import teamtailorImage from '../images/teamtailor.webp';

const Timeline = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <section ref={ref} className="px-6 py-12 bg-white lg:px-12">
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
  );
});

export default Timeline;
