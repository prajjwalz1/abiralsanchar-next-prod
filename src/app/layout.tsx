import "@/assets/css/globals.css";
import * as styles from "@/assets/css/styles";
import { RootLayoutSchema } from "@/utils/schemas/CommonSchema";
import { RootFooter, RootHeader } from "@/dynamic-imports/components";
import { RootLayoutMetadata } from "@/utils/seo/metadatas";
import { Metadata } from "next";

// Styles
const { parent } = styles.root_layout_css;

// SEO Metadata for Home
export const metadata: Metadata = RootLayoutMetadata;

const RootLayout: React.FC<RootLayoutSchema> = (props) => {
  // Props
  const { children } = props;

  return (
    <html lang="en">
      <body style={parent}>
        <div className="min-w-screen min-h-screen max-w-[2000px] mx-auto grid grid-rows-[160px_minmax(calc(100vh-160px),auto)_auto] font-normal tracking-wider">
          <RootHeader /> {/* Height of header = 160px */}
          <main>{children}</main>
          <RootFooter />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
