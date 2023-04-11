import { createContext, useState, ReactNode } from "react";
//types
import { LangValuesType } from "./types";
import { LanguageType } from "../types";
//translations
import { dictionaryList } from "../languages";

//defaults
const defaultProvider: LangValuesType = {
  lang: "pl",
  dictionary: dictionaryList.pl,
  changeLang: (value: string) => null,
};

const LangContext = createContext(defaultProvider);

type LangProps = {
  children: ReactNode;
};

const LangContextProvider = ({ children }: LangProps) => {
  const [lang, setLang] = useState(() => {
    const lang = localStorage.getItem("language");
    return lang !== null ? lang : "pl";
  });

  const handleChangeLang = (value: string) => {
    setLang(value);
    localStorage.setItem("language", value);
  };

  const values = {
    lang,
    dictionary: dictionaryList[lang as keyof LanguageType],
    changeLang: handleChangeLang,
  };

  return <LangContext.Provider value={values}>{children}</LangContext.Provider>;
};

export { LangContextProvider, LangContext };
