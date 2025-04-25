import Image from "next/image";
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Twitter, Instagram, Linkedin, Menu } from 'lucide-react'
import logo from '../../public/assets/logo.jpeg'

export default function HomePage() {
  return (
  <>
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
         
        </div>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-20 overflow-hidden h-[400px] md:h-[400px] lg:h-[450px]">
        <Image
          src="/assets/hero.jpg"
          alt="Digital Transformation"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-foreground/80"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1c1d33]">Transforming Ideas into Engaging Digital Experiences</h1>
          <p className="text-2xl mb-8 text-white">We craft beautiful, functional websites that drive results for your business.</p>
          <Button size="lg" asChild>
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>

        {/* Services Overview */}
        <section className="py-16 bg-[#1c1d33] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {['Web Design', 'Web Development', 'Digital Marketing'].map((service) => (
                <Card key={service}>
                  <CardHeader>
                    <CardTitle>{service}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Elevate your online presence with our expert {service.toLowerCase()} services.</p>
                    <Button variant="outline" asChild>
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio/Testimonials Section */}
        <section className="py-16 bg-[#1c1d33] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>With years of experience in web development and design, we bring a wealth of knowledge to every project.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Client-Focused Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We prioritize your goals and vision, ensuring that every solution is tailored to your specific needs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Guide</h2>
            <p className="mb-8">Download our "10 Website Design Tips for Small Businesses" guide and boost your online presence!</p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" required />
                <Button type="submit" className="bg-[#8c51fc] hover:bg-[#7340d3]">Get Guide</Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#1c1d33] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Kenya Digital Boost</h3>
              <p>Transforming ideas into engaging digital experiences.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="hover:text-primary-foreground">Home</Link>
                <Link href="/about" className="hover:text-primary-foreground">About</Link>
                <Link href="/services" className="hover:text-primary-foreground">Services</Link>
                <Link href="/contact" className="hover:text-primary-foreground">Contact</Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
              <form className="mb-4">
                <div className="flex gap-2 ">
                  <Input type="email" placeholder="Enter your email" className="bg-gray-700 text-white" required />
                  <Button type="submit" className="bg-[#8c51fc] hover:bg-[#7340d3]">Subscribe</Button>
                </div>
              </form>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-primary-foreground"><Facebook /></Link>
                <Link href="#" className="hover:text-primary-foreground"><Twitter /></Link>
                <Link href="#" className="hover:text-primary-foreground"><Instagram /></Link>
                <Link href="#" className="hover:text-primary-foreground"><Linkedin /></Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Kenya Digital Boost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </>
  )
}