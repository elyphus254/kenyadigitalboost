import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Linkedin, Menu } from "lucide-react";

export default function AboutUsPage() {
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
        <section className="relative bg-primary text-white py-20 overflow-hidden h-[400px] md:h-[400px] lg:h-[300px]">
        <Image
          src="/assets/hero-about.jpg"
          alt="Digital Transformation"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-foreground/80"></div>
        <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl mb-8">
              Get to know the passion and expertise behind YourAgency
            </p>
          
        </div>
      </section>

        {/* Your Story Section */}
        <section className="py-16 bg-[#1c1d33] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 prose max-w-none">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="mb-4">
                As a self-taught developer, my journey into the world of web development began with a curiosity for creating digital experiences. What started as a hobby quickly evolved into a passion, driving me to constantly learn and adapt to the ever-changing landscape of web technologies.
              </p>
              <p className="mb-4">
                Through countless hours of study, practice, and real-world projects, I honed my skills in HTML, CSS, JavaScript, and various frameworks. Each challenge I encountered became an opportunity to grow and innovate, shaping my approach to problem-solving in the digital realm.
              </p>
              <p className="mb-4">
                This journey of self-discovery and continuous learning led to the foundation of Kenya Digital Boost. Today, we bring that same passion, creativity, and commitment to every project we undertake, helping businesses transform their ideas into engaging digital realities.
              </p>
            </div>
            <div className="md:col-span-5 md:col-start-9">
              <div className="relative w-full">
                <Image
                  src="/assets/Elyphus-Kibe.png"
                  alt="Elyphus Kibe - Founder of Kenya Digital Boost"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-[#1c1d33] ">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[#8c51fc]">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    At Kenya Digital Boost, our mission is to empower businesses
                    with innovative digital solutions that drive growth and
                    success. We strive to create web experiences that not only
                    look great but also deliver tangible results for our
                    clients.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#8c51fc]">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We envision a digital landscape where every business,
                    regardless of size, has access to high-quality web solutions
                    that can compete on a global scale. Our goal is to be at the
                    forefront of this transformation, continually pushing the
                    boundaries of what's possible in web development and digital
                    marketing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-[#1c1d33]  text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Creativity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We approach each project with fresh eyes and innovative
                    ideas, ensuring unique solutions that stand out in the
                    digital crowd.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our clients can count on us to deliver high-quality work on
                    time and within budget, every single time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Client-Centered Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We put our clients' needs and goals at the heart of every
                    project, ensuring solutions that truly serve their business
                    objectives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Personalized CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="mb-8 text-xl">
              Let's collaborate and create something amazing together.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Start Your Project with Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-[#1c1d33] text-white py-8">
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
