import { motion } from "framer-motion";
import type { SetStateAction } from "react";
import { PiXCircleThin } from "react-icons/pi";

type Supervisor = {
  name: string;
  nickname: string;
  license: number;
};

type DrivingLogInputProps = {
  supervisors: Supervisor[];
  setShowDrivingLogInput: React.Dispatch<SetStateAction<boolean>>;
};

const DrivingLogInput = ({
  supervisors,
  setShowDrivingLogInput,
}: DrivingLogInputProps) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="fixed inset-0 flex items-center backdrop-blur-xs -webkit-backdrop-blur-xs justify-center"
    >
      <div className="relative z-10 bg-neutral-100 flex rounded-lg w-60 border-1 border-neutral-400 shadow-2xl p-5">
        <form className="flex flex-col gap-2 w-full">
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
                type="number"
                max="60"
                min="0"
                className="outline-none border-neutral-400 border-1 rounded p-1 px-1.5"
              />
              <p>:</p>
              <input
                type="number"
                max="60"
                min="0"
                className="outline-none border-neutral-400 border-1 rounded p-1 px-1.5"
              />
            </span>
          </span>
          <span className="flex flex-col">
            <label className="text-sm mb-1 ml-0.5">Finish Time</label>
            <span className="flex items-center gap-1">
              <input
                type="number"
                max="60"
                min="0"
                className="outline-none border-neutral-400 border-1 rounded p-1 px-1.5"
              />
              <p>:</p>
              <input
                type="number"
                max="60"
                min="0"
                className="outline-none border-neutral-400 border-1 rounded p-1 px-1.5"
              />
            </span>
          </span>
          <span className="flex flex-col">
            <label className="text-sm mb-1 ml-0.5">Supervisor</label>
            <select className="outline-none border-neutral-400 border-1 rounded p-1 px-1.5">
              {supervisors.map((supervisor) => (
                <option key={supervisor.license} value={supervisor.license}>
                  {supervisor.name}
                </option>
              ))}
            </select>
          </span>
          <button
            type="submit"
            className="border-1 border-neutral-400 rounded p-0.5 mt-1 hover:bg-blue-100 transition-all cursor-pointer"
          >
            Add
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default DrivingLogInput;
