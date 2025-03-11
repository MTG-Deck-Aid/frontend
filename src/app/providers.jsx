/* Allows for HeroUI Components */
import { HeroUIProvider } from "@heroui/system";
/* Allows for Auth0 Components */
import { Auth0Provider } from "@auth0/nextjs-auth0";
import { auth0 } from "@/lib/auth0";

export async function Providers({children}){
    /* This component is a convenient way of wrapping other components in the providers we want to use */

    const session = await auth0.getSession();
    return(
        <HeroUIProvider>
        <Auth0Provider user={session?.user}>
            {children}
        </Auth0Provider>
        </HeroUIProvider>
    )
}