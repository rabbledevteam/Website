import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import rabblehubLogo from "@/assets/rabblehub-logo.png";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  fullContent: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Collaborative Music Production",
    description: "Discover how modern technology is revolutionizing the way musicians collaborate across the globe, breaking down geographical barriers and creating new opportunities.",
    date: "March 15, 2024",
    fullContent: "In today's digital age, music production has transformed dramatically. Artists no longer need to be in the same studio, or even the same country, to create incredible music together. Cloud-based platforms, real-time collaboration tools, and high-speed internet have made it possible for musicians to work together seamlessly. This shift has opened up unprecedented opportunities for creativity, allowing diverse talents from different cultures and backgrounds to merge their unique styles. The result is a rich, global tapestry of sound that wouldn't have been possible just a decade ago. As technology continues to evolve, we can expect even more innovative ways for artists to connect and create together."
  },
  {
    id: 2,
    title: "Building Your Home Studio: Essential Tips",
    description: "Learn the fundamentals of setting up a professional-quality home recording studio without breaking the bank. From acoustic treatment to essential gear.",
    date: "February 28, 2024",
    fullContent: "Setting up a home studio doesn't have to cost a fortune. The key is understanding what equipment is truly essential and what can wait. Start with a good audio interface, a quality microphone, and reliable monitoring headphones or speakers. Acoustic treatment is often overlooked but crucial - simple DIY solutions like bass traps and absorption panels can dramatically improve your recordings. Don't forget about the importance of a comfortable, inspiring workspace. Your studio should be a place where creativity flows naturally. Consider the lighting, ergonomics of your desk setup, and organization of your gear. Remember, many legendary albums were recorded in modest home setups. It's not about having the most expensive equipment, but knowing how to use what you have effectively."
  },
  {
    id: 3,
    title: "Understanding Music Rights and Royalties",
    description: "A comprehensive guide to navigating the complex world of music rights, publishing, and royalty collection for independent artists.",
    date: "February 10, 2024",
    fullContent: "Music rights and royalties can seem overwhelming, but understanding them is crucial for any serious musician. There are multiple types of royalties: mechanical, performance, synchronization, and print music royalties. Each comes from different sources and requires different collection methods. As an independent artist, you need to register with performing rights organizations (PROs) to collect performance royalties. Consider signing up with a digital distribution service that handles mechanical royalties. For synchronization opportunities (TV, film, advertising), building relationships with music supervisors or joining sync licensing platforms can be beneficial. Keep detailed records of all your releases, co-writers, and agreements. The music industry is becoming more transparent, and there are now more tools than ever to help independent artists collect what they're owed. Don't leave money on the table - educate yourself and take control of your music career."
  }
];

const Blog = () => {
  const [expandedBlogId, setExpandedBlogId] = useState<number | null>(null);

  const toggleBlog = (id: number) => {
    setExpandedBlogId(expandedBlogId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-4 border-foreground bg-card py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/">
            <img 
              src={rabblehubLogo} 
              alt="RabbleHub Logo" 
              style={{ height: "150px" }}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>
          <nav className="hidden items-center gap-6 md:flex mr-12">
            <Link to="/" className="text-lg font-semibold text-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="text-lg font-semibold text-foreground transition-colors hover:text-primary">
              About
            </Link>
            <Link to="/blog" className="text-lg font-semibold text-primary">
              Blog
            </Link>
            <Link to="/contact" className="text-lg font-semibold text-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-black text-center mb-4">Our Blog</h1>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Stay updated with the latest insights, tips, and news from the world of music production
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border-4 border-foreground rounded-3xl bg-card p-8 shadow-[8px_8px_0px_0px_rgba(1,50,1,1)] transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(1,50,1,1)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-semibold">{post.date}</span>
              </div>
              
              <h2 className="text-3xl font-black mb-4">{post.title}</h2>
              
              <p className="text-lg text-muted-foreground mb-4">
                {post.description}
              </p>

              {expandedBlogId === post.id && (
                <p className="text-base leading-relaxed mb-4 animate-slide-up">
                  {post.fullContent}
                </p>
              )}

              <button
                onClick={() => toggleBlog(post.id)}
                className="flex items-center gap-2 text-primary font-bold hover:underline transition-all"
              >
                {expandedBlogId === post.id ? (
                  <>
                    Show Less <ChevronUp className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t-4 border-foreground bg-[#013201] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <img 
              src={rabblehubLogo} 
              alt="RabbleHub Logo" 
              style={{ height: "125px" }}
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl text-white">
              <div>
                <h3 className="font-bold text-xl mb-4">About</h3>
                <p className="text-sm">RabbleHub - Where music creators connect and collaborate.</p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                  <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                  <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Newsletter</h3>
                <p className="text-sm mb-4">Subscribe for updates</p>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 rounded-lg text-foreground"
                />
              </div>
            </div>
            <div className="text-white text-sm">
              © 2024 RabbleHub. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
