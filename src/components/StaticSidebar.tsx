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
      className="fixed left-0 top-0 md:h-full md:w-12 h-10 w-full text-lightColor md:flex flex-row justify-between md:py-5 py-2 md:px-0 px-4 md:mix-blend-difference md:bg-transparent bg-darkColor"
      variants={slideIn("left", "", 0.1, 1)}
      initial="hidden"
      whileInView="show"
    >
      <div className="flex md:flex-col justify-between items-center gap-8 mix-blend-screen">
        <Logo
          width={36}
          height={36}
          hexColor="#fafaf9"
          className="md:w-9 md:h-9 w-7 h-7"
        />
        <div className="flex md:flex-col gap-[2px] text-sm border border-lightColor">
          {languageOptions.map((lang) => (
            <button
              className={`${
                context.lang === lang.code
                  ? "bg-lightColor text-darkColor"
                  : "text-grayText"
              } uppercase px-1`}
              key={lang.code}
              onClick={() => context.changeLang(lang.code)}
            >
              {lang.code}
            </button>
          ))}
        </div>
        <Socials styleClasses="flex md:flex-col gap-3 text-xl" />
      </div>
      <div className="mix-blend-screen hidden">
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
