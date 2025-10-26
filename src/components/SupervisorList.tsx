import { motion } from "framer-motion";
import { useState } from "react";
import {
  PiPencilSimpleLineThin,
  PiTrashSimpleThin,
  PiUserPlusThin,
  PiXCircleThin,
} from "react-icons/pi";

type Supervisor = {
  name: string;
  nickname: string;
  license: number;
};

type SupervisorListProps = {
  supervisors: Supervisor[];
};

const SupervisorList = ({ supervisors }: SupervisorListProps) => {
  const [addingSupervisor, setAddingSupervisor] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="backdrop-blur-xs -webkit-backdrop-blur-xs flex flex-col gap-2 mt-2 absolute -right-1 top-9"
    >
      {supervisors.map((supervisor) => (
        <div className="border-1 border-neutral-400 rounded shadow px-1 flex justify-between">
          <div>
            <p>{supervisor.nickname}</p>
            <p className="relative bottom-1 text-sm opacity-70">
              {supervisor.license}
            </p>
          </div>
          <div className="p-0.5">
            <button className="cursor-pointer hover:opacity-70 transition-all">
              <PiTrashSimpleThin />
            </button>
            <button className="cursor-pointer hover:opacity-70 transition-all">
              <PiPencilSimpleLineThin />
            </button>
          </div>
        </div>
      ))}
      <div
        className={`border-1 ${
          addingSupervisor ? "h-55 w-51.5" : "h-9 w-35.5"
        } border-neutral-400  rounded transition-all`}
      >
        {addingSupervisor ? (
          <form className="relative px-1.5 flex flex-col gap-1 overflow-hidden">
            <div>
              <label className="text-xs">Full Name</label>
              <input className="border-1 border-neutral-400 rounded outline-none p-1"></input>
              <label className="text-xs">Nickname</label>
              <input className="border-1 border-neutral-400 rounded outline-none p-1"></input>
              <label className="text-xs">License Number</label>
              <input className="border-1 border-neutral-400 rounded outline-none p-1"></input>
            </div>
            <div className="flex gap-1">
              <button
                type="submit"
                className="border-1 w-11/12 border-neutral-400 p-1 rounded hover:bg-blue-100 transition-all cursor-pointer"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setAddingSupervisor(false)}
                className="border-1 w-11/12 border-neutral-400 p-1 rounded hover:bg-red-200 transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setAddingSupervisor(true)}
            className="text-nowrap p-1 flex items-center gap-1 pb-1.5 px-1.5 shadow-2xl cursor-pointer hover:opacity-70 transition-all"
          >
            Add Supervisor <PiUserPlusThin className="size-5 mt-1" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default SupervisorList;
