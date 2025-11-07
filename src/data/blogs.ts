// src/data/blogs.ts
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  fullContent: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Collaborative Music Production",
    description:
      "Discover how modern technology is revolutionizing the way musicians collaborate across the globe, breaking down geographical barriers and creating new opportunities.",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    fullContent:
      "In today's digital age, music production has transformed dramatically. Artists no longer need to be in the same studio, or even the same country, to create incredible music together. Cloud-based platforms, real-time collaboration tools, and high-speed internet have made it possible for musicians to work together seamlessly. This shift has opened up unprecedented opportunities for creativity, allowing diverse talents from different cultures and backgrounds to merge their unique styles. The result is a rich, global tapestry of sound that wouldn't have been possible just a decade ago.",
  },
  {
    id: 2,
    title: "Building Your Home Studio: Essential Tips",
    description:
      "Learn the fundamentals of setting up a professional-quality home recording studio without breaking the bank. From acoustic treatment to essential gear.",
    date: "February 28, 2024",
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=1200&q=80",
    fullContent:
      "Setting up a home studio doesn't have to cost a fortune. The key is understanding what equipment is truly essential and what can wait. Start with a good audio interface, a quality microphone, and reliable monitoring headphones or speakers. Acoustic treatment is often overlooked but crucial — simple DIY solutions like bass traps and absorption panels can dramatically improve your recordings. Remember, many legendary albums were recorded in modest home setups!",
  },
  {
    id: 3,
    title: "Understanding Music Rights and Royalties",
    description:
      "A comprehensive guide to navigating the complex world of music rights, publishing, and royalty collection for independent artists.",
    date: "February 10, 2024",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    fullContent:
      "Music rights and royalties can seem overwhelming, but understanding them is crucial for any serious musician. There are multiple types of royalties: mechanical, performance, synchronization, and print music royalties. Each comes from different sources and requires different collection methods. As an independent artist, you need to register with PROs to collect performance royalties. Educate yourself and take control of your music career.",
  },
];
