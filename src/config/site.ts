type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Deepak Barwal's Blog",
  description:
    "An open source technical blog platform built with Next.js, MDX & shadcn/ui",
  url: "https://blogs.deepakbarwal.com/",
  ogImage: "https://blogs.deepakbarwal.com/og",
  links: {
    twitter: "https://x.com/__aizen_sama",
    github: "https://github.com/DeepakBarwal",
  },
};
