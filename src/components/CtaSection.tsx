
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="chip mb-6">Ready to Start?</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Transform your ideas into successful ventures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join our growing community of entrepreneurs and investors. Submit your project, connect with investors, and turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth?type=register">
              <Button size="lg" className="w-full sm:w-auto">
                Create Your Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Projects
              </Button>
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Already have an account? <Link to="/auth?type=login" className="text-primary hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
