import {auth0} from '@/lib/auth0.js';
import LoginDropdown from './loginDropdown';
import HomeButton from './homeButton';
import TitleBar from './titleBar';
import { Divider } from '@heroui/react';

export default async function Header(){
    const session = await auth0.getSession();
    return(
        <header >
            <div className='flex flex-row'>
            <HomeButton/>
            <TitleBar/>
            <LoginDropdown session={session}/>
            </div>
            <Divider />
        </header>
    );
}