// Refreshes the long-lived IG token, pulls @elementsmediaworks' reels, and
// writes them to src/data/reels.json. Run by .github/workflows/update-reels.yml.
import { writeFile, appendFile } from "node:fs/promises";

const { IG_ACCESS_TOKEN, IG_USER_ID } = process.env;

if (!IG_ACCESS_TOKEN || !IG_USER_ID) {
  console.error("Missing IG_ACCESS_TOKEN or IG_USER_ID env vars");
  process.exit(1);
}

const GRAPH = "https://graph.facebook.com/v19.0";

async function refreshToken(token) {
  const res = await fetch(
    `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`,
  );
  if (!res.ok) {
    throw new Error(`refresh_access_token failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return data.access_token;
}

async function fetchReels(token) {
  const fields =
    "id,caption,media_type,media_product_type,media_url,permalink,thumbnail_url,timestamp";
  const res = await fetch(
    `${GRAPH}/${IG_USER_ID}/media?fields=${fields}&access_token=${token}`,
  );
  if (!res.ok) {
    throw new Error(`media fetch failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return (data.data ?? [])
    .filter((item) => item.media_product_type === "REELS")
    .map((item) => ({
      id: item.id,
      permalink: item.permalink,
      thumbnail: item.thumbnail_url ?? item.media_url,
      caption: (item.caption ?? "").split("\n")[0].slice(0, 120),
      timestamp: item.timestamp,
    }));
}

const token = await refreshToken(IG_ACCESS_TOKEN);
const reels = await fetchReels(token);

await writeFile(
  new URL("../src/data/reels.json", import.meta.url),
  JSON.stringify(reels, null, 2) + "\n",
);

console.log(`Wrote ${reels.length} reels.`);

if (process.env.GITHUB_OUTPUT) {
  await appendFile(process.env.GITHUB_OUTPUT, `refreshed_token=${token}\n`);
}
