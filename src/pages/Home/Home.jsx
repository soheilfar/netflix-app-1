import { HomeHero } from "../../components";
import { HomeLists } from "../../components/HomeLists/HomeLists";
import { motion } from "framer-motion";

export const Home = ({ type }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HomeHero />
        <HomeLists type={type} />
      </motion.div>
    </>
  );
};
