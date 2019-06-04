import React, { useState } from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import { STUDENTS_THEME, StudentsSignedUpAlertMessages } from '../constants/index';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import HeroTitle from '../components/HeroTitle';
import HeroSubtitle from '../components/HeroSubtitle';
import { LeadContainer, LeadMessage } from '../components/HeroLead';
import HowItWorksContainer from '../components/HowItWorksContainer';
import HowItWorksCard, { MainText } from '../components/HowItWorksCard';
import YourGainCard, { SubTitleText } from '../components/YourGainCard';
import YourGainContainer, { SubText } from '../components/YourGainContainer';
import SignUpModal from '../components/SignUpModal';
import SignUpButtonDiv from '../components/SignUpButtonDiv';
import HeroImageWrapper from '../components/HeroImageWrapper';
import JustSignedUpAlerts from '../components/JustSignedUpAlerts';
import LiveOnProductHunt from '../components/LiveOnProductHunt';
import StudentsHeroImageSvg from '../images/hero-students.svg';

import WorkLogo from '../images/work-with-bg.svg';
import PickLogo from '../images/select.svg';
import ShareLogo from '../images/share.svg';
import RecognitionLogo from '../images/recognition.svg';


const muiTheme = createMuiTheme(STUDENTS_THEME, 'studentsTheme');

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Layout
        currentPage="students"
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
          title="Students"
          description="Get Recognition For Learning Online"
        />
        <JustSignedUpAlerts alertDefinitions={StudentsSignedUpAlertMessages} />
        <LiveOnProductHunt />
        <SignUpModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          currentPage="students"
        />
        <Section id="intro">
          <HeroTitle color={muiTheme.palette.black.main}>
            Don’t Limit Yourself To Just Learning
          </HeroTitle>
          <HeroSubtitle
            color={muiTheme.palette.black.main}
          >
            Get Real Work Experience with Tendoledu and Impress your Future Employers!
          </HeroSubtitle>
          <HeroImageWrapper>
            <img src={StudentsHeroImageSvg} alt="A yellow tube where students enter to learn and exit with real world work experience" width="100%" />
          </HeroImageWrapper>
          <LeadContainer>
            <LeadMessage
              color="black"
            >
              Tired of learning online and having professionals ignore you?
            </LeadMessage>
            <LeadMessage
              color="black"
            >
              Tendoledu helps you prove your worth by getting you to show them your real work!
            </LeadMessage>
          </LeadContainer>
          <SignUpButtonDiv
            text="Sign Up Now"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </Section>
        <Section
          id="how-it-works"
          backgroundColor={muiTheme.palette.secondary.mainWithOpacity(0.93)}
        >
          <HowItWorksContainer
            cards={[
              <HowItWorksCard
                logo={<img src={PickLogo} width="100%" alt="Pick logo" />}
                title="Create"
                mainText={(
                  <MainText>
                    Pick a school and enter their online work space
                  </MainText>
                )}
                key="pick logo"
              />,
              <HowItWorksCard
                logo={<img src={WorkLogo} width="100%" alt="Work logo" />}
                title="Admit"
                mainText={(
                  <MainText>
                        Work​ with other students on assigned projects from actual
                        startups you will also get help from your mentors!
                  </MainText>
                )}
                key="work logo"
              />,
              <HowItWorksCard
                logo={<img src={ShareLogo} width="100%" alt="Share logo" />}
                title="Select & assign"
                mainText={(
                  <MainText>
                        Share​ your progress and rated projects ​with employers
                  </MainText>
                )}
                key="share logo"
              />,
            ]}
            subText="Don’t miss out on a chance to work on hundreds of startup projects. Build your portfolio and impress your employers"
            color={muiTheme.palette.white.main}
          />
          <SignUpButtonDiv
            text="Sign Me Up"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </Section>

        <Section id="gain">
          <YourGainContainer
            title="What Will I Miss Out On If I Don’t Use Tendoledu?"
            cards={[
              <YourGainCard
                logo={<img src={WorkLogo} alt="Work logo" height="100%" />}
                title="Hands-on work experience"
                text={(
                  <SubTitleText>
                    Most online courses always end up with you staring
                    at a screen and consuming content.
                    <br />
                    While there is nothing wrong with that,
                    <br />
                    getting to work on some real projects is the remaining
                    half of Your learning experience.
                  </SubTitleText>
                )}
                key="recognition logo"
              />,
              <YourGainCard
                logo={<img src={RecognitionLogo} alt="Recognition logo" height="100%" />}
                title="Shareable work portfolios"
                text={(
                  <SubTitleText>
                    After startups rate and review your finished projects,
                    you can showcase your work to employers easily with Tendoledu.
                    <br />
                    Now employers can recognize all of your work and effort.
                  </SubTitleText>
                )}
                key="work logo"
              />,
          ]}
            subText={(
              <SubText>
                Help impress your employers with your online work!
              </SubText>
            )}
          />
          <SignUpButtonDiv
            text="Sign Me Up"
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </Section>
      </Layout>
    </MuiThemeProvider>
  );
};
