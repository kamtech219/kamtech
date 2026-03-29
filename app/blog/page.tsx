import { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Le Blog de l'IA pour PME | KAMTECH",
  description: "Explorez nos dernières analyses sur l'automatisation intelligente et comment elle transforme les PME d'aujourd'hui.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
