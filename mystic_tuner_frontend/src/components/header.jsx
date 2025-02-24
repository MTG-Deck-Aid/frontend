import {auth0} from '@/lib/auth0.js';

export default async function Header(){
    const session = await auth0.getSession();

    if(!session){
        return(
            <main>
                <div className='flex flex-[1-1-0] justify-end items-center'>   
                    <a href="/auth/login?screen_hint=signup">
                        <button className='rounded-md bg-blue hover:bg-sky-blue text-dark-grey m-2 p-2 w-20'>
                            Sign up</button>
                    </a>
                    <a href="/auth/login">
                        <button className='rounded-md bg-blue hover:bg-sky-blue text-dark-grey m-2 p-2 w-20'> 
                            Log in</button>
                    </a>
                    
                </div>
            </main>
          );
    }
    return(
    <main>
        <div className='flex flex-[1-1-0] justify-end items-center'>  
            <p>Hello, {session.user.name}</p>
            <a href="/auth/logout">
            <button className='rounded-md bg-blue hover:bg-sky-blue text-dark-grey m-2 p-2 w-20'>
                Log out</button>
            </a>
        </div>
    </main>
    );
}