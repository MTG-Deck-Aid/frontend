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
    <html lang="en" className="dark">
      <body>
        <Header />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
