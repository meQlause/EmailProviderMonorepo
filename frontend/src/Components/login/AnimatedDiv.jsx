import { motion } from "framer-motion";

const createAnimation = (x = 0, y = 30) => ({
  initial: { opacity: 0, x, y },
  animate: { opacity: 1, x: 0, y: 0 },
  transition: { duration: 0.6 },
});

const AnimatedDiv = ({
  children,
  fromRight,
  delay = 0,
  className = "",
  ...props
}) => (
  <motion.div
    className={className}
    {...createAnimation(fromRight ? 30 : 0)}
    transition={{ duration: 0.6, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

export default AnimatedDiv;