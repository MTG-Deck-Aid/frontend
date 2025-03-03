import {auth0} from '@/lib/auth0.js';
import LoginDropdown from './loginDropdown';


export default async function Header(){
    const session = await auth0.getSession();

    const iconHeight = 50;
    const iconWidth = 50;

    return(
        <div className='flex flex-[1-1-0] justify-end items-center m-5'>
            <LoginDropdown session={session}/>
        </div>
    );
}