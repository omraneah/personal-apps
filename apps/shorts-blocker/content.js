// YouTube navigates client-side, so declarativeNetRequest only catches hard loads.
// This catches in-app navigation to a Short and sends it to the regular player.
const redirectShort = () => {
  const match = location.pathname.match(/^\/shorts\/([\w-]+)/);
  if (match) location.replace(`/watch?v=${match[1]}`);
};

redirectShort();
document.addEventListener("yt-navigate-finish", redirectShort);
window.addEventListener("popstate", redirectShort);
