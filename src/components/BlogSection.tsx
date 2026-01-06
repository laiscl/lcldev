const posts = [
  {
    id: 1,
    title: "Building Modern React Applications",
    excerpt: "Learn the best practices for building scalable React apps with TypeScript and modern tooling.",
    date: "Dec 15, 2024",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "UI/UX Design Principles",
    excerpt: "Essential design principles every developer should know to create better user experiences.",
    date: "Dec 10, 2024",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging technologies and trends that will shape the future of web development.",
    date: "Dec 5, 2024",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="animate-fade-in">
      <h2 className="section-title">Blog</h2>
      <div className="section-underline" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article 
            key={post.id}
            className="bg-secondary/30 rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-primary font-medium">{post.category}</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
