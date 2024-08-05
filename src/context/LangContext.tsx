import { createContext, useState } from "react";
//types
import { LangProps, LangValuesType } from "./types";
import { LanguageType } from "../types";
//translations
import { dictionaryList } from "../languages";

//defaults
const defaultProvider: LangValuesType = {
  lang: "pl",
  dictionary: dictionaryList.pl,
  changeLang: (value: string) => null,
};

export const LangContext = createContext(defaultProvider);

export const LangContextProvider = ({ children }: LangProps) => {
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
