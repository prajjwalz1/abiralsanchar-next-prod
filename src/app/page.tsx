"use client";

import { Metadata } from "next";
import { RootLayoutMetadata } from "@/utils/seo/metadatas";
import TestOne from "@/helpers/components-extras/home/TestOne";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";

export default function Home() {
  return (
    <ReduxProvider>
      <TestOne />
    </ReduxProvider>
  );
}
