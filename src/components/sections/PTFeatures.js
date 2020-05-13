import React from "react"
import styled from "styled-components"
import { Section, Container } from "../global"

import manage from '../../images/personalTrainers/1.png';
import uploadWorkout from '../../images/personalTrainers/2.png';
import profile from '../../images/personalTrainers/3.png';

const StyledHTMLImage = styled.img`
  width: ${props => props.width};
  margin: 20px 20px 20px 20px
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
  marging-left: 40px;
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
  width: 70%;
`;


const PTFeatures = () => {
  return (
    <Section id="features">
      <StyledContainer>
        <Subtitle>How yoke works</Subtitle>
        <FlexRow>
          <FlexColumn>
            <FeatureTitle>
              Create and manage your profile
          </FeatureTitle>
            <FeatureText>
              Create a profile to to help showcase your personal training expertise. Connect with potential clients and build your personal trainer network
          </FeatureText>
          </FlexColumn>
          <FlexColumn>
            <StyledHTMLImage src={profile} width="750px" />
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <StyledHTMLImage src={uploadWorkout} width="750px" />
          </FlexColumn>
          <FlexColumn>
            <FeatureTitle>
              Upload workout videos
          </FeatureTitle>
            <FeatureText>
            Can't always meet your client? No worries. Easily upload your workout routines and tutorials for your clients to follow
          </FeatureText>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <FeatureTitle>
              Manage all your clients in one place
          </FeatureTitle>
            <FeatureText>
              Easily track your client's progress, interact via chat or video call, organise workout plans and much more!
          </FeatureText>
          </FlexColumn>
          <FlexColumn>
            <StyledHTMLImage src={manage} width="750px" />
          </FlexColumn>
        </FlexRow>
      </StyledContainer>
    </Section>
  )
}

export default PTFeatures