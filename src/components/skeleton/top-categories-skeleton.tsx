import { Skeleton } from "@/components/ui/skeleton";

export default function TopCategoriesSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-4 w-[300px]" />
    </div>
  );
}
