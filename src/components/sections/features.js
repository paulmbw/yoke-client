import React from "react"
import styled from "styled-components"
import { Section, Container } from "../global"

import sportIllistration from '../../images/product/sport.png';
import teamIllistration from '../../images/product/team.png';
import successIllistration from '../../images/product/success.png';

const StyledHTMLImage = styled.img`
  width: ${props => props.width};
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`;

export const StyledContainer = styled(Container)`
  /* transform: skewY(5deg);
  border-radius: 4px;
  background-image: linear-gradient(to top, #fefefe 0%, #fbfbfb 100%); */
`;

export const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`;

export const Subtitle = styled.h5`
  font-size: 29px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`;

export const FeatureTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 40px;
  margin-bottom: 10px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 50px 0;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeatureText = styled.p`
  font-size: 24px;
  line-height: 36px;
`;


const Features = () => {
  return (
    <Section id="features">
      <StyledContainer>
        <Subtitle>How yoke works</Subtitle>
        <FlexRow>
          <FlexColumn>
            <FeatureTitle>
              Create your profile
          </FeatureTitle>
            <FeatureText>
              Create a profile to connect with people to train with, coaches and the wider fitness network to help you on your journey.
          </FeatureText>
          </FlexColumn>
          <FlexColumn>
            <StyledHTMLImage src={sportIllistration} width="400px" />
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <StyledHTMLImage src={teamIllistration} width="500px" />
          </FlexColumn>
          <FlexColumn>
            <FeatureTitle>
              Build your team
          </FeatureTitle>
            <FeatureText>
            Create or join a community based on your interests, location and schedule to train with people that push you to be better.
          </FeatureText>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <FeatureTitle>
              Win together
          </FeatureTitle>
            <FeatureText>
              Share the journey, compete in group challenges and enter competitions with your team. Work together to achieve goals and win prizes.
          </FeatureText>
          </FlexColumn>
          <FlexColumn>
            <StyledHTMLImage src={successIllistration} width="300px" />
          </FlexColumn>
        </FlexRow>
      </StyledContainer>
    </Section>
  )
}

export default Features