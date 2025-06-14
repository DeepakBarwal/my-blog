import { Metadata } from "next";
import Container from "@/components/Container";
import Header from "@/components/Header";
import MainNav from "@/components/main-nav";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
          <Header>
            <h1 className="title font-semibold text-2xl tracking-tighter mt-4 capitalize">
              About Me
            </h1>
          </Header>
        </Container>
      </div>
      <Container>
        <div className="container max-w-6xl py-6 lg:py-10">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="min-w-48 max-w-48 flex flex-col gap-2">
              <p className="text-muted-foreground text-center break-words">
                Software Developer
              </p>
            </div>
            <p className="text-muted-foreground text-lg py-4">
              Full stack web developer who thrives on building sleek,
              high-performance web applications from the ground up. With a
              passion for both front-end flair and back-end brilliance, I craft
              seamless user experiences powered by robust, scalable systems. My
              toolbox is loaded with modern tech—think JavaScript, React,
              Node.js, and databases like MongoDB and PostgreSQL—paired with a
              knack for solving complex problems with clean, efficient code.
              Whether it&apos;s pixel-perfect UI, lightning-fast APIs, or
              bulletproof infrastructure, I bring creativity, grit, and a
              get-it-done attitude to every project. I stay ahead of the curve,
              constantly learning and adapting to the latest trends in web dev
              to deliver cutting-edge solutions. Ready to build something epic?
              Let&apos;s make the web a more awesome place together!
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
