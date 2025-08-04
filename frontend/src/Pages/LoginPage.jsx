import { useState } from "react";
import LeftPanel from "../components/login/LeftPanel";
import RightPanel from "../components/login/RightPanel";

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
