import DashboardFilter from "./components/dashboardFilter/DashboardFilter";
import DashboardNetworkStats from "./components/dashboardNetworkStats/DashboardNetworkStats";
import DashboardAssetsSlider from "./components/dashboardAssetsSlider/DashboardAssetsSlider";
import DashboardUserData from "./components/dashboardUserData/DashboardUserData";

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
