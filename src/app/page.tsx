import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/shared/theme-toggle";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
   <div className="p-5">
    <div className="w-100 flex gap-x-5 justify-end ">
      <UserButton/>
      <ThemeToggle/>
    </div>
    <h1 className="font-bold text-blue-500 font-barlow">HOME PAGE</h1>
   </div>
  );
}
