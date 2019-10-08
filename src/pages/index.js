import React from "react"
import { Link } from "gatsby"
import "./styles.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TimelineEntry from "../components/TimelineEntry"

const IndexPage = () => (
  <>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2">Hi! I'm Oskar</h1>
          <h2 className="subtitle is-4">I engineer frontend applications</h2>
        </div>
      </div>
    </section>
    <section className="section has-background-info">
      <div className="container has-text-centered">
        <h4 className="title is-5 has-text-light">Nice to meet you!</h4>
        <h5 className="subtitle is-6 has-text-light">
          I'm passionate about building great apps, maybe we can work together?
        </h5>
        <p className="has-text-light">
          During the last years I have worked remotely on several frontend web
          projects. I'm comfortable taking responsibility and ownership of a
          project, finding the right tools for the job and turning requirements
          into a good user experience. While I'm not a designer myself I can
          quite easily take an rough design idea and turn it into something
          complete.
        </p>
      </div>
    </section>
    <section className="section">
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <h1 className="title is-4 has-text-centered">
            4+ years experience building frontend apps that are well-tested and
            maintainable
          </h1>
          <TimelineEntry
            image="https://via.placeholder.com/600x480"
            time="2017-2019"
            title="Cryptocurrency exchange"
            text="Architected and built the frontend for a real-time cryptocurrency exchange. As the sole developer I was responsible for turning existing designs into a well-optimized PWA for both mobile and desktop. I also designed test suites for REST/Websocket APIs and browser automation"
          />
          <TimelineEntry
            image="https://via.placeholder.com/600x480"
            time="2015-2017"
            title="Infor"
            text="As part of a small team I helped lay the groundwork for developing offline-first PWA's and Cordova apps for retail applications."
          />
          <TimelineEntry
            image="https://via.placeholder.com/600x480"
            time="2013-2015"
            title="Samly"
            text="Co-founder and developer of a cost sharing and event planning app. Did both business development and full stack development."
          />
          <TimelineEntry
            image="https://via.placeholder.com/600x480"
            time="2010-2015"
            title="Linköping university"
            text="MSc in Computer Science with focus on software/web development."
          />
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h4 className="title is-5 has-text-centered">Quick facts about me</h4>
        <div className="columns">
          <div className="column is-3 is-offset-3">
            <h5 className="title is-6">Personal</h5>
            <div class="content">
              <ul>
                <li>My full name is Oskar Eriksson</li>
                <li>27 years old</li>
                <li>I live in Sweden</li>
                <li>Enjoys nature</li>
                <li>Part-time vanlifer</li>
              </ul>
            </div>
          </div>
          <div className="column is-3">
            <h5 className="title is-6">Personal</h5>
            <div class="content">
              <ul>
                <li> Longtime (in Javascript-time) React developer</li>
                <li>I think tests are important</li>
                <li>Performance junkie</li>
                <li>
                  Really excited about blockchain tech and decentralization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container has-text-centered">
        <img src="https://via.placeholder.com/150" />
        <p>
          I'm constantly exploring and messing around with new technologies and
          not afraid of throwing myself into unknown areas. Got a challenge for
          me? Lets chat!
        </p>
        <a href="mailto:hello@oskar.dev">hello@oskar.dev</a>
      </div>
    </section>
  </>
)

export default IndexPage
