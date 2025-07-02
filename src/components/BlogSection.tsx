
import { BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Modern Web Applications with MERN Stack",
      excerpt: "Explore the power of MongoDB, Express.js, React, and Node.js in creating scalable web applications.",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      url: "https://medium.com/@shrestha.ujjwol1"
    },
    {
      title: "Docker Containerization for Modern Web Development",
      excerpt: "Learn how to containerize your applications for consistent deployment across environments.",
      readTime: "8 min read", 
      date: "Dec 12, 2024",
      url: "https://medium.com/@shrestha.ujjwol1"
    },
    {
      title: "Getting Started with Game Development",
      excerpt: "My journey into game development and the tools that make it accessible for web developers.",
      readTime: "6 min read",
      date: "Dec 8, 2024", 
      url: "https://medium.com/@shrestha.ujjwol1"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Thoughts and insights on web development, technology trends, and programming best practices.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-gray-800/80 border-gray-700 hover:bg-gray-700/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <BookOpen className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div className="flex items-center text-sm text-gray-400 ml-3">
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                >
                  Read More
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <a 
            href="https://medium.com/@shrestha.ujjwol1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Posts on Medium
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
