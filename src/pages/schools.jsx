import React, { useState } from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import { SCHOOLS_THEME, COLOR_PALETTE, SchoolsSignedUpAlertMessages } from '../constants/index';
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
import JustSignedUpAlerts from '../components/JustSignedUpAlerts';

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
      <Layout
        currentPage="schools"
        setIsModalVisible={setIsModalVisible}
        navLinks={[
          {
            href: '#top', // TODO: should be intro
            value: 'Introduction',
            title: 'Introduction',
          },
          {
            href: '#how-it-works',
            value: 'How it Works',
            title: 'How it Works',
          },
          {
            href: '#gain',
            value: 'Student Gains',
            title: 'Student Gains',
          },
        ]}
      >
        <SEO
          title="Schools"
          description="Give your students actual startup projects to work on. Stand out by giving your students real work experience. Sign up. Create a unique online school. Win over more students!"
        />
        <JustSignedUpAlerts alertDefinitions={SchoolsSignedUpAlertMessages} />
        <SignUpModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          currentPage="schools"
        />
        <Section id="intro">
          <HeroTitle> Win Over More Students For Your Online School </HeroTitle>
          <HeroSubtitle> Give Your Students Real Work Experience with Tendoledu </HeroSubtitle>
          <HeroImageWrapper>
            <img
              src={HeroImage}
              alt="Has a yellow tube where students enter to learn and when exiting, they start applying for jobs"
            />
          </HeroImageWrapper>
          <HeroLead
            message="It’s really hard to be unique when all course creators do the same thing..."
          />
          <SignUpButtonDiv
            text="Sign Up Here"
            outsideText="to change that!"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </Section>
        <Section
          id="how-it-works"
          backgroundColor={COLOR_PALETTE.red.primary('0.8')}
          style={{ borderRadius: '15px' }}
        >
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
                subText="* You can monetize your Tendoledu student experience"
                key="admit logo"
              />,
              <HowItWorksCard
                logo={<img src={SelectLogo} alt="Select logo" />}
                title="Select & assign"
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
            color="white"
          />
          <SignUpButtonDiv
            text="Sign Up Now"
            outsideText="to be the first to use it, it’s free!"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            outsideTextColor="white"
          />
        </Section>

        <Section id="gain">
          <YourGainContainer
            title="What Will my Students Gain?"
            cards={[
              <YourGainCard
                logo={<img src={RecognitionLogo} alt="Recognition logo" style={{ maxWidth: '100px' }} />}
                title="Hands-on work experience"
                subtitle="Most course creators only provide their students with content. We help you give your students practical skills and experience. Lead them into the real world market and kill your competition."
                key="recognition logo"
              />,
              <YourGainCard
                logo={<img src={WorkLogo} alt="Work logo" style={{ maxWidth: '100px' }} />}
                title="Shareable work portfolios"
                subtitle="After startups rate their projects, your students can showcase their work easily with Tendoledu. Now employers can recognize their work."
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
          />
        </Section>
      </Layout>
    </MuiThemeProvider>
  );
};
