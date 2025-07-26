import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function BlogSection() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  if (isLoading) {
    return (
      <section id="blog" className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'beginner':
        return 'bg-primary/10 text-primary';
      case 'intermediate':
        return 'bg-secondary/10 text-secondary';
      case 'technology':
        return 'bg-accent/10 text-accent';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text-dark mb-4">
            Learning Resources & Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover articles, tips, and insights to enhance your abacus learning journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts?.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              data-testid={`blog-post-${post.slug}`}
            >
              <img 
                src={post.imageUrl}
                alt={post.title} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`img-blog-${post.slug}`}
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-text-dark mb-3 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <button 
                  className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200 flex items-center"
                  data-testid={`link-read-more-${post.slug}`}
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-secondary to-accent text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200 px-8 py-4 text-lg"
            data-testid="button-view-all-articles"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
