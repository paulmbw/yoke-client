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
              Find your sport
          </FeatureTitle>
            <FeatureText>
              Simply choose your sport (weightlifting, yoga etc.), define your goal (run a half-marathon) and create a routine that works around your life.
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
              Find your partner
          </FeatureTitle>
            <FeatureText>
              Using your location and preferences such as fitness level and schedule, Yoke will match you with fitness partners nearby.
              Once matched, you can send requests to work out with your fitness partner or team.
          </FeatureText>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <FeatureTitle>
              Conquer your goals
          </FeatureTitle>
            <FeatureText>
              Track your progress, share results, and cheer each other on while you conquer your fitness goals.
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