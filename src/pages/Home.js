import React from 'react';
import HeroContainer from '../containers/HeroContainer';
import JSAbstractContainer from '../containers/JSAbstractContainer';
import ProjectsContainer from '../containers/ProjectsContainer';
import ProjectPortfolioContainer from '../containers/ProjectPortfolioContainer';
import ContactDetailsContainer from '../containers/ContactDetailsContainer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeroContainer />
        <JSAbstractContainer />
        <ProjectsContainer />
        <ProjectPortfolioContainer />
        <ContactDetailsContainer />
      </div>
    );
  }
}
export default Home;