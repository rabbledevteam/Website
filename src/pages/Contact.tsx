import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import logo from "@/assets/rabblehub-logo.png";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { Header } from "@/components/header";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header/>
      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-br from-muted/50 to-background py-20 md:py-32">
        <div className="container px-4 text-center">
          <h1 className="text-5xl font-black text-foreground md:text-6xl">
            <span className="text-gradient">Contact</span> Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">Home / Contact Us</p>
        </div>
      </section>

      {/* ✅ Contact Section */}
      <section className="container px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="p-6 shadow-xl border-2 border-green-400 bg-green-50 backdrop-blur-md rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-foreground">
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
                  <Input placeholder="Full Name" className="border-2 border-muted" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Your Email</label>
                  <Input type="email" placeholder="Email Address" className="border-2 border-muted" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <Input placeholder="Subject" className="border-2 border-muted" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Your Message</label>
                  <Textarea placeholder="Message" className="min-h-[200px] border-2 border-muted resize-none" />
                </div>
                <Button
                  size="lg"
                  className="w-full border-2 border-foreground bg-primary font-bold shadow-[4px_4px_0px_0px_rgba(1,50,1,1)]
                  transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-sm font-semibold text-primary">Contact Us</h3>
              <h2 className="mb-6 text-4xl font-black text-foreground">Get In Touch</h2>
              <p className="text-muted-foreground">
                Have questions about Rabblehub? Want to learn more about our programs? We’re here to help you start your journey to success.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Call Us</h4>
                  <p className="text-muted-foreground">+123-456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email Us</h4>
                  <p className="text-muted-foreground">hello@rabblehub.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20">
                  <Globe className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Website</h4>
                  <p className="text-muted-foreground">www.rabblehub.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Address</h4>
                  <p className="text-muted-foreground">99 Roving St., Big City PKU 23456</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mb-4 font-bold text-foreground">Follow Us On</h4>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-deep-green transition-transform hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ✅ Footer */}
      <footer className="border-t-4 border-foreground bg-deep-green py-12 text-black">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <img src={logo} alt="Rabblehub" className="h-28 w-auto mb-4" />
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

export default Contact;
