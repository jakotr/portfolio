import { TranslationType } from "../types"

export type LangValuesType = {
  lang: string,
  dictionary: TranslationType,
  changeLang: (value: string) => void,
}