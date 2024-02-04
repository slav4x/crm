import Header from '../../components/Header/Header';
import Statistics from '../../components/Statistics/Statistics';

function Dashboard() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Statistics />
        </div>
      </main>
    </>
  );
}

export default Dashboard;
