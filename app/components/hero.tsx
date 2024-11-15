"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/app/components/new-header";

import {
  Star,
  LucideMonitor,
  ArrowRight,
  Users,
  Sparkles,
  Rocket,
  Globe,
  Code,
  Youtube,
  Laptop,
  LinkedinIcon,
} from "lucide-react";
import { hackerMedium } from "@/fonts/font";
import Link from "next/link";

// Updated features for portfolio focus
const features = [
  {
    icon: <LinkedinIcon className="w-6 h-6 text-white" />,
    title: "LinkedIn Integration",
    description:
      "Connect your LinkedIn profile and we'll automatically import your experience, skills, and achievements.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: "Custom Themes",
    description:
      "Choose from professionally designed themes that make your portfolio stand out. Customize colors and layouts with ease.",
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Custom Domain",
    description:
      "Get a personalized domain for your portfolio or connect your existing domain in just a few clicks.",
  },
  {
    icon: <Code className="w-6 h-6 text-white" />,
    title: "Project Showcase",
    description:
      "Automatically import your projects from GitHub and present them beautifully with live previews.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: "SEO Optimization",
    description:
      "Built-in SEO best practices ensure your portfolio gets discovered by recruiters and opportunities.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Analytics Dashboard",
    description:
      "Track who's viewing your portfolio with detailed analytics and insights about your visitors.",
  },
];

// Updated benefits
const benefits = [
  {
    icon: <Rocket className="w-4 h-4 text-white" />,
    title: "2-Click Setup",
    description:
      "Just connect your LinkedIn, pick a theme, and your portfolio is ready to go live.",
  },
  {
    icon: <Code className="w-4 h-4 text-white" />,
    title: "No Coding Required",
    description:
      "Create a professional portfolio without writing a single line of code.",
  },
  {
    icon: <Youtube className="w-4 h-4 text-white" />,
    title: "Auto-Updates",
    description:
      "Your portfolio stays in sync with your LinkedIn profile, always showing your latest achievements.",
  },
  {
    icon: <Laptop className="w-4 h-4 text-white" />,
    title: "Mobile Responsive",
    description:
      "Your portfolio looks perfect on all devices, from phones to desktops.",
  },
];

// Updated testimonials
const testimonials = [
  {
    name: "Alex Chen",
    img: "",
    role: "Software Engineer at Google",
    text: "Created my portfolio in literally 2 minutes. The LinkedIn integration is pure magic - everything was perfectly formatted!",
  },
  {
    name: "Sarah Miller",
    img: "",
    role: "UX Designer",
    text: "As a designer, I was skeptical about using a template, but Sandbox's customization options let me create exactly what I wanted.",
  },
  {
    img: "",
    name: "Raj Patel",
    role: "Frontend Developer",
    text: "Got three interview calls within a week of launching my portfolio. The SEO optimization really works!",
  },
];

export const WhatIsSandbox = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white w-full">
      <Header />

      {/* Enhanced Hero Section */}
      <div className="relative rounded-xl border overflow-hidden bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Dynamic grid background */}
            <div className="absolute inset-0 bg-grid-blue-500/[0.05] bg-[length:50px_50px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-7">
          <div className="text-center mb-20">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-[#0056FE] mb-6">
                <Star className="w-4 h-4 mr-2" /> ship your portfolio site
              </span>
              <h1
                className="text-6xl capitalize font-bold text-gray-900 mb-6 leading-tight"
                style={hackerMedium.style}
              >
                ship your portfolio site straight <br />
                <span className="text-[#0056FE] inline-block mt-2 relative">
                  from linkedin 🚀
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8.5C52 2.5 159.5 2.5 298 8.5"
                      stroke="#0056FE"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                A vibrant ecosystem where students connect, collaborate, and
                create amazing things together. Join thousands of students
                already transforming their college journey!
              </p>
              <div className="flex justify-center space-x-4">
                <Link
                  href="/my-portfolio"
                  className="bg-[#0056FE] text-white px-8 py-4 rounded-lg  hover:bg-blue-600 transition-colors inline-flex items-center space-x-2 shadow-lg hover:shadow-xl capitalize"
                >
                  <span>create my portfolio</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Platform Preview */}
          <div className="relative mx-auto max-w-5xl">
            <div className="bg-gradient-to-b from-[#0056FE] to-blue-600 rounded-t-2xl p-4 shadow-2xl">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <img
                src="/hero.png"
                alt="Sandbox Platform Interface"
                className="rounded-lg w-full shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Enhanced Features Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={hackerMedium.style}
            >
              {` What You'll Find Here`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to make your college journey extraordinary
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#0056FE] rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a
                  href="#"
                  className="text-[#0056FE] font-medium inline-flex items-center"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            style={hackerMedium.style}
          >
            What Makes Sandbox Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#0056FE] rounded-xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            style={hackerMedium.style}
          >
            What Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0056FE] font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section
      <section className="py-20 bg-[#0056FE] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            className="text-4xl font-bold text-white mb-8"
            style={hackerMedium.style}
          >
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            {`Join Sandbox today and be part of a community that celebrates what
            makes you unique. In true Bengaluru style - let's innovate,
            collaborate, and make something awesome!`}
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-[#0056FE] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2">
              <span>Join Sandbox Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600/50 transition-colors inline-flex items-center space-x-2 border-2 border-white">
              <span>Watch Demo</span>
              <LucideMonitor className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section> */}
      {/* Enhanced CTA Section */}
      <section className="py-20 bg-[#0056FE] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            className="text-4xl font-bold text-white mb-8"
            style={hackerMedium.style}
          >
            Ready to Launch Your Professional Portfolio?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Transform your LinkedIn profile into a stunning portfolio website in
            minutes. No coding required - just connect your profile, choose your
            theme, and showcase your professional journey to the world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-[#0056FE] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2">
              <span>Create Portfolio Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600/50 transition-colors inline-flex items-center space-x-2 border-2 border-white">
              <span>See Example</span>
              <LucideMonitor className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
