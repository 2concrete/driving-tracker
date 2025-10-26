import { motion } from "framer-motion";
import { useState } from "react";
import {
  PiPencilSimpleLineThin,
  PiTrashSimpleThin,
  PiUserPlusThin,
} from "react-icons/pi";

type Supervisor = {
  name: string;
  nickname: string;
  license: number;
};

type SupervisorListProps = {
  supervisors: Supervisor[];
  addSupervisor: (name: string, nickname: string, license: number) => void;
  deleteSupervisor: (license: number) => void;
};

const SupervisorList = ({
  supervisors,
  addSupervisor,
  deleteSupervisor,
}: SupervisorListProps) => {
  const [addingSupervisor, setAddingSupervisor] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [license, setLicense] = useState<string>("");

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFullName(e.target.value);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);

  const handleLicenseChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLicense(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const licenseNumber = parseInt(license, 10);
    if (Number.isNaN(licenseNumber)) {
      return;
    }
    addSupervisor(fullName, nickname, licenseNumber);
    setFullName("");
    setNickname("");
    setLicense("");
    setAddingSupervisor(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="backdrop-blur-xs -webkit-backdrop-blur-xs flex flex-col gap-2 mt-2 absolute -right-1 top-9"
    >
      {supervisors.map((supervisor, idx) => (
        <div
          key={idx}
          className="border-1 border-neutral-400 rounded shadow px-1 flex justify-between"
        >
          <div>
            <p>{supervisor.nickname}</p>
            <p className="relative bottom-1 text-sm opacity-70">
              {supervisor.license}
            </p>
          </div>
          <div className="p-0.5">
            <button
              onClick={() => deleteSupervisor(supervisor.license)}
              className="cursor-pointer hover:opacity-70 transition-all"
            >
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
          addingSupervisor ? "h-56 w-51.5" : "h-9 w-35.5"
        } border-neutral-400  rounded transition-all`}
      >
        {addingSupervisor ? (
          <form
            onSubmit={handleSubmit}
            className="relative px-1.5 flex flex-col gap-1 overflow-hidden"
          >
            <div>
              <label className="text-xs">Full Name</label>
              <input
                onChange={handleFullNameChange}
                value={fullName}
                className="border-1 border-neutral-400 rounded outline-none p-1"
              ></input>
              <label className="text-xs">Nickname</label>
              <input
                onChange={handleNicknameChange}
                value={nickname}
                className="border-1 border-neutral-400 rounded outline-none p-1"
              ></input>
              <label className="text-xs">License Number</label>
              <input
                onChange={handleLicenseChange}
                value={license}
                className="border-1 border-neutral-400 rounded outline-none p-1"
              ></input>
            </div>
            <div className="flex gap-1 mt-1">
              <button
                type="submit"
                className="border-1 w-11/12 border-neutral-400 p-1 rounded hover:bg-blue-100 transition-all cursor-pointer"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setAddingSupervisor(false)}
                className="border-1 w-11/12 border-neutral-400 p-1 rounded hover:bg-red-100 transition-all cursor-pointer"
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
