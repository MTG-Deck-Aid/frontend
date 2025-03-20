/* Allows for HeroUI Components */
import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/react";
/* Allows for Auth0 Components reference: https://github.com/auth0/nextjs-auth0/ */
import { Auth0Provider } from "@auth0/nextjs-auth0";
/**Allows for dynamic page titles */
import PageTitleContextProvider from "@/components/context-providers/pageTitleContextProvider";
import { auth0 } from "@/lib/auth0";

export async function Providers({children}){
    /* This component is a convenient way of wrapping other components in the providers we want to use */

    const session = await auth0.getSession();
    return(
        <HeroUIProvider>
        <Auth0Provider user={session?.user}>
        <PageTitleContextProvider>
            <ToastProvider/>
            {children}
        </PageTitleContextProvider>
        </Auth0Provider>
        </HeroUIProvider>
    )
}