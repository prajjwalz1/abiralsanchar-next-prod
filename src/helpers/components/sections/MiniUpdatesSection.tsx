import { MediaCard } from "@/dynamic-imports/components";

export default function MiniUpdatesSection() {
  const demoProps = {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
  };
  return (
    <div className="flex flex-col gap-8 rounded-md">
      <MediaCard {...demoProps} />
      <MediaCard {...demoProps} />
      <MediaCard {...demoProps} />
      <MediaCard {...demoProps} />
    </div>
  );
}
