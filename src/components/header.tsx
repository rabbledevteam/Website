import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/rabblehub-logo.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Service", path: "/service" },
    { name: "Free Counselling", path: "/free-counselling" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-4 border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between px-4 py-0 h-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Rabblehub"
            className="h-[80px] w-auto mt-2"
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg font-semibold text-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="border-2 text-s px-6 border-foreground font-semibold"
          >
            For Employers
          </Button>
          <Button
            size="lg"
            className="border-2 border-foreground bg-primary font-semibold shadow-[3px_3px_0px_0px_rgba(1,50,1,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-foreground px-4 py-4 flex flex-col items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg font-semibold text-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}

          <Button
            variant="outline"
            size="lg"
            className="w-full border-2 border-foreground font-semibold"
          >
            For Employers
          </Button>
          <Button
            size="lg"
            className="w-full border-2 border-foreground bg-primary font-semibold shadow-[4px_4px_0px_0px_rgba(1,50,1,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Get Started
          </Button>
        </div>
      )}

      {/* Dev Banner */}
      <div className="bg-yellow-200 border-t-2 border-b-2 border-black/40 text-green-800 text-center py-3 font-bold">
        ⭐ This site is under development — coming soon!
      </div>
    </header>
  );
};
