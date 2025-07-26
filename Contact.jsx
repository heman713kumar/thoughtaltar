import { useState } from 'react'
import { Mail, MessageCircle, Send, Twitter, Linkedin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I believe the best conversations happen when minds meet with curiosity and openness. 
              Whether you want to share your thoughts, challenge my ideas, or simply say hello, I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="What's on your mind?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                    placeholder="Share your thoughts, questions, or reflections..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">hemant@thoughtaltar.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Clock size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Response Time</p>
                      <p className="text-gray-600">Usually within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Connect on Social</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Twitter size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Twitter</p>
                      <p className="text-sm">@hemantkumar</p>
                    </div>
                  </a>
                  
                  <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Linkedin size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm">Hemant Kumar</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start space-x-2">
                    <MessageCircle size={16} className="mt-1 text-gray-400" />
                    <span>Thoughtful responses to genuine questions and reflections</span>
                  </p>
                  <p className="flex items-start space-x-2">
                    <MessageCircle size={16} className="mt-1 text-gray-400" />
                    <span>Open dialogue about philosophical and life questions</span>
                  </p>
                  <p className="flex items-start space-x-2">
                    <MessageCircle size={16} className="mt-1 text-gray-400" />
                    <span>Respectful engagement with different perspectives</span>
                  </p>
                  <p className="flex items-start space-x-2">
                    <MessageCircle size={16} className="mt-1 text-gray-400" />
                    <span>Honest conversations about the human experience</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you respond to all messages?
              </h3>
              <p className="text-gray-600">
                I try to respond to every thoughtful message I receive. While I may not be able to engage in lengthy 
                back-and-forth conversations due to time constraints, I do read everything and appreciate every 
                person who takes the time to reach out.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I suggest topics for future posts?
              </h3>
              <p className="text-gray-600">
                Absolutely! I'm always interested in exploring new questions and perspectives. If there's a topic 
                you'd like me to reflect on, or if you have a question that's been keeping you up at night, 
                please share it. Many of my best posts have come from reader suggestions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are you available for speaking engagements or collaborations?
              </h3>
              <p className="text-gray-600">
                I'm open to meaningful collaborations and speaking opportunities that align with the mission of 
                The Thought Altar. If you have something in mind, please reach out with details about your 
                project or event.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How can I support The Thought Altar?
              </h3>
              <p className="text-gray-600">
                The best way to support this work is by engaging thoughtfully with the content, sharing posts 
                that resonate with you, and contributing to the conversations. Your genuine engagement and 
                feedback help create the kind of community I'm hoping to build.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

