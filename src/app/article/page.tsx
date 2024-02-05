"use client";

import { divider } from "@/assets/colors";
import { padding_x } from "@/assets/css/styles";
// Assets

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";

export default function Home() {
  return (
    <ReduxProvider>
      <div className={`${padding_x} ${divider} divide-y`}>Individual Page</div>
    </ReduxProvider>
  );
}
