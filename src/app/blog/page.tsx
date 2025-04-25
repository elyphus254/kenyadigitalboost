import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Menu, Search } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "Why Your Business Needs a Website in 2024",
    excerpt: "In today's digital age, having a website is no longer optional for businesses. Learn why a website is crucial for your success and growth.",
    date: "2024-03-01",
    readTime: "5 min read",
    category: "Web Design",
  },
  {
    id: 2,
    title: "Top 10 Digital Marketing Trends for 2024",
    excerpt: "Stay ahead of the curve with these emerging digital marketing trends that will shape the industry in 2024.",
    date: "2024-02-15",
    readTime: "8 min read",
    category: "Digital Marketing",
  },
  {
    id: 3,
    title: "The Impact of AI on Web Development",
    excerpt: "Explore how artificial intelligence is revolutionizing web development and what it means for businesses and developers.",
    date: "2024-01-30",
    readTime: "6 min read",
    category: "Web Development",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            YourAgency
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-primary">Services</Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary">Blog</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl mb-8">Insights, tips, and trends in web design, development, and digital marketing</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <div className="space-y-8">
                  {blogPosts.map((post) => (
                    <Card key={post.id}>
                      <CardHeader>
                        <CardTitle>{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                          <span>{post.category}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild>
                          <Link href={`/blog/${post.id}`}>Read More</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3">
                <Card>
                  <CardHeader>
                    <CardTitle>Search</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex">
                      <Input placeholder="Search blog posts..." className="rounded-r-none" />
                      <Button className="rounded-l-none">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-primary hover:underline">Web Design</Link></li>
                      <li><Link href="#" className="text-primary hover:underline">Web Development</Link></li>
                      <li><Link href="#" className="text-primary hover:underline">Digital Marketing</Link></li>
                      <li><Link href="#" className="text-primary hover:underline">SEO</Link></li>
                      <li><Link href="#" className="text-primary hover:underline">UX/UI Design</Link></li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">YourAgency</h3>
              <p>Transforming ideas into engaging digital experiences.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="hover:text-primary-foreground">Home</Link>
                <Link href="/about" className="hover:text-primary-foreground">About</Link>
                <Link href="/services" className="hover:text-primary-foreground">Services</Link>
                <Link href="/blog" className="hover:text-primary-foreground">Blog</Link>
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
            <p>&copy; {new Date().getFullYear()} YourAgency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}