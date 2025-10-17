import { motion } from "framer-motion";

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 0.5 }}
      className="font-[Segoe_UI_Light] flex flex-col justify-center gap-1 items-center h-screen bg-neutral-100 rounded"
    >
      <p className="text-3xl font-[Segoe_UI] ">Welcome</p>
      <p className="text-xl text-center mt-2">
        Add a supervisor to <br></br>start logging hours
      </p>
      <button className="cursor-pointer bg-blue-100 rounded-full px-4 p-2 hover:opacity-70 transition-all text-lg mt-4">
        Get Started
      </button>
    </motion.div>
  );
};

export default Landing;
