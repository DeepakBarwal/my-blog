import LatestPosts from "@/components/home/latest-posts";
import MainNav from "@/components/ui/main-nav";

export default function Home() {
  return (
    <>
      <MainNav />
      <main>
        <div>
          <LatestPosts />
        </div>
      </main>
    </>
  );
}
