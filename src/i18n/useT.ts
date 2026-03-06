import { useTranslation } from 'react-i18next'

export function useT() {
  const { t, i18n } = useTranslation()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tList = <T>(key: string): T[] => (t as any)(key, { returnObjects: true }) as T[]
  return { t, i18n, tList }
}
