import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const BlogCard = ({ title, excerpt, date, readTime, category, slug, featured = false }) => {
  return (
    <article className={`group cursor-pointer ${featured ? 'md:col-span-2' : ''}`}>
      <div className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg overflow-hidden">
        {/* Category Badge */}
        <div className="p-6 pb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <h3 className={`font-bold text-gray-900 group-hover:text-gray-700 transition-colors mb-3 ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}>
            {title}
          </h3>
          
          <p className={`text-gray-600 leading-relaxed mb-4 ${
            featured ? 'text-lg' : 'text-base'
          }`}>
            {excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{readTime} min read</span>
              </div>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-600 hover:text-gray-900 group-hover:translate-x-1 transition-all"
            >
              Read More
              <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogCard

