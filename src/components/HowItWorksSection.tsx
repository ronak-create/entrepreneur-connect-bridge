
import React from "react";
import { Sparkles, Users, Lightbulb, TrendingUp } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 group hover-scale">
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
            {icon}
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
            {number}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Account",
      description:
        "Sign up as an entrepreneur or investor and build your profile to showcase your expertise and interests.",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      number: 2,
      title: "Submit or Browse Projects",
      description:
        "Entrepreneurs can submit detailed project proposals, while investors can browse opportunities that match their criteria.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      number: 3,
      title: "Connect & Collaborate",
      description:
        "Initiate conversations, schedule meetings, and build relationships with potential partners.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: 4,
      title: "Grow & Succeed",
      description:
        "Finalize partnerships, secure funding, and leverage our resources to grow your business.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="chip mb-6">Getting Started</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
            How EntrepreneurHub Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes it easy to connect entrepreneurs with
            the right investors and resources.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step) => (
              <Step
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
