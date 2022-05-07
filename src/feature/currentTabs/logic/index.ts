export async function getCurrentTabs() {
  const currentTabs = await chrome.tabs.query({currentWindow: true });
  const curTabsName = currentTabs.map(tab => tab.url)
  return curTabsName
}
