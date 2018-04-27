import React from "react";
import ButtonTirtiary from "./components/ButtonTirtiary";
import PrimaryButton from "./components/PrimaryButton";
import Stripe from "./components/Stripe";

import ArticleTitle from "./components/ArticleTitle";
import ArticleDescription from "./components/ArticleDescription";

import MenuLink from "./components/MenuLink";

import PersonCard from "./components/PersonCard";
import ExploreCard from "./components/ExploreCard";
import FeaturedCard from "./components/FeaturedCard";
import SectionTitle from "./components/SectionTitle";

import Footer from "./components/Footer";

import Wrapper from "./components/Wrapper";
import Section from "./components/Section";

import "./style.css";

const App = props => {
  return (
    <div>
      <Stripe />
      <header className="header">
        <Wrapper>
          <div className="wrap-container">
            <h1 className="logo">schoolrunner</h1>
            <nav className="nav">
              <MenuLink>How it works</MenuLink>
              <MenuLink>Team</MenuLink>
              <MenuLink>Blog</MenuLink>
              <MenuLink>Contact</MenuLink>
              <MenuLink>Sign in</MenuLink>
            </nav>
          </div>
        </Wrapper>
      </header>
      <div className="hero-container">
        <div className="hero-overlay" />
        <Wrapper>
          <div className="hero-up">
            <h1 className="hero-title">Empower your school</h1>
            <h3 className="text-large">
              Connect with data to analyze, track &amp; improve student
              achievement.
            </h3>
            <button className="vid-play-button">play</button>
          </div>
        </Wrapper>
      </div>
      {/* <!-- hero-container --> */}
      <Section bg={true} simple={true}>
        <Wrapper>
          <PrimaryButton>Request a free demo to get started!</PrimaryButton>
        </Wrapper>
      </Section>
      {/* <!-- section-info --> */}
      <Section>
        <Wrapper>
          <SectionTitle>
            Schoolrunner supports your entire school community.
          </SectionTitle>
          <div className="explore-grid">
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
          </div>
          {/* <!-- explore-grid --> */}
        </Wrapper>
      </Section>
      {/* <!-- section-explore --> */}
      <div className="section section-info">
        <Wrapper>
          <SectionTitle color="white">
            Driving student success at the nation’s most progressive schools.
          </SectionTitle>
          <div className="img-grid">
            <img
              src="https://www.schoolrunner.org/img/school_asd_logo.png"
              className="advert"
              alt="Hello!"
            />
            <img
              src="https://www.schoolrunner.org/img/school_asd_logo.png"
              className="advert"
              alt="Hello!"
            />
            <img
              src="https://www.schoolrunner.org/img/school_asd_logo.png"
              className="advert"
              alt="Hello!"
            />
            <img
              src="https://www.schoolrunner.org/img/school_asd_logo.png"
              className="advert"
              alt="Hello!"
            />
          </div>
        </Wrapper>
      </div>
      {/* <!-- section-info --> */}
      <div className="section section-explore explore-two">
        <Wrapper>
          <SectionTitle>
            A comprehensive management system that simplifies your day-to-day
            with straightforward, powerful &amp; actionable data.
          </SectionTitle>
          <div className="explore-grid">
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
          </div>
          {/* <!-- explore-grid --> */}
        </Wrapper>
      </div>
      {/* <!-- section-explore --> */}
      <div className="section section-contact">
        <Wrapper>
          <SectionTitle>
            Today's classrooms are complex. We are here to help simplify your
            day.
          </SectionTitle>
          <div className="grid-simple-container">
            <div>
              <ArticleTitle>Maximize your students' achievement</ArticleTitle>
              <ArticleDescription>
                Our Happiness Ambassadors have more than just awesome job
                titles, they have the chops to show you how Schoolrunner can
                maximize student achievement.
              </ArticleDescription>
              <ArticleDescription>
                Say hello! We promise we won't bite.
              </ArticleDescription>
              <ButtonTirtiary>Say Hello!</ButtonTirtiary>
            </div>
            <div className="exp-description">
              <img
                src="https://www.schoolrunner.org/img/happiness.jpg"
                alt=""
              />
            </div>
          </div>
          {/* <!-- grid-simple-container --> */}
        </Wrapper>
      </div>
      {/* <!-- section-contact --> */}
      <div className="section section-info">
        <Wrapper>
          <div className="grid-simple-container">
            <PersonCard />
            <PersonCard />
          </div>
          {/* <!-- grid-container --> */}
        </Wrapper>
      </div>
      {/* <!-- section-info --> */}
      <Section>
        <Wrapper>
          <SectionTitle>Test our responsiveness firsthand!</SectionTitle>
          <PrimaryButton>Reaquest a demo</PrimaryButton>
        </Wrapper>
      </Section>
      <Stripe />
      <Footer />
    </div>
  );
};

export default App;
