import { AnimatePresence, motion } from "framer-motion";
import { TbClockPlus } from "react-icons/tb";
import { PiChartLineUpThin, PiUsersThin } from "react-icons/pi";
import DrivingLogList from "../components/DrivingLogList";
import DrivingLogInput from "../components/DrivingLogInput";
import { useState } from "react";
import SupervisorList from "../components/SupervisorList";

type Supervisor = {
  name: string;
  nickname: string;
  license: number;
};

type DrivingLogEntry = {
  startTime: string;
  finishTime: string;
  date: string;
  supervisor: Supervisor;
};

type DashboardProps = {
  userData: { name: string; hoursLogged: number };
  drivingLog: DrivingLogEntry[];
  supervisors: Supervisor[];
  addSupervisor: (name: string, nickname: string, license: number) => void;
  deleteSupervisor: (license: number) => void;
  addEntry: (
    startTime: string,
    finishTime: string,
    supervisorName: string
  ) => void;
};

const Dashboard = ({
  userData,
  drivingLog,
  supervisors,
  addEntry,
  addSupervisor,
  deleteSupervisor,
}: DashboardProps) => {
  const [showDrivingLogInput, setShowDrivingLogInput] =
    useState<boolean>(false);

  const [showSupervisorList, setShowSupervisorList] = useState<boolean>();

  return (
    <>
      <AnimatePresence>
        {showDrivingLogInput && (
          <DrivingLogInput
            setShowDrivingLogInput={setShowDrivingLogInput}
            addEntry={addEntry}
            supervisors={supervisors}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="flex font-segoe font-light mx-auto w-11/12 lg:w-1/2 md:w-4/5 sm:w-11/12 flex-col gap-8"
      >
        <div className="flex justify-between w-full mt-10">
          <div className="flex gap-2">
            <div className="w-fit rounded p-2 shadow-xl flex flex-col items-center border-1 border-neutral-400">
              <p className="text-3xl">{userData.hoursLogged}</p>
              <p>Hours Logged</p>
            </div>
            <button
              onClick={() => setShowDrivingLogInput(true)}
              className="cursor-pointer hover:opacity-70 transition-all w-fit gap-2 h-fit rounded p-2 shadow-xl border-1 border-neutral-400"
            >
              <TbClockPlus className="size-5 stroke-1" />
            </button>
            <button className="cursor-pointer hover:opacity-70 transition-all w-fit gap-2 h-fit rounded p-2 shadow-xl border-1 border-neutral-400">
              <PiChartLineUpThin className="size-5" />
            </button>
          </div>
          <div className="flex flex-col items-end relative">
            <button
              onClick={() => setShowSupervisorList(!showSupervisorList)}
              className="cursor-pointer hover:opacity-70 transition-all w-fit gap-2 h-fit rounded p-2 shadow-xl border-1 border-neutral-400"
            >
              <PiUsersThin className="size-5" />
            </button>
            <AnimatePresence>
              {showSupervisorList && (
                <SupervisorList
                  deleteSupervisor={deleteSupervisor}
                  addSupervisor={addSupervisor}
                  supervisors={supervisors}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
        <DrivingLogList drivingLog={drivingLog} />
      </motion.div>
    </>
  );
};

export default Dashboard;
