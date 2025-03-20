import  ViewDeckContextProvider  from '@/components/context-providers/viewDeckContextProvider';

export default async function ViewDeckLayout({children}){

    return(
        <ViewDeckContextProvider>
            {children}
        </ViewDeckContextProvider>
    )
}