import { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";
import BlogPostClient from "./BlogPostClient";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article non trouvé | KAMTECH",
    };
  }

  const absoluteImageUrl = post.image.startsWith("http")
    ? post.image
    : `https://kamtech.online${post.image}`;

  return {
    title: `${post.title} | KAMTECH IA`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://kamtech.online/blog/${post.slug}`,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [absoluteImageUrl],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  return <BlogPostClient slug={params.slug} />;
}
