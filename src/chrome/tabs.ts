import { Tab } from 'src/core/types'

export const getTabsFromCurrentWindow = (): Promise<Tab[]> => {
  return chrome.tabs.query({ currentWindow: true })
}
