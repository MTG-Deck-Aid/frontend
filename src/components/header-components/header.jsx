import {auth0} from '@/lib/auth0.js';
import LoginDropdown from './loginDropdown';
import HomeButton from './homeButton';
import TitleBar from './titleBar';

export default async function Header(){
    const session = await auth0.getSession();
    return(
        <header className='flex justify-between'>
            <HomeButton/>
            <TitleBar/>
            <LoginDropdown session={session}/>
        </header>
    );
}