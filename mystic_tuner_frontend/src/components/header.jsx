//Warning: DO NOT set to "useclient"; that will cause ourr authentication to be client sided
import {auth0} from '@/lib/auth0.js';
import LoginDropdown from './loginDropdown';
import HomeButton from './homeButton';
import CustomLine from './customLine';

export default async function Header(){
    const session = await auth0.getSession();
    return(
        <div className='flex justify-between'>
            <HomeButton/>
            <CustomLine text={"Deck Upgrade Assistant"}/>
            <LoginDropdown session={session}/>
        </div>
    );
}