import { Home } from "lucide-react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-4">
      <div className="animate-pulse">
        <Home className="w-10 h-10 text-accent" />
      </div>
      <span className="font-playfair text-xl font-bold tracking-tight text-primary">
        LEON<span className="font-normal"> HOME</span>
      </span>
      <div className="w-32 h-1 bg-gray-light rounded-full overflow-hidden mt-2">
        <div className="h-full bg-accent rounded-full animate-[loader_1.2s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}
