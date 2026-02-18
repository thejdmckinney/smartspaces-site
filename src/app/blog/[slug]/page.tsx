import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { client } from '../../../../sanity/lib/sanity-client'
import { urlFor } from '../../../../sanity/lib/sanity-image'
import { BlogPost } from '../../../../sanity/lib/types'
import { Calendar, User, ArrowLeft, Phone } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { Metadata } from 'next'

interface Props {
  params: {
    slug: string
  }
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
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
      },
      bio
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
    body,
    seo
  }`
  
  return client.fetch(query, { slug }, { cache: 'no-store' })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | SmartSpaces DFW',
    }
  }

  const metaTitle = post.seo?.metaTitle || `${post.title} | SmartSpaces DFW Blog`
  const metaDescription = post.seo?.metaDescription || post.excerpt

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: post.seo?.keywords?.join(', ') || post.tags?.join(', '),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://smartspacesdfw.com/blog/${post.slug.current}`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: urlFor(post.featuredImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: post.featuredImage.alt,
        },
      ],
    },
  }
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8 rounded-2xl overflow-hidden">
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt || 'Blog image'}
          width={1200}
          height={675}
          className="w-full"
        />
        {value.caption && (
          <p className="text-sm text-slate-400 mt-2 text-center italic">{value.caption}</p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-white mt-12 mb-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-white mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold text-white mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-bold text-white mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-slate-300 leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-slate-300">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside text-slate-300 space-y-2 mb-6 ml-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside text-slate-300 space-y-2 mb-6 ml-4">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const target = value?.blank ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-blue-400 hover:text-blue-300 underline transition-colors"
        >
          {children}
        </a>
      )
    },
    strong: ({ children }: any) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-slate-800 text-cyan-400 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

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

      {/* Article */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <span
                  key={category._id}
                  className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8 pb-8 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            {post.author.image && (
              <div className="flex items-center gap-3">
                <Image
                  src={urlFor(post.author.image).width(40).height(40).url()}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-medium text-white">{post.author.name}</span>
              </div>
            )}
            {!post.author.image && (
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author.name}
              </div>
            )}
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <Image
              src={urlFor(post.featuredImage).width(1200).height(675).url()}
              alt={post.featuredImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Excerpt */}
          <div className="text-xl text-slate-300 leading-relaxed mb-12 pb-12 border-b border-slate-700">
            {post.excerpt}
          </div>

          {/* Body Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-12 border-t border-slate-700">
              <h3 className="text-sm font-semibold text-slate-400 mb-4">TAGS</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          {post.author.bio && (
            <div className="mt-12 p-8 bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl">
              <div className="flex items-start gap-4">
                {post.author.image && (
                  <Image
                    src={urlFor(post.author.image).width(80).height(80).url()}
                    alt={post.author.name}
                    width={80}
                    height={80}
                    className="rounded-full flex-shrink-0"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">About {post.author.name}</h3>
                  <p className="text-slate-300">{post.author.bio}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-blue-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a smart home solution that works for you.
            </p>
            <Link
              href="/start-your-project"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Start Your Project
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
