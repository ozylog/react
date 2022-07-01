import React from 'react';

import Layout from './Layout';
import RegisterCardForm from './../components/RegisterCardForm';

function RegisterCard(): React.ReactElement {
  return (
    <Layout title='Register card form'>
      <RegisterCardForm />
    </Layout>
  );

}

export default React.memo(RegisterCard);
