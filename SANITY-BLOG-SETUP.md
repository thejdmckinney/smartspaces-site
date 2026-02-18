# SmartSpaces DFW - Sanity Blog Setup Guide

## Overview
Your SmartSpaces site now has a complete blog system powered by Sanity CMS! You can create blog posts with featured images, categories, tags, rich text content, and SEO optimization.

---

## Step 1: Create a Sanity Account & Project

### 1. Sign Up for Sanity
1. Go to https://sanity.io
2. Click "Get Started" and create a free account
3. You can use GitHub, Google, or email to sign up

### 2. Create a New Project
1. After logging in, click "Create Project"
2. Name it "SmartSpaces Blog" (or whatever you prefer)
3. Choose a dataset name: `production` (recommended)
4. Note: You can create multiple datasets (production, staging, etc.)

### 3. Get Your Project Credentials
After creating the project, you'll need two values:

**Project ID**: Found in your Sanity dashboard URL
- Example: `https://www.sanity.io/manage/personal/project/ABC123XYZ`
- Your Project ID is: `ABC123XYZ`

**Dataset**: The name you chose (likely `production`)

---

## Step 2: Configure Environment Variables

### 1. Create `.env.local` File
In your project root, create or update `.env.local`:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production

# Existing variables (keep these)
NEXT_PUBLIC_SUPABASE_URL=your_existing_value
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_existing_value
SUPABASE_SERVICE_ROLE_KEY=your_existing_value
RESEND_API_KEY=your_existing_value
ADMIN_PASSWORD=your_existing_value
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Update Vercel Environment Variables
For production deployment:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add these new variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` → Your Sanity project ID
   - `NEXT_PUBLIC_SANITY_DATASET` → `production`
4. Make sure to add them to all environments (Production, Preview, Development)

---

## Step 3: Deploy Your Schema to Sanity

### 1. Install Sanity CLI Globally (if needed)
```bash
npm install -g @sanity/cli
```

### 2. Login to Sanity
```bash
npx sanity login
```

### 3. Deploy Your Schema
```bash
npx sanity schema deploy
```

This will upload your blog schema (Blog Post, Author, Category) to Sanity Studio.

---

## Step 4: Access Sanity Studio

### Local Development
1. Start your dev server: `npm run dev`
2. Navigate to: http://localhost:3000/studio
3. Login with your Sanity account
4. You'll see your content types: Blog Post, Author, Category, Service, Project, Testimonial, Page

### Production
After deploying to Vercel, access at: `https://yourdomain.com/studio`

---

## Step 5: Create Your First Blog Post

### 1. Create an Author First
1. In Sanity Studio, go to "Author"
2. Click "Create new"
3. Fill in:
   - **Name**: Your name (e.g., "Jeremy McKinney")
   - **Slug**: Click "Generate" (creates URL-friendly version)
   - **Profile Image**: Upload a professional photo
   - **Bio**: Brief description about yourself
4. Click "Publish"

### 2. Create Categories (Optional but Recommended)
1. Go to "Category"
2. Create categories like:
   - "Smart Home Tips"
   - "Installation Guides"
   - "Product Reviews"
   - "Industry News"
3. Click "Publish" for each

### 3. Create Your First Blog Post
1. Go to "Blog Post"
2. Click "Create new"
3. Fill in all fields:
   - **Title**: Your blog post title (e.g., "5 Smart Home Upgrades That Pay for Themselves")
   - **Slug**: Click "Generate" (creates URL like `/blog/5-smart-home-upgrades-that-pay-for-themselves`)
   - **Author**: Select the author you created
   - **Featured Image**: Upload a high-quality image (recommended: 1200x675px)
     - **Alt Text**: Describe the image for SEO and accessibility
   - **Excerpt**: Short 1-2 sentence summary (max 200 characters)
   - **Categories**: Select relevant categories
   - **Tags**: Add searchable tags (e.g., "smart lighting", "home automation", "energy savings")
   - **Published At**: Choose publication date/time
   - **Body**: Write your content using the rich text editor
     - Add headings (H1-H4)
     - Format text (bold, italic, code)
     - Add links
     - Insert images with captions
     - Create bullet/numbered lists
     - Add blockquotes
   - **SEO** (Optional but Recommended):
     - **Meta Title**: Custom title for Google (60 chars max)
     - **Meta Description**: Custom description for Google (160 chars max)
     - **Focus Keywords**: Target keywords for SEO
4. Click "Publish"

---

## Step 6: View Your Blog

### Blog Listing Page
- Local: http://localhost:3000/blog
- Production: https://yourdomain.com/blog

### Individual Blog Post
- Local: http://localhost:3000/blog/your-post-slug
- Production: https://yourdomain.com/blog/your-post-slug

---

## Blog Features

### ✅ What You Can Do:

1. **Rich Text Editing**
   - Multiple heading levels (H1-H4)
   - Text formatting (bold, italic, code)
   - Bulleted and numbered lists
   - Blockquotes
   - Inline images with captions
   - External and internal links

2. **Media Management**
   - Featured images with alt text
   - Inline images in content
   - Automatic image optimization
   - Responsive images

3. **Organization**
   - Multiple categories per post
   - Custom tags
   - Author profiles with bios and photos
   - Publication date control

4. **SEO Optimization**
   - Custom meta titles and descriptions
   - Focus keywords
   - Automatic Open Graph tags
   - Twitter card support
   - Semantic HTML structure

5. **Visual Design**
   - Matches your SmartSpaces branding
   - Navy blue and electric blue color scheme
   - Responsive design (mobile-friendly)
   - Hover effects and animations
   - Beautiful typography

---

## Adding Blog to Your Navigation

You may want to add a "Blog" link to your main site navigation:

### Homepage Navigation
Edit `/src/app/page.tsx` and add Blog to the navigation menu:

```tsx
<Link href="/blog" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
  Blog
</Link>
```

### Services Page Navigation
Edit `/src/app/services/page.tsx` and add the same link.

---

## Content Tips

### Blog Post Ideas:
1. "Why Your Smart Home Needs a Strong Network Foundation"
2. "Smart Lighting vs Traditional: 5 Years of Cost Comparison"
3. "Top 5 Smart Home Mistakes (And How to Avoid Them)"
4. "How We Install UniFi Networks in DFW Homes"
5. "EV Charger Installation: What You Need to Know"
6. "Smart Home Security: Beyond Just Cameras"
7. "Lutron vs Leviton: Which Smart Lighting is Right for You?"
8. "Before & After: A Complete Smart Home Transformation in Plano"

### SEO Best Practices:
- Use location keywords (Dallas, Fort Worth, DFW, Plano, etc.)
- Include service keywords (smart home, home automation, etc.)
- Write for humans first, search engines second
- Use descriptive headings (H2, H3)
- Add internal links to your service pages
- Use alt text on all images
- Aim for 1,000-2,000 words for detailed guides

---

## Troubleshooting

### "Cannot access Sanity Studio"
- Check that your environment variables are set correctly
- Make sure you ran `npx sanity schema deploy`
- Clear browser cache and try again

### "Posts not showing on blog page"
- Verify posts are published (not drafts) in Sanity Studio
- Check that the `publishedAt` date is not in the future
- Ensure your Sanity project ID and dataset are correct

### "Images not loading"
- Verify images are uploaded in Sanity Studio
- Check that alt text is filled in (required field)
- Make sure images are published with the post

### "Slug not generating"
- Click the "Generate" button next to the slug field
- Or manually type a URL-friendly slug (lowercase, hyphens, no spaces)

---

## Next Steps

1. **Create 3-5 blog posts** to populate your blog
2. **Add blog link** to your main navigation
3. **Share posts** on social media to drive traffic
4. **Update regularly** (aim for 1-2 posts per month minimum)
5. **Monitor analytics** to see which topics resonate

---

## Support

For Sanity-specific questions:
- Documentation: https://www.sanity.io/docs
- Community: https://slack.sanity.io
- Help: https://www.sanity.io/help

For SmartSpaces site issues:
- Check console logs for errors
- Verify environment variables
- Ensure all npm packages are installed

---

## What's Been Created

### New Files:
- `/sanity/schemas/blog.ts` - Blog post schema
- `/sanity/schemas/author.ts` - Author schema
- `/sanity/schemas/category.ts` - Category schema
- `/sanity/lib/sanity-client.ts` - Sanity API client
- `/sanity/lib/sanity-image.ts` - Image URL builder
- `/sanity/lib/types.ts` - TypeScript types
- `/src/app/blog/page.tsx` - Blog listing page
- `/src/app/blog/[slug]/page.tsx` - Individual blog post page

### Updated Files:
- `/sanity/schemas/index.ts` - Added blog schemas
- `package.json` - Added Sanity dependencies

### New NPM Packages:
- `sanity` - Sanity Studio
- `@sanity/vision` - GROQ query tool
- `@sanity/image-url` - Image URL builder
- `next-sanity` - Next.js integration
- `@portabletext/react` - Rich text renderer

---

Enjoy your new blog system! 🚀
