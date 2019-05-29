import React, { useState } from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import { SCHOOLS_THEME } from '../constants/index';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import HeroTitle from '../components/HeroTitle';
import HeroSubtitle from '../components/HeroSubtitle';
import HeroLead from '../components/HeroLead';
import HowItWorksContainer from '../components/HowItWorksContainer';
import HowItWorksCard from '../components/HowItWorksCard';
import YourGainContainer, { SubText } from '../components/YourGainContainer';
import YourGainCard from '../components/YourGainCard';
import SignUpModal from '../components/SignUpModal';
import SignUpButtonDiv from '../components/SignUpButtonDiv';
import HeroImageWrapper from '../components/HeroImageWrapper';
import HowitWorksBg from '../components/HowitWorksBg';

import HeroImage from '../images/hero-schools.svg';
import CreateLogo from '../images/create.svg';
import AdmitLogo from '../images/admit.svg';
import SelectLogo from '../images/select.svg';
import DeliverLogo from '../images/deliver.svg';
import WorkLogo from '../images/work.svg';
import RecognitionLogo from '../images/recognition.svg';


const muiTheme = createMuiTheme(SCHOOLS_THEME, 'schoolsTheme');

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Layout currentPage="schools">
        <SEO
          title="Schools"
          description="Take your school to the next level with Tendoledu"
        />
        <SignUpModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          currentPage="schools"
        />
        <Section backgroundColor="#4C72E4">
          <HeroTitle> Win Over More Student For Your Online School </HeroTitle>
          <HeroSubtitle> Get Your Students Real Work Experience with Tendoledu </HeroSubtitle>
          <HeroImageWrapper>
            <img
              src={HeroImage}
              alt="Has a yellow tube where students enter to learn and when exiting, they start applying for jobs"
            />
          </HeroImageWrapper>
          <HeroLead
            message="It’s really hard to be unique when all course creators do the same thing..."
            Color="white"
          />
          <SignUpButtonDiv
            text="Sign Up Here"
            outsideText="to change that!"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            outsideTextColor="white"
          />
        </Section>
        <Section position="relative">
          <HowItWorksContainer
            cards={[
              <HowItWorksCard
                logo={<img src={CreateLogo} alt="Create logo" />}
                title="Create"
                mainText="Create a space for your students to work in"
                key="create logo"
              />,
              <HowItWorksCard
                logo={<img src={AdmitLogo} alt="Admit logo" />}
                title="Admit"
                mainText="Admit students based on criteria you set"
                subText="You can add an admission fee too!"
                key="admit logo"
              />,
              <HowItWorksCard
                logo={<img src={SelectLogo} alt="Select logo" />}
                title="Select and assign"
                mainText="Select marketing jobs posted by startups, then assign to students"
                key="select logo"
              />,
              <HowItWorksCard
                logo={<img src={DeliverLogo} alt="Deliver logo" />}
                title="Deliver & Get Ratings"
                mainText="Deliver finished work and get ratings"
                key="deliver logo"
              />,
            ]}
            subText="Thousands of students are waiting for you to create your Tendoledu space"
          />
          <SignUpButtonDiv
            text="Sign Up Now"
            outsideText="to be the first to use it, it’s free!"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />

          <HowitWorksBg />
        </Section>
        <Section backgroundColor="#4C72E4">
          <YourGainContainer
            cards={[
              <YourGainCard
                logo={<img src={RecognitionLogo} alt="Recognition logo" style={{ maxWidth: '100px' }} />}
                title="Hands On Work Experience"
                subtitle="Recognition"
                text="Their employers can see their work!"
                key="recognition logo"
              />,
              <YourGainCard
                logo={<img src={WorkLogo} alt="Work logo" style={{ maxWidth: '100px' }} />}
                title="Shareable Work Portfolios"
                subtitle="Work"
                text="Real work experience!"
                key="work logo"
              />,
          ]}
            subText={(
              <SubText>
                Help your students impress their employers
              </SubText>
            )}
          />
          <SignUpButtonDiv
            text="Sign Me Up"
            outsideText="for the free product!"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            outsideTextColor="white"
          />
        </Section>
      </Layout>
    </MuiThemeProvider>
  );
};
