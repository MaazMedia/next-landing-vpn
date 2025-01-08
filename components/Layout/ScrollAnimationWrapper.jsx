import { motion } from "framer-motion";

export default function ScrollAnimationWrapper({
  children,
  className,
  ...props
}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      className={className}
      {...props}
      viewport={{ once: true, amount: 0.8 }}
      onAnimationStart={() => console.log("Animation started")}
      onAnimationComplete={() => console.log("Animation complete")}
    >
      {children}
    </motion.div>
  );
}
