
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-24 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Master The <span className="text-gradient">Entrepreneurial</span> Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Learn the proven framework for entrepreneurial success—Nail It, Scale It, Sail It—based on Prof. Loredana's groundbreaking research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6">
                Explore The Framework
              </Button>
              <Button variant="outline" className="text-lg px-6 py-6 flex items-center">
                Read Research <ChevronRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-6 md:p-10 rounded-2xl shadow-xl">
                <div className="grid gap-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-blue-700">Nail It</h3>
                    <p className="text-gray-700">Validate your idea and find product-market fit</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                    <h3 className="font-bold text-purple-700">Scale It</h3>
                    <p className="text-gray-700">Grow your business with the right strategies</p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                    <h3 className="font-bold text-indigo-700">Sail It</h3>
                    <p className="text-gray-700">Optimize operations and achieve long-term success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
