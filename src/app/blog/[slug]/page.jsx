"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getBlogBySlug } from "@/services/blogService";
import Link from "next/link";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await getBlogBySlug(slug);
        console.log("API response:", res);
        if ((res?.status || res?.status) && res?.data) {
          setPost(res.data);
        } else {
          console.error("Blog not found or invalid response:", res);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) fetchPost();
  }, [slug]);

  if (loading) return <p className="!text-center !mt-20">Loading article...</p>;

  if (!post)
    return (
      <div className="!text-center !mx-auto !mt-20">
        <p className="!text-xl !font-bold">Blog not found</p>
        <Link href="/blog" className="!text-indigo-600 hover:!underline">
          ← Back to blogs
        </Link>
      </div>
    );

  return (
    <main className="!min-h-screen !bg-gradient-to-br !from-indigo-50/50 !to-white !py-12">
      <div className="!max-w-6xl !mx-auto !my-12 !bg-white !rounded-2xl !p-8 !shadow">
        <Link href="/blog" className="!text-sm !text-zinc-500 hover:!underline">
          ← Back to Blog
        </Link>

        <h1 className="!mt-4 !tracking-tight !text-3xl !font-extrabold !text-zinc-900">
          {post.title}
        </h1>

        <div className="!mt-2 !text-sm !text-zinc-500">
          {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ""}
        </div>

        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="!mt-6  !w-2/3 !rounded-xl !object-cover !aspect-[16/9] !shadow"
          />
        )}

        <article
          className="!prose !prose-lg !prose-indigo !mt-6 !max-w-none 
                     prose-h1:!text-zinc-900 prose-h2:!text-zinc-800 prose-a:!text-indigo-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </main>
  );
}
