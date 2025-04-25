import Image from "next/image";
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Twitter, Instagram, Linkedin, Menu, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#1c1d33] shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
          <Image
                          src="/assets/logo.png"
                          alt="Elyphus Kibe - Founder of Kenya Digital Boost"
                          width={70}
                          height={70}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl mb-8">We're here to answer any questions you may have about our services</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <Input id="name" name="name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                      <Input id="subject" name="subject" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <Textarea id="message" name="message" required />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <label
                        htmlFor="newsletter"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                  <p className="mt-4 text-sm text-gray-500">
                    We typically respond to inquiries within 1-2 business days.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information and Business Hours */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+254797971025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>kenyadigitalboost@gmail.com</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Connect With Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <Link href="#" className="text-gray-600 hover:text-primary">
                        <Facebook className="h-6 w-6" />
                      </Link>
                      <Link href="#" className="text-gray-600 hover:text-primary">
                        <Twitter className="h-6 w-6" />
                      </Link>
                      <Link href="#" className="text-gray-600 hover:text-primary">
                        <Instagram className="h-6 w-6" />
                      </Link>
                      <Link href="#" className="text-gray-600 hover:text-primary">
                        <Linkedin className="h-6 w-6" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="mb-8 text-xl">We're excited to hear about your ideas and help bring them to life.</p>
            <Button size="lg" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
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
  )
}