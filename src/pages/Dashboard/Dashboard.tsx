import React from 'react';

import Layout from '../../components/Layout/Layout';
import Statistics from '../../components/Statistics/Statistics';
import Table from '../../components/Table/Table';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Statistics />
      <Table />
    </Layout>
  );
};

export default Dashboard;
