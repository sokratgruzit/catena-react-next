import DashboardFilter from './components/DashboardFilter/DashboardFilter';
import DashboardNetworkStats from './components/DashboardNetworkStats/DashboardNetworkStats';
import DashboardAssetsSlider from './components/DashboardAssetsSlider/DashboardAssetsSlider';
import DashboardUserData from './components/DashboardUserData/DashboardUserData';

const Dashboard = () => {
  return (
    <div>
      <DashboardFilter />
      <DashboardNetworkStats />
      <DashboardAssetsSlider />
      <DashboardUserData />
    </div>
  );
};

export default Dashboard;
