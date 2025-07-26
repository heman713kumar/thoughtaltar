import { ArrowRight, BookOpen, Heart, Lightbulb, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import BlogCard from '../components/BlogCard.jsx'

const Home = () => {
  // Sample blog posts data
  const featuredPost = {
    title: "The Art of Questioning Everything: A Journey Through Doubt and Discovery",
    excerpt: "In a world that demands certainty, I've found profound beauty in embracing uncertainty. This is a reflection on how questioning our deepest beliefs can lead to unexpected wisdom and authentic growth.",
    date: "January 5, 2025",
    readTime: 8,
    category: "Philosophy",
    slug: "art-of-questioning-everything"
  }

  const recentPosts = [
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
      category: "Reflections",
      slug: "business-of-being-human"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                The Thought Altar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              A digital sanctuary for deep reflection, intellectual dialogue, and the pursuit of truth through writing.
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto">
              Join me, Hemant Kumar, on a journey through life's complexities—philosophy, emotions, relationships, society, AI, death, self-doubt, and everything in between. This is where curiosity is sacred and truth is a shared quest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
                Start Reading
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                About This Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deep Reflection</h3>
              <p className="text-gray-600">
                Using written words as a tool to refine personal opinions, challenge assumptions, and discover new perspectives.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intellectual Dialogue</h3>
              <p className="text-gray-600">
                Engaging with people from diverse backgrounds—intellectuals, dreamers, professionals, and everyday thinkers.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Shared Quest</h3>
              <p className="text-gray-600">
                Creating a community of reflective minds who aren't afraid of difficult questions and value honesty over performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Reflection</h2>
            <p className="text-lg text-gray-600">The latest deep dive into life's complexities</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <BlogCard {...featuredPost} featured={true} />
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Thoughts</h2>
              <p className="text-lg text-gray-600">Exploring life's questions, one reflection at a time</p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All Posts
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
          <div className="text-center mt-12 md:hidden">
            <Button variant="outline">
              View All Posts
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <Lightbulb size={48} className="text-gray-900 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join the Conversation
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to receive thoughtful reflections directly in your inbox. No spam, just authentic thoughts on life's complexities.
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
    </>
  )
}

export default Home

