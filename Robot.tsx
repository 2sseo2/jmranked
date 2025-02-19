import { motion } from "framer-motion";

interface RobotProps {
  animate: boolean;
}

export function Robot({ animate }: RobotProps) {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 24 24"
      fill="none"
      initial={{ y: 0 }}
      animate={animate ? { y: [-20, 0] } : {}}
      transition={{ duration: 0.3 }}
    >
      <motion.path
        d="M12 2L14 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4H10L12 2Z"
        fill="currentColor"
      />
      <motion.circle cx="9" cy="10" r="1.5" fill="white" />
      <motion.circle cx="15" cy="10" r="1.5" fill="white" />
      <motion.path
        d="M9 15H15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
