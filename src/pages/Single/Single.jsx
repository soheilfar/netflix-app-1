import React from "react";
import { SingleComp } from "../../components/SingleComp/SingleComp";
import { motion } from "framer-motion";

export const Single = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0 }}
      >
        <SingleComp />
      </motion.div>
    </>
  );
};
