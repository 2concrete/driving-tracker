import { motion } from "framer-motion";
import { TbClockPlus } from "react-icons/tb";
import { PiChartLineUpThin, PiUsersThin } from "react-icons/pi";
import DrivingLogList from "../components/DrivingLogList";

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
};

const Dashboard = ({ userData, drivingLog }: DashboardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 1.5, ease: "easeIn" }}
      className="flex font-[Segoe_UI_Semilight] mx-auto lg:w-1/2 md:w-4/5 sm:w-11/12 mt-10 flex-col"
    >
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <div className="w-fit rounded p-2 shadow-xl flex flex-col items-center border-1 border-neutral-400">
            <p className="text-3xl">{userData.hoursLogged}</p>
            <p>Hours Logged</p>
          </div>
          <button className="cursor-pointer hover:opacity-70 transition-all w-fit gap-2 h-fit rounded p-2 shadow-xl border-1 border-neutral-400">
            <TbClockPlus className="size-5 stroke-1" />
          </button>
          <button className="cursor-pointer hover:opacity-70 transition-all w-fit gap-2 h-fit rounded p-2 shadow-xl border-1 border-neutral-400">
            <PiChartLineUpThin className="size-5" />
          </button>
        </div>
        <div>
          <button className="cursor-pointer hover:opacity-70 transition-all w-fit gap-2 h-fit rounded p-2 shadow-xl border-1 border-neutral-400">
            <PiUsersThin className="size-5" />
          </button>
        </div>
      </div>
      <DrivingLogList drivingLog={drivingLog} />
    </motion.div>
  );
};

export default Dashboard;
