// Blog Post Type
export interface BlogPost {
  _id: string
  _createdAt: string
  title: string
  slug: {
    current: string
  }
  author: Author
  featuredImage: {
    asset: {
      _id: string
      url: string
    }
    alt: string
  }
  excerpt: string
  categories?: Category[]
  tags?: string[]
  publishedAt: string
  body: any[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

// Author Type
export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  image?: {
    asset: {
      _id: string
      url: string
    }
  }
  bio?: string
}

// Category Type
export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
}
