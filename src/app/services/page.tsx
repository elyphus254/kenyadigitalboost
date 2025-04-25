import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#1c1d33] shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
          <Image
                          src="/assets/logo.png"
                          alt="Elyphus Kibe - Founder of Kenya Digital Boost"
                          width={100}
                          height={100}
                          className="rounded-lg shadow-lg"
                          priority
                        />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-4">
            <Link href="/" className="text-white hover:text-[#8c51fc] transition duration-300">Home</Link>
            <Link href="/about" className="text-white hover:text-[#8c51fc] transition duration-300">About</Link>
            <Link href="/services" className="text-white hover:text-[#8c51fc] transition duration-300">Services</Link>
            <Link href="/contact" className="text-white hover:text-[#8c51fc] transition duration-300">Contact</Link>
          </nav>
          <Button asChild className="bg-[#8c51fc] hover:bg-[#7340d3] text-white">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl mb-8">
              Elevate your online presence with our comprehensive digital
              solutions
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Transforming Ideas into Digital Reality
            </h2>
            <p className="text-xl text-center mb-12">
              We offer a range of services designed to help your business thrive
              in the digital landscape. From stunning web designs that attract
              customers to robust development solutions and strategic digital
              marketing, we've got you covered.
            </p>

            {/* Individual Service Sections */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="web-design">
                <AccordionTrigger>Web Design</AccordionTrigger>
                <AccordionContent>
                  <h3 className="text-xl font-semibold mb-4">
                    Crafting Beautiful, User-Centric Websites
                  </h3>
                  <p className="mb-4">
                    Our web design process is tailored to create visually
                    stunning and highly functional websites that resonate with
                    your brand and engage your audience.
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Responsive designs that look great on all devices</li>
                    <li>
                      User experience (UX) focused layouts for maximum
                      engagement
                    </li>
                    <li>
                      Custom e-commerce solutions to boost your online sales
                    </li>
                    <li>
                      SEO-friendly structures to improve your search engine
                      rankings
                    </li>
                  </ul>
                  <p>
                    From initial concept to final implementation, we work
                    closely with you to ensure your website not only looks
                    amazing but also drives results for your business.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="web-development">
                <AccordionTrigger>Web Development</AccordionTrigger>
                <AccordionContent>
                  <h3 className="text-xl font-semibold mb-4">
                    Building Robust and Scalable Web Solutions
                  </h3>
                  <p className="mb-4">
                    Our web development team combines technical expertise with
                    creative problem-solving to build websites and web
                    applications that perform flawlessly.
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>
                      Custom website development using HTML5, CSS3, and
                      JavaScript
                    </li>
                    <li>
                      React and Next.js for dynamic, high-performance web
                      applications
                    </li>
                    <li>Backend development with Node.js and Express</li>
                    <li>
                      Database design and management (SQL and NoSQL solutions)
                    </li>
                    <li>API development and integration</li>
                    <li>
                      Performance optimization and security implementation
                    </li>
                  </ul>
                  <p>
                    We leverage the latest technologies and best practices to
                    ensure your web solution is not only cutting-edge but also
                    maintainable and scalable for future growth.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="digital-marketing">
                <AccordionTrigger>Digital Marketing</AccordionTrigger>
                <AccordionContent>
                  <h3 className="text-xl font-semibold mb-4">
                    Amplifying Your Online Presence
                  </h3>
                  <p className="mb-4">
                    Our digital marketing strategies are designed to increase
                    your visibility, engage your target audience, and drive
                    conversions.
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>
                      Search Engine Optimization (SEO) to improve your organic
                      rankings
                    </li>
                    <li>
                      Content strategy and creation to establish your brand as
                      an industry leader
                    </li>
                    <li>
                      Social media marketing to build and engage your community
                    </li>
                    <li>
                      Pay-Per-Click (PPC) advertising for immediate traffic and
                      leads
                    </li>
                    <li>
                      Email marketing campaigns to nurture leads and retain
                      customers
                    </li>
                    <li>
                      Analytics and reporting to measure and optimize
                      performance
                    </li>
                  </ul>
                  <p>
                    We tailor our digital marketing approach to your specific
                    goals, whether it's increasing brand awareness, generating
                    leads, or driving sales.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Choose Your Perfect Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Basic",
                  price: "KES15,000",
                  features: [
                    "5-page responsive website",
                    "Basic SEO setup",
                    "Contact form integration",
                    "1 month of support",
                  ],
                },
                {
                  title: "Standard",
                  price: "KES30,000",
                  features: [
                    "10-page responsive website",
                    "Advanced SEO optimization",
                    "Content Management System (CMS)",
                    "Social media integration",
                    "3 months of support and maintenance",
                  ],
                },
                {
                  title: "Premium",
                  price: "KES70,000",
                  features: [
                    "Custom website (unlimited pages)",
                    "E-commerce functionality",
                    "Comprehensive SEO strategy",
                    "Custom web application features",
                    "6 months of support and maintenance",
                    "Priority customer service",
                  ],
                },
              ].map((plan) => (
                <Card key={plan.title}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold mb-4">{plan.price}</p>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Elevate Your Online Presence?
            </h2>
            <p className="mb-8 text-xl">
              Let's discuss how we can tailor our services to meet your unique
              needs.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Kenya Digital Boost
              </h3>
              <p>Transforming ideas into engaging digital experiences.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="hover:text-primary-foreground">
                  Home
                </Link>
                <Link href="/about" className="hover:text-primary-foreground">
                  About
                </Link>
                <Link
                  href="/services"
                  className="hover:text-primary-foreground"
                >
                  Services
                </Link>
                <Link href="/contact" className="hover:text-primary-foreground">
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-primary-foreground">
                  <Facebook />
                </Link>
                <Link href="#" className="hover:text-primary-foreground">
                  <Twitter />
                </Link>
                <Link href="#" className="hover:text-primary-foreground">
                  <Instagram />
                </Link>
                <Link href="#" className="hover:text-primary-foreground">
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} Kenya Digital Boost. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
