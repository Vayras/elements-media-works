import { useState } from "react";
import { workPosts } from "../data/work.js";
import reels from "../data/reels.json";

const INSTAGRAM_URL = "https://www.instagram.com/elementsmediaworks/";

const FORMAT_LABEL = { reel: "Reel", carousel: "Carousel", post: "Post" };

const FILTERS = [
  { value: "all", label: "All" },
  { value: "reel", label: "Reels" },
  { value: "carousel", label: "Carousels" },
  { value: "post", label: "Posts" },
  { value: "elchemy", label: "Brand Elchemy" },
];

const matches = (filter, post) =>
  filter === "all" || post.format === filter || (filter === "elchemy" && post.tag === "Brand Elchemy");

/* Posts pulled in by the Instagram workflow (reels.json) join the wall as reels. */
const feedPosts = reels.map((reel) => ({
  id: reel.id,
  format: "reel",
  ratio: "9 / 16",
  title: reel.caption ? reel.caption.split("\n")[0].slice(0, 60) : "Instagram reel",
  tag: "Reels",
  date: "",
  href: reel.permalink,
  image: reel.thumbnail,
}));

const allPosts = [...workPosts, ...feedPosts].map((post, index) => ({
  ...post,
  number: String(index + 1).padStart(2, "0"),
}));

const heightOf = (ratio) => {
  const [w, h] = ratio.split("/").map((part) => Number(part.trim()));
  return h / w;
};

/* Desktop: a still masonry wall. Each post goes into the shortest column. */
function toColumns(posts, count) {
  const columns = Array.from({ length: count }, () => []);
  const heights = Array(count).fill(0);
  posts.forEach((post) => {
    const target = heights.indexOf(Math.min(...heights));
    columns[target].push(post);
    heights[target] += heightOf(post.ratio) + 0.3;
  });
  return columns;
}

/* Tablet and phone: columns of two that drift sideways. Tall reels are paired
   with shorter posts so the columns stay close in height. */
function toPairs(posts) {
  const tall = posts.filter((post) => heightOf(post.ratio) > 1.5);
  const rest = posts.filter((post) => heightOf(post.ratio) <= 1.5);
  const ordered = [];
  while (tall.length || rest.length) {
    if (tall.length) ordered.push(tall.shift());
    if (rest.length) ordered.push(rest.shift());
    if (!tall.length && rest.length) ordered.push(rest.shift());
  }
  const pairs = [];
  for (let i = 0; i < ordered.length; i += 2) pairs.push(ordered.slice(i, i + 2));
  return pairs;
}

const desktopColumns = toColumns(allPosts, 4);
const driftColumns = toPairs(allPosts);

function ReelIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M5 3.5v9l7.5-4.5z" fill="currentColor" />
    </svg>
  );
}

function CarouselIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <rect x="1.5" y="4.5" width="9.5" height="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 1.5h9.5v10" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function PostTile({ post, filter, hidden = false }) {
  const kind = FORMAT_LABEL[post.format];
  const dimmed = !matches(filter, post);

  return (
    <a
      className={`ds-wk-tile ds-wk-tile--${post.format}${dimmed ? " is-dim" : ""}`}
      href={post.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${kind}: ${post.title} (opens Instagram)`}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      <span className="ds-wk-tile__frame" style={{ aspectRatio: post.ratio }}>
        {post.format === "carousel" && (
          <>
            <span className="ds-wk-tile__sheet ds-wk-tile__sheet--back" aria-hidden="true" />
            <span className="ds-wk-tile__sheet ds-wk-tile__sheet--front" aria-hidden="true" />
          </>
        )}
        <span className="ds-wk-tile__media">
          <img src={post.image} alt="" />
        </span>
        {post.format !== "post" && (
          <span className={`ds-wk-tile__chip ds-wk-tile__chip--${post.format}`}>
            {post.format === "reel" ? <ReelIcon /> : <CarouselIcon />}
            <span className="ds-wk-tile__chip-label">{kind}</span>
          </span>
        )}
      </span>
      <span className="ds-wk-tile__meta">
        <span className="ds-caps">
          {post.number} · {kind}
          {post.date ? ` · ${post.date}` : ""}
        </span>
        <span className="ds-wk-tile__title">{post.title}</span>
      </span>
    </a>
  );
}

function WorkSection() {
  const [filter, setFilter] = useState("all");
  const [paused, setPaused] = useState(false);
  const shown = allPosts.filter((post) => matches(filter, post)).length;

  return (
    <section className="ds-work" id="projects" aria-labelledby="workTitle">
      <div className="ds-wrap">
        <div className="ds-grid ds-work__head">
          <div className="ds-work__intro">
            <p className="ds-label ds-work__label">
              <span>05</span>
              <span>Selected work</span>
            </p>
            <h2 className="ds-h2" id="workTitle">
              Work
            </h2>
          </div>
        </div>

        <div className="ds-work__bar">
          <div className="ds-work__filters" role="group" aria-label="Filter work">
            {FILTERS.map((option) => (
              <button
                type="button"
                className="ds-work__filter"
                aria-pressed={option.value === filter}
                onClick={() => setFilter(option.value)}
                key={option.value}
              >
                {option.label}
                <sup>{allPosts.filter((post) => matches(option.value, post)).length}</sup>
              </button>
            ))}
          </div>
          <a className="ds-link ds-work__handle" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            @elementsmediaworks ↗
          </a>
        </div>
      </div>

      {/* Desktop: still wall */}
      <div className="ds-wrap ds-work__wall">
        {desktopColumns.map((column, index) => (
          <div className="ds-work__col" key={index}>
            {column.map((post) => (
              <PostTile post={post} filter={filter} key={post.id} />
            ))}
          </div>
        ))}
      </div>

      {/* Tablet and phone: drifting wall (two copies for a seamless loop) */}
      <div className="ds-work__drift">
        <div className={`ds-work__track${paused ? " is-paused" : ""}`}>
          {[0, 1].map((copy) =>
            driftColumns.map((pair, index) => (
              <div className="ds-work__pair" key={`${copy}-${index}`}>
                {pair.map((post) => (
                  <PostTile post={post} filter={filter} hidden={copy === 1} key={post.id} />
                ))}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="ds-wrap">
        <div className="ds-work__foot">
          <span className="ds-work__count">
            {shown} of {allPosts.length} pieces
          </span>
          <div className="ds-work__actions">
            <button
              type="button"
              className="ds-work__pause"
              onClick={() => setPaused((value) => !value)}
              aria-pressed={paused}
            >
              {paused ? "Play" : "Pause"}
            </button>
            <a className="ds-btn ds-btn--yellow" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Follow @elementsmediaworks
              <span className="ds-btn__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
