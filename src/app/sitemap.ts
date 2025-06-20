import { getBlogPosts } from "@/app/blog/utils";
import { POSTS } from "@/lib/constants";

export const baseUrl = "https://blogs.deepakbarwal.com";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = POSTS.map((route) => ({
    url: `${baseUrl}${route.href}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...blogs, ...routes];
}
