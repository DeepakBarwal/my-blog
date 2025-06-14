import React from "react";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { highlight } from "sugar-high";

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // replaces spaces with -
    .replace(/&/g, "-and-") // replaces & with -and-
    .replace(/\-\-+/g, "-"); // replaces multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
}

function RoundedImage(props: ImageProps) {
  return <Image {...props} alt={props.alt} className="rounded-lg" />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomLink(props: any) {
  const href = props.href;

  if (href.toString().startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Code({ children, ...props }: any) {
  const codeHtml = highlight(children);

  return <code dangerouslySetInnerHTML={{ __html: codeHtml }} {...props} />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Blockquote(props: any) {
  return (
    <blockquote
      className="bg-blue-200 dark:bg-blue-950 dark:opacity-30 opacity-30 p-4 rounded-md blockquote"
      {...props}
    />
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Table({ data }: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const headers = data.headers.map((header: any, index: number) => (
    <th key={index}>{header}</th>
  ));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rows = data.rows.map((cell: any, cellIndex: number) => (
    <td key={cellIndex}>{cell}</td>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  blockquote: Blockquote,
  Table,
};

export default function CustomMdx(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
