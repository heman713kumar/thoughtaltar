import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import BlogCard from '../components/BlogCard.jsx'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Philosophy', 'Reflections', 'Society', 'Inner Voice', 'Business']

  const allPosts = [
    {
      title: "The Art of Questioning Everything: A Journey Through Doubt and Discovery",
      excerpt: "In a world that demands certainty, I've found profound beauty in embracing uncertainty. This is a reflection on how questioning our deepest beliefs can lead to unexpected wisdom and authentic growth.",
      date: "January 5, 2025",
      readTime: 8,
      category: "Philosophy",
      slug: "art-of-questioning-everything"
    },
    {
      title: "Letters to My Younger Self: On Engineering Dreams and Life's Detours",
      excerpt: "What I wish I could tell the ambitious engineering student who thought he had it all figured out.",
      date: "December 28, 2024",
      readTime: 6,
      category: "Reflections",
      slug: "letters-to-younger-self"
    },
    {
      title: "The Loneliness of Modern Connection",
      excerpt: "We're more connected than ever, yet loneliness persists. A deep dive into the paradox of digital relationships.",
      date: "December 20, 2024",
      readTime: 7,
      category: "Society",
      slug: "loneliness-modern-connection"
    },
    {
      title: "Death as a Teacher: What Mortality Taught Me About Living",
      excerpt: "Confronting our finite nature isn't morbid—it's liberating. Here's how death became my greatest teacher.",
      date: "December 15, 2024",
      readTime: 9,
      category: "Inner Voice",
      slug: "death-as-teacher"
    },
    {
      title: "The Business of Being Human: Lessons from Corporate Life",
      excerpt: "What three years in business taught me about human nature, ambition, and the cost of success.",
      date: "December 10, 2024",
      readTime: 5,
      category: "Business",
      slug: "business-of-being-human"
    },
    {
      title: "On Vulnerability: The Courage to Be Imperfect",
      excerpt: "Why showing our flaws might be the most honest thing we can do in a world obsessed with perfection.",
      date: "December 5, 2024",
      readTime: 7,
      category: "Inner Voice",
      slug: "on-vulnerability"
    },
    {
      title: "The Paradox of Choice in Modern Life",
      excerpt: "Having infinite options should make us happier, right? A philosophical exploration of choice, freedom, and satisfaction.",
      date: "November 28, 2024",
      readTime: 8,
      category: "Philosophy",
      slug: "paradox-of-choice"
    },
    {
      title: "Building Bridges: Technology and Human Connection",
      excerpt: "How can we use technology to enhance rather than replace genuine human relationships?",
      date: "November 20, 2024",
      readTime: 6,
      category: "Society",
      slug: "technology-human-connection"
    },
    {
      title: "The Weight of Expectations: A Personal Reflection",
      excerpt: "On the burden of living up to others' expectations and the freedom found in defining success for yourself.",
      date: "November 15, 2024",
      readTime: 5,
      category: "Reflections",
      slug: "weight-of-expectations"
    },
    {
      title: "Lessons from Failure: What My Mistakes Taught Me",
      excerpt: "A candid look at my biggest failures and the unexpected wisdom they provided.",
      date: "November 8, 2024",
      readTime: 9,
      category: "Reflections",
      slug: "lessons-from-failure"
    }
  ]

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              All Thoughts
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of reflections on life's complexities, philosophical inquiries, and personal insights 
              from my journey through engineering, business, and the human experience.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gray-900 text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-600 mb-8">
            Showing {filteredPosts.length} of {allPosts.length} posts
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Never Miss a Thought
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to get new reflections delivered directly to your inbox. Join a community of thoughtful readers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Join 500+ thoughtful readers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

