import { Heart, Mail, Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Letters = () => {
  const letters = [
    {
      title: "To the Person Who Feels Lost in Their Career",
      excerpt: "I see you scrolling through job postings at 2 AM, wondering if you're on the right path. I see you questioning every decision that led you here...",
      date: "January 3, 2025",
      readTime: 6,
      slug: "lost-in-career"
    },
    {
      title: "To the One Who's Afraid of Being Alone",
      excerpt: "Dear friend who fills every silence with noise, who surrounds themselves with people to avoid the echo of their own thoughts...",
      date: "December 25, 2024",
      readTime: 8,
      slug: "afraid-of-being-alone"
    },
    {
      title: "To the Perfectionist Who Never Feels Good Enough",
      excerpt: "You know who you are. You're the one who rewrites emails five times, who sees flaws where others see excellence...",
      date: "December 18, 2024",
      readTime: 7,
      slug: "perfectionist-never-enough"
    },
    {
      title: "To the Parent Who Worries They're Failing",
      excerpt: "I see you lying awake at night, replaying the day's moments, wondering if you said the right thing, made the right choice...",
      date: "December 10, 2024",
      readTime: 9,
      slug: "parent-worries-failing"
    },
    {
      title: "To the One Who Lost Someone They Loved",
      excerpt: "There are no words that can fill the space they left behind. No platitudes that can make sense of the senseless...",
      date: "November 28, 2024",
      readTime: 10,
      slug: "lost-someone-loved"
    },
    {
      title: "To the Dreamer Who's Been Told to Be Realistic",
      excerpt: "They told you to get your head out of the clouds, to be practical, to choose security over passion...",
      date: "November 15, 2024",
      readTime: 5,
      slug: "dreamer-told-realistic"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={24} className="text-red-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Letters to Strangers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sometimes the most honest conversations happen with people we've never met. These are letters 
              to the strangers I encounter in my thoughts—people facing struggles I recognize, carrying 
              burdens I understand, searching for answers I'm still seeking myself.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why I Write to Strangers</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                There's something liberating about writing to someone you've never met. Without the weight 
                of personal history or the complexity of existing relationships, we can speak more honestly 
                about the universal struggles that connect us all.
              </p>
              <p className="mb-6">
                These letters are born from moments of recognition—when I see someone struggling with 
                perfectionism, when I notice the quiet desperation of someone feeling lost, when I witness 
                the courage of someone facing their fears. In writing to these strangers, I'm often writing 
                to parts of myself, and perhaps to parts of you too.
              </p>
              <p>
                If you find yourself in one of these letters, know that you're not alone. Your struggles 
                are seen, your questions are valid, and your journey—however difficult—has meaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Letters Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {letters.map((letter, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg overflow-hidden h-full">
                  {/* Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <Mail size={14} />
                      <span>Letter to a Stranger</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-3">
                      {letter.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed mb-4 italic">
                      "{letter.excerpt}"
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{letter.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{letter.readTime} min read</span>
                        </div>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-gray-600 hover:text-gray-900 group-hover:translate-x-1 transition-all"
                      >
                        Read Letter
                        <Heart size={16} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Do You Have a Story to Share?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Sometimes we all need someone to write us a letter. If you're going through something 
              and think others might benefit from hearing they're not alone, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
                Share Your Story
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Read All Letters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
            <Mail size={48} className="text-gray-900 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get New Letters First
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Be the first to receive new letters to strangers. Sometimes the letter you need most 
              is the one written for someone else.
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

export default Letters

