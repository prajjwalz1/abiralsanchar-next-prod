"use client";

import { HomeSection } from "@/dynamic-imports/components";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";

export default function Home() {
  return (
    <ReduxProvider>
      <HomeSection />
    </ReduxProvider>
  );
}
