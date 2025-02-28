
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatisticsSection from "@/components/StatisticsSection";
import CtaSection from "@/components/CtaSection";
import ProjectGrid from "@/components/ProjectGrid";
import { Project } from "@/components/ProjectCard";

const featuredProjects: Project[] = [
  {
    id: "1",
    title: "EcoHarvest: Sustainable Agriculture Technology",
    description: "Revolutionary IoT system that optimizes water usage and monitors crop health for sustainable farming practices.",
    imageUrl: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=800&q=80",
    category: "AgriTech",
    fundingGoal: 150000,
    fundingRaised: 89000,
    likes: 127,
    views: 1453,
    createdBy: {
      name: "Maria Garcia",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  },
  {
    id: "2",
    title: "MindfulAI: Mental Health Companion",
    description: "AI-powered application that provides personalized mental health support through cognitive behavioral therapy techniques.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    category: "HealthTech",
    fundingGoal: 200000,
    fundingRaised: 165000,
    likes: 245,
    views: 2156,
    createdBy: {
      name: "James Wilson",
      avatarUrl: "https://randomuser.me/api/portraits/men/42.jpg",
    },
  },
  {
    id: "3",
    title: "UrbanMove: Smart City Transportation",
    description: "Electric micro-mobility solution with integrated city navigation and carbon offset tracking.",
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    category: "Mobility",
    fundingGoal: 300000,
    fundingRaised: 142000,
    likes: 189,
    views: 1752,
    createdBy: {
      name: "Sofia Chen",
      avatarUrl: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  },
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="chip mb-6">Featured Projects</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                Discover Innovative Ventures
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore some of the most promising projects currently seeking investment and partnership opportunities.
              </p>
            </div>
            <ProjectGrid projects={featuredProjects} />
            <div className="text-center mt-12">
              <a href="/projects" className="button-secondary">
                View All Projects
              </a>
            </div>
          </div>
        </section>
        <HowItWorksSection />
        <StatisticsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
