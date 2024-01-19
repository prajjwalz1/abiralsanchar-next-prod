import { RootLayoutSchema } from "@/utils/schemas/CommonSchema";
import { rootLayoutCss } from "@/assets/css/styles/common";
import { RootFooter, RootHeader } from "@/dynamic-imports/components";
import "@/styles/globals.css";

// Styles
const { parent } = rootLayoutCss;

const RootLayout: React.FC<RootLayoutSchema> = (props) => {
  // Props
  const { children } = props;

  return (
    <html lang="en">
      <body style={parent}>
        <div className="min-w-screen min-h-screen max-w-[2000px] mx-auto grid grid-rows-[152px_minmax(calc(100vh-144px),auto)_496px] tracking-wider">
          <RootHeader />
          <main>{children}</main>
          <RootFooter />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
