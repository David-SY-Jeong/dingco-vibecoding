export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  readTime: number;
  featured: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Programming Language Guide for Beginners",
    slug: "programming-language-guide-for-beginners",
    excerpt: "A comprehensive guide for choosing your first programming language.",
    content: "This is a sample blog post content about programming languages.",
    author: "DingCodingCo",
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    tags: ["programming", "beginner", "guide"],
    category: "Programming Basics",
    readTime: 5,
    featured: true,
    seo: {
      metaTitle: "Programming Language Guide for Beginners | VibeCoding",
      metaDescription: "A comprehensive guide for choosing your first programming language.",
      keywords: ["programming", "beginner", "guide", "language"]
    }
  },
  {
    id: "2",
    title: "Web Developer Roadmap",
    slug: "web-developer-roadmap",
    excerpt: "Complete roadmap to become a web developer.",
    content: "This is a sample blog post content about web development.",
    author: "DingCodingCo",
    publishedAt: "2024-01-20",
    updatedAt: "2024-01-20",
    tags: ["web", "development", "roadmap"],
    category: "Web Development",
    readTime: 8,
    featured: true,
    seo: {
      metaTitle: "Web Developer Roadmap | VibeCoding",
      metaDescription: "Complete roadmap to become a web developer.",
      keywords: ["web", "development", "roadmap", "career"]
    }
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map(post => post.category))];
}

export function getAllTags(): string[] {
  return [...new Set(blogPosts.flatMap(post => post.tags))];
}