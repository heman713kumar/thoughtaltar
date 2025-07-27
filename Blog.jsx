import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
// Adjust import path to look for BlogCard component in the local components folder.  The original file
// expected to be one level deeper (inside a `pages` folder) and used "../components/BlogCard.jsx".  Since
// our project structure places Blog.jsx at the repository root, the correct relative path is "./components/BlogCard.jsx".
import BlogCard from './components/BlogCard.jsx'

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
      title: "The Philosophy of Artificial Intelligence and Human Consciousness",
      excerpt: "As AI becomes more sophisticated, what does it mean to be human? Exploring the intersection of technology and consciousness.",
      date: "November 30, 2024",
      readTime: 10,
      category: "Philosophy",
      slug: "philosophy-of-ai-and-consciousness"
    },
    // Added from uploaded article: a long-form reflective dialogue between friends. The slug corresponds
    // to the route defined in App.jsx.
    {
      title: "I Wish I Could Have Done That…",
      excerpt: "A reflective dialogue exploring regret, presence and how to live fully.",
      date: "July 26, 2025",
      readTime: 20,
      category: "Reflections",
      slug: "i-wish-i-could-have-done-that"
    }
  ]

  // Filter posts by category and search term
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Blog</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center border rounded px-3 py-2 w-full md:w-1/2">
          <Search className="w-5 h-5 mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search posts..."
            className="outline-none flex-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center border rounded px-3 py-2">
          <Filter className="w-5 h-5 mr-2 text-gray-500" />
          <select
            className="outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      {/* Newsletter Subscription Section */}
      <div className="mt-16 bg-white p-8 rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold mb-4">Never Miss a Thought</h2>
        <p className="mb-6 text-gray-600">
          Subscribe to get new reflections delivered directly to your inbox.
        </p>
        {/*
          Replace `your-form-id` below with the ID provided by your email
          subscription service (for example, a Formspree form ID). When a
          visitor submits the form their email address will be sent to that
          service. If you prefer to use a different provider, update the
          `action` attribute accordingly.
        */}
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          <Button
            type="submit"
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Blog
