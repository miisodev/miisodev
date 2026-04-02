import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  slug?: string;
}

export interface Post extends PostMetadata {
  content: string;
}

// Get all post slugs
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const files = await readdir(postsDirectory);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(".mdx", ""));
  } catch {
    return [];
  }
}

// Get post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContent = await readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || "",
      content,
    };
  } catch {
    return null;
  }
}

// Get all posts sorted by date
export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug))
  );

  return posts
    .filter((post): post is Post => post !== null)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

// Get latest posts
export async function getLatestPosts(count: number = 3): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.slice(0, count);
}

// Format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Calculate read time (approximate)
export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
