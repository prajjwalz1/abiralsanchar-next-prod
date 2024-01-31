// Assets
import { warning_button } from "@/assets/colors";
import * as fonts from "@/assets/fonts";

import { Button, MediaCard } from "@/dynamic-imports/components";

export default function MiniUpdatesSection() {
  const demoProps = {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
  };

  // Css
  const btnCss = `${warning_button} px-5 py-2 w-full h-full flex justify-center items-center gap-2 rounded-md`;
  return (
    <div className="flex flex-col justify-between gap-8 rounded-sm">
      <div className="flex flex-col gap-8 rounded-sm">
        <MediaCard {...demoProps} />
        <MediaCard {...demoProps} />
        <MediaCard {...demoProps} />
        <MediaCard {...demoProps} />
      </div>
      <Button
        title="२४ घन्टाका ताजा अपडेट"
        font={fonts.getFont("paragraph")}
        css={btnCss}
        isClock
      />
    </div>
  );
}
