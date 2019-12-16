import React from "react"
import { Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import styled, { css } from "styled-components";
import FilteredPropsInputField from "./FilteredPropsInputField";
import { Container, Section } from "../global";
import addToMailchimp from 'gatsby-plugin-mailchimp'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email")
});

const ThankYouComponent = () => (
  <TextContainer>
    <Heading>Thank you for registering. Yoke is currently under development, but we will notify you as soon as we launch.</Heading>
    <Text>We are also collecting information about our potenatial users to help build the best product. Please fill out the
      following <a href="https://docs.google.com/forms/d/e/1FAIpQLSdQ3hdJ9YayYJwlCJSQltGFghI2sifj0ILIODjdKx0nPJVAbg/viewform?usp=sf_link">questionnaire.</a>
    </Text>
  </TextContainer>
)

const SignupForm = () => {
  const [formValues, setFormValues] = React.useState();
  const [form, showForm] = React.useState(true);

  return (
    <Formik
      initialValues={{
        email: ""
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setFormValues(values);

        if (values) showForm(false);

        const { email } = values;

        const timeOut = setTimeout(async () => {
          actions.setSubmitting(false);
          await addToMailchimp(email);
          clearTimeout(timeOut);
        }, 1000);
      }}
    >
      {({
        errors,
        touched,
        handleSubmit,
        isSubmitting,
        isValid
      }) => {
        return (
          form === true ? <Form name="contact" method="post" onSubmit={handleSubmit}>
            <Input
              type="email"
              name="email"
              autoCapitalize="off"
              autoCorrect="off"
              autoComplete="email"
              placeholder="Your email"
              valid={touched.email && !errors.email}
              error={touched.email && errors.email}
            />
            <ErrorMessage name="email">
              {msg => (
                <StyledInlineErrorMessage>{msg}</StyledInlineErrorMessage>
              )}
            </ErrorMessage>
            <Submit type="submit" disabled={!isValid || isSubmitting}>
              {isSubmitting ? `Submiting...` : `Submit`}
            </Submit>
          </Form> : <ThankYouComponent />
        );
      }}
    </Formik>
  )
};

const GetStarted = () => (
  <StyledSection>
    <TextContainer>
      <Heading>Sign up for early access and find workout partners nearby</Heading>
      <SignupForm />
    </TextContainer>
  </StyledSection>
)

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
    `

const TextContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 80px 0 40px;
  width: 520px;
`;

const Heading = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: center;
`;


export const Title = styled.h1`
  font-size: 1rem;
  line-height: 1.25rem;
  margin-top: 0;
`;

export const Label = styled.label`
  margin-top: 1.5rem;
  width: 100%;
`;

export const Input = styled(FilteredPropsInputField)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;

  &:focus,
  &:active {
        box - shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
        rgb(227, 230, 232) 0px 0px 0px 3px;
      border: 1px solid rgb(26, 33, 43);
      outline: none;
    }
  
    /* Autocomplete styles in Chrome*/
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
        background - color: white;
      border: 1px solid lightgrey;
      box-shadow: 0 0 0px 1000px #fff inset;
      -webkit-box-shadow: 0 0 0px 1000px #fff inset;
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: black;
    }
  
  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
        box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px,
          rgb(177, 247, 160) 0px 0px 0px 3px;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}

      ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
          rgb(251, 178, 174) 0px 0px 0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
      `;

export const StyledInlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;

  padding: 0.5rem 0.75rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`;

export const Submit = styled.button`
        width: 100%;
        margin-top: 1.5rem;
        background-color: #F96361;
        display: block;
        text-align: center;
        font-size: 1rem;
        line-height: 1.5rem;
        font-style: normal;
        font-weight: 700;
        height: 3rem;
        white-space: nowrap;
        color: white !important;
        padding: 0.5rem 1rem;
      
        &:active,
        &:focus,
  &:hover {
        cursor: pointer;
    }
  
  &:disabled {
        cursor: pointer;
      background-color: rgb(163, 168, 173);
      box-shadow: none;
      color: rgb(255, 255, 255) !important;
  
      &:hover,
    &:focus {
        cursor: not-allowed;
    }
  }
`;

