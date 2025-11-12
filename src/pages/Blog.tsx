
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/rabblehub-logo.png";
import { blogPosts } from "@/data/blogs";
import { Header } from "@/components/header";

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
    <Header/>

      {/* Blog Listing */}
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-black text-center mb-4">Our Blog</h1>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Stay updated with the latest insights, tips, and news from the world of music production
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-card rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(1,50,1,1)] hover:shadow-[12px_12px_0px_0px_rgba(1,50,1,1)] transition transform hover:-translate-y-1">
              {post.image && (
                <img src={post.image} alt={post.title} className="w-full h-44 object-cover"/>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-semibold">{post.date}</span>
                </div>
                <h2 className="text-2xl font-black mb-3">{post.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{post.description}</p>

                <div className="flex items-center justify-between">
                  <Link to={`/blog/${post.id}`} className="text-primary font-bold hover:underline">
                    Read More
                  </Link>
                  <span className="text-sm text-muted-foreground font-semibold">Read time: 3 min</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer (unchanged) */}
      <footer className="border-t-4 border-foreground bg-deep-green py-12 text-black">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <img src={logo} alt="Rabblehub" style={{ height: "150px", width: "auto" }} />
            </div>
            <div>
              <h4 className="mb-4 font-bold">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Our Platform</a></li>
                <li><a href="#" className="hover:underline">All Tracks</a></li>
                <li><a href="#" className="hover:underline">RabbleJobs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:underline">For Employers</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-bold">JOBS</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Browse</a></li>
                <li><a href="#" className="hover:underline">Post a Job</a></li>
                <li><a href="#" className="hover:underline">Talent Search</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-black/30 pt-8 text-center text-sm">
            <p>© 2025 RABBLEHUB. AIN'T NOBODY GOT TIME FOR THAT.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
