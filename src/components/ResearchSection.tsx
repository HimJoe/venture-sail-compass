
import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Users } from "lucide-react";

const ResearchSection = () => {
  const stats = [
    { 
      value: "10+", 
      label: "Years of Research",
      icon: BookOpen,
      color: "text-blue-600"
    },
    { 
      value: "500+", 
      label: "Entrepreneurs Studied",
      icon: Users,
      color: "text-purple-600" 
    },
    { 
      value: "15", 
      label: "Published Papers",
      icon: Award,
      color: "text-indigo-600" 
    }
  ];

  return (
    <section id="research" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl transform -rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Research and Analysis" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Backed By <span className="text-gradient">Extensive Research</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Prof. Loredana's framework is the result of over a decade of academic research, analyzing hundreds of entrepreneurial journeys across various industries and geographic regions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border">
                  <stat.icon className={`${stat.color} w-6 h-6 mb-2`} />
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <p className="text-gray-600 mb-8">
              The framework has been published in leading academic journals and has been implemented by businesses ranging from tech startups to traditional SMEs, consistently showing improved outcomes and sustainable growth.
            </p>
            
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Read The Research
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
