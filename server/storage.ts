import { type User, type InsertUser, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.initializeBlogPosts();
  }

  private initializeBlogPosts() {
    const posts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "Getting Started with Abacus: A Parent's Guide",
        excerpt: "Learn how to introduce your child to abacus learning and create a supportive practice environment at home.",
        content: "Comprehensive guide content here...",
        category: "Beginner",
        readTime: "5 min read",
        imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
        slug: "getting-started-with-abacus-parents-guide",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "10 Advanced Techniques for Mental Calculation",
        excerpt: "Master these proven techniques to boost your mental math speed and accuracy beyond basic abacus skills.",
        content: "Advanced techniques content here...",
        category: "Intermediate",
        readTime: "7 min read",
        imageUrl: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
        slug: "advanced-techniques-mental-calculation",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "The Future of Abacus Learning: Digital vs Traditional",
        excerpt: "Explore how modern technology enhances traditional abacus learning methods for better engagement.",
        content: "Future of learning content here...",
        category: "Technology",
        readTime: "6 min read",
        imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
        slug: "future-abacus-learning-digital-traditional",
        createdAt: new Date(),
      },
    ];

    posts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug
    );
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = { 
      ...insertPost, 
      id, 
      createdAt: new Date() 
    };
    this.blogPosts.set(id, post);
    return post;
  }
}

export const storage = new MemStorage();
