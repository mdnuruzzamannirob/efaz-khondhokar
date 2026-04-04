type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
  image: string
  externalLink: string
}

export type BlogPosts = BlogPost[]

export const blogPosts: BlogPosts = [
  {
    id: 1,
    title: 'Getting Started with Framer Motion',
    excerpt:
      'Learn how to create beautiful animations in React using Framer Motion. A comprehensive guide for beginners.',
    date: 'March 15, 2026',
    readTime: '5 min read',
    category: 'Tutorial',
    slug: 'getting-started-framer-motion',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    externalLink: 'https://www.framer.com/motion/',
  },
  {
    id: 2,
    title: 'Building Performant Web Applications',
    excerpt:
      'Best practices and techniques for optimizing your web applications for speed and performance.',
    date: 'March 10, 2026',
    readTime: '8 min read',
    category: 'Performance',
    slug: 'building-performant-web-apps',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    externalLink: 'https://web.dev/performance/',
  },
  {
    id: 3,
    title: 'The Art of Minimalist Web Design',
    excerpt:
      'Explore how minimalist design principles can create more engaging and user-friendly web experiences.',
    date: 'March 5, 2026',
    readTime: '6 min read',
    category: 'Design',
    slug: 'minimalist-web-design',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    externalLink:
      'https://www.interaction-design.org/literature/topics/minimalism',
  },
  {
    id: 4,
    title: 'TypeScript Tips and Tricks',
    excerpt:
      'Advanced TypeScript patterns and techniques to write more maintainable and type-safe code.',
    date: 'February 28, 2026',
    readTime: '7 min read',
    category: 'Development',
    slug: 'typescript-tips-tricks',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    externalLink: 'https://www.typescriptlang.org/docs/',
  },
  {
    id: 5,
    title: 'Next.js 16 Features Overview',
    excerpt:
      'Discover the latest features and improvements in Next.js 16 and how to leverage them in your projects.',
    date: 'February 20, 2026',
    readTime: '9 min read',
    category: 'Framework',
    slug: 'nextjs-16-features',
    image:
      'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=80',
    externalLink: 'https://nextjs.org/',
  },
  {
    id: 6,
    title: 'Creating Accessible Web Applications',
    excerpt:
      'A guide to building web applications that are accessible to everyone, including users with disabilities.',
    date: 'February 15, 2026',
    readTime: '10 min read',
    category: 'Accessibility',
    slug: 'accessible-web-apps',
    image:
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
    externalLink: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
  },
  {
    id: 7,
    title: 'React Hooks Deep Dive',
    excerpt:
      'Master custom hooks and advanced patterns for managing state and side effects in React applications.',
    date: 'February 10, 2026',
    readTime: '8 min read',
    category: 'Development',
    slug: 'react-hooks-deep-dive',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    externalLink: 'https://react.dev/reference/react/hooks',
  },
  {
    id: 8,
    title: 'CSS Grid Mastery',
    excerpt:
      'Learn modern CSS Grid techniques to create responsive layouts without compromise.',
    date: 'February 5, 2026',
    readTime: '7 min read',
    category: 'Design',
    slug: 'css-grid-mastery',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&w=1200&q=80',
    externalLink:
      'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout',
  },
  {
    id: 9,
    title: 'Web Security Best Practices',
    excerpt:
      'Essential security practices to protect your web applications from common vulnerabilities.',
    date: 'January 30, 2026',
    readTime: '9 min read',
    category: 'Development',
    slug: 'web-security-best-practices',
    image:
      'https://images.unsplash.com/photo-1614028674026-a66335f08599?auto=format&fit=crop&w=1200&q=80',
    externalLink: 'https://owasp.org/www-project-top-ten/',
  },
  {
    id: 10,
    title: 'Database Optimization Strategies',
    excerpt:
      'Learn how to optimize database queries and improve application performance at scale.',
    date: 'January 25, 2026',
    readTime: '10 min read',
    category: 'Performance',
    slug: 'database-optimization',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    externalLink: 'https://use-the-index-luke.com/',
  },
]
