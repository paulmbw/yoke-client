import React from "react"
import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import { Section, Container } from "../components/global"
import styled from 'styled-components';

export const AboutContainer = styled(Container)`
  display: block;
  justify-content: space-between;
  align-items: center;
`;

const StyledText = styled.p`
  font-size: 25px;
  line-height: 39px;
`;

const StyledBlockquote = styled.blockquote`
  font-style: italic;
`;

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Section>
      <AboutContainer>
        <h2>Why Yoke?</h2>
        <StyledText>
          Yoke was born from a frustration of wanting to go for a run in my local area, but not knowing anyone to go with.
          I'd often run alone and see other people running too, and a thought always crossed my mind: is there a way where I
          could meet someone who also wants to go for a run with me? Is there a platform that exists where I can safely share my
          passion for running and other sports?
        </StyledText>
        <StyledText>
          While there exists brilliant apps such as Strava and Nike Running Club, I often struggled with how limited they
          are in regards to meeting people and building connections. This is why I started Yoke.
        </StyledText>
        <StyledText>
          Yoke, by definition, is
          <StyledBlockquote>
            a wooden crosspiece that is fastened over the necks of two animals and attached to the plough or cart that they are to pull
          </StyledBlockquote>
          but I see it as something more. I see Yoke as an opportunity for two or more like-minded people to share
          what they have in common: sport. Be it a 5k run, a yoga session, a round of table tennis, Yoke is about
          finding that person or people to share your sport with and ultimately build a new connection, because life is all about people.
        </StyledText>
        <h2>How?</h2>
        <StyledText>
          Yoke intends to be a simple and safe platform to meet people and share a particular sport with. Upon creating your account,
          Yoke will use your location, the sport you're most passionate about, how often you train and your level of fitness to match you with other people in your area with a similar criteria.
        </StyledText>
        <StyledText>
          Once you have found your match, Yoke will make it easy for you to schedule a run, a leg session at the gym or meditation with
          your partner or team. You can easy keep in contact with people in that chat functionality of Yoke, as well as plan future exercises.
          Yoke will also allow you to record your exercices and manage your achievements. We will provide you with
          daily and weekly challenges for you and your partner or group, helping you to keep motivated and conquering those fitness goals.
        </StyledText>
      </AboutContainer>
    </Section>
  </Layout>
)

export default AboutPage
