import React from 'react';
import { useRouteError } from 'react-router-dom';

import { Layout } from '../../components';

const isErrorWithMessage = (value: unknown): value is { message: string } => {
  return typeof value === 'object' && value !== null && 'message' in value;
};

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  let errorMessage = 'Unknown Error';
  if (isErrorWithMessage(error)) {
    errorMessage = error.message;
  }

  return (
    <Layout>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{errorMessage}</p>
    </Layout>
  );
};

export { ErrorPage };
