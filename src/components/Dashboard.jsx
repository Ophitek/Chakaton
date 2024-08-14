import '../css/Dashboard.css';

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Dashboard Administrador</h1>
        </div>
        <div className="dashboard-cards">
          <div className="card">
            <h2>ONG</h2>
            <p>Some information</p>
          </div>
          <div className="card">
            <h2>Datos</h2>
            <p>Some other information</p>
          </div>
          <div className="card">
            <h2>Card 3</h2>
            <p>Additional information</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
