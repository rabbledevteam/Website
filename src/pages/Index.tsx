import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/AnimatedCard";
import { ScrollingLogos } from "@/components/ScrollingLogos";
import { Typewriter } from "@/components/Typewriter";
import logo from "@/assets/rabblehub-logo.png";
import FreeCounselling from "@/pages/FreeCounselling";

import {
  Sparkles,
  Target,
  Rocket,
  FileText,
  Linkedin,
  Mic,
  Mail,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b-4 border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Rabblehub"
             style={{ height: "150px", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
           {[
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Service", path: "/service" },
  { name: "Free Counselling", path: "/free-counselling" },
].map((item) => (
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
              size="sm"
              className="border-2 border-foreground font-semibold"
            >
              For Employers
            </Button>
            <Button
              size="sm"
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
           
          {[
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Service", path: "/service" },
  { name: "Free Counselling", path: "/free-counselling" },
].map((item) => (
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

      {/* HERO SECTION */}
      <section className="container px-4 py-20 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-block rounded-full border-2 border-primary bg-primary/20 px-6 py-2 text-sm font-bold text-deep-green">
              ✨ FUTURE-PROOF YOUR CAREER
            </div>

            <h1 className="text-5xl font-black leading-tight text-foreground md:text-7xl">
              <Typewriter
                words={["Learn.", "Prove.", "Get Hired."]}
                className="text-gradient"
              />
            </h1>

            <p className="text-xl text-muted-foreground md:text-2xl">
              You don't need another "online course." You need a system that
              actually gets you hired.
            </p>

            <ul className="space-y-4 text-lg">
              {[
                "Future skills you actually need – Learn in-demand AI, B2B Sales, Marketing + more.",
                "Prove you can do it – Build real projects that become your portfolio.",
                "A marketplace that connects you with jobs – because you're here to get hired.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="h-14 border-2 border-foreground bg-primary px-8 text-lg font-bold shadow-[6px_6px_0px_0px_rgba(1,50,1,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Let’s Start <ArrowRight className="ml-2" />
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[44, 46, 47, 48].map((id) => (
                  <img
                    key={id}
                    src={`https://randomuser.me/api/portraits/${
                      id % 2 ? "men" : "women"
                    }/${id}.jpg`}
                    alt="user"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="text-sm font-semibold">
                <span className="text-2xl text-primary">1000+</span> Rabblers
                already hired
              </p>
            </div>
          </div>

          {/* Right - Floating Card */}
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-72 w-72 animate-float rounded-full bg-primary/30 blur-3xl" />
            <div
              className="absolute -bottom-4 -left-4 h-72 w-72 animate-float rounded-full bg-accent/30 blur-3xl"
              style={{ animationDelay: "1s" }}
            />
            <AnimatedCard className="relative border-primary bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Sparkles className="h-12 w-12 text-primary" />
                  <div>
                    <p className="text-sm font-bold text-muted-foreground">
                      RABBLE BOT
                    </p>
                    <p className="text-2xl font-black">Your AI Career Coach</p>
                    <a
                      href="/chat"
                      className="text-green-600 hover:underline"
                    >
                      💬 Chat Support
                    </a>
                  </div>
                </div>

                <div className="space-y-3 rounded-2xl border-2 border-foreground bg-background p-6">
                  <p className="font-bold">💡 Ready to level up?</p>
                  <p className="text-muted-foreground">
                    I’ve analyzed your profile and built you a custom roadmap.
                    Let’s get started!
                  </p>
                  <Button className="w-full border-2 border-foreground font-bold">
                    Show My Path
                  </Button>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
    

      {/* Scrolling Companies */}
      <ScrollingLogos />

      {/* Why Section */}
      <section className="container px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-black text-foreground md:text-5xl">
            Why the world doesn't need another course platform.
          </h2>
          <p className="text-xl text-muted-foreground">
            Here's the truth: most career platforms fail you. We built a closed‑loop ecosystem to fix it.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <AnimatedCard delay={0}>                       
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="text-2xl font-black text-red-600">Binge-Watch Failure</h3>
              <p className="text-muted-foreground">
                You watch 40 hours of content. Zero portfolio. Zero proof. Zero results.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={100}>
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20">
                <span className="text-3xl">❌</span>
              </div>
              <h3 className="text-2xl font-black text-red-600">Application Void</h3>
              <p className="text-muted-foreground">
                You apply to 200 jobs. Nobody replies. Because everyone else applied too.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20">
                <span className="text-3xl">💸</span>
              </div>
              <h3 className="text-2xl font-black text-red-600">Spam DMs</h3>
              <p className="text-muted-foreground">
                "Wanna work with us?" (But it's a scam.) "Apply here!" (It's another fake post.)
              </p>
            </div>
          </AnimatedCard>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <AnimatedCard className="border-primary" delay={300}>
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
                <span className="text-4xl font-black text-primary">1.</span>
              </div>
              <h3 className="text-2xl font-black">Learn</h3>
              <p className="text-muted-foreground">
                Pick skills that actually matter (AI, B2B Sales, Marketing). Complete real projects—not just watch videos.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard className="border-accent" delay={400}>
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20">
                <span className="text-4xl font-black text-accent">2.</span>
              </div>
              <h3 className="text-2xl font-black">Prove</h3>
              <p className="text-muted-foreground">
                Build a portfolio with tangible work. Earn badges. Get AI-powered feedback. Become undeniably hireable.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard className="border-secondary" delay={500}>
            <div className="space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/20">
                <span className="text-4xl font-black text-secondary">3.</span>
              </div>
              <h3 className="text-2xl font-black text-secondary">Get Hired</h3>
              <p className="text-muted-foreground">
                Employers can search for YOU. AI screens both ways, so nobody wastes time. Apply smart. Get hired.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="bg-muted py-20">
        <div className="container px-4">
          <h2 className="mb-16 text-center text-4xl font-black md:text-5xl">
            How you go from stuck to unstoppable.
          </h2>
          <div className="mx-auto max-w-3xl space-y-8">
            <AnimatedCard className="border-primary">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-3xl font-black text-deep-green">
                  1
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black">Choose Your Track: Get Clarity.</h3>
                  <p className="text-lg text-muted-foreground">
                    AI? B2B Sales? Marketing? Corporate Communication? Pick your path, and Rabble Bot customizes a roadmap. You don't get lost in choices; you get laser-focused. "Year of AI" → done.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard className="border-accent" delay={100}>
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-accent text-3xl font-black text-deep-green">
                  2
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black">Build + Get Critiqued: Prove Your Skill.</h3>
                  <p className="text-lg text-muted-foreground">
                    No more "theory overload." You build real projects, submit them to Labs, and Rabble Bot + mentors rip it apart (in a good way). You iterate, improve, publish to your portfolio.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard className="border-secondary" delay={200}>
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-secondary text-3xl font-black text-deep-green">
                  3
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black">Apply with an Edge: Get Hired.</h3>
                  <p className="text-lg text-muted-foreground">
                    RabbleJobs shows you curated roles. Rabble Bot tailors your resume and cover letter per job. Employers see your Fit Score, portfolio, mock interview reports. You apply smarter, not harder.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="h-14 border-2 border-foreground bg-primary px-8 text-lg font-bold shadow-[6px_6px_0px_0px_rgba(1,50,1,1)]"
            >
              Ready? Start Your Journey →
            </Button>
          </div>
        </div>
      </section>

      {/* Career Boosters */}
      <section id="boosters" className="container px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-black md:text-5xl">
            Because skills aren't enough.
          </h2>
          <p className="text-xl text-muted-foreground">
            This is your professional armor. The invisible edge that makes employers lean forward instead of pass.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedCard delay={0}>
            <FileText className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-2xl font-black">Resume Optimization</h3>
            <p className="text-muted-foreground">
              Not generic. Passes ATS, highlights achievements. Makes recruiters stop scrolling.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={100}>
            <Mail className="mb-4 h-12 w-12 text-accent" />
            <h3 className="mb-2 text-2xl font-black">Cover Letters</h3>
            <p className="text-muted-foreground">
              Connects your story to their needs. No more "I'm passionate about..." nonsense.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <Linkedin className="mb-4 h-12 w-12 text-secondary" />
            <h3 className="mb-2 text-2xl font-black">LinkedIn Glow-Up</h3>
            <p className="text-muted-foreground">
              Turns your dusty profile into a recruiter magnet. Keywords, portfolio, proof.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={300}>
            <Mic className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-2xl font-black">Mock Interviews</h3>
            <p className="text-muted-foreground">
              Practice. Feedback. Repeat. Until you're bulletproof and confident.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={400}>
            <Target className="mb-4 h-12 w-12 text-accent" />
            <h3 className="mb-2 text-2xl font-black">Naukri Optimization</h3>
            <p className="text-muted-foreground">
              Make your profile work for you. Get found by the right companies.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={500}>
            <TrendingUp className="mb-4 h-12 w-12 text-secondary" />
            <h3 className="mb-2 text-2xl font-black">Guided Assistance</h3>
            <p className="text-muted-foreground">
              What roles to apply for? How to angle yourself? We've got you.
            </p>
          </AnimatedCard>
        </div>

        <div className="mt-16 text-center">
          <AnimatedCard className="border-primary bg-gradient-to-br from-primary/10 to-accent/10">
            <p className="mb-6 text-xl font-bold">
              Your skills prove your potential. The Career Booster Bundle makes sure the world sees it.
            </p>
            <Button 
              size="lg"
              className="h-14 w-full sm:w-auto border-2 border-foreground bg-secondary px-8 text-lg font-bold shadow-[6px_6px_0px_0px_rgba(1,50,1,1)]"
            >
              Unlock the Bundle - Check Pricing
            </Button>
          </AnimatedCard>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-20">
        <div className="container px-4">
          <h2 className="mb-16 text-center text-4xl font-black md:text-5xl">
            Meet the Rabblers.
          </h2>
          <p className="mb-12 text-center text-xl text-muted-foreground">
            They're not a hype train. They're proof. These folks are building, applying, and—yup—getting hired.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "I thought I'd spend my life stuck. Instead, I got clarity in a week. Built a GenAI project in 3 weeks. Applied to 10 roles—got 3 callbacks. It's literally that fast.",
                name: "Sarah Chen",
                role: "Hired as AI Product Analyst",
                delay: 0
              },
              {
                quote: "The B2B track wasn't just theory. I ran actual cold calls (via role-play), aced my pitch, landed an SDR role at a SaaS startup. Rabble Bot even helped me negotiate. No joke.",
                name: "Marcus Williams",
                role: "B2B Sales Development Rep",
                delay: 100
              },
              {
                quote: "What was Rabblehub again? Oh right—the only 'community' where people actually help you instead of flexing. I got a LinkedIn overhaul, 5 portfolio pieces, and a job at Naukri. Worth every rupee.",
                name: "Priya Wilson",
                role: "Got a role at a top firm",
                delay: 200
              }
            ].map((testimonial) => (
              <AnimatedCard key={testimonial.name} delay={testimonial.delay}>
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl text-accent">⭐</span>
                    ))}
                  </div>
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/30" />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-black md:text-5xl">
            Pay once. Change forever.
          </h2>
          <p className="text-xl text-muted-foreground">
            One payment unlocks everything. No subscriptions, no upsells, no BS.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <AnimatedCard delay={0}>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-muted-foreground">FOR RABBLERS</p>
                <h3 className="mt-2 text-4xl font-black">₹297</h3>
                <p className="text-muted-foreground">One-time access</p>
              </div>
              <ul className="space-y-3">
                {[
                  "All tracks + future updates",
                  "Rabble Bot (AI coach)",
                  "Labs & portfolio builder",
                  "RabbleJobs marketplace",
                  "Community + events",
                  "Career Booster discounts"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full border-2 border-foreground bg-primary font-bold shadow-[4px_4px_0px_0px_rgba(1,50,1,1)]">
                Start Your Access
              </Button>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={100} className="border-primary lg:-mt-4 lg:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="rounded-full border-2 border-foreground bg-accent px-4 py-1 text-sm font-bold">
                POPULAR
              </span>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-muted-foreground">FOR EMPLOYERS (GROWTH)</p>
                <h3 className="mt-2 text-4xl font-black">₹999</h3>
                <p className="text-muted-foreground">/month</p>
              </div>
              <ul className="space-y-3">
                {[
                  "5 active job posts",
                  "500 profile views/month",
                  "AI screening pro",
                  "CSV export",
                  "3 team seats",
                  "In-app messaging"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full border-2 border-foreground bg-accent font-bold shadow-[4px_4px_0px_0px_rgba(1,50,1,1)]">
                Start Hiring
              </Button>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-muted-foreground">FOR EMPLOYERS (SCALE)</p>
                <h3 className="mt-2 text-4xl font-black">₹1999</h3>
                <p className="text-muted-foreground">/month</p>
              </div>
              <ul className="space-y-3">
                {[
                  "20 active jobs",
                  "Unlimited views",
                  "API access",
                  "ATS sync",
                  "10 team seats",
                  "Featured listings"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full border-2 border-foreground bg-secondary font-bold shadow-[4px_4px_0px_0px_rgba(1,50,1,1)]">
                Enterprise Access
              </Button>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 py-20">
        <div className="container px-4">
          <AnimatedCard className="mx-auto max-w-3xl border-primary text-center">
            <h2 className="mb-6 text-4xl font-black md:text-5xl">
              Your future self will thank you.
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              In six months, you could still be refreshing job boards, still hoping. Or you could be raising your new role. What will it be?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                className="h-14 border-2 border-foreground bg-primary px-8 text-lg font-bold shadow-[6px_6px_0px_0px_rgba(1,50,1,1)]"
              >
                Start Today. (We're the move.)
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="h-14 border-2 border-foreground px-8 text-lg font-bold"
              >
                Keep Scrolling Job Boards. Your call.
              </Button>
            </div>
          </AnimatedCard>
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

