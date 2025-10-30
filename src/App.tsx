import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";

type Supervisor = {
  name: string;
  nickname: string;
  license: number;
};

type UserData = {
  name: string;
  hoursLogged: number;
};

type DrivingLogEntry = {
  startTime: string;
  finishTime: string;
  date: string;
  supervisor: Supervisor;
};

const App = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "daniel",
    hoursLogged: 27,
  });

  const [supervisors, setSupervisors] = useState<Supervisor[]>(() => {
    const saved = localStorage.getItem("supervisors");
    if (saved) return JSON.parse(saved) as Supervisor[];
    return [];
  });

  const [drivingLog, setDrivingLog] = useState<DrivingLogEntry[]>(() => {
    const saved = localStorage.getItem("drivingLog");
    if (saved) return JSON.parse(saved) as DrivingLogEntry[];
    return [];
  });

  useEffect(() => {
    localStorage.setItem("supervisors", JSON.stringify(supervisors));
  }, [supervisors]);

  useEffect(() => {
    localStorage.setItem("drivingLog", JSON.stringify(drivingLog));
  }, [drivingLog]);

  const addSupervisor = (name: string, nickname: string, license: number) => {
    const newSupervisor = {
      name: name,
      nickname: nickname,
      license: license,
    };
    setSupervisors([...supervisors, newSupervisor]);
  };

  const deleteSupervisor = (license: number) => {
    setSupervisors(
      supervisors.filter((supervisor) => license !== supervisor.license)
    );
  };

  const addEntry = (
    startTime: string,
    finishTime: string,
    supervisorName: string
  ) => {
    const supervisorObj = supervisors.find(
      (sup) => sup.name === supervisorName
    );

    if (!supervisorObj) {
      console.warn(`Supervisor "${supervisorName}" not found`);
      return;
    }

    const newEntry: DrivingLogEntry = {
      startTime,
      finishTime,
      supervisor: supervisorObj,
      date: new Date().toLocaleDateString("en-AU"),
    };
    setDrivingLog((prev) => [...prev, newEntry]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/onboarding"
          element={<LandingPage addSupervisor={addSupervisor} />}
        />
        <Route
          path="/dashboard"
          element=<Dashboard
            addEntry={addEntry}
            deleteSupervisor={deleteSupervisor}
            addSupervisor={addSupervisor}
            supervisors={supervisors}
            userData={userData}
            drivingLog={drivingLog}
          />
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
