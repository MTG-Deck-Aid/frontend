import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/button';
import { Divider } from '@heroui/react';
import './globals.css';
import UserDecks from '@/components/homepage-components/userDecks';
import pageLogo from '/public/MysticTuner-Logo.svg';
import SetPageTitle from '@/components/header-components/setPageTitle';

export default async function Home() {
	const logoWidth = 350;
	const logoHeight = logoWidth;
	const newTitle = "Deck Tuning Assistant"
	
	return (
		<main className="m-2 mb-10 min-h-screen p-2 sm:m-8 sm:mb-20 sm:p-8">
			<SetPageTitle title={newTitle}/>
			<div className="flex basis-full flex-col gap-4">
				<div className="flex flex-shrink justify-center">
					<Image
						src={pageLogo}
						width={logoWidth}
						height={logoHeight}
						alt="Mystic Tuner logo"
						className="h-auto w-full max-w-[350px] self-center"
					/>
				</div>
				<div className="flex justify-center">
					<Button
						size="lg"
						variant="shadow"
						color="primary"
						as={Link}
						href={{
							pathname: `/${'new-deck'}/view-import-deck`,
							query: { mode:'edit' , deckId: -1 },
						}}
						className="no-underline"
					>
						Make a Deck
					</Button>
				</div>
				<Divider />
				<div className="flex w-full flex-row justify-center">
					<UserDecks />
				</div>
			</div>
		</main>
	);
}
