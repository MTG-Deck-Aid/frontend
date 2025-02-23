import Image from "next/image";
import './globals.css'
import {auth0} from '@/lib/auth0'


export default async function Home() {
  const session = await auth0.getSession();

  if(!session){
    return(
      <main>
        <a href="/auth/login?screen_hint=signup">
          <button>Sign up</button>
        </a>
        <a href="/auth/login">
          <button>Log in</button>
        </a>
      </main>
    );
  }
  return (
    <main>
      <h1>Welcome, {session.user.name}!</h1>
      <p>
        <a href="/auth/logout">
          <button>Log out</button>
        </a>
      </p>
    </main>
    /*<div className="grid grid-rows-2 grid-cols-1 min-h-screen m-8 mb-20 p-8 font-[family-name:var(--font-karantina)]">
      <main className="grid grid-cols-3 gap-4 content-evenly flex-col row-start-1 items-center sm:items-start">
        <div className = "flex flex-auto items-center col-start-2 row-start-1">
          <Image
           src="/logo-dark.png"
           width={485}
           height={485}
           alt="Mystic Tuner logo"
           className="w-auto, h-auto self-center"
          />
        </div>
        <div className="flex col-span-3 auto-rows-min items-center text-[64px] 
        text-gray-800 before:flex-1 before:border-t-8 before:border-gray-200 before:me-12 after:flex-1 
          after:border-t-8 after:border-gray-200 after:ms-12">Mystic Tuner
        </div>
        <div className="flex felx-auto items-center justify-center col-start-2">
          <p className="">Button to Be</p>
        </div>
        <div className="flex col-span-3">
          Decklist
        </div>
      </main>
    </div>*/
  );
}
