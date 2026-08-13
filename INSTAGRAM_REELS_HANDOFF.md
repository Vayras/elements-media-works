# Instagram Reels Tile Grid — Handoff

## Status
Code is built. It renders nothing until the three GitHub secrets below exist —
`src/data/reels.json` ships as `[]` and the Work section skips the Instagram
grid entirely when it's empty.

## What's built
- `scripts/fetch-instagram-reels.mjs` — refreshes the long-lived token, pulls
  `elementsmediaworks`'s reels via the Instagram Graph API, writes
  `src/data/reels.json` (id, permalink, thumbnail, caption, timestamp).
- `.github/workflows/update-reels.yml` — runs the script daily (6am UTC) and
  on manual dispatch, rotates the stored token, commits `reels.json` if it
  changed. That push to `master` triggers the existing Pages deploy workflow.
- `src/sections/WorkSection.jsx` — renders a second tile grid ("On
  Instagram") below the case-study tiles, same `work-card` styling, each tile
  linking out to the reel's permalink.

## One-time setup still needed (Meta side — needs the account holder's login)
1. Convert the `elementsmediaworks` Instagram account to a **Business or
   Creator** account (Settings → Account type), if not already.
2. Link it to a Facebook Page (required by the Graph API).
3. Create a Meta Developer App at developers.facebook.com, add the
   **Instagram Graph API** product.
4. Add the `elementsmediaworks` account as a **Tester/Admin** on the app and
   accept the invite from the Instagram account.
5. Generate a short-lived access token via Graph API Explorer, exchange it
   once for a **long-lived token** (60-day expiry), and note the Instagram
   **Business Account ID** (`IG_USER_ID`) shown alongside it.

## Required GitHub repo secrets
| Secret | What it is |
|---|---|
| `IG_ACCESS_TOKEN` | The long-lived token from step 5. The workflow refreshes and rewrites this secret itself afterward, so it never actually expires as long as the workflow keeps running. |
| `IG_USER_ID` | The Instagram Business Account ID from step 5. |
| `GH_PAT` | A personal access token (repo + secrets scope) — needed because the default `GITHUB_TOKEN` can't write repo secrets, and the workflow needs to write the rotated `IG_ACCESS_TOKEN` back. |

Once those three secrets are set, run the workflow once manually
(`Actions → Update Instagram Reels → Run workflow`) to populate
`reels.json` immediately instead of waiting for the next 6am UTC run.

## Fallback (no Meta setup required)
If the setup above is more than wanted: paste specific reel URLs directly
into `src/data/reels.json` by hand (or embed via Instagram's public
`blockquote` + `embed.js`) — real thumbnails, zero credentials, but the list
only updates when someone edits it.
