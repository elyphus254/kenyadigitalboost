'use client'

import { ArrowLeft, Check, Globe, Server, Code } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function PricingPage() {
  const services = [
    {
      title: "Basic Website",
      icon: Globe,
      color: "blue",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Basic SEO optimization",
        "Contact form",
        "Social media integration",
        "1 year domain registration",
        "1 year basic hosting",
        "3 months support"
      ],
      domain: "KES 1,500",
      hosting: "KES 8,000",
      development: "KES 35,000",
      total: "KES 44,500",
      timeline: "2-3 weeks"
    },
    {
      title: "Business Website",
      icon: Globe,
      color: "purple",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Up to 10 pages",
        "Advanced responsive design",
        "Advanced SEO optimization",
        "Contact & booking forms",
        "Blog/News section",
        "Google Analytics integration",
        "1 year domain registration",
        "1 year premium hosting",
        "6 months support"
      ],
      domain: "KES 1,500",
      hosting: "KES 15,000",
      development: "KES 75,000",
      total: "KES 91,500",
      timeline: "3-4 weeks"
    },
    {
      title: "E-Commerce Platform",
      icon: Server,
      color: "green",
      description: "Complete online store solution",
      features: [
        "Unlimited products",
        "Shopping cart & checkout",
        "M-Pesa & card payment integration",
        "Inventory management",
        "Order tracking system",
        "Customer accounts",
        "Admin dashboard",
        "1 year domain registration",
        "1 year e-commerce hosting",
        "1 year support & maintenance"
      ],
      domain: "KES 1,500",
      hosting: "KES 25,000",
      development: "KES 150,000",
      total: "KES 176,500",
      timeline: "5-8 weeks"
    },
    {
      title: "Custom Digital System",
      icon: Code,
      color: "violet",
      description: "Tailored software solutions for your unique needs",
      features: [
        "Custom requirements analysis",
        "Bespoke system design",
        "Mobile app (iOS & Android)",
        "Web dashboard",
        "Database design & setup",
        "API development",
        "Cloud hosting setup",
        "User training",
        "1 year support & maintenance"
      ],
      domain: "Included",
      hosting: "KES 40,000/year",
      development: "From KES 250,000",
      total: "From KES 290,000",
      timeline: "8-12 weeks"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-900/50",
        text: "text-blue-400",
        border: "border-blue-500",
        hover: "hover:border-blue-400"
      },
      purple: {
        bg: "bg-purple-900/50",
        text: "text-purple-400",
        border: "border-purple-500",
        hover: "hover:border-purple-400"
      },
      green: {
        bg: "bg-green-900/50",
        text: "text-green-400",
        border: "border-green-500",
        hover: "hover:border-green-400"
      },
      violet: {
        bg: "bg-violet-900/50",
        text: "text-violet-400",
        border: "border-violet-500",
        hover: "hover:border-violet-400"
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
          <h1 className="text-5xl font-bold text-white mb-4">Our Services & Pricing</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transparent pricing for quality digital solutions. All prices include domain registration, hosting, and professional development.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-800 rounded-xl p-8 border-2 ${colors.border} ${colors.hover} transition-all hover:shadow-2xl`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing Breakdown */}
                <div className="border-t border-gray-700 pt-6 space-y-3">
                  <div className="flex justify-between text-gray-400">
                    <span>Domain (1 year):</span>
                    <span>{service.domain}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Hosting (1 year):</span>
                    <span>{service.hosting}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Development & Design:</span>
                    <span>{service.development}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white pt-3 border-t border-gray-700">
                    <span>Total Investment:</span>
                    <span className={colors.text}>{service.total}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Estimated Timeline:</span>
                    <span>{service.timeline}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Request Quote
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-800 rounded-xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-4">What&apos;s Included in All Packages</h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h4 className="font-bold text-purple-400 mb-2">Professional Support</h4>
              <p className="text-sm">Dedicated support during and after project completion</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-400 mb-2">Mobile Responsive</h4>
              <p className="text-sm">All designs optimized for mobile, tablet, and desktop</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-400 mb-2">Training Included</h4>
              <p className="text-sm">Learn how to manage and update your platform</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-400 mb-2">SSL Certificate</h4>
              <p className="text-sm">Secure connection for your website visitors</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-400 mb-2">Content Management</h4>
              <p className="text-sm">Easy-to-use CMS for content updates</p>
            </div>
            <div>
              <h4 className="font-bold text-purple-400 mb-2">Free Revisions</h4>
              <p className="text-sm">Up to 3 rounds of revisions during development</p>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Need a custom quote or have questions? We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kenyadigitalboost@gmail.com"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Email Us
            </a>
            <a 
              href="tel:+254797971025"
              className="border-2 border-purple-600 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
            >
              Call +254 797 971025
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
