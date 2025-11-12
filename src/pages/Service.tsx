
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/AnimatedCard";
import logo from "@/assets/rabblehub-logo.png";
import { Link } from "react-router-dom";
import {
  FileText,
  Linkedin,
  Briefcase,
  UserCheck,
  Target,
  Rocket,
  ArrowRight,
  PhoneCall,
  TrendingUp,
  Award,
  Zap,
  Star,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import { Header } from "@/components/header";

const Service = () => {
  const [theme] = useState<"minimal" | "dynamic">("dynamic");
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Animate stats on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (resultsRef.current) observer.observe(resultsRef.current);
    return () => observer.disconnect();
  }, []);

  const [counts, setCounts] = useState({
    professionals: 0,
    successRate: 0,
    profileViews: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    if (visible) {
      const duration = 1500;
      const start = performance.now();
      const animate = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        setCounts({
          professionals: Math.floor(progress * 2833),
          successRate: Math.floor(progress * 87),
          profileViews: Math.floor(progress * 3),
          satisfaction: parseFloat((4.7 * progress).toFixed(1)),
        });
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [visible]);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is this really free? What's the catch?",
      answer:
        "Yes, it's completely free! We offer it to help you get started — no hidden fees or commitments.",
    },
    {
      question: "How long is the session?",
      answer:
        "Each session is 45 minutes — enough for a meaningful, actionable career discussion.",
    },
    {
      question: "What if I'm not sure what I want to do?",
      answer:
        "That’s fine! The session helps you clarify goals and explore best paths forward.",
    },
    {
      question: "Will I get a recording of the call?",
      answer:
        "Yes, you can request a recording to revisit anytime.",
    },
    {
      question: "Who will I be speaking with?",
      answer:
        "You’ll connect with a career mentor specializing in your field of interest.",
    },
  ];

  const testimonials = [
    {
      name: "Riya Sharma",
      role: "Software Engineer @TCS",
      text: "RabbleHub’s resume revamp and LinkedIn optimization gave my career a new direction!",
    },
    {
      name: "Amit Verma",
      role: "Data Analyst @Accenture",
      text: "The mock interviews really boosted my confidence and helped me land my job.",
    },
    {
      name: "Neha Patel",
      role: "Marketing Specialist @HCL",
      text: "Absolutely loved the personalized feedback — highly recommended!",
    },
    {
      name: "Karan Mehta",
      role: "Product Manager @Infosys",
      text: "Their career strategy call helped me align my goals perfectly with my next move.",
    },
  ];

  return (
   <div className="min-h-screen bg-background">
 <Header/>
            
 <section
  className="py-20 px-6 flex flex-col md:flex-row items-center gap-12 container mx-auto relative">
        <div className="relative md:w-1/2 text-center md:text-left z-10">
          <div className="flex items-center justify-center md:justify-start mb-6">
            <div className="flex -space-x-3">
              {[44, 46, 47, 48].map((id) => (
                <img
                  key={id}
                  src={`https://randomuser.me/api/portraits/${id % 2 ? "men" : "women"}/${id}.jpg`}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="ml-4 text-gray-600 font-medium">
              Trusted by <span className="font-semibold text-green-700">2833+</span> professionals
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            The{" "}
            <span className={theme === "dynamic" ? "text-green-800" : "text-green-700"}>

              All-in-One
            </span>{" "}
            Professional Optimization Suite
          </h1>
          <p className="text-lg mb-8 text-gray-600">
            Resume, LinkedIn, Naukri, Cover Letter, Mock Interview, and Strategy — aligned for modern hiring.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button className="bg-green-700 text-white font-semibold">Get the Bundle</Button>
            <Button variant="outline" className="border-gray-600 text-gray-700 font-semibold">
              View Sample Work
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <img
            src="https://img.freepik.com/premium-photo/professional-office-workplace-photography-collection_1165092-1215.jpg"
            alt="Professional workspace"
            className="rounded-3xl shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-20 text-center bg-gray-50">
        <h2 className="text-4xl font-extrabold mb-4">Results That Speak for Themselves</h2>
        <p className="text-gray-500 mb-14">Real impact, measurable success</p>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[ 
            { icon: TrendingUp, label: "Professionals Transformed", value: `${counts.professionals}+` },
            { icon: Award, label: "Interview Success Rate", value: `${counts.successRate}%` },
            { icon: Zap, label: "More Profile Views", value: `${counts.profileViews}x` },
            { icon: Star, label: "Client Satisfaction", value: `${counts.satisfaction}/5` },
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-md rounded-2xl py-10 px-6 hover:shadow-xl transition duration-500">
              <item.icon className="w-10 h-10 mx-auto text-green-700 mb-4" />
              <h3 className="text-3xl font-bold text-green-700 mb-1">{item.value}</h3>
              <p className="text-gray-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What’s Included */}
<section id="services" className="py-20 bg-white">
  <div className="container mx-auto text-center px-6">
    <h2 className="text-4xl font-extrabold mb-14">What’s Included</h2>
    <p className="text-gray-500 mb-14">Six premium services, one unbeatable bundle</p>

    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {[
        {
          icon: FileText,
          title: "Resume Optimization",
          desc: "ATS-qualified, keyword-optimized resumes designed to grab recruiter attention.",
          price: "₹999",
        },
        {
          icon: Linkedin,
          title: "LinkedIn Optimization",
          desc: "Transform your LinkedIn into a recruiter magnet with professional storytelling.",
          price: "₹2499",
        },
        {
          icon: Briefcase,
          title: "Naukri Optimization",
          desc: "Boost visibility and get shortlisted faster with data-backed Naukri profiles.",
          price: "₹2249",
        },
        {
          icon: FileText,
          title: "Cover Letter",
          desc: "Personalized, compelling cover letters tailored to your target role.",
          price: "₹499",
        },
        {
          icon: UserCheck,
          title: "Mock Interview",
          desc: "Simulated interviews with expert feedback to help you perform at your best.",
          price: "₹1249",
        },
        {
          icon: Target,
          title: "Career Strategy Call",
          desc: "A 1:1 mentorship session to map out your career goals and next steps.",
          price: "₹1499",
        },
      ].map(({ icon: Icon, title, desc, price }, i) => (
        <AnimatedCard
          key={i}
          className="rounded-2xl border bg-gray-50 hover:shadow-lg transition-all duration-500"
        >
          <div className="flex flex-col items-center space-y-3 p-8">
            <Icon className="h-10 w-10 text-green-700" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 text-sm text-center">{desc}</p>
            <p className="text-green-700 font-semibold mt-2">{price}</p>
          </div>
        </AnimatedCard>
      ))}
    </div>

      
          <div className="mt-4 bg-green-50 rounded-3xl py-10 px-6 text-center shadow-sm max-w-3xl mx-auto">
            <p className="text-gray-500 line-through text-lg mb-2">Total: ₹11,994</p>
            <h3 className="text-3xl font-extrabold text-green-700 mb-2">
              Bundle Price: ₹2,499
            </h3>
            <p className="text-gray-600 mb-6">Save ₹9,495 with the Booster Bundle</p>
            <Button className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-3 rounded-xl">
              Get the Bundle
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold mb-4">Trusted by Professionals Like You</h2>
          <p className="text-gray-500">Real stories, real results</p>
        </div>

        {/* Row 1 */}
        <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused]">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-[350px] bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
              <div className="flex mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="text-yellow-400 w-5 h-5" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{t.text}"</p>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-6 mt-10 animate-scroll-right hover:[animation-play-state:paused]">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-[350px] bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
              <div className="flex mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="text-yellow-400 w-5 h-5" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{t.text}"</p>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
{/* ===================== Your Journey to Success (Card Layout) ===================== */}
<section className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Your Journey to Success
      </h2>
      <p className="text-gray-600 mt-2">
        A seamless, collaborative process designed to unlock your full professional potential.
      </p>
    </div>

    {/* Card Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "ATS-Qualified & Optimized Profiles",
          desc: "Crafted to pass filters and attract recruiters using data-driven optimization.",
        },
        {
          title: "Personalized Optimization",
          desc: "Tailored to your goals, domain, and growth path for a truly personalized career push.",
        },
        {
          title: "Industry-Benchmarked Standards",
          desc: "Designed to align with the latest professional and hiring benchmarks in your field.",
        },
        {
          title: "Flexible Revisions & Proven Results",
          desc: "Refined iteratively to perfection with measurable, results-driven outcomes.",
        },
        {
          title: "Proven Track Record",
          desc: "Built by industry experts with years of trust and tangible, measurable success.",
        },
        {
          title: "Holistic Career Transformation",
          desc: "Every step is designed to elevate your professional journey end to end.",
        },
      ].map((card, i) => (
        <div
          key={i}
          className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden"
        >
          {/* Green glow background */}
          <div className="absolute inset-0 bg-green-100 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>

          {/* Card Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-700">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      {/* ✅ FAQ SECTION (Newly Added) */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8faff]">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <div className="bg-green-600 rounded-full p-3 mx-auto mb-4 w-fit">
        <ChevronDown className="text-white w-6 h-6" />
      </div>
      <div className="text-center mb-12">
  <h2 className="text-4xl font-extrabold mb-2">Frequently Asked Questions</h2>
  <p className="text-gray-600 text-lg mx-auto max-w-2xl">
    Got questions? We’ve got clear answers.
  </p>
</div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        ...faqs,
        {
          question: "How long does it take to complete the bundle?",
          answer: "The process usually takes 5–7 working days from start to delivery.",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all bg-white"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center font-semibold text-lg text-gray-900"
          >
            {faq.question}
            {activeIndex === index ? (
              <ChevronUp className="text-green-600 w-6 h-6 transition-transform" />
            ) : (
              <ChevronDown className="text-gray-500 w-6 h-6 transition-transform" />
            )}
          </button>

          <div
            className={`mt-3 text-gray-600 text-base leading-relaxed transition-all duration-300 overflow-hidden ${
              activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-green-300 via-green-300 to-green-400 text-white relative">
        <Rocket className="mx-auto mb-6 h-14 w-14 text-white" />
        <h2 className="text-4xl font-black mb-4">Stop Guessing. Start Converting.</h2>
        <p className="text-lg mb-8 text-gray-200">
          Unlock recruiter visibility, interview confidence, and a unified professional identity.
        </p>
        <Button className="px-8 font-bold bg-white text-green-700 hover:bg-gray-100">
          Get the Service Booster Bundle <ArrowRight className="ml-2" />
        </Button>
      </section>

     <footer
  className={`py-12 border-t ${
    theme === "dynamic"
      ? "bg-white/70 backdrop-blur text-gray-800"
      : "bg-white text-gray-700"
  }`}
>
  <div className="container mx-auto grid md:grid-cols-4 gap-8 text-sm px-6">
    <div>
      <img src={logo} alt="RabbleHub" style={{ height: "150px", width: "auto" }} />
    </div>

    <div>
      <h4 className="font-bold mb-3 text-gray-900">Connect</h4>
      <p>Our Platform</p>
      <p>RabbleJobs</p>
      
    </div>

    <div>
      <h4 className="font-bold mb-3 text-gray-900">Support</h4>
      <p>Help Center</p>
      <p>For Employers</p>
    </div>

    <div>
      <h4 className="font-bold mb-3 text-gray-900">Contact</h4>
      <p>
        <PhoneCall className="inline h-4 w-4 mr-2" /> +91 9876543210
      </p>
      <p>hello@rabblehub.com</p>
      <a
        href="https://www.instagram.com/accounts/login/?next=%2Frabblehub%2F&source=omni_redirect"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 mt-2 text-gray-700 hover:text-pink-600 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 2C4.79 2 3 3.79 3 6v12c0 2.21 1.79 4 4 4h10c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4H7zm0 2h10c1.11 0 2 .89 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2zm5 3.5A4.5 4.5 0 1 0 16.5 10 4.51 4.51 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.5 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
          />
        </svg>
        Rabblehub
      </a>

    </div>
  </div>

  <p className="text-center text-xs mt-6">
    © 2025 RABBLEHUB. All rights reserved.
  </p>

</footer>
  </div>
  );
};

export default Service;


   
