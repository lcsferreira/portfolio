import { motion } from "motion/react";

interface ISwitchProps {
  id: string;
  isChecked: boolean;
  onChange: () => void;
  icon: React.ReactNode;
  size?: "sm" | "md";
}

export const Switch = ({
  id,
  isChecked,
  onChange,
  icon,
  size = "md",
}: ISwitchProps) => {
  const isMobile = size === "sm";
  const switchWidth = isMobile ? "w-12" : "w-14";
  const switchHeight = isMobile ? "h-6" : "h-7";
  const knobSize = isMobile ? "h-5 w-5" : "h-6 w-6";
  const knobPosition = isMobile ? "24px" : "28px";
  const knobOffset = isMobile ? "left-[2px]" : "left-[4px]";

  const switchVariants = {
    checked: {
      backgroundColor: "#4060dd",
      boxShadow: "0 0 20px rgba(64, 96, 221, 0.3)",
    },
    unchecked: {
      backgroundColor: "#0f172a",
      boxShadow: "0 0 10px rgba(15, 23, 42, 0.2)",
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const knobVariants = {
    checked: {
      x: knobPosition,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 30,
      },
    },
    unchecked: {
      x: "0px",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 30,
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    checked: {
      color: "#4060dd",
      rotate: 360,
      scale: isMobile ? 0.8 : 0.9,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    unchecked: {
      color: "#0f172a",
      rotate: 0,
      scale: isMobile ? 0.7 : 0.8,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.label
      htmlFor={id}
      className="relative inline-flex items-center cursor-pointer"
      whileHover="hover"
    >
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={onChange}
        className="sr-only peer"
      />
      <motion.div
        className={`${switchWidth} ${switchHeight} bg-navy-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500/20 rounded-full peer relative overflow-hidden`}
        variants={switchVariants}
        animate={isChecked ? "checked" : "unchecked"}
        whileHover="hover"
        initial={false}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            background: isChecked
              ? "radial-gradient(circle, rgba(64, 96, 221, 0.2) 0%, transparent 70%)"
              : "transparent",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Knob */}
        <motion.div
          className={`absolute flex items-center justify-center top-0.5 ${knobOffset} bg-white rounded-full ${knobSize} transition-all shadow-lg`}
          variants={knobVariants}
          animate={isChecked ? "checked" : "unchecked"}
          whileHover="hover"
        >
          <motion.div
            variants={iconVariants}
            animate={isChecked ? "checked" : "unchecked"}
          >
            {icon}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.label>
  );
};
