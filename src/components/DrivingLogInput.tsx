import { motion } from "framer-motion";
import { useState, type SetStateAction } from "react";
import { PiXCircleThin } from "react-icons/pi";

type Supervisor = {
  name: string;
  nickname: string;
  license: number;
};

type DrivingLogInputProps = {
  supervisors: Supervisor[];
  setShowDrivingLogInput: React.Dispatch<SetStateAction<boolean>>;
  addEntry: (
    startTime: string,
    finishTime: string,
    supervisorName: string
  ) => void;
};

const DrivingLogInput = ({
  supervisors,
  addEntry,
  setShowDrivingLogInput,
}: DrivingLogInputProps) => {
  const [startTime, setStartTime] = useState<string>("");
  const [finishTime, setFinishTime] = useState<string>("");
  const [supervisor, setSupervisor] = useState<string>("");

  const [invalid, setInvalid] = useState<boolean>(false);

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  };

  const handleFinishTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFinishTime(e.target.value);
  };

  const handleSupervisorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSupervisor(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (startTime && finishTime) {
      addEntry(startTime, finishTime, supervisor);
      setStartTime("");
      setFinishTime("");
      setSupervisor("");
      setShowDrivingLogInput(false);
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="fixed z-10 inset-0 flex items-center backdrop-blur-xs -webkit-backdrop-blur-xs justify-center"
    >
      <div className="relative z-10 bg-neutral-100 flex rounded-lg w-60 border-1 border-neutral-400 shadow-2xl p-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
          <button
            type="button"
            onClick={() => setShowDrivingLogInput(false)}
            className="absolute right-0 top-0 p-1 cursor-pointer hover:opacity-70 transition-all"
          >
            <PiXCircleThin className="size-6" />
          </button>
          <span className="flex flex-col">
            <label className="text-sm mb-1 ml-0.5">Start Time</label>
            <span className="flex items-center gap-1">
              <input
                type="time"
                value={startTime}
                onChange={handleStartTimeChange}
                className="outline-none border-neutral-400 border-1 rounded p-1 px-1.5"
              />
            </span>
          </span>
          <span className="flex flex-col">
            <label className="text-sm mb-1 ml-0.5">Finish Time</label>
            <span className="flex items-center gap-1">
              <input
                type="time"
                value={finishTime}
                onChange={handleFinishTimeChange}
                className="outline-none border-neutral-400 border-1 rounded p-1 px-1.5"
              />
            </span>
          </span>
          <span className="flex flex-col">
            <label className="text-sm mb-1 ml-0.5">Supervisor</label>
            <select
              onChange={handleSupervisorChange}
              className="outline-none border-neutral-400 border-1 rounded p-1 px-1.5"
            >
              <option>Select Supervisor</option>
              {supervisors.map((supervisor) => (
                <option key={supervisor.license} value={supervisor.name}>
                  {supervisor.nickname}
                </option>
              ))}
            </select>
          </span>
          <button
            type="submit"
            className={`border-1 ${
              invalid ? "border-red-300" : "border-neutral-400"
            } rounded p-0.5 mt-1 hover:bg-blue-100 transition-all cursor-pointer`}
          >
            Add
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default DrivingLogInput;
