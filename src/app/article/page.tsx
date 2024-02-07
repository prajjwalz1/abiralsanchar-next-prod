"use client";

// Default imports
import { ArticleSection } from "@/dynamic-imports/components";

// Custom imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";

export default function Article(props: any) {
  const { searchParams } = props;

  return (
    <ReduxProvider>
      <ArticleSection {...searchParams} />
    </ReduxProvider>
  );
}
