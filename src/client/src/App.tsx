import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import { DashboardData } from './models/reporting.model';
import { getData } from './services/dashboard.service';

const dependencies = {
  Layout,
  Dashboard,
};

interface AppProps {
  deps?: typeof dependencies
}

const App: React.FC<AppProps> = ({
  deps = dependencies,
}) => {
  const [dashboardData, setDashboardData] = useState({} as DashboardData);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const data = await getData();
      setDashboardData(data);
    };
    fetchDashboardData();
  }, []);
  return (
    <deps.Layout>
      <deps.Dashboard dashboardData={dashboardData} />
    </deps.Layout>
  );
};

export default App;
