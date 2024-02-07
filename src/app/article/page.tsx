"use client";

// Default imports
import { ArticleSection } from "@/dynamic-imports/components";

// Custom imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import { ArticleSectionSchema } from "@/utils/schemas/ComponentsSchema";
import { useParams, useRouter, useSearchParams } from "next/navigation";

export default function Article(props: any) {
  // Hooks

  const { searchParams } = props;

  return (
    <ReduxProvider>
      <ArticleSection {...searchParams} />
    </ReduxProvider>
  );
}
