
import React from "react";
import { Lightbulb, Users, TrendingUp, ShieldCheck } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-6 hover-scale glass-card">
      <div className="rounded-full p-3 bg-secondary flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Showcase Your Ideas",
      description:
        "Present your innovative projects to a curated network of investors looking for the next big thing.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Connect with Investors",
      description:
        "Build relationships with strategic investors who bring not just capital, but industry expertise and networks.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Grow Your Business",
      description:
        "Access the resources, mentorship, and funding needed to scale your venture to new heights.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Secure & Transparent",
      description:
        "Our platform ensures safe interactions and clear terms for all partnerships and investments.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="chip mb-6">Why EntrepreneurHub</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
            Everything you need to bring your ideas to life
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools entrepreneurs and investors need
            to connect, collaborate, and create successful ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
