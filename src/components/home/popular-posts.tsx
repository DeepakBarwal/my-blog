import { popularPosts } from "@/lib/placeholder-data";
import { Icons } from "@/components/icons";

export default function PopularPosts() {
  return (
    <ul className="overflow-auto">
      {popularPosts.map((post) => (
        <li
          className="flex items-center gap-2 group cursor-pointer py-2"
          key={post.title}
        >
          <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
          <p>{post.title}</p>
        </li>
      ))}
    </ul>
  );
}
