import { motion } from "framer-motion";

export const GlassCard = ({
  children,
  height,
  width,
}: {
  children: React.ReactNode;
  height: string;
  width: string;
}) => {
  return (
    <motion.div
      className="bg-glass-bg 
 bg-opacity-20 rounded-lg shadow-lg  flex flex-col relative border border-white/10 overflow-hidden"
      style={{
        height,
        width,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
      {children}
    </motion.div>
  );
};
