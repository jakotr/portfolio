import { createContext, useState } from "react";
import { languageOptions, dictionaryList } from "../components/languages";

const LangContext = createContext({
  lang: 'pl',
  dictionary: dictionaryList.pl,
})

const LangContextProvider = ({children}) => {

  const [lang, setLang] = useState('pl')

  const handleChangeLang = (value : string) => {
    setLang(value)
  }

  return (
    <LangContext.Provider value= {{lang, dictionary: dictionaryList[lang], changeLang: handleChangeLang}}>
      {children}
    </LangContext.Provider>
  )
}


export {LangContextProvider, LangContext}