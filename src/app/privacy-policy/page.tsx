import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { getPrivacyPolicy } from "@/app/blog/utils";
import MainNav from "@/components/main-nav";
import CustomMdx from "@/components/mdx";

export const metadata: Metadata = {
  title: "Privary Policy",
  description: "This page explains the Privacy Policy of the site.",
};

export default function Page() {
  const post = getPrivacyPolicy().find(
    (post) => post.slug === "privacy-policy"
  );

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <MainNav />
      <article className="prose">
        <CustomMdx source={post.content} />
      </article>
    </Container>
  );
}
