"use client";

import Link from "next/link";
import useSwr from "swr";
import { Icons } from "@/components/icons";
import { fetcher, fetchUrl } from "@/lib/utils";
import PopularPostsSkeleton from "@/components/skeleton/popular-posts-skeleton";

export default function PopularPosts() {
  const { data, error, isLoading } = useSwr(fetchUrl, fetcher);

  if (error) {
    return <div>Failed to load</div>;
  }

  if (isLoading) {
    return <PopularPostsSkeleton />;
  }

  return (
    <ul className="overflow-auto">
      {data?.map((post: { category: string; slug: string; title: string }) => (
        <Link key={post.title} href={`/blog/${post.category}/${post.slug}`}>
          <li className="flex items-center gap-2 group cursor-pointer py-2">
            <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
