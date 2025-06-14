import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CustomMdx from "@/components/mdx";
import MainNav from "@/components/main-nav";
import { getTermsOfServices } from "@/app/blog/utils";

export const metadata: Metadata = {
  title: "Terms Of Services",
  description: "This page explains the terms of use of the site.",
};

export default function Page() {
  const post = getTermsOfServices().find(
    (post) => post.slug === "terms-of-services"
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
