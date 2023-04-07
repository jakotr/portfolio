import { useContext } from "react";
import { motion } from "framer-motion";

import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

import { LangContext } from "../context/LangContext";

const Technologies = () => {
  const { dictionary } = useContext(LangContext);

  return (
    <motion.div
      className="bg-zinc-100 w-full min-h-[500px] py-12"
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
    >
      <div className={`${styles.container}`}>
        <motion.div variants={textVariant()} className="text-center mb-8">
          <p className={`${styles.subTitle}`}>{dictionary.tech.subTitle}</p>
          <h2 className={`${styles.headTitle}`}>{dictionary.tech.title}</h2>
        </motion.div>

        <motion.div className="flex flex-wrap gap-6 justify-center" >
          {dictionary.tech.technologies.map((tech, index) => (
            <motion.span
              key={tech.name}
              className="sm:w-36 sm:h-36 w-24 h-24 flex justify-center items-center"
              variants={fadeIn("up", "spring", 0.2 * index, 1)}
            >
              <img src={tech.icon} alt={tech.name} />
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Technologies;