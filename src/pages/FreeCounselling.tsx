import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/AnimatedCard";
import logo from "@/assets/rabblehub-logo.png";
import {
  Phone,
  Calendar,
  CheckCircle,
  Users,
  Target,
  ArrowRight,
  Briefcase,
  GraduationCap,
  UserCircle,
  BookOpen,
  FileText,
  TrendingUp,
  ChevronDown,
  PhoneCall,
  Award,
  Menu,
  X,
  MessageSquare,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


  const cards = [
    {
      id: 1,
      icon: <Target />,
      title: "Clarity On Your Next Move",
      desc: "Whether it's a career switch, skill upgrade, or job search strategy—walk away knowing exactly what to do next.",
      colorFrom: "from-primary/80",
      colorTo: "to-primary/40",
    },
    {
      id: 2,
      icon: <TrendingUp />,
      title: "Executive Insights",
      desc: "Get real-world perspectives on market trends, in-demand skills, and opportunities you might be missing.",
      colorFrom: "from-accent/80",
      colorTo: "to-accent/40",
    },
    {
      id: 3,
      icon: <FileText />,
      title: "Honest Career Assessment",
      desc: "We'll help you identify your strengths, gaps, and the most realistic path forward based on your unique situation.",
      colorFrom: "from-secondary/80",
      colorTo: "to-secondary/40",
    },
    {
      id: 4,
      icon: <BookOpen />,
      title: "Personalized Action Report",
      desc: "Within 48 hours, receive a custom action plan with specific steps, resources, and timeline tailored to you.",
      colorFrom: "from-primary/80",
      colorTo: "to-primary/40",
    },
    {
      id: 5,
      icon: <Award />,
      title: "Resume & Profile Tips",
      desc: "Quick wins to make your resume and LinkedIn profile stand out to recruiters and hiring managers.",
      colorFrom: "from-accent/80",
      colorTo: "to-accent/40",
    },
    {
      id: 6,
      icon: <UserCircle />,
      title: "Confidence Boost",
      desc: "Leave the call feeling empowered, with a clear roadmap and the confidence to take action immediately.",
      colorFrom: "from-secondary/80",
      colorTo: "to-secondary/40",
    },
  ];

// ✅ Testimonials for hero section
const heroTestimonials = [
  {
    name: "Aarav Patel",
    role: "Engineering Student",
    quote: "The session gave me total clarity — I finally know what path fits me best!",
  },
  {
    name: "Neha Kapoor",
    role: "Marketing Executive",
    quote: "I was lost before the call. Now I have a clear, step-by-step career plan!",
  },
  {
    name: "Vikram Singh",
    role: "Career Switcher",
    quote: "Best 30 minutes ever — the counsellor understood my confusion instantly.",
  },
  {
    name: "Isha Rao",
    role: "Recent Graduate",
    quote: "It felt like talking to a mentor who truly cared about my future.",
  },
];

const steps = [
  {
    id: 1,
    number: "01",
    title: "Book Your Slot",
    desc: "Choose a time that works for you. No payment, no strings attached—just pick a slot and you're in.",
    icon: <Phone className="w-10 h-10" />,
    colorFrom: "from-blue-400",
    colorTo: "to-blue-600",
  },
  {
    id: 2,
    number: "02",
    title: "Join the Call",
    desc: "Meet your counsellor for a 30-minute 1:1 session. Come prepared with questions, or just show up—we'll guide you.",
    icon: <MessageSquare className="w-10 h-10" />,
    colorFrom: "from-orange-400",
    colorTo: "to-red-500",
  },
  {
    id: 3,
    number: "03",
    title: "Get Your Action Plan",
    desc: "Within 48 hours, receive a personalized report with clear next steps, resources, and a timeline to follow.",
    icon: <CheckCircle className="w-10 h-10" />,
    colorFrom: "from-green-400",
    colorTo: "to-emerald-600",
  },
];

const FreeCounselling: React.FC = () => {
  const [theme] = useState<"minimal" | "dynamic">("dynamic");
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [iconAnimateId, setIconAnimateId] = useState<number | null>(null);
  const totalRef = useRef<HTMLDivElement | null>(null);
  const [totalVisible, setTotalVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  
const [isOpen, setIsOpen] = useState(false);
const [animationDone, setAnimationDone] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setAnimationDone(true), 2500);
  return () => clearTimeout(timer);
}, []);
  // ✅ Hero Testimonial State
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroTestimonials.length);
    }, 3000); // auto-slide every 3s
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for animation
  useEffect(() => {
    if (!totalRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTotalVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(totalRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!totalVisible) return;
    let raf: number;
    const start = performance.now();
    const duration = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setProgress(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [totalVisible]);

  const handleCardClick = (id: number) => {
    setActiveCard((prev) => (prev === id ? null : id));
    setIconAnimateId(id);
    setTimeout(() => setIconAnimateId(null), 700);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

        <header
               className={`sticky top-0 z-50 backdrop-blur-md border-b-2 ${
                 theme === "dynamic"
                   ? "bg-white/80 border-green-500"
                   : "bg-white border-gray-200"
               }`}
             >
               <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
                 {/* Logo */}
                 <Link to="/">
                   <img
                     src={logo}
                     alt="RabbleHub Logo"
                     style={{ height: "150px", width: "auto" }}
                   />
                 </Link>
       
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
       
       
                 {/* Desktop Buttons */}
                 <div className="hidden md:flex gap-3">
                   <Button
                     size="sm"
                     variant="outline"
                     className="border-green-700 text-green-700 font-bold"
                   >
                     For Employers
                   </Button>
                   <Button
                     size="sm"
                     className="bg-green-700 hover:bg-green-800 text-white font-bold"
                   >
                     Get Started
                   </Button>
                 </div>
       
                 {/* Mobile Menu Toggle */}
                 <button
                   className="md:hidden text-green-700"
                   onClick={() => setIsOpen(!isOpen)}
                 >
                   {isOpen ? <X size={28} /> : <Menu size={28} />}
                 </button>
               </div>
       
               {/* ✅ Mobile Dropdown */}
               {isOpen && (
                 <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4 text-center">
                   {["Home", "About", "Service", "Blog", "Contact" , "Free Counselling"].map((item) => (
                     <Link
                       key={item}
                       to={`/${item.toLowerCase()}`}
                       onClick={() => setIsOpen(false)}
                       className="font-semibold text-gray-700 hover:text-green-700"
                     >
                       {item}
                     </Link>
                   ))}
                   <div className="flex flex-col gap-3 mt-4">
                     <Button
                       size="sm"
                       variant="outline"
                       className="border-green-700 text-green-700 font-bold"
                     >
                       For Employers
                     </Button>
                     <Button
                       size="sm"
                       className="bg-green-700 hover:bg-green-800 text-white font-bold"
                     >
                       Get Started
                     </Button>
                   </div>
                 </div>
               )}
             </header>
   {/* ✅ Under Development Bar */}
      <div className="bg-yellow-200 border-t-2 border-b-2 border-yellow-400 text-green-800 text-center py-3 font-bold">
        ⭐ This site is under development — coming soon!
      </div>
      {/* ✅ HERO SECTION */}
      <section className="container  px-4 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div  className="grid gap-16 lg:grid-cols-2 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-10">
              <div   style={{ color: "#038003" }} className="inline-block text-white rounded-full border-2 border-primary bg-primary/20 px-6 py-2 text-sm font-bold text-deep-green">
                ✨ 100% Free · Expert-Led · 1:1 Session
              </div>
<h1
  className="text-left md:text-center text-4xl font-arialUnicode md:text-6xl lg:text-7xl font-black text-foreground -mb-2 whitespace-nowrap"
>
  Lost in your career?
</h1>

<h1
  className="text-left md:text-center font-arialUnicode text-4xl md:text-6xl lg:text-7xl font-black whitespace-nowrap mb-1"
>
  <span style={{ color: '#038003' }}>
    Speak to an expert for free!
  </span>
</h1>



              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Get expert-led career guidance in a free 1:1 session. Walk away
                with absolute clarity, a personalized action plan for the next
                90 days, and the confidence to take your next step.
              </p>

              {/* BUTTON */}
              <button
  style={{ color: "#038003" }}
  className="relative group bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(72,255,125,0.4)]"
>
  <span className="flex items-center gap-2 text-white z-10 relative">

    {/* Calendar Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>

    Book Your Free Call →
  </span>
</button>


{/* ⭐ SOCIAL PROOF */}
<div className="flex flex-wrap items-center gap-6 pt-4">

  {/* ✅ Profile Circles */}
  <div className="flex -space-x-3">
    {[
      "https://i.pravatar.cc/150?img=32",
      "https://i.pravatar.cc/150?img=12",
      "https://i.pravatar.cc/150?img=48"
    ].map((src, i) => (
      <img
        key={i}
        src={src}
        className="h-12 w-12 rounded-full border-4 border-background object-cover"
        alt="User avatar"
      />
    ))}

    {/* ✅ Last overlapping circle + number */}
    <div
      className="
        h-12 w-12 rounded-full border-4 border-background 
        bg-gradient-to-br from-green-500 to-green-700
        flex items-center justify-center text-white font-bold
        -ml-3
      "
    >
      +2.5K
    </div>
  </div>

  {/* ✅ Star Rating */}
  <div className="flex flex-col items-start gap-1">
    <div className="flex text-accent">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          initial={{ y: 30, opacity: 0, scale: 0.8 }}
          animate={animationDone ? { y: 0, opacity: 1, scale: 1 } : { y: [0, -8, 0], opacity: [0, 1, 1], scale: [1, 1.05, 1] }}
          transition={{ delay: i * 0.12, duration: 1.8, ease: "easeInOut" }}
          className="mx-0.5"
        >
          <Star className="h-6 w-6 fill-current text-yellow-400 drop-shadow-[0_0_3px_rgba(255,223,0,0.3)]" />
        </motion.div>
      ))}
    </div>

    <p className="text-sm font-bold">
      4.9/5{" "}
      <span className="text-xs text-muted-foreground">
        from 2,500+ sessions
      </span>
    </p>
  </div>

</div>



              {/* ✅ HERO TESTIMONIAL CAROUSEL */}
              <div className="mt-10 max-w-10xl">
                <div className="relative  border border-gray-200 rounded-2xl shadow-lg p-6 min-h-[160px] transition-all duration-500">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-gray-800 italic text-lg mb-3">
                        “{heroTestimonials[currentIndex].quote}”
                      </p>
                      <p className="font-semibold text-foreground">
                        {heroTestimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {heroTestimonials[currentIndex].role}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Dots */}
                  <div className="flex justify-center gap-2 mt-4">
                    {heroTestimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-3 w-3 rounded-full transition-all ${
                          i === currentIndex
                            ? "bg-green-500 w-6"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* How It Works (animated cards) */}
   <section className=" py-20">
  <div className="container px-4">
    <h2 className="text-4xl font-black text-center mb-4 md:text-5xl">
      How It Works
    </h2>
    <p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
      Getting expert career guidance shouldn't be complicated. Here’s our simple 3-step process.
    </p>

    {/* CARD + ARROW FLOW */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 max-w-7xl mx-auto">
      {steps.map((s, index) => {
        const isActive = activeCard === s.id;
        const iconAnimating = iconAnimateId === s.id;
        return (
          <React.Fragment key={s.id}>
            {/* ---- CARD ---- */}
            <motion.div
              onClick={() => handleCardClick(s.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className={`relative rounded-3xl p-10 min-h-[420px] md:min-h-[420px] w-full md:w-[360px] text-center border ${
                isActive
                  ? "border-green-700 shadow-[10px_10px_0px_0px_rgba(34,197,94,1)]"
                  : "border-gray-200 shadow-lg"
              } bg-white overflow-hidden cursor-pointer`}
            >
              {/* Background number */}
              <span className="absolute top-6 right-8 text-6xl md:text-7xl font-black text-gray-100 select-none">
                {s.number}
              </span>

              {/* ICON with reflection and hover animation */}
              <motion.div
                onMouseEnter={() => setIconAnimateId(s.id)}
                onMouseLeave={() => setIconAnimateId(null)}
                animate={
                  iconAnimateId === s.id
                    ? { scale: [1, 1.3, 1.05], rotate: [0, 8, -8, 0], y: [-4, 0, -2, 0] }
                    : { scale: isActive ? 1.12 : 1 }
                }
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`relative mx-auto mb-6 p-5 rounded-2xl bg-gradient-to-br ${s.colorFrom} ${s.colorTo} 
                  inline-flex items-center justify-center overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(0,0,0,0.25)] group`}
                style={{
                  display: "inline-flex",
                  boxShadow: "0 0 25px rgba(0,0,0,0.12)",
                }}
              >
                <div className="relative text-white transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
                  {React.cloneElement(s.icon as any, { className: "w-12 h-12 text-white" })}

                  {/* Reflection below icon */}
                  <div className="absolute left-0 right-0 -bottom-6 opacity-30 blur-md scale-y-[-1] pointer-events-none">
                    {React.cloneElement(s.icon as any, { className: "w-12 h-12 text-white/60" })}
                  </div>
                </div>

                {/* Soft glowing border ring */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={iconAnimateId === s.id ? { opacity: [0, 0.6, 0] } : { opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent blur-lg pointer-events-none"
                />
              </motion.div>

              {/* Step label below icon */}
              <div
                className={`inline-block px-4 py-1 rounded-full mb-4 text-sm font-semibold ${
                  isActive ? "bg-green-700 text-white" : "bg-gray-100 text-gray-800"
                }`}
              >
                {`Step ${s.id}`}
              </div>

              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-900 mt-8">{s.desc}</p>

              {/* Subtle reflection overlay when active */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 0.18, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/60 via-transparent to-transparent"
                  />
                )}
              </AnimatePresence>
            </motion.div>

            {/* ---- ARROWS BETWEEN CARDS ---- */}
            {index < steps.length - 1 && (
              <>
                {/* Right arrow for desktop */}
                <ArrowRight className="hidden md:block text-green-700 w-14 h-14 mx-2 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                {/* Down arrow for mobile view */}
                <ChevronDown className="md:hidden text-green-700 w-10 h-10 my-4 animate-bounce" />
              </>
            )}
          </React.Fragment>
        );
      })}
    </div>

     
       {/* Total Time Commitment Section */}
<div className="mt-16 flex justify-center">
  <div className="flex items-center gap-3 bg-[#0B132B] text-white py-4 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
    {/* Animated Loading Icon */}
    <div className="relative w-6 h-6">
      <div className="absolute inset-0 rounded-full border-2 border-orange-400 opacity-30"></div>
      <div className="absolute inset-0 rounded-full border-2 border-orange-400 border-t-transparent animate-spin-smooth"></div>
    </div>

    {/* Text */}
    <p className="text-base md:text-lg font-medium">
      <span className="font-semibold text-white">Total time commitment:</span>{" "}
      Just 30 minutes <span className="text-gray-300">+ action plan review</span>
    </p>
  </div>
</div>

</div>
      </section>

  {/* What You'll Get Section */}

  <section className="container  px-4 py-20 text-center relative">
       
    {/* ⭐ Star with green border and white fill */}
    <div className="flex justify-center mb-6">
     <Star 
      className="w-12 h-12"
      stroke="#00D200"       // ✅ green outline
      fill="none"            // ✅ no fill (transparent)
      strokeWidth={2.5}
    />
      </div>
          <h2 className="text-4xl font-black text-center mb-4 md:text-5xl">
          What You'll Get
        </h2>
    
<p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
  This isn't just a conversation. It's a 30-minute transformation that could
  change the trajectory of your career —{" "}
  <span style={{ color: "#00D200" }} className="font-bold">
    completely free!
  </span>
</p>


    {/* Cards */}
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto justify-center">
      {cards.map((s) => (
        <motion.div
          key={s.id}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="relative rounded-3xl p-10 min-h-[420px] w-full text-center border border-gray-200 shadow-lg bg-white overflow-hidden cursor-pointer hover:shadow-[8px_8px_0px_0px_rgba(34,197,94,0.3)] hover:border-green-600 transition-all duration-300"
        >
          {/* ICON with reflection */}
          <motion.div
            onMouseEnter={() => setIconAnimateId(s.id)}
            onMouseLeave={() => setIconAnimateId(null)}
            animate={
              iconAnimateId === s.id
                ? { scale: [1, 1.25, 1.05], rotate: [0, 8, -8, 0], y: [-4, 0, -2, 0] }
                : { scale: 1 }
            }
            transition={{ duration: 0.8, ease: "easeInOut" }}
           className="relative mx-auto mb-6 p-5 rounded-2xl bg-[#00D200] 
  inline-flex items-center justify-center overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(0,0,0,0.25)] group"

          >
            <div className="relative text-white transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
              {React.cloneElement(s.icon as any, { className: "w-12 h-12 text-white" })}
              <div className="absolute left-0 right-0 -bottom-6 opacity-30 blur-md scale-y-[-1] pointer-events-none">
                {React.cloneElement(s.icon as any, { className: "w-12 h-12 text-white/60" })}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={iconAnimateId === s.id ? { opacity: [0, 0.6, 0] } : { opacity: 0 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent blur-lg pointer-events-none"
            />
          </motion.div>

          {/* Text */}
          <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
          <p className="text-gray-900 leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>

{/* CTA Banner */}
<section className="container px-4 py-12">
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="rounded-3xl p-10 shadow-lg text-center space-y-6 hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300"
    style={{ backgroundColor: "#038003" }}   // ✅ Card BG color
  >
    {/* ✅ White Paper Icon */}
    <FileText className="h-16 w-16 mx-auto text-white" />

    {/* ✅ White Heading */}
    <h3 className="text-3xl font-black md:text-4xl text-white">
      Plus: A Post-Session Action Plan For the Next 90 Days
    </h3>

    {/* ✅ White paragraph */}
    <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
      After your call, we'll send you a detailed, personalized report with actionable steps for the next 90 days,
      recommended resources, and a realistic timeline. It's like having a career coach in your pocket.
    </p>
  </motion.div>
</section>


      {/* Who This Is For */}
     <section className="  py-20">
  <div className="container px-4">
    <h2 className="text-4xl font-black text-center mb-4 md:text-5xl">
      Who This Is For
    </h2>
    <p className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
      Whether you're just starting out or looking to level up, we're here to help you navigate your career journey with{" "}
      <span className="text-primary font-bold">absolute confidence</span>.
    </p>

    <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
      {/* Students & Fresh Graduates */}
      <div className="group transition-all duration-500 ease-out border border-gray-200 rounded-3xl shadow-md p-8 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100">
        <div className="space-y-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-transform duration-500">
            <GraduationCap className="h-8 w-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
          </div>
          <h3 className="text-2xl font-black">Students & Fresh Graduates</h3>
          <p className="text-muted-foreground">
            Confused about which career path to choose? We'll help you explore
            options and make informed decisions.
          </p>
        </div>
      </div>

      {/* Job Seekers */}
      <div className="group transition-all duration-500 ease-out border border-gray-200 rounded-3xl shadow-md p-8 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-100">
        <div className="space-y-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(192,38,211,0.6)] transition-transform duration-500">
            <Users className="h-8 w-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
          </div>
          <h3 className="text-2xl font-black">Job Seekers</h3>
          <p className="text-muted-foreground">
            Struggling with job applications? Get insights on resume
            optimization, interview prep, and job search strategy.
          </p>
        </div>
      </div>

      {/* Career Switchers */}
      <div className="group transition-all duration-500 ease-out border border-gray-200 rounded-3xl shadow-md p-8 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-100">
        <div className="space-y-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] transition-transform duration-500">
            <Briefcase className="h-8 w-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
          </div>
          <h3 className="text-2xl font-black">Career Switchers</h3>
          <p className="text-muted-foreground">
            Thinking of changing industries? We'll map out a realistic
            transition plan based on your background.
          </p>
        </div>
      </div>

      {/* Growth Seekers */}
      <div className="group transition-all duration-500 ease-out border border-gray-200 rounded-3xl shadow-md p-8 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-100">
        <div className="space-y-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-transform duration-500">
            <TrendingUp className="h-8 w-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
          </div>
          <h3 className="text-2xl font-black">Growth Seekers</h3>
          <p className="text-muted-foreground">
            Feeling stuck in your current role? Let's identify opportunities for
            upskilling and advancement.
          </p>
        </div>
      </div>
    </div>
<div className="mt-16 flex justify-center">
  <div className="flex items-center gap-3 bg-[#0B132B] text-white py-4 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
    {/* Animated Loading Icon */}
    <div className="relative w-6 h-6 flex items-center justify-center">
  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse-dot"></div>
</div>


    {/* Text */}
    <p className="text-base md:text-lg font-large">
      <span className="text-white">If you're at a career crossroads,</span>{" "}
      <span className=" text-semibold text-white ">this call is for you.</span>
    </p>
  </div>
</div>

   
  </div>
</section>


   
{/* FAQ Section */}
<section className="container px-4 py-20">
  <div className="mx-auto max-w-6xl">
    {/* Header */}
    <div className="text-center mb-16">
<div className="inline-flex h-16 w-16 items-center justify-center mb-6">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00D200"
    strokeWidth="2"
    className="h-15 w-15"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 9a2.25 2.25 0 1 1 4.5 0c0 1.696-2.25 2.25-2.25 4.5"
    />
    <circle cx="12" cy="18" r="0.8" fill="#00D200" />
  </svg>
</div>
      <h2 className="text-4xl font-black mb-4 md:text-5xl">
        Frequently Asked Questions
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Got questions? We've got answers. Here's everything you need to know
        about our free counselling sessions.
      </p>
    </div>

    {/* FAQ Grid */}
    <div className="grid gap-8 md:grid-cols-2">
      {/* Left Column */}
      <div className="space-y-4">
        <Accordion type="single" collapsible className="space-y-4">
          {[
            {
              q: "What is the best time for a career?",
              a: "The best time is now! Whether you're a student, graduate, or professional, getting expert guidance early can save years of trial and error.",
            },
            {
              q: "How long is the call?",
              a: "Each counselling session lasts approximately 45–60 minutes, giving you plenty of time to discuss your concerns and receive comprehensive guidance.",
            },
            {
              q: "What will be covered in a career call?",
              a: "We'll cover your current situation, career goals, skill gaps, industry opportunities, and create a personalized action plan.",
            },
            {
              q: "Will I get a recording of the call?",
              a: "Yes! You'll receive a recording of your session along with a detailed written report outlining all the key points and your personalized action plan.",
            },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i + 1}`}
              className="border border-foreground/30 rounded-2xl px-6 py-2 bg-card shadow-sm hover:shadow-md transition"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline transition-colors duration-300 hover:text-green-700">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground p-2 rounded-lg">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Right Column */}
      <div className="space-y-4">
        <Accordion type="single" collapsible className="space-y-4">
          {[
            {
              q: "What will be the speaking fee?",
              a: "Your first counselling session is completely FREE! We believe everyone deserves access to quality career guidance.",
            },
            {
              q: "Will I feel better after the counselling call?",
              a: "Absolutely! Our users consistently report feeling more confident, clear, and motivated after their sessions.",
            },
            {
              q: "Do I need to prepare anything for the call?",
              a: "Just come with an open mind! It helps to think about your current challenges, goals, and questions beforehand.",
            },
            {
              q: "Can my family be on the call too?",
              a: "Yes! We welcome family members to join, especially for students and fresh graduates.",
            },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i + 5}`}
              className="border border-foreground/30 rounded-2xl px-6 py-2 bg-card shadow-sm hover:shadow-md transition"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline transition-colors duration-300 hover:text-green-700">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground p-2 rounded-lg">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>

    {/* ✅ Centered Email Box Below All FAQs */}
    <div className="mt-16 flex justify-center">
      <div className="flex items-center gap-3 bg-[#0B132B] text-white py-4 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
        <p className="text-base md:text-lg font-medium">
          Still have questions?{" "}
          <a
            href="mailto:hello@rabblehub.com"
            style={{ color: "#00D200", textDecoration: "underline" }}
            className="font-semibold"
          >
            Email us
          </a>
          , and we’ll get back to you within 24 hours.
        </p>
      </div>
    </div>
  </div>
</section>


 {/* Footer */}
      <footer className="relative overflow-hidden bg-[#0f1729] py-20">
        {/* Animated Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 80 + 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(${i % 2 ? '249,115,22' : '59,130,246'}, 0.15) 0%, transparent 70%)`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container px-4 relative z-10">
          {/* Main CTA */}
          <div className="text-center mb-16">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
  bg-gradient-to-r from-green-600/20 to-green-500/20 
  border-2 border-green-500/40 backdrop-blur-sm mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-orange-300"
    >
      <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
    </svg>
  </motion.div>
               
              <span className="text-green-300 font-semibold text-sm">Limited slots available each week</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Ready to take control of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                your career?
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Book your free 30-minute session today. No payment, no obligation—just expert guidance and a clear action plan to move forward with confidence.
            </p>
     

          </div>
</div>

<div className="flex flex-wrap justify-center gap-6 mt-10">

  {/* ✅ 1. Clock Icon */}
  <div className="flex items-center gap-2 text-green-300">
    <motion.div
    
    >
      {/* Clock */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6-4a10 10 0 11-20 0 10 10 0 0120 0z"
        />
      </svg>
    </motion.div>
    <span className="text-sm font-medium">100% confidential</span>
  </div>

  {/* ✅ 2. No Credit Card Icon (DIFFERENT) */}
  <div className="flex items-center gap-2 text-green-300">
    <motion.div
     
    >
      {/* Credit card with slash */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3l18 18M2 8h20m-1 6H9m13-6v10a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v2"
        />
      </svg>
    </motion.div>
    <span className="text-sm font-medium">No credit card required</span>
  </div>

  {/* ✅ 3. Shield Check Icon */}
  <div className="flex items-center gap-2 text-green-300">
    <motion.div
      
    >
      {/* Shield Check */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M12 2l8 4v6c0 5.25-3.75 10-8 10s-8-4.75-8-10V6z"
        />
      </svg>
    </motion.div>
    <span className="text-sm font-medium">Free action report included</span>
  </div>

</div>

<div className="flex justify-center mt-6">
  <button
    style={{ color: "#00D200" }}
    className="relative group bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(72,255,125,0.4)]"
  >
    <span className="flex items-center gap-2 text-white z-10 relative">
      {/* Calendar Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      Book Your Free Call →
    </span>
  </button>
</div>




     {/* Testimonials Section */}
<div className="mt-20 container px-4">
  <div className="grid gap-8 md:grid-cols-3">
    {[
      {
        name: "Aisha K.",
        role: "Software Engineer",
        quote:
          "This call changed everything. I finally have a clear roadmap.",
      },
      {
        name: "Rohan P.",
        role: "Career Switcher",
        quote:
          "Best career advice I’ve ever received. And it was free!",
      },
      {
        name: "Meera S.",
        role: "Fresh Graduate",
        quote:
          "Walked in confused, walked out with a concrete plan. Thank you!",
      },
    ].map((t, index) => (
      <div
        key={index}
        className="
          bg-white/5
          border border-white/10
          rounded-2xl
          p-8
          backdrop-blur-lg
          shadow-[0_0_30px_rgba(255,255,255,0.05)]
          transition
          hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
        "
      >
        {/* Stars */}
        <div className="flex gap-1 text-orange-400 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <p className="text-gray-300 italic mb-6">
          "{t.quote}"
        </p>

        {/* Name */}
        <p className="text-white font-bold text-lg">{t.name}</p>
        <p className="text-sm text-gray-400">{t.role}</p>
      </div>
    ))}
  </div>
</div>

<footer className="mt-20 py-12 text-white  backdrop-blur border-t border-white/10"></footer>
  <div className="container mx-auto grid md:grid-cols-4 gap-8 text-sm px-6 relative z-10">
    
    {/* Logo */}
    <div>
      <img
        src={logo}
        alt="RabbleHub"
        style={{ height: "150px", width: "auto" }}
      />
    </div>

    {/* Connect */}
    <div>
      <h4 className="font-bold mb-3 text-white">Connect</h4>
      <p className="text-gray-300">Our Platform</p>
      <p className="text-gray-300">RabbleJobs</p>
    </div>

    {/* Support */}
    <div>
      <h4 className="font-bold mb-3 text-white">Support</h4>
      <p className="text-gray-300">Help Center</p>
      <p className="text-gray-300">For Employers</p>
    </div>

    {/* Contact */}
    <div>
      <h4 className="font-bold mb-1 text-white">Contact</h4>
      <p className="text-gray-300">
        <PhoneCall className="inline h-4 w-4 mr-2" /> +91 9876543210
      </p>
      <p className="text-gray-300">hello@rabblehub.com</p>

      <a
        href="https://www.instagram.com/accounts/login/?next=%2Frabblehub%2F&source=omni_redirect"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 mt-2 text-gray-300 hover:text-pink-300 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm0 2h10c1.11 0 2 .89 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2zm5 3.5A4.5 4.5 0 1 0 16.5 10 4.51 4.51 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.5 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
        </svg>
        Rabblehub
      </a>
    </div>
  </div>

  {/* Copyright */}
  <p className="text-center text-xs mt-10 text-gray-400 relative z-10">
    © 2025 RABBLEHUB. All rights reserved.
  </p>

</footer>

      </div>

  );
}
export default FreeCounselling;