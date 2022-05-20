import { Tab } from 'src/core/types'

export function getTabsFromCurrentWindow(): Promise<Tab[]> {
  return chrome.tabs.query({ currentWindow: true })
}

export function closeTab(
  tabId: number | undefined,
  callback?: (tab: chrome.tabs.Tab) => void,
) {
  if (!tabId) return

  chrome.tabs.remove(tabId, callback)
}

export function openTab(tab: Tab, redirectToNew?: boolean) {
  return chrome.tabs.create({
    url: tab.url,
    ...(redirectToNew && { active: redirectToNew }),
  })
}

export function getCurrentTab(): Promise<Tab> {
  return chrome.tabs.getCurrent()
}
