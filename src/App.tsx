import { useState } from "react";
import Landing from "./components/Landing";

type Supervisor = {
  name: string;
  nickname: string;
  license: number;
};

const App = () => {
  const [supervisors, setSupervisors] = useState<Supervisor[]>([]);

  return <div>{supervisors.length === 0 && <Landing />}</div>;
};

export default App;
