import { Metadata } from "next";
import { RootLayoutMetadata } from "@/utils/seo/metadatas";

// SEO Metadata for Home
export const metadata: Metadata = RootLayoutMetadata;

export default function Home() {
  return <>Sample page</>;
}
