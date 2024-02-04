import React from 'react';

import { Layout, Statistics, Table } from '../../components';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Statistics />
      <Table />
    </Layout>
  );
};

export { Dashboard };
