# Shorts Blocker

Chrome extension (Manifest V3) that removes YouTube Shorts from desktop YouTube. Not deployed — load it locally.

## What it does

- Hides the **Shorts** sidebar entry (expanded and collapsed sidebar).
- Hides Shorts shelves and Short tiles on home, subscriptions, search, watch page, and the channel **Shorts** tab.
- Redirects any `/shorts/<id>` URL to `/watch?v=<id>` — no infinite swipe feed.
  - Hard loads: `declarativeNetRequest` rule (`rules.json`).
  - In-app navigation: `content.js` on `yt-navigate-finish`.

## Install

1. Open `chrome://extensions`.
2. Enable **Developer mode** (top right).
3. **Load unpacked** → select this folder (`personal-apps/apps/shorts-blocker`).

Pull + click the reload icon on the extension card to pick up changes.

## Maintenance

YouTube renames its DOM elements periodically. If Shorts reappear, inspect the element and add its tag to `hide.css`.

## Known gaps

- Search-filter **Shorts** chip stays visible; its results are hidden, so it lands on an empty page.
- Desktop Chrome only — the YouTube mobile app is out of scope.
