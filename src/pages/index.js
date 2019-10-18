import React from "react"
import "./styles.scss"
import { Emojione } from "react-emoji-render"

import Seo from "../components/Seo"
import TimelineEntry from "../components/TimelineEntry"
import Samly from "../components/Samly"
import Infor from "../components/Infor"
import Liu from "../components/Liu"
import Me from "../components/Me"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">Hi! I'm Oskar</h1>
          <h2 className="subtitle is-3">I engineer frontend applications</h2>
        </div>
      </div>
    </section>
    <section className="section info">
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h4 className="title is-4 has-text-light">
              I really enjoy building great apps, maybe we can work together?
            </h4>
            <p className="has-text-light">
              During the last years I have worked remotely on several frontend
              web projects. I'm comfortable taking responsibility and ownership
              of a project, finding the right tools for the job and turning
              requirements into a good user experience. While I'm not a designer
              myself I can quite easily take an rough design idea and turn it
              into something complete.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container is-narrow timeline-container box">
        <div className="columns is-centered" style={{ margin: "0 0 3rem 0" }}>
          <div className="column is-three-fifths">
            <h1 className="subtitle is-3 has-text-centered experience-title">
              4+ years experience building frontend apps that are well-tested
              and maintainable
            </h1>
          </div>
        </div>
        <TimelineEntry
          time="2017-2019"
          title="Cryptocurrency exchange"
          text="Architected and built the frontend for a real-time cryptocurrency exchange. As the sole frontend developer I was responsible for turning existing designs into a well-optimized PWA for both mobile and desktop. I also designed test suites for REST/Websocket APIs and browser automation."
        />
        <TimelineEntry
          image={
            <figure className="image" style={{ maxWidth: "100px" }}>
              <Infor />
            </figure>
          }
          time="2015-2017"
          title="Infor"
          text="As part of a small team I helped lay the groundwork for developing offline-first PWA's and Cordova apps for retail applications."
        />
        <TimelineEntry
          image={
            <figure
              className="image is-paddingless"
              style={{ maxWidth: "250px" }}
            >
              <Samly />
            </figure>
          }
          time="2013-2015"
          title="Samly"
          text="Co-founder and developer of a cost sharing and event planning app. Did both business development and full stack development."
        />
        <TimelineEntry
          image={
            <figure
              className="image is-paddingless"
              style={{ maxWidth: "250px" }}
            >
              <Liu />
            </figure>
          }
          time="2010-2015"
          title="Linköping University"
          text="MSc in Computer Science with focus on software/web development."
        />
      </div>
    </section>
    <section className="section">
      <div className="container is-narrow">
        <h2 className="title has-text-centered">Quick facts about me</h2>
        <div className="columns is-centered facts">
          <div className="column is-3 has-text-centered">
            {/*<h5 className="title is-6">Personal</h5>*/}
            <div className="content">
              <p>
                <Emojione text=":older_man:" /> 27 years old
              </p>
              <p>
                <Emojione text=":snowman:" /> I live in Sweden
              </p>
              <p>
                <Emojione text=":deciduous_tree:" /> Enjoys nature
              </p>
              <p>
                <Emojione text=":minibus:" /> Part-time vanlifer
              </p>
            </div>
          </div>
          <div className="column is-3 is-offset-1 has-text-centered">
            {/*<h5 className="title is-6">Code</h5>*/}
            <div className="content">
              <p>
                <Emojione text=":rocket:" /> Longtime (in Javascript-time) React
                developer
              </p>
              <p>
                <Emojione text=":bomb:" /> I think tests are important
              </p>
              <p>
                <Emojione text=":zap:" /> Performance junkie
              </p>
              <p>
                <Emojione text=":chart_with_downwards_trend:" /> Really excited
                about blockchain tech and decentralization
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section footer">
      <div className="container is-narrow has-text-centered has-text-light">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <figure className="image is-rounded" style={{ maxWidth: "150px" }}>
              <Me />
            </figure>
            <p>
              I'm constantly exploring and messing around with new technologies
              and not afraid of throwing myself into unknown areas. Got a
              challenge for me? Lets chat!
            </p>
            <a className="is-size-3" href="mailto:hello@oskar.dev">
              hello@oskar.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default IndexPage
