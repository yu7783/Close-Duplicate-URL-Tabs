chrome.action.onClicked.addListener(async () => {
  const tabs = await chrome.tabs.query({});

  // windowId -> (url -> tabIds[])
  const windowMap = new Map();

  for (const tab of tabs) {
    if (!tab.url) continue;
    if (tab.url.startsWith("chrome://")) continue;

    if (!windowMap.has(tab.windowId)) {
      windowMap.set(tab.windowId, new Map());
    }

    const urlMap = windowMap.get(tab.windowId);

    if (!urlMap.has(tab.url)) {
      urlMap.set(tab.url, []);
    }

    urlMap.get(tab.url).push(tab.id);
  }

  const tabsToClose = [];

  for (const [, urlMap] of windowMap) {
    for (const [, ids] of urlMap) {
      if (ids.length >= 2) {
        // 同一ウィンドウ内で先頭1枚を残す
        tabsToClose.push(...ids.slice(1));
      }
    }
  }

  if (tabsToClose.length > 0) {
    chrome.tabs.remove(tabsToClose);
  }
});
