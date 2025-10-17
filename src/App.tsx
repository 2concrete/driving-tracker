import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";

type Supervisor = {
  name: string;
  nickname: string;
  license: number;
};

const App = () => {
  const [supervisors, setSupervisors] = useState<Supervisor[]>([]);

  const addSupervisor = (name: string, nickname: string, license: number) => {
    const newSupervisor = {
      name: name,
      nickname: nickname,
      license: license,
    };
    setSupervisors([...supervisors, newSupervisor]);
  };

  useEffect(() => {
    console.log(supervisors);
  }, [supervisors]);

  return (
    <div className="bg-neutral-100">
      {supervisors.length === 0 && (
        <LandingPage addSupervisor={addSupervisor} />
      )}
    </div>
  );
};

export default App;
