
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Flag } from "lucide-react";

const FrameworkCard = ({ 
  title, 
  stage, 
  description, 
  points, 
  icon: Icon, 
  bgColor, 
  iconColor 
}: {
  title: string;
  stage: string;
  description: string;
  points: string[];
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
}) => {
  return (
    <Card className="border-0 shadow-lg h-full">
      <CardContent className="p-6 md:p-8">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${bgColor} mb-6`}>
          <Icon className={`w-7 h-7 ${iconColor}`} />
        </div>
        <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">Stage {stage}</p>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const FrameworkSection = () => {
  const frameworks = [
    {
      title: "Nail It",
      stage: "01",
      description: "Validate your idea and find product-market fit before investing significant resources.",
      icon: Target,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      points: [
        "Identify and validate customer problems",
        "Develop minimum viable product (MVP)",
        "Test and iterate based on user feedback",
        "Achieve product-market fit",
        "Establish initial business model"
      ]
    },
    {
      title: "Scale It",
      stage: "02",
      description: "Grow your validated business with the right systems, team, and capital.",
      icon: TrendingUp,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      points: [
        "Build scalable business systems",
        "Expand your team and leadership",
        "Secure appropriate funding",
        "Optimize customer acquisition",
        "Develop operational excellence"
      ]
    },
    {
      title: "Sail It",
      stage: "03",
      description: "Optimize operations and achieve long-term success through sustainability.",
      icon: Flag,
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      points: [
        "Establish strategic partnerships",
        "Diversify revenue streams",
        "Build brand authority",
        "Optimize for profitability",
        "Prepare for potential exit strategies"
      ]
    }
  ];

  return (
    <section id="framework" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The <span className="text-gradient">Three-Stage</span> Framework for Entrepreneurial Success
          </h2>
          <p className="text-gray-600 text-lg">
            Based on extensive research, this proven methodology guides entrepreneurs through the complete journey from idea to thriving business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => (
            <FrameworkCard key={index} {...framework} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
