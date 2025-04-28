
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="border-0 shadow-md h-full">
      <CardContent className="p-6 md:p-8">
        <div className="mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400 inline-block mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          ))}
        </div>
        <blockquote className="text-gray-700 mb-6">"{testimonial.content}"</blockquote>
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
            <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-bold">{testimonial.author}</div>
            <div className="text-sm text-gray-500">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      content:
        "Implementing the Nail It, Scale It, Sail It framework transformed how I approached my business. It provided clarity at each stage of growth and helped me avoid common pitfalls.",
      author: "Alex Rivera",
      role: "Founder & CEO",
      company: "TechNova",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      content:
        "As a first-time entrepreneur, this framework gave me the structured approach I needed. The research-backed methodology helped me validate my ideas before investing too much time and resources.",
      author: "Sarah Johnson",
      role: "Co-founder",
      company: "GreenSpark",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      content:
        "We were stuck in the scaling phase until we discovered Prof. Loredana's framework. The insights on building systems and teams while maintaining culture were invaluable to our growth.",
      author: "Michael Chen",
      role: "CEO",
      company: "Orbital Systems",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What <span className="text-gradient">Entrepreneurs</span> Are Saying
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from founders who have successfully implemented the framework in their entrepreneurial journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
