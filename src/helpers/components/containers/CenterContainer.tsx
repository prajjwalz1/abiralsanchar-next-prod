import { ChildrenSchema } from "@/utils/schemas/CommonSchema";

export default function CenterContainer({ children }: ChildrenSchema) {
  return (
    <div className="w-full h-full grid place-items-center bg-white shadow-md">
      {children}
    </div>
  );
}
