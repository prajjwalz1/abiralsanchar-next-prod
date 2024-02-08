"use client";

// Custom Imports
import { ReduxProvider } from "@/dynamic-imports/redux-app";
import { AuthLayout } from "@/dynamic-imports/views";

export default function LoginPage() {
  return (
    <AuthLayout>
      <ReduxProvider>LoginPage</ReduxProvider>;
    </AuthLayout>
  );
}
