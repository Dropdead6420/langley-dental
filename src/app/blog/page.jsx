"use client"
import { useMemo, useState } from "react";

const POSTS = [
  {
    id: "1",
    title: "From solo practices to emerging collectives",
    excerpt:
      "How modern clinics are evolving their care model, ops, and patient experience with measurable outcomes.",
    cover:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop",
    category: "Dental",
    author: "Dr. Kaur",
    date: "2025-09-27",
    readingTime: "6 min",
    content: `
      <h1>From Solo Practices to Emerging Collectives</h1>
      <p>This article explores the operational transformations in dental practices as they adopt collaborative models.</p>
      <h2>Why collectives?</h2>
      <ul>
        <li>Shared services and procurement</li>
        <li>Centralized patient systems</li>
        <li>Peer mentorship and quality control</li>
      </ul>
      <p>These strategies unlock sustainable growth while preserving clinical autonomy.</p>
    `,
    tags: ["operations", "growth", "patient-experience"],
    featured: true,
  },
  {
    id: "2",
    title: "Digital radiography: picking the right stack",
    excerpt:
      "Sensor types, image pipelines, and integration tips for reliable diagnostics at scale.",
    cover:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
    category: "Imaging",
    author: "Team",
    date: "2025-08-19",
    readingTime: "4 min",
    content: `
      <h1>Digital Radiography Stack</h1>
      <p>Choosing sensors, software, and storage that work together reduces downtime and improves clarity.</p>
    `,
    tags: ["xrays", "interop"],
  },
  {
    id: "3",
    title: "Clear aligners: case selection that sticks",
    excerpt:
      "A quick framework for screening, planning, and expectation setting for aligner candidates.",
    cover:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", // <-- UPDATED COVER IMAGE
    category: "Orthodontics",
    author: "Dr. Sen",
    date: "2025-07-06",
    readingTime: "5 min",
    content: `
      <h1>Case Selection for Clear Aligners</h1>
      <p>Start with predictable movements and align patient expectations to adherence.</p>
    `,
    tags: ["aligners", "case-selection"],
  },
  {
    id: "4",
    title: "Sedation basics: safety-first protocols",
    excerpt:
      "Pre-op screening, monitoring, and recovery checklists to standardize outcomes.",
    cover:
      "https://plus.unsplash.com/premium_photo-1681997228576-97a401398bf5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    category: "Sedation",
    author: "Nursing",
    date: "2025-06-01",
    readingTime: "7 min",
    content: `
      <h1>Sedation Protocols</h1>
      <p>Build a reliable pre-op and monitoring workflow to minimize risk and anxiety.</p>
    `,
    tags: ["protocols", "safety"],
  },
];


const categories = ["All", ...Array.from(new Set(POSTS.map(p => p.category)))];


function BlogCard({ post, onOpen }) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] cursor-pointer"
      onClick={() => onOpen(post)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(post)}
    >
      {/* Image with subtle overflow and enhanced hover */}
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Metadata: Refined color and spacing */}
        <div className="flex items-center gap-3 text-xs text-zinc-500">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-indigo-700 font-medium tracking-wide">
            {post.category}
          </span>
          <span aria-hidden="true">/</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span aria-hidden="true">/</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Title: Stronger font weight */}
        <h3 className="text-xl font-bold text-zinc-900 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt: Slightly more muted text for contrast */}
        <p className="text-base text-zinc-500 line-clamp-3">{post.excerpt}</p>

        {/* Call to action: More prominent color */}
        <div className="mt-auto pt-2">
          <span className="text-sm font-semibold text-indigo-600 transition duration-300 group-hover:text-indigo-700 group-hover:underline">
            Read article →
          </span>
        </div>
      </div>
    </article>
  );
}


function Featured({ post, onOpen }) {
  if (!post) return null;
  return (
    <section className="relative isolate overflow-hidden rounded-2xl bg-zinc-900 text-white shadow-xl">
      {/* Image with Darker Overlay */}
      <img
        src={post.cover}
        alt={post.title}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-zinc-900 to-zinc-700/50" />
      
      <div className="p-8 sm:p-12 lg:p-16">
        {/* Metadata */}
        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-indigo-500 px-3 py-1 text-white font-medium shadow-md">
            {post.category}
          </span>
          <span className="text-zinc-300">
            {new Date(post.date).toLocaleDateString()} • {post.readingTime}
          </span>
        </div>
        
        {/* Title & Excerpt */}
        <h2 className="max-w-4xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {post.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-300">{post.excerpt}</p>
        
        {/* Button */}
        <button
          onClick={() => onOpen(post)}
          className="mt-8 inline-flex items-center rounded-xl bg-black px-6 py-3 text-base font-semibold text-gray-900 transition hover:bg-indigo-500 shadow-lg"
        >
          Read featured article →
        </button>
      </div>
    </section>
  );
}


function ReaderModal({ open, onClose, post }) {
  if (!open || !post) return null;
  return (
    <div
      // Full screen on mobile, centered on desktop
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/75 p-0 sm:items-center sm:p-8 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        
        className="max-h-full w-full max-w-4xl overflow-y-auto rounded-t-xl bg-white p-5 sm:max-h-[95vh] sm:rounded-2xl sm:p-8 transform transition-transform duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header and Close Button (Optimized for space on mobile) */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between sm:mb-8">
          
          {/* Metadata Block: Stacks vertically on small screens if necessary */}
          <div className="text-sm text-zinc-500 order-2 sm:order-1 mt-2 sm:mt-0">
            <span className="font-semibold text-indigo-600">{post.category}</span>
            <span aria-hidden="true"> / </span>
            {new Date(post.date).toLocaleDateString()}
            <span aria-hidden="true"> / </span>
            {post.readingTime}
            {/* Mobile Title: Visible on small screens, hidden on desktop */}
            <h1 className="text-2xl font-bold text-zinc-900 mt-1 block sm:hidden">{post.title}</h1>
          </div>
          
          <button
            onClick={onClose}
            className="rounded-full p-2 text-zinc-500 hover:bg-zinc-100 transition self-end sm:self-auto order-1 sm:order-2"
            aria-label="Close reader"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Desktop Title: Hidden on mobile, visible on desktop */}
        <h1 className="text-3xl font-extrabold text-zinc-900 hidden sm:block mb-6">{post.title}</h1>

        {/* Cover Image */}
        <img
          src={post.cover}
          alt={post.title}
          className="mb-8 aspect-[16/9] w-full rounded-xl object-cover shadow-md"
        />

        {/* Article Content */}
        <article
          className="prose prose-lg prose-indigo max-w-none prose-h1:text-zinc-900 prose-h2:text-zinc-800 prose-a:text-indigo-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <footer className="mt-10 pt-6 border-t border-zinc-100 text-sm text-zinc-500">
            Article by **{post.author}**.
        </footer>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const featured = useMemo(
    () => POSTS.find((p) => p.featured) || POSTS[0],
    []
  );

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const matchesCat = cat === "All" || p.category === cat;
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.join(" ").toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery && p.id !== featured.id;
    });
  }, [cat, query, featured?.id]);

  const openPost = (post) => {
    setActive(post);
    setOpen(true);
  };

  return (
    // Background set to light blue gradient, top margin set to pt-20.
    <main className="mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50/50 to-white min-h-screen">
      
      {/* Page Header */}
      <header className="mb-10 sm:mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900">
            Clinical Blog
          </h1>
          <p className="mt-2 text-lg text-zinc-600">
            Insights, case notes, and practical guides from the clinic.
          </p>
        </div>
        
        {/* Search & Filter */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, excerpt, or tags…"
              className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-4 pr-10 text-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm transition sm:w-72"
            />
            {/* Search Icon */}
            <svg
                className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
          </div>
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Featured Article */}
      <Featured post={featured} onOpen={openPost} />

      {/* Latest Articles Grid */}
      <section className="mt-12 sm:mt-16">
        <h2 className="mb-6 text-2xl font-bold text-zinc-900">
          Latest Insights
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} onOpen={openPost} />
          ))}
          
          {filtered.length === 0 && (
              <div className="col-span-full text-center py-10 text-zinc-500 text-lg">
                  No articles found matching your criteria.
              </div>
          )}
        </div>
      </section>

      {/* Reader Modal */}
      <ReaderModal open={open} onClose={() => setOpen(false)} post={active} />
    </main>
  );
}
