import { RegisterComp } from "../../components/RegisterComp/RegisterComp";
import { motion } from "framer-motion";
export const Register = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <RegisterComp />
      </motion.div>
    </>
  );
};
