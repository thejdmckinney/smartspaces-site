import Link from 'next/link'
import Image from 'next/image'
import { client } from '../../../sanity/lib/sanity-client'
import { urlFor } from '../../../sanity/lib/sanity-image'
import { BlogPost } from '../../../sanity/lib/types'
import { Calendar, User, ArrowRight, Phone, Menu, X, ChevronDown } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Home Blog - Tips, Guides & Industry Insights | SmartSpaces DFW',
  description: 'Expert smart home tips, installation guides, and industry insights from SmartSpaces DFW. Learn about home automation, security systems, and smart lighting.',
  keywords: 'smart home blog, home automation tips, smart home guides, smart lighting tips, home security advice, smart home installation Dallas',
  openGraph: {
    title: 'Smart Home Blog | SmartSpaces DFW',
    description: 'Expert smart home tips and guides from SmartSpaces DFW professionals.',
    url: 'https://smartspacesdfw.com/blog',
    type: 'website',
  },
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image {
        asset->{
          _id,
          url
        }
      }
    },
    featuredImage {
      asset->{
        _id,
        url
      },
      alt
    },
    excerpt,
    categories[]->{
      _id,
      title,
      slug
    },
    tags,
    publishedAt,
    seo
  }`
  
  return client.fetch(query, {}, { cache: 'no-store' })
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-100/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/new-smartspaces-logo.png"
              alt="SmartSpaces DFW Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </Link>
            <Link href="/blog" className="text-blue-600 font-medium">
              Blog
            </Link>
            <Link href="/pricing" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Contact Us
            </Link>
            <a
              href="tel:+16824662130"
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              (682) 466-2130
            </a>
          </div>
          <Link
            href="/start-your-project"
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Smart Home <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Expert tips, installation guides, and industry insights to help you make the most of your smart home
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-slate-400 mb-8">No blog posts yet. Check back soon for expert smart home content!</p>
              <Link
                href="/start-your-project"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug.current}`}
                  className="group bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all hover:transform hover:scale-105"
                >
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={urlFor(post.featuredImage).width(600).height(400).url()}
                      alt={post.featuredImage.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Categories */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {post.categories.slice(0, 2).map((category) => (
                          <span
                            key={category._id}
                            className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-white text-xs font-medium"
                          >
                            {category.title}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author.name}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-400 mb-4 line-clamp-3">{post.excerpt}</p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-slate-700/50 rounded text-slate-300 text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read More */}
                    <div className="mt-4 flex items-center gap-2 text-blue-400 font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Home?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your smart home project and create a solution that works for you.
            </p>
            <Link
              href="/start-your-project"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 bg-slate-950/50 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} SmartSpaces DFW. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
