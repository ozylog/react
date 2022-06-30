import React from 'react';
import styled from 'styled-components';

import { Form, Field } from 'react-final-form'

import { Title } from './../StyledComponents';

import { isRequired } from './../utils/validators';


const Container = styled.div`
  text-align: center;
`;

const FormContainer = styled.div`
  margin: 20px auto;
  max-width: 500px;

  input {
    margin-top: 10px;
    padding: 5px 7px;
  }

  button {
    margin-top: 10px;
    width: 100%;
    padding: 10px;
  }
`;

function RegisterCardForm(): React.ReactElement {

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Container>
      <Title>
        Welcome
      </Title>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, valid }) => (
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <Field
                name='creditCard'
                component='input'
                type='text'
                placeholder='Credit card number'
                style={{ width: '100%'}}
                validate={isRequired}
              />

              <div style={{ display: 'flex' }}>
                <Field
                  name='cvc'
                  component='input'
                  type='password'
                  placeholder='CVC'
                  style={{ width: '50%'}}
                  validate={isRequired}
                />
                <Field
                  name='expiry'
                  component='input'
                  type='text'
                  placeholder='expiry'
                  style={{ width: '50%'}}
                  validate={isRequired}
                />
              </div>
              <button type="submit" disabled={submitting || pristine || !valid}>
                Submit
              </button>
            </FormContainer>
          </form>
        )}
      />
    </Container>
  );
}

export default React.memo(RegisterCardForm);
