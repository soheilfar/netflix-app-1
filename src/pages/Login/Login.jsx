import { LoginComp } from "../../components/LoginComp/LoginComp";
import { motion } from "framer-motion";
export const Login = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <LoginComp />
      </motion.div>
    </>
  );
};
