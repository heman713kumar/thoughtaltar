import { Lightbulb, Brain, MessageCircle, ArrowRight, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Ideas = () => {
  const currentIdeas = [
    {
      title: "The Philosophy of Artificial Intelligence and Human Consciousness",
      description: "As AI becomes more sophisticated, what does it mean to be human? Exploring the intersection of technology, consciousness, and what makes us uniquely human.",
      status: "Active Research",
      lastUpdated: "January 2025",
      tags: ["AI", "Philosophy", "Consciousness"],
      priority: "high"
    },
    {
      title: "The Economics of Attention in the Digital Age",
      description: "How the commodification of human attention is reshaping society, relationships, and our capacity for deep thought.",
      status: "Early Exploration",
      lastUpdated: "December 2024",
      tags: ["Society", "Technology", "Psychology"],
      priority: "medium"
    },
    {
      title: "Death as a Design Principle for Life",
      description: "How awareness of mortality can serve as a compass for making better decisions and living more authentically.",
      status: "Ongoing Reflection",
      lastUpdated: "December 2024",
      tags: ["Philosophy", "Death", "Life Design"],
      priority: "high"
    },
    {
      title: "The Loneliness Epidemic and the Future of Human Connection",
      description: "Understanding why we're more connected yet more lonely than ever, and what this means for the future of human relationships.",
      status: "Research Phase",
      lastUpdated: "November 2024",
      tags: ["Society", "Relationships", "Mental Health"],
      priority: "medium"
    },
    {
      title: "The Paradox of Choice in Modern Career Paths",
      description: "How having infinite career options might be making us less satisfied and more anxious about our professional choices.",
      status: "Data Collection",
      lastUpdated: "November 2024",
      tags: ["Career", "Psychology", "Modern Life"],
      priority: "low"
    },
    {
      title: "Vulnerability as a Competitive Advantage",
      description: "Exploring how authenticity and openness about our struggles might be the key to deeper connections and better leadership.",
      status: "Personal Experimentation",
      lastUpdated: "October 2024",
      tags: ["Leadership", "Authenticity", "Relationships"],
      priority: "medium"
    }
  ]

  const futureIdeas = [
    "The role of ritual and ceremony in secular life",
    "How to maintain wonder in an age of instant answers",
    "The ethics of genetic enhancement and human optimization",
    "Building communities in an increasingly individualistic world",
    "The psychology of hope in uncertain times",
    "What we can learn from ancient wisdom in modern contexts"
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active Research': return 'bg-blue-100 text-blue-800'
      case 'Early Exploration': return 'bg-purple-100 text-purple-800'
      case 'Ongoing Reflection': return 'bg-indigo-100 text-indigo-800'
      case 'Research Phase': return 'bg-teal-100 text-teal-800'
      case 'Data Collection': return 'bg-orange-100 text-orange-800'
      case 'Personal Experimentation': return 'bg-pink-100 text-pink-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb size={24} className="text-yellow-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ideas I'm Exploring
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A glimpse into my intellectual workshop—the questions that keep me awake at night, 
              the concepts I'm wrestling with, and the ideas that might become future reflections. 
              This is where curiosity lives and thoughts evolve.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12">
            <div className="flex items-center space-x-3 mb-6">
              <Brain size={24} className="text-gray-900" />
              <h2 className="text-2xl font-bold text-gray-900">My Exploration Philosophy</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                I believe the best ideas emerge not from having all the answers, but from asking better questions. 
                This page is my commitment to intellectual transparency—showing not just what I think, but how 
                I think, and what I'm still figuring out.
              </p>
              <p className="mb-6">
                Each idea here represents a journey of discovery. Some will become full essays, others might 
                evolve into entirely different questions, and some may be abandoned altogether. That's the 
                nature of genuine exploration—you never know where the path will lead.
              </p>
              <p>
                I share these works-in-progress because I believe thinking is better done together. If any 
                of these ideas resonate with you, challenge you, or spark your own questions, I'd love to 
                hear your thoughts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Ideas */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Currently Exploring
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentIdeas.map((idea, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                      {idea.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(idea.status)}`}>
                        {idea.status}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(idea.priority)}`}>
                        {idea.priority} priority
                      </span>
                    </div>
                  </div>
                  {idea.priority === 'high' && (
                    <Star size={20} className="text-yellow-500 flex-shrink-0 ml-2" />
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {idea.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {idea.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>Updated {idea.lastUpdated}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                    Follow Progress
                    <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Ideas */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            On the Horizon
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-600 mb-6 text-center">
              Ideas waiting in the wings—questions that have caught my attention but haven't yet 
              demanded deep exploration. These might become tomorrow's obsessions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {futureIdeas.map((idea, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded border border-gray-200">
                  <Lightbulb size={16} className="text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700">{idea}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 text-center">
            <MessageCircle size={48} className="text-gray-900 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Think With Me
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Do any of these ideas intrigue you? Do you have insights, resources, or questions 
              that might help me explore them further? The best thinking happens in conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
                Share Your Thoughts
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Suggest New Ideas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Updates CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Follow the Journey
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get updates when these ideas evolve into full reflections, or when new questions 
            capture my curiosity. Join the exploration.
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
      </section>
    </div>
  )
}

export default Ideas

