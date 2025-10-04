import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/shared/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
   <div className="p-5">
    <div className="w-100 flex justify-end">
      <ThemeToggle/>
    </div>
    <h1 className="font-bold text-blue-500 font-barlow">Hello, Next.js 13!</h1>
      <Button variant='destructive'>Click </Button>
   </div>
  );
}
