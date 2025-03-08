import Image from "next/image";
import Link from "next/link";
import './globals.css';
import UserDecks from "@/components/userDecks";
import CustomLine from "@/components/customLine";

export default async function Home() {
  const logoWidth = 350;
  const logoHeight = logoWidth;

  return (
    <div className="grid grid-rows-2 grid-cols-1 min-h-screen m-8 mb-20 p-8">
      <main className="grid grid-cols-3 gap-4 content-evenly flex-col row-start-1 items-center sm:items-start">
        <div className = "flex justify-center items-center col-start-2 row-start-1">
          <Image
           src="/logo-dark.png"
           width={logoWidth}
           height={logoHeight}
           alt="Mystic Tuner logo"
           className="self-center"
          />
        </div>
        <div className="flex flex-auto items-center justify-center col-start-2">
          <Link href="/import-new-deck" className="flex rounded-3xl bg-sky-blue hover:bg-blue text-dark-grey m-2 p-2 w-60 h-20 justify-center items-center 
          text-5xl font-body no-underline">
            New Deck
          </Link>
        </div>
        <div className="flex col-span-3 flex-wrap">
          <UserDecks/>
        </div>
      </main>
    </div>
  );
}