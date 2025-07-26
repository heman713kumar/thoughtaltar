import { Heart, Mail, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">The Thought Altar</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A digital sanctuary for deep reflection, intellectual dialogue, and the pursuit of truth through writing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Explore</h3>
            <div className="space-y-2">
              <a href="/blog" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Latest Posts
              </a>
              <a href="/about" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                About Hemant
              </a>
              <a href="/letters" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Letters to Strangers
              </a>
              <a href="/ideas" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Ideas I'm Exploring
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Connect</h3>
            <div className="flex space-x-4">
              <a href="mailto:hemant@thoughtaltar.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              Join the conversation and share your thoughts.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 The Thought Altar. Made with <Heart size={16} className="inline text-red-500" /> for thoughtful minds.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

