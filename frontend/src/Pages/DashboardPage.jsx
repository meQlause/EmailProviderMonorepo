import PageHead from "../Components/commons/PageHead";
import DashboardLayout from "../Components/layouts/DashboardLayout";
import MainContentDashboard from "../Components/views/Dashboard/MainContentDashboard";


const DashboardPage = () => {

  return (
    <DashboardLayout title="Dashboard">
      <MainContentDashboard />
    </DashboardLayout>
  )
}

export default DashboardPage;