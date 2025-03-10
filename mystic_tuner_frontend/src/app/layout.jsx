//styling
import "./globals.css";

//providers
import { Providers } from "./providers";
//components
import Header from "@/components/header";


export const metadata = {
  title: "Mystic Tuner",
  description: "GPT Aided Deck Tuner",
  viewport: "width=device-width, initial_scale=1",
};

export default async function RootLayout({ children }) {
  /**
   * Root layout will wrap all other pages in the app
   */
   return (
    <html lang="en" className="dark">
      <body>
        <Providers>
        <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
