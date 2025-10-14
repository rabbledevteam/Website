import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/AnimatedCard";
import logo from "@/assets/rabblehub-logo.png";
import { 
  Target, 
  Users, 
  Rocket,
  Heart,
  Zap,
  Award,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b-4 border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-24 items-center justify-between px-4">
          <Link to="/">
            <img 
              src={logo} 
              alt="Rabblehub" 
              style={{ height: "150px", width: "auto" }} 
            />
          </Link>
          <nav className="hidden items-center gap-6 md:flex mr-12">
            <Link to="/" className="text-lg font-semibold text-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="text-lg font-semibold text-primary">
              About
            </Link>
            <Link to="/blog" className="text-lg font-semibold text-foreground transition-colors hover:text-primary">
              Blog
            </Link>
            <Link to="/contact" className="text-lg font-semibold text-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-6">
            <Button variant="outline" size="lg" className="hidden border-2 border-foreground font-bold md:inline-flex">
              For Employers
            </Button>
            <Button size="lg" className="border-2 border-foreground bg-primary font-bold shadow-[4px_4px_0px_0px_rgba(1,50,1,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-block rounded-full border-2 border-primary bg-primary/20 px-6 py-2 text-sm font-bold text-deep-green">
            ✨ ABOUT RABBLEHUB
          </div>
          <h1 className="mb-6 text-5xl font-black leading-tight text-foreground md:text-7xl">
            We're Building the Future of <span className="text-gradient">Career Success</span>
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            RabbleHub isn't just another platform. We're a movement to fix how people learn, prove their skills, and get hired.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <AnimatedCard className="border-primary">
              <div className="space-y-6 text-center">
                <Target className="mx-auto h-16 w-16 text-primary" />
                <h2 className="text-4xl font-black md:text-5xl">Our Mission</h2>
                <p className="text-xl text-muted-foreground">
                  To create a closed-loop ecosystem where learning leads to proof, proof leads to jobs, and jobs lead to success. No more dead ends. No more empty promises.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container px-4 py-20">
        <h2 className="mb-16 text-center text-4xl font-black md:text-5xl">
          What We Stand For
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <AnimatedCard delay={0}>
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black">Real Results</h3>
              <p className="text-muted-foreground">
                We don't sell dreams. We deliver results. Our success is measured by yours—job offers, career growth, and real transformation.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={100}>
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-black">Action Over Theory</h3>
              <p className="text-muted-foreground">
                No more passive learning. We believe in building real projects, getting real feedback, and creating real portfolios that get you hired.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/20">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-black">Community First</h3>
              <p className="text-muted-foreground">
                The Rabble is a community of doers. We support each other, challenge each other, and celebrate each other's wins.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-muted py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-center text-4xl font-black md:text-5xl">
              How RabbleHub Was Born
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                We've seen it all. People taking courses that lead nowhere. Job boards that ghost you. Career advice that's 10 years out of date.
              </p>
              <p>
                The system is broken. So we built something new.
              </p>
              <p>
                RabbleHub connects the dots that other platforms ignore. We teach future-ready skills like AI and B2B sales. We help you build real projects that prove you can do the work. And we connect you directly with employers who are actually hiring.
              </p>
              <p className="text-xl font-bold text-foreground">
                No more gaps. No more guessing. Just a clear path from learning to earning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="container px-4 py-20">
        <h2 className="mb-16 text-center text-4xl font-black md:text-5xl">
          Our Impact in Numbers
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          <AnimatedCard delay={0} className="text-center">
            <div className="space-y-3">
              <div className="text-5xl font-black text-primary">1000+</div>
              <p className="text-lg font-bold">Rabblers Hired</p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={100} className="text-center">
            <div className="space-y-3">
              <div className="text-5xl font-black text-accent">5000+</div>
              <p className="text-lg font-bold">Projects Built</p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200} className="text-center">
            <div className="space-y-3">
              <div className="text-5xl font-black text-secondary">250+</div>
              <p className="text-lg font-bold">Partner Companies</p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={300} className="text-center">
            <div className="space-y-3">
              <div className="text-5xl font-black text-primary">95%</div>
              <p className="text-lg font-bold">Success Rate</p>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/20 to-accent/20 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Rocket className="mx-auto mb-6 h-16 w-16 text-primary" />
            <h2 className="mb-6 text-4xl font-black md:text-5xl">
              Ready to Join the Movement?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Stop waiting for things to change. Be part of the solution. Join RabbleHub today.
            </p>
            <Link to="/">
              <Button 
                size="lg"
                className="h-14 border-2 border-foreground bg-primary px-8 text-lg font-bold shadow-[6px_6px_0px_0px_rgba(1,50,1,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Get Started Now <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-foreground bg-deep-green py-12 text-black">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <img 
                src={logo} 
                alt="Rabblehub" 
                style={{ height: "125px", width: "auto" }}
                className="mb-4"
              />
            </div>
            <div>
              <h4 className="mb-4 font-bold">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:underline">Our Platform</Link></li>
                <li><Link to="/#tracks" className="hover:underline">All Tracks</Link></li>
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

export default About;
