import { BookOpen, Briefcase, GraduationCap, Heart, Lightbulb, Users } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Hemant Kumar
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A multidisciplinary thinker exploring life's complexities through the lens of engineering, business, and philosophy.
            </p>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center mb-16">
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center">
              <Users size={64} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            My Journey
          </h2>
          
          <div className="space-y-12">
            {/* Engineering Background */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <GraduationCap size={24} className="text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Engineering Foundation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  My journey began in the world of engineering, where I learned to approach problems systematically, 
                  think critically, and build solutions from the ground up. The analytical mindset and problem-solving 
                  skills I developed during this phase continue to shape how I approach life's complexities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Engineering taught me that every complex system can be understood by breaking it down into 
                  fundamental components—a principle I now apply to understanding human nature, relationships, 
                  and the intricate workings of society.
                </p>
              </div>
            </div>

            {/* Business Experience */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Briefcase size={24} className="text-green-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Business Insights</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Three years in the business world opened my eyes to the fascinating dynamics of human ambition, 
                  organizational behavior, and the delicate balance between profit and purpose. I witnessed firsthand 
                  how decisions are made, how power operates, and how individual dreams intersect with corporate realities.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This experience taught me about the cost of success, the nature of competition, and the importance 
                  of maintaining one's authenticity in environments that often reward conformity. These lessons became 
                  the foundation for many of my reflections on modern life and work.
                </p>
              </div>
            </div>

            {/* Philosophical Exploration */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <BookOpen size={24} className="text-purple-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Philosophical Quest</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Philosophy became my refuge and my compass. In the ancient wisdom of Stoics, the questioning 
                  spirit of Socrates, and the existential insights of modern thinkers, I found tools to navigate 
                  life's uncertainties. Philosophy taught me that the most important questions often don't have 
                  simple answers.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This philosophical foundation helps me approach topics like death, meaning, relationships, and 
                  self-doubt not as problems to be solved, but as mysteries to be explored with curiosity and humility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why I Write
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              Writing, for me, is not just expression—it's exploration. Each piece I write is an attempt to 
              understand something better, to challenge my own assumptions, and to discover new perspectives 
              I hadn't considered before.
            </p>
            
            <p className="leading-relaxed mb-6">
              In our fast-paced world, we're often pressured to have quick opinions and instant solutions. 
              But the most meaningful questions—about purpose, relationships, mortality, and what it means 
              to live well—deserve deeper consideration. They require us to sit with uncertainty, to embrace 
              the discomfort of not knowing, and to find wisdom in the process of questioning itself.
            </p>
            
            <p className="leading-relaxed mb-6">
              Through this blog, I hope to create a space where such exploration is not only welcomed but 
              celebrated. A place where we can think together, challenge each other gently, and grow through 
              the beautiful messiness of human inquiry.
            </p>
            
            <p className="leading-relaxed">
              My background in engineering gives me structure, my business experience provides practical insight, 
              and my philosophical studies offer depth. But most importantly, my humanity—with all its doubts, 
              fears, and hopes—gives me the courage to write honestly about what it means to be alive in this 
              complex world.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              My Vision
            </h2>
            <p className="text-xl text-gray-600">
              A world where individuals think deeply, challenge gently, and grow collectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb size={20} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intellectual Curiosity</h3>
              <p className="text-gray-600">
                Fostering a community where questions are more valuable than answers, and where the journey 
                of understanding is celebrated as much as any destination.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Heart size={20} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentic Connection</h3>
              <p className="text-gray-600">
                Creating genuine dialogue where vulnerability is strength, honesty is valued over performance, 
                and different perspectives are welcomed with open minds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Think Together
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I believe the best insights emerge through dialogue. Whether you agree, disagree, or have 
            questions that keep you awake at night, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
              Start a Conversation
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Read My Latest Thoughts
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

