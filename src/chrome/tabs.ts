import { Tab } from 'src/core/types'

export function getTabsFromCurrentWindow(): Promise<Tab[]> {
  return chrome.tabs.query({ currentWindow: true })
}

export function closeTab(tabId: number, callback?: () => void) {
  chrome.tabs.discard(tabId, callback)
}

export function openTab(tab: Tab, redirectToNew?: boolean) {
  chrome.tabs.create({
    url: tab.url,
    ...(redirectToNew && { active: redirectToNew }),
  })
}
