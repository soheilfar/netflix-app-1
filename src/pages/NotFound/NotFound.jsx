import { NotFoundComp } from "../../components/NotFoundComp/NotFoundComp";
import { motion } from "framer-motion";
export const NotFound = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <NotFoundComp />
      </motion.div>
    </>
  );
};
