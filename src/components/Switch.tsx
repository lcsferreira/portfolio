import { motion } from "motion/react";

interface ISwitchProps {
  id: string;
  isChecked: boolean;
  onChange: () => void;
  icon: React.ReactNode;
}

export const Switch = ({ id, isChecked, onChange, icon }: ISwitchProps) => {
  return (
    <label
      htmlFor={id}
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={onChange}
        className="sr-only peer"
      />
      <motion.div
        className="w-14 h-7 bg-navy-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500/20 rounded-full peer"
        animate={{
          backgroundColor: isChecked ? "#4060dd" : "#0f172a",
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="absolute flex items-center justify-center top-0.5 left-[4px] bg-white rounded-full h-6 w-6 transition-all"
          animate={{
            x: isChecked ? "28px" : "0px",
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{
              opacity: 1,
              scale: 0.8,
              color: isChecked ? "#4060dd" : "#0f172a",
            }}
          >
            {icon}
          </motion.div>
        </motion.div>
      </motion.div>
    </label>
  );
};
