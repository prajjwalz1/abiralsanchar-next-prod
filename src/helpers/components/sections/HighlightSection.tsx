import { MiniUpdatesSection, PosterImage } from "@/dynamic-imports/components";

export default function HighlightSection() {
  return (
    <div className="relative w-full py-5 h-full grid grid-cols-3 gap-6">
      <PosterImage
        title="गोरहा र बालापन"
        time="४९ मिनेट अगाडि"
        isTransparent
        isZoomable
      />

      <MiniUpdatesSection />

      <div className="bg-green-400">dfMini</div>
      {/* <CustomImage
        src="https://www.onlinekhabar.com/wp-content/uploads/2024/01/taapsee-pannu-bhumi-pednekar-in-saand-ki-aankh-main.jpg"
        alt="some alt"
        divCss="absolute "
        width={100}
        height={100}
      /> */}
    </div>
  );
}
