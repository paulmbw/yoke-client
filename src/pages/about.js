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
        <h2>Why Yoke? Why now?</h2>
        <StyledText>
          Yoke was born from a frustration of wanting to go for a run but not knowing anyone (especially in
          my area) to go for a run with. Sure, I could always go up to a random stranger, who also happens
          to be running too, and ask "hey, mind if I join?" Easy, right? Wrong. 
        </StyledText>
        <StyledText>
          For someone as introverted as me, simply asking someone to join in thier run is something
          that won't work. So what will? Here comes Yoke.
        </StyledText>
        <StyledText>
          Yoke, by definition, is
          <StyledBlockquote>
            a wooden crosspiece that is fastened over the necks of two animals and attached to the plough or cart that they are to pull
          </StyledBlockquote>
          but I see it as something more. I see Yoke as an opportunity for two or more like minded people to share
          what they have in common: sport. Be it a 5k run, a yoga session, a round of table tennis, Yoke is about
          finding that person or people to share your sport with and ultimately build a new connection, because life is all about people.
        </StyledText>
        <h2>How?</h2>
        <StyledText>
          Yoke is interested in three things about you; your particular sport, how often you train, and your level of fitness. With this in mind,
          our platform will match you with other people who are also similar in criteria, helping you find your fitness partner in crime.
        </StyledText>
        <StyledText>
          Once you have found your match, Yoke allows you to record your exercices and manage your acheivements. We will provide you with
          daily and weekly challenges for you and your partner or group, helping you to keep motivated and conquering those fitness goals.
        </StyledText>
      </AboutContainer>
    </Section>
  </Layout>
)

export default AboutPage
