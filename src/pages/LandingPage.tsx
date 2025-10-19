import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router";

type LandingProps = {
  addSupervisor: (name: string, nickname: string, license: number) => void;
};

const LandingPage = ({ addSupervisor }: LandingProps) => {
  const [stage, setStage] = useState<number>(1);

  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [license, setLicense] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleLicenseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLicense(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const licenseNumber = Number(license);
    console.log(license);
    addSupervisor(name, nickname, licenseNumber);
    setName("");
    setNickname("");
    setLicense("");
    setStage(3);
  };

  return (
    <div className="font-[Segoe_UI_Light]  flex justify-center items-center h-screen">
      {stage === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
          className="flex flex-col gap-1 items-center"
        >
          <p className="text-3xl font-[Segoe_UI] ">Welcome</p>
          <p className="text-xl text-center mt-2">
            Add a supervisor to <br></br>start logging hours
          </p>
          <button
            onClick={() => setStage(2)}
            className="cursor-pointer hover:bg-blue-100 border-1 border-neutral-400 rounded-full px-4 p-2 hover:opacity-70 transition-all text-lg mt-4"
          >
            Get Started
          </button>
        </motion.div>
      )}
      {stage === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
          className="flex flex-col transition-all gap-1 items-center"
        >
          <p className="text-2xl mb-3">New Supervisor</p>
          <div className="bg-neutral-100 rounded-lg shadow-2xl w-70 p-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <span className="flex flex-col">
                <label className="text-sm mb-1 ml-0.5">Full Name</label>
                <input
                  value={name}
                  onChange={handleNameChange}
                  className="outline-none border-neutral-400 border-1 rounded p-1 px-1.5"
                />
              </span>
              <span className="flex flex-col">
                <label className="text-sm mb-1 ml-0.5">Nickname</label>
                <input
                  value={nickname}
                  onChange={handleNicknameChange}
                  className="outline-none border-neutral-400 border-1 rounded p-1 px-1.5"
                />
              </span>
              <span className="flex flex-col">
                <label className="text-sm mb-1 ml-0.5">License Number</label>
                <input
                  value={license}
                  onChange={handleLicenseChange}
                  className="outline-none border-neutral-400 border-1 rounded p-1 px-1.5"
                />
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
      )}
      {stage === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
          className="flex flex-col items-center"
        >
          <p className="text-2xl font-[Segoe_UI] mb-1">Supervisor Added</p>
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center border-1 border-neutral-400 cursor-pointer hover:bg-blue-100 rounded-full pl-4 p-2 pr-1 hover:opacity-70 transition-all text-lg mt-4"
          >
            <p>Next</p>
            <FiChevronRight className="stroke-1 size-5 mt-0.5" />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default LandingPage;
