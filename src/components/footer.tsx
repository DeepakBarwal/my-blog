"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createSubscriber } from "@/lib/actions";
import useSWR from "swr";
import { fetcher, fetchUrl } from "@/lib/utils";
import TopCategoriesSkeleton from "./skeleton/top-categories-skeleton";

const initialState = {
  message: "",
  errros: {},
};

export default function Footer() {
  const [state, dispatch] = useFormState(createSubscriber, initialState);

  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  if (error) {
    return <div>Failed to load</div>;
  }

  if (isLoading) {
    return <TopCategoriesSkeleton />;
  }

  const uniqueCategories = [...new Set(data?.map((item) => item.category))];


  return (
    <footer className="bg-gray-100 py-8 dark:bg-gray-800 mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="text-md font-semibold">
                Deepak Barwal&apos;s Blog
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Stay Up to Date with the latest news and insights from our blog
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/__aizen_sama"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <Icons.twitter className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
              <a
                href="https://github.com/DeepakBarwal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <Icons.gitHub className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Blog</h3>
            <ul className="space-y-2 text-sm">
              {uniqueCategories?.slice(0,4)?.map((category) => (
                <li key={category}>
                  <Link
                    href={`/blog/${category}`}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:deepakbarwal98@gmail.com"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="/terms-of-services"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">Newsletter</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Subscribe to our newsletter to stay up-to-date with the latest
              news and updates.
            </p>
            <form action={dispatch}>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  defaultValue={""}
                  aria-describedby="email-error"
                />
                <Button>Subscribe</Button>
              </div>
              <div
                id="email-error"
                aria-label="polite"
                aria-atomic="true"
                className="px-1"
              >
                {state?.errors?.email &&
                  state.errors.email.map((error: string) => (
                    <p key={error} className="text-xs text-red-500">
                      {error}
                    </p>
                  ))}
                {!state?.errors?.email && (
                  <p className="text-xs text-green-500">{state?.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
          &copy;
          {new Date().getFullYear()} Deepak Barwal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
