import Header from '../../components/Header/Header';
import Statistics from '../../components/Statistics/Statistics';
import Table from '../../components/Table/Table';

function Dashboard() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Statistics />
          <Table />
        </div>
      </main>
    </>
  );
}

export default Dashboard;
