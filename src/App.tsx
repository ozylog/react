import React from 'react';

import Layout from './containers/Layout';
import RegisterCardForm from './components/RegisterCardForm';

function App(): React.ReactElement {
  return (
    <Layout title='Register card form'>
      <RegisterCardForm />
    </Layout>
  );
}

export default App;
