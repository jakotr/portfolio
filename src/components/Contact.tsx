import { useContext } from "react";
import { motion } from "framer-motion";

import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { LangContext } from "../context/LangContext";
import { email } from "../constants";
import Socials from "./Socials";

const Contact = () => {

  const {dictionary:{contact}} = useContext(LangContext)

  return (
    <div className="py-12 bg-zinc-100">
      <motion.div className={`${styles.container}`} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.div variants={textVariant()} className="text-center mb-8">
          <p className={`${styles.subTitle}`}>{contact.subTitle}</p>
          <h2 className={`${styles.headTitle}`}>{contact.title}</h2>
        </motion.div>

        <motion.div variants={textVariant()} className="text-center mb-6">
          <p>
            Email: <a className="text-primary" href={`mailto:${email}`}>{email}</a>
          </p>
        </motion.div>

        <motion.div variants={fadeIn('left', 'spring', 0.5, 1)}>
          <Socials styleClasses="flex justify-center gap-5 text-3xl" color="light" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
