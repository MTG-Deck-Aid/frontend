//fonts and styling
import { Geist, Geist_Mono } from "next/font/google";
import { Karantina } from "next/font/google";
import "./globals.css";
//auth0
//the auth0Provider is responsible for giving the program the authentication details
import { Auth0Provider } from "@auth0/nextjs-auth0"; //allows child pages to access user object via useUser() hook
import { auth0 } from "@/lib/auth0";
//components
import Header from '@/components/header'



const karantinaLight = Karantina({
  variable: "--font-karantina-light",
  subsets: ["latin"],
  weight: '300',
});

const karantinaNormal = Karantina({
  variable: "--font-karantina",
  subsets: ["latin"],
  weight: '400',
})

export const metadata = {
  title: "Mystic Tuner",
  description: "GPT Aided Deck Tuner",
};

export default async function RootLayout({ children }) {
  const session = await auth0.getSession();

  return (
    <html lang="en">
      <body className='font-karantina'>
        <Header/>
        <Auth0Provider user={session?.user}>
        {children}
        </Auth0Provider>
      </body>
    </html>
  );
}
