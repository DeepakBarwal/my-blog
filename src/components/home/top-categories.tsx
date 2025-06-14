"use client";
import Link from "next/link";
import useSwr from "swr";
import { Button } from "@/components/ui/button";
import { fetcher, fetchUrl } from "@/lib/utils";
import TopCategoriesSkeleton from "../skeleton/top-categories-skeleton";

export default function TopCategories() {
  const { data, error, isLoading } = useSwr(fetchUrl, fetcher);

  if (error) {
    return <div>Failed to load</div>;
  }

  if (isLoading) {
    return <TopCategoriesSkeleton />;
  }

  const uniqueCategories = [...new Set(data?.map((item) => item.category))];

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2">
      {uniqueCategories?.map((category) => (
        <Button
          key={category}
          variant={"secondary"}
          className="hover:scale-110 transition-all"
          asChild
        >
          <Link href={`/blog/${category}`}>{category}</Link>
        </Button>
      ))}
    </div>
  );
}
