export const getBookmarksList = () => {
  chrome.bookmarks.getTree().then(console.log)
}
