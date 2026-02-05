'use client'

import { ArrowLeft, ExternalLink, Dumbbell, Users, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  const projects = [
    {
      title: "Fitness Hub Gym",
      category: "Web Design",
      description: "A modern, responsive website for a fitness center featuring class schedules, membership plans, trainer profiles, and online booking system.",
      icon: Dumbbell,
      color: "blue",
      features: [
        "Responsive design for all devices",
        "Online class booking system",
        "Membership management",
        "Trainer profile showcase",
        "Interactive schedule calendar",
        "Gallery and testimonials"
      ],
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
    },
    {
      title: "Jamii Fund",
      category: "Mobile App & Web Platform",
      description: "A comprehensive digital chama platform enabling groups to manage contributions, loans, and investments together seamlessly.",
      icon: Users,
      color: "purple",
      features: [
        "Member contribution tracking",
        "Loan request & approval system",
        "Investment portfolio management",
        "Meeting scheduling & minutes",
        "M-Pesa integration",
        "Real-time notifications",
        "Financial reports & analytics"
      ],
      tech: ["React Native", "React", "Firebase", "M-Pesa API"],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
    },
    {
      title: "EduPro LMS",
      category: "Learning Management System",
      description: "A complete learning management system for educational institutions with course management, student tracking, and online assessments.",
      icon: GraduationCap,
      color: "green",
      features: [
        "Course creation & management",
        "Student enrollment system",
        "Online assignments & quizzes",
        "Grade tracking & reports",
        "Video content hosting",
        "Discussion forums",
        "Parent/Guardian portal",
        "Certificate generation"
      ],
      tech: ["React", "Node.js", "PostgreSQL", "AWS S3"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-900/50",
        text: "text-blue-400",
        border: "border-blue-500",
        gradient: "from-blue-600 to-blue-800"
      },
      purple: {
        bg: "bg-purple-900/50",
        text: "text-purple-400",
        border: "border-purple-500",
        gradient: "from-purple-600 to-purple-800"
      },
      green: {
        bg: "bg-green-900/50",
        text: "text-green-400",
        border: "border-green-500",
        gradient: "from-green-600 to-green-800"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore some of our recent projects and see how we&apos;ve helped Kenyan businesses grow with innovative digital solutions.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = getColorClasses(project.color);
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-20 z-10`}></div>
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <div className={`${colors.bg} backdrop-blur-sm rounded-lg p-3 border ${colors.border}`}>
                        <Icon className={`w-8 h-8 ${colors.text}`} />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="mb-4">
                      <span className={`text-sm ${colors.text} font-semibold`}>{project.category}</span>
                      <h3 className="text-3xl font-bold text-white mt-2">{project.title}</h3>
                    </div>

                    <p className="text-gray-400 mb-6">{project.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.bg} ${colors.text} mt-2 flex-shrink-0`}></div>
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className={`flex items-center gap-2 ${colors.text} hover:text-white transition-colors group`}>
                      View Case Study
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-purple-100 mb-6">
            Let&apos;s create something amazing together for your business
          </p>
          <Link 
            href="/"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
