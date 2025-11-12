

import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogs";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((b) => b.id === Number(id));

  if (!post) {
    return (
      <>
       
        <div className="min-h-screen flex items-center justify-center bg-muted px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Blog not found</h2>
            <Link to="/blog">
              <Button className="mt-6 bg-green-700 hover:bg-green-800 text-white">
                Back to Blogs
              </Button>
            </Link>
          </div>
        </div>
    
      </>
    );
  }

  return (
    <>
      {/* ✅ consistent header */}
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* ✅ Blog Image */}
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[450px] object-cover rounded-2xl shadow-lg mb-10"
            />
          )}

          {/* ✅ Date */}
          <div className="flex items-center gap-3 text-gray-500 mb-4">
            <span className="text-sm font-semibold uppercase tracking-wide">
              {post.date}
            </span>
          </div>

          {/* ✅ Title */}
          <h1 className="text-5xl font-black text-green-700 mb-8 leading-tight">
            {post.title}
          </h1>

          {/* ✅ Full Content */}
          <article className="prose max-w-none text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {post.fullContent}
          </article>

          {/* ✅ Back Button */}
          <div className="mt-12">
            <Link to="/blog">
              <Button
                size="lg"
                className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Blogs
              </Button>
            </Link>
          </div>
        </div>
      </main>
       {/* ✅ consistent footer */}
    </>
  );
};

export default BlogDetails;
