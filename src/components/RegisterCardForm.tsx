import React from 'react';
import styled from 'styled-components';
import { Form, Field, FieldRenderProps } from 'react-final-form'

import { Title } from './../StyledComponents';
import { isValidNumber, isValidDate } from './../utils/validators';

const Container = styled.div`
  text-align: center;
`;

const FormContainer = styled.div`
  margin: 20px auto;
  max-width: 500px;

  input {
    width: 100%;
    margin-top: 10px;
    padding: 5px 7px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    -webkit-appearance: none;
  }

  button {
    margin-top: 10px;
    width: 100%;
    padding: 10px;
  }
`;
type Props = FieldRenderProps<number, any>;
const NumberInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
  <>
    <input {...input} {...rest} type="number" />
    {meta.error && meta.touched && <div>{meta.error}</div>}
  </>
);

const DateInput: React.FC<Props> = ({ input, meta, ...rest }: Props) => (
  <>
    <input {...input} {...rest} type="text" />
    {meta.error && meta.touched && <div>{meta.error}</div>}
  </>
);

export const toNumber = (value: any): number | null =>
    value && !isNaN(value) ? Number(value) : null;

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
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <Field
                name='creditCard'
                component={NumberInput}
                placeholder='Credit card number'
                parse={toNumber}
                validate={isValidNumber}
              />

              <div style={{ display: 'flex' }}>
                <div style={{ width: '50%', paddingRight: '5px'}}>
                  <Field
                    name='cvc'
                    component={NumberInput}
                    placeholder='CVC'
                    parse={toNumber}
                    validate={isValidNumber}
                  />
                </div>
                <div style={{ width: '50%', paddingLeft: '5px'}}>
                  <Field
                    name='expiry'
                    component={DateInput}
                    placeholder='expiry'
                    validate={isValidDate}
                  />
                </div>
              </div>
              <button type="submit" disabled={submitting || pristine}>
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
