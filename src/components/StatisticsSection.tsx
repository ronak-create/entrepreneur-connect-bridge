
import React, { useEffect, useRef, useState } from "react";

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const Stat: React.FC<StatProps> = ({ value, label, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start > end) start = end;
      setCount(Math.floor(start));
      
      if (start === end) clearInterval(timer);
    }, 16);
    
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

const StatisticsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Stat value={500} label="Startups Funded" suffix="+" />
            <Stat value={250} label="Active Investors" suffix="+" />
            <Stat value={50} label="Success Rate" suffix="%" />
            <Stat value={120} label="Million in Funding" prefix="$" suffix="M" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
