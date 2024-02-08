"use client";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import DashboardLayout from "@/views/layouts/DashboardLayout";

export default function DashboardArticlePage() {
  return (
    <ReduxProvider>
      <DashboardLayout>DashboardArticlePage</DashboardLayout>
    </ReduxProvider>
  );
}
