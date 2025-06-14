"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function MainNav({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-strt justify-start md:flex-row md:items-center md:justify-between pt-10 z-50",
        className
      )}
    >
      <Link href={"/"}>
        <div className="flex items-center justify-between w-fit gap-2">
          <Icons.logo className="h-6 w-6" />
          <p>Deepak Barwal&apos;s Blog</p>
        </div>
      </Link>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
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
      <div className="flex items-center justify-between w-20">
        <ModeToggle />
        <Link href={"/rss"}>
          <Icons.rss className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
