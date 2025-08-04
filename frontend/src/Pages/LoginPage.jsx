import { useState } from "react";
import LeftPanel from "../Components/login/LeftPanel";
import RightPanel from "../Components/login/RightPanel";

const LoginPage = () => {
  const [selectedInput, setSelectedInput] = useState("");

  return (
    <div className="flex mx-auto px-50 gap-10 justify-center items-center h-screen w-screen">
      <LeftPanel
        selectedInput={selectedInput}
        setSelectedInput={setSelectedInput}
      />
      <RightPanel />
    </div>
  );
};

export default LoginPage;
