import { useContext } from "react";

//components
import Socials from "./Socials";

//languages, constants
import { LangContext } from "../context/LangContext";
import { languageOptions } from "./languages";
import { email } from "./constants";

const StaticSidebar = () => {
  const context = useContext(LangContext);

  return (
    <div className="fixed left-0 top-0 h-full w-12 text-stone-50 md:flex hidden flex-col justify-between py-5">
      <div className="flex flex-col items-center gap-8">
        <span className="">Logo</span>
        <div className="flex flex-col gap-[2px] text-sm border border-stone-50">
          {languageOptions.map((lang) => (
            <button
              className={`${
                context.lang === lang.code ? "bg-stone-50 text-bgDark" : "text-grayText"
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
      <div className="">
        <a
          className="rotate-90 block relative -top-[140px] text-xs"
          href={`mailto:${email}`}
          title="email"
        >
          {email}
        </a>
      </div>
    </div>
  );
};

export default StaticSidebar;
