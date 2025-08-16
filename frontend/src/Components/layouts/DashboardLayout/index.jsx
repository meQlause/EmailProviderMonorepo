import { Fragment, useState } from "react";
import Sidebar from "../../views/Dashboard/Sidebar";
import PageHead from "../../commons/PageHead";


const DashboardLayout = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <PageHead title={title} />
      <div className="max-w-screen h-screen flex gap-2 bg-[#f6f8fa] ">
        <Sidebar
          isOpen={open}
        />
        <div className="h-screen w-full flex flex-col flex-1 pt-15 pr-8 bg-[#f6f8fa] rounded">
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardLayout;