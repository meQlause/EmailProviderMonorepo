import Sidebar from "../../views/Dashboard/Sidebar";

const DashboardLayout = ({ children }) => {

  return (
    <>
      <div className="max-w-screen h-screen flex gap-2 bg-[#f6f8fa] ">
        <Sidebar/>
        <div className="h-screen w-full flex flex-col flex-1 pt-15 pr-8 bg-[#f6f8fa] rounded">
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;