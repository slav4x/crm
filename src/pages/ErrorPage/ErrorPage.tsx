import React from 'react';
import { useRouteError } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();

  return (
    <Layout>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Layout>
  );
};

export default ErrorPage;
