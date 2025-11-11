"use client";
import { getAllBlogs } from "@/services/blogService";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Metadata: Refined color and spacing */}
        <div className="flex items-center gap-3 text-xs text-zinc-500">
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>

        {/* Title: Stronger font weight */}
        <h3 className="text-xl font-bold text-zinc-900 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-base text-zinc-500 line-clamp-3">
          {post.content?.slice(0, 100).concat("...")}
        </p>
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
        src={post.coverImage}
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
            {new Date(post.updatedAt).toLocaleDateString()} • {post.readingTime}
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

export default function BlogPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
      const query = `page=${page}&limit=${limit}&title=${search}`;
     const res = await getAllBlogs(query);
        if (res?.status) {
          setBlogs(res.data || []);
        } else {
          toast.error(res?.message || "Failed to fetch blogs");
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        toast.error("Something went wrong while fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page, limit]);

  const featured = useMemo(() => blogs.find((p) => p.featured) || blogs[0], [blogs]);

  const openPost = (post) => {
    if (!post?.slug) return;
    router.push(`/blog/${post.slug}`);
  };

  const handleSearchClick = () => {
    if (!isSearching && search.trim()) {
      fetchBlogs(search);
      setIsSearching(true);
      console.log("clicked search icon");
    } else {
      setSearch('');
      fetchBlogs('');
      setIsSearching(false);
      console.log("clicked cross icon");
    }
  };

  if (loading) {
    return null;
  }

  return (
    // Background set to light blue gradient, top margin set to pt-20.
    <main className="mx-auto  px-4 pt-24 pb-12 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50/50 to-white min-h-screen">
      <div className="container">
      {/* Page Header */}
      <header className="mb-10 sm:mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 !mb-4">
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title"
              className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-4 pr-10 text-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm transition sm:w-72"
            />

            {/* Search or Cross Icon */}
            <button
              onClick={handleSearchClick}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-indigo-600 transition"
            >
              {!isSearching ? (
                // Search Icon
                <svg
                  className="h-5 w-5"
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
              ) : (
                // Cross Icon
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
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
          {blogs?.map((post) => (
            <BlogCard key={post._id} post={post} onOpen={openPost} />
          ))}

          {blogs?.length === 0 && (
            <div className="col-span-full text-center py-10 text-zinc-500 text-lg">
              No articles found matching your criteria.
            </div>
          )}
        </div>
      </section>

   
      </div>
    </main>
  );
}
