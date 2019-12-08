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
  font-size: 16px;
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
        <Subtitle>Features</Subtitle>
        <FlexRow>
          <FlexColumn>
            <FeatureTitle>
              Find your sport
          </FeatureTitle>
            <FeatureText>
              If you're into running, weightlifting or yoga, Yoke brings together people from all sporting backgrounds
              to help you find the fitness activity you're looking for.
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
              Find your patner
          </FeatureTitle>
            <FeatureText>
              Yoke is all about meeting your fintess partner and sharing your sport.
              You can pair up with someone or team up with a group to push each other to the limit.
          </FeatureText>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <FeatureTitle>
              Conquer your fitness goals
          </FeatureTitle>
            <FeatureText>
              Manage your progress with Yoke. Our platform allows you to define goals for you and your team to
              help you achieve.
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