//styling
import "./globals.css";

//providers

import { Providers } from "./providers";
//components
import Header from "@/components/header";


export const metadata = {
  title: "Mystic Tuner",
  description: "GPT Aided Deck Tuner",
};

export default async function RootLayout({ children }) {
   return (
    <html lang="en">
      <body className="font-karantina">
        <Header />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
