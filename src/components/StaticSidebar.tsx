import { useContext } from "react";
import { motion } from "framer-motion";

//components
import Socials from "./Socials";

//utils
import { slideIn } from "../utils/motion";

//languages, constants
import { LangContext } from "../context/LangContext";
import { languageOptions } from "../languages";
import { email } from "../constants";
import Logo from "./Logo";

const StaticSidebar = () => {
  const context = useContext(LangContext);

  return (
    <motion.div
      className="fixed left-0 top-0 h-full w-12 text-stone-50 md:flex hidden flex-col justify-between py-5 mix-blend-difference"
      variants={slideIn("left", "", 0.1, 1)}
      initial="hidden"
      whileInView='show'
    >
      <div className="flex flex-col items-center gap-8 mix-blend-screen">
        <span className=""><Logo width={36} height={36} hexColor="#fafaf9" /></span>
        <div className="flex flex-col gap-[2px] text-sm border border-stone-50">
          {languageOptions.map((lang) => (
            <button
              className={`${
                context.lang === lang.code
                  ? "bg-stone-50 text-bgDark"
                  : "text-grayText"
              } uppercase px-1`}
              key={lang.code}
              onClick={() => context.changeLang(lang.code)}
            >
              {lang.code}
            </button>
          ))}
        </div>
        <Socials styleClasses="flex flex-col gap-3 text-xl" color="light" />
      </div>
      <div className="mix-blend-screen">
        <a
          className="rotate-90 block relative -top-[140px] text-xs hover:text-secondary"
          href={`mailto:${email}`}
          title="email"
        >
          {email}
        </a>
      </div>
    </motion.div>
  );
};

export default StaticSidebar;
