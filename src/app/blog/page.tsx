import { blogPosts, getAllCategories, getAllTags } from "@/data/blog";
import Link from "next/link";

export default function BlogPage() {
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            VibeCoding
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/#courses" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Courses</Link>
            <Link href="/#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/blog" className="text-blue-600 font-semibold">Blog</Link>
            <Link href="/#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Programming Blog
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Learn programming, web development, and career preparation with our comprehensive guides.
            </p>
          </div>

          <div className="mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">Categories</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <span key={category} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {category}
                  </span>
                ))}
              </div>
              
              <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-white">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 10).map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="ml-2 text-slate-500 text-sm">
                      {post.readTime} min read
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-white line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.publishedAt}</span>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need More Learning Resources?</h3>
              <p className="text-lg mb-6 opacity-90">
                Learn programming with our systematic curriculum and practical projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#courses"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  View Courses
                </Link>
                <Link
                  href="/#contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}