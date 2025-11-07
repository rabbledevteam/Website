
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/rabblehub-logo.png";
import { blogPosts } from "@/data/blogs";

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b-4 border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-8">
          <Link to="/">
            <img src={logo} alt="Rabblehub" className="h-16 md:h-20 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-lg font-semibold hover:text-primary">Home</Link>
            <Link to="/about" className="text-lg font-semibold hover:text-primary">About</Link>
            <Link to="/blog" className="text-lg font-semibold hover:text-primary">Blog</Link>
            <Link to="/contact" className="text-lg font-semibold hover:text-primary">Contact</Link>
            <Link to="/service" className="text-lg font-semibold hover:text-primary">Service</Link>
             <Link to="/free-counselling" className="text-lg font-semibold text-foreground transition-colors hover:text-primary">
              Free Counselling
            </Link>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" variant="outline" className="border-2 border-foreground font-bold">For Employers</Button>
            <Button size="sm" className="border-2 border-foreground bg-primary font-bold shadow-[4px_4px_0px_0px_rgba(1,50,1,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex items-center justify-center text-foreground">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-foreground px-4 py-4 flex flex-col items-center gap-4">
            <Link to="/" className="font-semibold" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="font-semibold" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/blog" className="font-semibold" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/contact" className="font-semibold" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/service" className="font-semibold" onClick={() => setIsOpen(false)}>Service</Link>
            <Link to="/service" className="font-semibold" onClick={() => setIsOpen(false)}>Free Counselling</Link>
                      
            <Button variant="outline" size="sm" className="border-2 border-foreground font-bold w-full">For Employers</Button>
            <Button size="sm" className="border-2 border-foreground bg-primary font-bold w-full shadow-[4px_4px_0px_0px_rgba(1,50,1,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none">Get Started</Button>
          </div>
        )}

        {/* Under Development Line */}
        <div className="bg-yellow-200 border-t-2 border-b-2 border-black/40 text-green-800 text-center py-3 font-bold">
          ⭐ This site is under development — coming soon!
        </div>
      </header>

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
