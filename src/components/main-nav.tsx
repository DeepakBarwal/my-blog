"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

const posts: { title: string; href: string; description: string }[] = [
  {
    title: "React",
    href: "/blog/react",
    description: "Learn react and next",
  },
  {
    title: "React",
    href: "/blog/react",
    description: "Learn react and next",
  },
  {
    title: "React",
    href: "/blog/react",
    description: "Learn react and next",
  },
  {
    title: "React",
    href: "/blog/react",
    description: "Learn react and next",
  },
  {
    title: "React",
    href: "/blog/react",
    description: "Learn react and next",
  },
];

export default function MainNav() {
  return (
    <div
      className={cn(
        "flex flex-col items-strt justify-start md:flex-row md:items-center md:justify-between pt-10 z-50"
      )}
    >
      <Link href={"/"}>
        <div className="flex items-center justify-between w-48">
          <Icons.logo className="h-6 w-6" />
          <p>Deepak Barwal&apos;s Blog</p>
        </div>
      </Link>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {posts.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={post.href}
                  >
                    {post.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
